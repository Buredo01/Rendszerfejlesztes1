const ErtekelesDAO = require("../../dao/ErtekelesDAO")

class ertekelesController{

    static async ujErtekeles(req, res){

        if (req.session.isAuthenticated) {
            const {rating, userreview, id} = req.body;
            const felhasznalo_id = req.session.user.id;
            
            if (!rating || rating === "0") {
                console.log("Értékelje a könyvet csillaggal!");
                return;
            }
            if (!userreview || userreview === '') {
                console.log("Értékelje a könyvet szövegesen!");
                return;
            }
        

            const result = await ErtekelesDAO.addErtekeles(id, felhasznalo_id, userreview, rating, true);
            if (result.success === 1) {
                console.log("Az értékelés elbírálásra vár.");
                res.redirect("/konyv?id="+id);
            } else {
                console.log("Hiba történt.");
                res.redirect("/konyv?id="+id);
            }
        } else {
            res.redirect("/bejelentkezes");
    }
} 

 
    static async ertekelesTorlese(req, res) {
        if (req.session.isAuthenticated) {

            const {ertekeles_id, konyv_id} = req.body;
            
            const result = await ErtekelesDAO.deleteErtekeles(ertekeles_id);
            if (result.success === 1) {
                console.log("Az értékelés törlődött.");
                console.log(req.body);
                res.redirect("/konyv?id="+konyv_id);
            } else {
                console.log("Hiba történt.");
            }
        }
    }
}

module.exports = ertekelesController;