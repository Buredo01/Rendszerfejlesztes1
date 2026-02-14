const BookDAO = require("../../dao/BookDAO");
const KiadoDAO = require("../../dao/KiadoDAO");
const MufajDAO = require("../../dao/MufajDAO");
const CheckBookData = require("../../utils/checkBookData");



class KonyvszerkeszteseSiteController {
    
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

        let isbn = req.query.isbn;
        
        const result = await BookDAO.getKonyvById(isbn);
        if (result.success === 1)
        {
            const kiado = await KiadoDAO.getMegnevezes(result.konyv[0].kiado);
            if(result.success == 1){

                const mufajok = await MufajDAO.getMufajByKonyvId(isbn);
                let mufaj;
                if(mufajok.success==1 && (mufajok.mufajok).length > 0){
                    mufaj=mufajok.mufajok;
                }else{
                    mufaj=[];
                }

                /*console.log({
                    "konyv": result.konyv[0],
                    "kiado": kiado.nev.megnevezes,
                    "mufajok": mufajok
                }),*/

                res.render("konyvmodositasa", {
                    "konyv": result.konyv[0],
                    "kiado": kiado.nev.megnevezes,
                    "mufajok": mufajok
                });
            } else {
                return res.redirect(`/konyvadatlap?isbn=${isbn}`);
            }
        }else{
            return res.redirect(`/konyvadatlap?isbn=${isbn}`);
            //console.log("Sikertelen könyv lekérés");
        }
    }

    static async updateBook(req, res) {

        if (!req.session.isAuthenticated) {
            return res.status(200).json("Nem vagy bejelentkezve!");
        }

        if (req.session.user.megnevezes !== "Admin" && req.session.user.megnevezes !== "Moderátor") {
            return res.status(200).json("Nincs jogosultságod ezt a funkciót használni!");
        }


        let title = req.body.title;
        let writer = req.body.writer;
        let price = req.body.price;
        let isbn = req.body.isbn;
        let release_date = req.body.release_date;
        let description = req.body.description;
        let cover = req.file;
        let old_isbn = req.body.old_isbn;
        let piece = req.body.piece;

        const cb = new CheckBookData();
        let titleRes = cb.checkTitle(title);
        let writerRes = cb.checkWriters(writer);
        let priceRes = cb.checkPrice(price);
        let isbnRes = cb.checkISBN(isbn);
        let release_dateRes = cb.checkReleaseDate(release_date);
        let descriptionRes = cb.checkDescription(description);
        let pieceRes = cb.checkPiece(piece);

        if (titleRes && writerRes && priceRes && isbnRes && release_dateRes && descriptionRes) {
            
            let ress = await BookDAO.updateBook({
                "title": title,
                "writer": writer,
                "price": price,
                "isbn": isbn,
                "release_date": release_date,
                "description": description,
                "cover": cover.filename,
                "old_isbn": old_isbn,
                "piece": piece
            });

            if (ress.success) {
                return res.status(200).json({ "success": 1 });
            }

            return res.status(200).json({ "success": 0 });
        } else {
            return res.status(200).json({ "success": 2, "errors": cb.errors });
        }

    }
}


module.exports = KonyvszerkeszteseSiteController;