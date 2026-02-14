const KosarDAO = require('../../dao/KosarDAO');
class KosarSiteController {


    static async getSite(req, res) {

        if(req.session.isAuthenticated){
        const result = await KosarDAO.getKosarByFelhasznalo(req.session.user.id);
        if (result.success === 1) {
            res.render("kosar", { kosarak: result.kosarak });
        } else {
            res.render("kosar", { kosarak: [], info: result.info });  
        }
        }else{
            res.redirect("/bejelentkezes")
        }
        
    }
    
    static async torles(req, res) {
         
        if(req.session.isAuthenticated){
        const konyv_id = req.query.id;  
        const felhasznalo_id = req.session.user.id;
        const result = await KosarDAO.removeFromKosar(felhasznalo_id, konyv_id);
            if (result.success === 1)
            {
                console.log("A könyv sikeresen törölve a kosárból.");
                res.redirect("/kosar");
            }
        }
        else{
            res.redirect("/bejelentkezes")
        }
        
    }

    static async kosarbarak(req, res) {
        
        if(req.session.isAuthenticated){
            const bookId = req.query.id;
            const felhasznalo_id = req.session.user.id;
            const mennyiseg = parseInt(req.query.mennyiseg) || mennyiseg;
            const result = await KosarDAO.addToKosar(felhasznalo_id, bookId, mennyiseg);
                if (result.success === 1) {
                    console.log("A könyv sikeresen hozzáadva a kosárhoz.");
                    
                    return res.redirect(`/konyvadatlap?id=${bookId}&popup=true`);
                } else {
                    console.log("Hiba történt a könyv kosárba helyezésénél:", result.info);
                    return res.redirect(`/konyvadatlap?id=${bookId}`);
                }
                

        }else{
            
            res.redirect("/bejelentkezes")
        }

    }    

    static async noveles(req, res) {
        if (req.session.isAuthenticated) {
            const konyv_id = req.query.id;
            const felhasznalo_id = req.session.user.id;
            const result = await KosarDAO.updateKosarQuantity(felhasznalo_id, konyv_id, 1); 
            if (result.success === 1) {
                console.log("A könyv darabszáma növelve.");
                res.redirect("/kosar");
            }
        } else {
            res.redirect("/bejelentkezes");
        }
    }

    static async csokkentes(req, res) {
        if (req.session.isAuthenticated) {
            const konyv_id = req.query.id;
            const felhasznalo_id = req.session.user.id;
            const result = await KosarDAO.updateKosarQuantity(felhasznalo_id, konyv_id, -1);
            if (result.success === 1) {
                console.log("A könyv darabszáma csökkentve.");
                res.redirect("/kosar");
            }
        } else {
            res.redirect("/bejelentkezes");
        }
    }
        
}

module.exports = KosarSiteController;

