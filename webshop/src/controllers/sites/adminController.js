const RendelesDAO = require("../../dao/RendelesDAO");
const UserDAO = require("../../dao/UserDAO");
const KonyvDAO = require("../../dao/BookDAO");

class AdminController {

    static async getSite(req, res) {
        
        const users = await UserDAO.getAllUserExceptMe(req.session.user.id);//Még lehet finomítani, hogy csak az id-t és az emailt kérje le
        const admins = await UserDAO.getAllUserByRole(2);
        const moderators = await UserDAO.getAllUserByRole(3);
        const rendelesek = await RendelesDAO.getAllRendeles();
        let konyv_cimek = [];
        for(let i = 0; i < rendelesek.RendelesObject.length; i++){
            for(let j = 0; j < rendelesek.RendelesObject[i].megrendelt_konyvek.length; j++){
                let cim = await KonyvDAO.getKonyvById(rendelesek.RendelesObject[i].megrendelt_konyvek[j].ISBN);
                if(cim.success == 1 && cim.konyv.length>0){
                    konyv_cimek.push(cim.konyv[0].cim);
                }else{
                    konyv_cimek.push("Nincs");
                }
            }
        }
        res.render("admin.ejs", {"users" : users.UserObject, "admins": admins.UserObject, "moderators": moderators.UserObject, "rendelesek": rendelesek.RendelesObject, "cimek": konyv_cimek});
    }

    static async jogkorModositas (req, res) {
        const { user_id, new_role  } = req.body;
        if(user_id && new_role){
            const modosit = await UserDAO.updateUserRole(user_id, new_role);
            if(modosit.success == 1){
                req.session.info = "Sikeres módosítás!"
                console.log("Sikeres módosítás!");
            }else{
                console.log(modosit.info);
            }
        }
        res.redirect("/admin");
    }

    static async felhasznaloTorles (req, res) {
        const {user_id} = req.body;
        if(user_id){
            const torles = await UserDAO.deleteUser(user_id);
            if(torles.success == 1){
                req.session.info = "Sikeres törlés!"
                console.log("Sikeres törlés!");
            }else{
                console.log(torles.info);
            }
        }
        res.redirect("/admin");
    }

}



module.exports = AdminController;