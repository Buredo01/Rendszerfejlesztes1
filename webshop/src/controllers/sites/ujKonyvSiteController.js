const CheckBookData = require("../../utils/checkBookData");
const BookDAO = require("../../dao/BookDAO");
const Book = require("../../models/Book");

const connection = require("../../utils/SQLConfig");

class UjKonyvSiteController {

    static async getSite(req, res) {
        if (!req.session.isAuthenticated) {
            return res.render("error", {
                msg: "Nem vagy bejelentkezve!"
            })
        }

        if (req.session.user.megnevezes !== "Admin" && req.session.user.megnevezes !== "Moderátor") {
            return res.render("error", {
                msg: "Nincs jogosultságod ennek a funkciónak használatához!"
            });
        }

        const genres = await BookDAO.getMufajok();
        const publishers = await BookDAO.getKiadok();

        res.render("ujKonyv", {
            "genres": genres.genres,
            "publishers": publishers.publishers
        });
    }


    static async ujKonyvHozzaad(req, res) {
        if (!req.session.isAuthenticated) {
            return res.status(200).json("Nem vagy bejelentkezve!");
        }

        if (req.session.user.megnevezes !== "Admin" && req.session.user.megnevezes !== "Moderátor") {
            return res.status(200).json("Nincs jogosultságod ezt a funkciót használni!");
        }

        let title = req.body.title;
        let writer = req.body.writer;
        let isbn = req.body.isbn;
        let price = req.body.price;
        let release = req.body.release;
        let description = req.body.description;
        let selected = req.body.selected;
        let current_genre = req.body.current_genres;
        let new_genres = req.body.new_genres;
        let piece = req.body.piece;
        

        let file = req.file;
        
        const cb = new CheckBookData();
        let titleRes = cb.checkTitle(title);
        let writerRes = cb.checkWriters(writer);
        let isbnRes = cb.checkISBN(isbn);
        let priceRes = cb.checkPrice(price);
        let releaseRes = cb.checkReleaseDate(release);
        let descriptionRes = cb.checkDescription(description);
        let genreRes = cb.checkGenre(current_genre, new_genres);
        let pieceRes = cb.checkPiece(piece);

        if (titleRes && writerRes && isbnRes && priceRes && releaseRes && descriptionRes && file && pieceRes && genreRes) {
            
            //1. töltsük fel ha van új kiadó
            //2. hozzuk létre a könyvet
            //3. adjuk hozzá a műfajokat
            //ha bármikor hiba van akkor rollbackelünk
            connection.beginTransaction();

            let publisherIdToUse;

            //1.
            if (selected == 0) {
                
                let res = await BookDAO.addNewPublisher(req.body.new_publisher);
                
                if (res.success === 0) {
                    connection.rollback();
                    return res.status(200).json({ "success": 0, "msg": "Hiba történt a könyv hozzáadása során!" });
                }

                publisherIdToUse = res.new_id;
            }  else {
                
                publisherIdToUse = req.body.publisher_id;
            }
            
            const b = new Book(
                isbn,
                title,
                writer,
                release,
                price,
                piece,
                `/img/book_covers/${file.filename}`,
                publisherIdToUse,
                description
            );

            let bookUploadRes = await BookDAO.uploadNewBook(b);
            //console.log(bookUploadRes);
            if (bookUploadRes.success === 0) {
                connection.rollback();
                return res.status(200).json({ "success": 0, "msg": "Hiba történt a könyv hozzáadása során!" });
            }

            if (current_genre !== undefined) {
                //console.log(current_genre);
                let arr = current_genre.split(",");

                let currentGenreRes = await BookDAO.pushGenreToBook(arr, isbn);

                if (currentGenreRes.success === 0) {
                    connection.rollback();
                    return res.status(200).json({ "success": 0, "msg": "Hiba történt a könyv hozzáadása során!" });
                }

            }


            if (new_genres !== "") {
                let arr = new_genres.split(";");
                let newGenresRes = await BookDAO.addNewGenres(arr);

                if (newGenresRes.success === 0) {
                    connection.rollback();
                    return res.status(200).json({ "success": 0, "msg": "Hiba történt a könyv hozzáadása során!" });
                }

                let currentGenreRes = BookDAO.pushGenreToBook(newGenresRes.id_arr, isbn);
                if (currentGenreRes.success === 0) {
                    connection.rollback();
                    return res.status(200).json({ "success": 0, "msg": "Hiba történt a könyv hozzáadása során!" });
                }

            }
            connection.commit();
            
            return res.status(200).json({ "success": 1, "msg": "Sikeres könyvfeltöltés!" });

        } else {
            return res.status(200).json({ "success": 2, "errors": cb.errors });
        }
    }

    
}

module.exports = UjKonyvSiteController;