const connection = require("../utils/SQLConfig");
const Book = require("../models/Book");

const ErtekelesDAO = require("../dao/ErtekelesDAO");
//const connection = require("../utils/SQLConfig");



class BookDAO {

    static async searchByName(searchResult) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM konyv WHERE konyv.cim LIKE ?;';
            const formattedSearch = `%${searchResult}%`;

            connection.execute(query, [formattedSearch], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "konyvek": [] });
                } else {
                    resolve({ "success": 1, "info": "", "konyvek": Book.generateBook(result)});
                }
            });
        });
    }

    static async searchByAuthor(searchResult) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM konyv WHERE konyv.szerzo LIKE ?;';
            const formattedSearch = `%${searchResult}%`;

            connection.execute(query, [formattedSearch], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "konyvek": [] });
                } else {
                    resolve({ "success": 1, "info": "", "konyvek": Book.generateBook(result)});
                }
            });
        });
    }

    static async searchByGenre(searchResult) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM konyv, mufaj, konyvmufajkapcsolat WHERE konyv.ISBN=konyvmufajkapcsolat.konyv_id AND konyvmufajkapcsolat.mufaj_id = mufaj.id AND mufaj.megnevezes LIKE ?;';
            const formattedSearch = `%${searchResult}%`;

            connection.execute(query, [formattedSearch], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "konyvek": [] });
                } else {
                    resolve({ "success": 1, "info": "", "konyvek": Book.generateBook(result)});
                }
            });
        });
    }

    static async searchByPublisher(searchResult) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM konyv, kiado WHERE konyv.kiado_id=kiado.id AND kiado.megnevezes LIKE ?;';
            const formattedSearch = `%${searchResult}%`;

            connection.execute(query, [formattedSearch], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "konyvek": [] });
                } else {
                    resolve({ "success": 1, "info": "", "konyvek": Book.generateBook(result)});
                }
            });
        });
    }

    static async searchByDate(searchResult) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM konyv WHERE konyv.megjelenes_eve LIKE ?;';

            connection.execute(query, [searchResult], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "konyvek": [] });
                } else {
                    resolve({ "success": 1, "info": "", "konyvek": Book.generateBook(result)});
                }
            });
        });
    }

    ///////////////csak ahhoz, hogy az összes könyvet megtudjuk jeleníteni a keresőben//////////
    //////////////működik, egyelőre ne nyúljunk hozzá//////////////////////////////////////////
    static async getAllKonyv() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM konyv;';

            connection.execute(query, [], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "konyvek": [] });
                } else {
                    resolve({ "success": 1, "info": "", "konyvek": Book.generateBook(result)});
                }
            });
        });
    }

    //////////////////ez ahhoz kell, hogy egy könyv adatait letudjuk kérni//////////////
    static async getKonyvByISBN(isbn) {
        return new Promise((resolve, reject) => {
            //még meg kell csinálni, hogy a műfajt is kérje le mert azt még nem kéri le
            //valszeg ezt a részét a db-nek újra kellene tervezni
            const book_query = `SELECT ISBN, cim, szerzo, megjelenes_eve, ar, darab_szam, borito, kiado.megnevezes AS kiado_nev, leiras FROM konyvek
                           INNER JOIN kiado ON konyvek.kiado_id = kiado.id
                           WHERE ISBN = ?`;

            const ertekelesek = ErtekelesDAO.getErtelekesForKonyv(isbn);
            
            connection.execute(book_query, [isbn], (err, res) => {
                if(res) {
                    resolve({ "success": 0, "info": "Adatbázis hiba." });
                } else {
                    //mivel hiányzik a leírás a db-ből így még nem tudod használni
                    
                    let book = new Book(res.ISBN, res.cim, res.szerzo, res.megjelenes_eve, res.ar, res.darab_szam, res.borito, res.kiado_nev, res.leiras);
                    
                    if (ertekelesek.success) {
                        book.ertekelesek = ertekelesek.ertekelesek;

                        resolve({ "success": 1, "info": "", "konyv": book });
                    } else {
                        resolve({ "success": 1, "info": "", "konyv": book });
                    }
                }
            });
        });
    }

    static async uploadNewBook(book) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO konyv (ISBN, cim, szerzo, megjelenes_eve, borito, kiado_id, ar, darab_szam, leiras) 
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

            connection.execute(query, [book.isbn, book.cim, book.szerzo, book.megjelenesEve, book.borito, book.kiado, book.ar, book.darab, book.leiras], (err, res) => {
                if (err) {
                    //console.log(err);
                    resolve({ "success": 0, "info": "Adatbázis hiba!" });
                } else {
                    resolve({ "success": 1, "info": "Sikeres könyvfeltöltés!" });
                }
            });
        });
    }


    static async deleteBook(isbn) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM konyv WHERE ISBN = ?`;
            
            connection.execute(query, [isbn], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba!", "err": err });
                } else {
                    resolve({ "success": 1, "info": "Könyv törlése sikeres volt!", "res": res });
                }
            });
        });
    }

    static async updateBook(book) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE konyv SET ISBN = ?, cim = ?, szerzo = ?, megjelenes_eve = ?, ar = ?, darab_szam = ?, borito = ?, leiras = ? WHERE ISBN = ?";
            
            connection.execute(query, [book.isbn, book.title, book.writer, book.release_date, book.price, book.piece, `/img/book_covers/${book.cover}`, book.description, book.old_isbn], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!" });
                } else {
                    resolve({ "success": 1, "info": "" });
                }
            });
        });
    }

    static async getMufajok() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM mufaj ORDER BY megnevezes ASC`;

            connection.execute(query, [], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba" });
                } else {
                    resolve({ "success": 1, "info": "", genres: res });
                }
            });
        });
    }

    static async getKiadok() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM kiado ORDER BY megnevezes ASC`;

            connection.execute(query, [], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba!" });
                } else {
                    resolve({ "success": 1, "info": "", publishers: res });
                }
            });
        });
    }

    static async pushGenreToBook(genre_id_arr, isbn) {
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO konyvmufajkapcsolat (konyv_id, mufaj_id) VALUES ";
            
            let mapped = genre_id_arr.map((e) => {
                return `(${isbn}, ${e})`;
            });

            query += mapped.join(", ") + ";";

            //connection.beginTransaction();

            connection.execute(query, [], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!" });
                } else {
                    resolve({ "success": 1, "info": "" });
                }
            });

        });
    }

    static async addNewGenres(genres_arr) {
        return new Promise((resolve, reject) => {
            let promises = genres_arr.map((e) => {
                let query = `INSERT INTO mufaj (megnevezes) VALUES (?);`;
                return new Promise((ress, rej) => {
                    connection.execute(query, [e], (err, res) => {
                        if (err) {    
                            rej(err);
                        } else {
                            ress(res.insertId);
                        }
                    });
                });
            }); 
                
            //console.log(promises);
    
            Promise.all(promises)
                .then(ids => {
                    //console.log(ids);
                    resolve({ "success": 1, "info": "", "id_arr": ids });
                })
                .catch(err => {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!" });
                });
        });
    }

    static async addNewPublisher(publisher) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO kiado (megnevezes) VALUES (?)";

            connection.execute(query, [publisher], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "new_id": null });
                } else {
                    resolve({ "success": 1, "info": "", "new_id": res.insertId });
                }
            });
        }); 
    }

    static async getKonyvById(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Konyv WHERE konyv.ISBN = ?";
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt!", "konyv" : []});
                } else {
                    resolve({ "success": 1, "info": "", "konyv" : Book.generateBook(result)});
                }
            });
        }); 
    }
}


module.exports = BookDAO;