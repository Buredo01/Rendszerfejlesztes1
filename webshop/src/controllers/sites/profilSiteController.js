const UserDAO = require("../../dao/UserDAO");
const RendelesDAO = require('../../dao/RendelesDAO');
const KonyvDAO = require('../../dao/BookDAO'); 
class ProfilSiteController {

    static async getProfil(req, res) {
        if (req.session.isAuthenticated) {
            const kedvencek = req.session.user.kivansag_lista || [];
                let kedvenc_tomb = [];
                for (let j = 0; j < kedvencek.length; j++) {
                    let cim = await KonyvDAO.getKonyvById(kedvencek[j]);
                    if (cim.success === 1 && cim.konyv.length > 0) {
                        kedvenc_tomb.push(cim.konyv[0].cim);
                    } else {
                        kedvenc_tomb.push('Nincs');
                    }
                }
            const rendelesek = await RendelesDAO.getRendelesByFelhaznalo(req.session.user.id);
            if (rendelesek.success === 1) {
                let konyv_cimek = [];
                for (let i = 0; i < rendelesek.RendelesObject.length; i++){
                    for (let j = 0; j < rendelesek.RendelesObject[i].megrendelt_konyvek.length; j++) {
                        let cim = await KonyvDAO.getKonyvById(rendelesek.RendelesObject[i].megrendelt_konyvek[j].ISBN);
                        if (cim.success === 1 && cim.konyv.length > 0) {
                            konyv_cimek.push(cim.konyv[0].cim);
                        } else {
                            konyv_cimek.push('Nincs');
                        }
                    }
                }
   

                res.render('profil', {rendelesek: rendelesek.RendelesObject, cimek: konyv_cimek, kedvenc_tomb: kedvenc_tomb});
            } else {
                res.render('profil', { rendelesek: [], info: rendelesek.info, kedvenc_tomb: kedvenc_tomb });
            }
        } else {
            res.redirect('/bejelentkezes');
        }
    
    }

    static getAdatokSzerkesztese(req, res) {
        if(req.session.isAuthenticated){
            res.render("adatokszerkesztese");
        }
    }

    static async deleteUser(req, res) {
        if(req.session.isAuthenticated){
            const felhasznalo_id = req.session.user.id;
            try {
                const result = await UserDAO.deleteUser(felhasznalo_id);
                if (result.success === 1) {
                    await req.session.destroy(err => {
                        if (err) {
                            req.session.info = {infoType: 'fail', text: 'Kijelentkezési hiba'};
                            return res.redirect('/');
                        }
                        return res.redirect('/bejelentkezes');
                    });
            } else {
                res.render("profil", { 
                    errors: [{ 
                        msg: "A felhasználó törlése nem sikerült.", 
                        id: "delete_error" }]
                });
            }
                } catch (error) {
                    res.render("profil", { 
                        errors: [{ 
                            msg: "Adatbázis hiba történt a felhasználó törlése közben.", 
                            id: "database_error" 
                        }]
                    });
                }
            }
    }
}


module.exports = ProfilSiteController;