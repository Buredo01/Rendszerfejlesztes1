const BookDAO = require("../../dao/BookDAO");
const ErtekelesDAO = require("../../dao/ErtekelesDAO");
const KiadoDAO = require("../../dao/KiadoDAO");
const MufajDAO = require("../../dao/MufajDAO"); 

class egyKonyvController {

    static async getSite(req, res) {
        const konyv_id = req.query.id;  
        const result = await BookDAO.getKonyvById(konyv_id);
        if (result.success === 1)
        {
            const kiado = await KiadoDAO.getMegnevezes(result.konyv[0].kiado);
            if(result.success == 1){

                const mufajok = await MufajDAO.getMufajByKonyvId(konyv_id);
                let mufaj;
                if(mufajok.success==1 && (mufajok.mufajok).length > 0){
                    mufaj=mufajok.mufajok;
                }else{
                    mufaj=[];
                }
                const ertekelesek = await ErtekelesDAO.getErtelekesForKonyv(result.konyv[0].isbn); 
                if(ertekelesek.success==1){
                    res.render("konyvadatlap.ejs", {"konyv" : result.konyv[0], "kiado" : kiado.nev.megnevezes, "ertekelesek" : ertekelesek.ertekelesek, "mufajok": mufaj});
                }else{
                    res.render("konyvadatlap.ejs", {"konyv" : result.konyv[0], "kiado" : kiado.nev.megnevezes, "ertekelesek" : [] , "mufajok": mufaj});
                }
            }
        }else{
            console.log("Sikertelen könyv lekérés");
        }
    }
  
}

module.exports = egyKonyvController;

