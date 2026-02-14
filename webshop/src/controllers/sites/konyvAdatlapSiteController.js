const BookDAO = require("../../dao/BookDAO");
const connection = require("../../utils/SQLConfig");
const fs = require("fs");
const path = require("path");
const egyKonyvController = require("./egyKonyvController");
const UserDAO = require("../../dao/UserDAO");

class KonyvAdatlapSiteController {

    static getSite(req, res) {

        const book = BookDAO.getKonyvByISBN(0);

        if (book.success === 0) {

        }

        res.render("konyvadatlap", {
            "konyv": book.konyv
        });
    }

    static async konyvTorles(req, res) {
        if (!req.session.isAuthenticated) {
            return res.status(200).json("Nem vagy bejelentkezve!");
        }

        if (req.session.megnevezes !== "Admin" && req.session.megnevezes !== "Moderátor") {
            return res.status(200).json("Nincs jogosultságod ezt a funkciót használni!");
        }


        connection.beginTransaction();
        let isbn = req.body.isbn;
        
        let deleteRes = await BookDAO.deleteBook(isbn);
        
        if (deleteRes.success === 0) {
            connection.rollback();
            return res.status(200).json({ "success": 0, "info": "Adatbázis hiba!" });
        }

        fs.unlink(path.join(__dirname, `../../public/img/book_covers/${isbn}.jpg`), (err) => {
            if (err) {
                //console.log(err);
                connection.rollback();
                return res.status(200).json({ "success": 0, "info": "Borító törlés hiba!" })
            }
        });

        connection.commit();
        //return res.status(200).json({ "success": 1, "info": "Sikeres könyvtörlés!" });
        res.redirect("/konyveink");
        //return res.status(200).json(deleteRes);
    }

    
    static async addKedvenc(req, res) {
        const {id} = req.query;
        if(req.session.isAuthenticated){
          let kedvelt_konyvek=req.session.user.kivansag_lista;
          kedvelt_konyvek.push(id);
          req.session.user.kivansag_lista = kedvelt_konyvek;
          req.session.save();

          const kedvencek = JSON.stringify(req.session.user.kivansag_lista);
          const mentes = await UserDAO.saveKedvenc(req.session.user.id , kedvencek);
          if(mentes.success == 1){
            //console.log("Sikeres mentés");
          }else{
            console.log("Sikertelen mentés");
          }
        }else{
            console.log("Be kell jelentkezni a kedven lista módosításához");
        }
        res.redirect("/konyv?id="+id);
    }

    static async deleteKedvenc(req, res) {
        const {id} = req.query;
        if(req.session.isAuthenticated){
          let kedvelt_konyvek=req.session.user.kivansag_lista;
          req.session.user.kivansag_lista =  kedvelt_konyvek.filter(konyvId => konyvId !== id);;
          req.session.save();

          const kedvencek = JSON.stringify(req.session.user.kivansag_lista);
          const mentes = await UserDAO.saveKedvenc(req.session.user.id , kedvencek);
          if(mentes.success == 1){
            //console.log("Sikeres mentés");
          }else{
            console.log("Sikertelen mentés");
          }
        }else{
            console.log("Be kell jelentkezni a kedven lista módosításához");
        }
        res.redirect("/konyv?id="+id);
    }

}

module.exports = KonyvAdatlapSiteController;