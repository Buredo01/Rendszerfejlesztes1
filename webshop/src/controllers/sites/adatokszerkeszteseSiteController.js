const UserDAO = require("../../dao/UserDAO");
const bcrypt = require('../../node_modules/bcryptjs');

class adatokszerkeszteseSiteController {

    static getSite(req, res) {
        if(req.session.isAuthenticated){
            res.render("adatokszerkesztese");
        }
    }

    static async updateUser(req, res){
        if(req.session.isAuthenticated){
            const errors = [];
            let new_username, new_email, new_password;
            const { username, email, password } = req.body;
            const felhasznalo_id = req.session.user.id;;
            if (username && username !== "") {
                new_username = username;
            } else {
                errors.push({
                    msg: "Felhasználónév nem lehet üres!",
                    id: "missing_username"
                });
            }
            if (email && email !== "") {
                new_email = email;
            } else {
                errors.push({
                    msg: "E-mail cím nem lehet üres!",
                    id: "missing_email"
                });
            }
            if (password && password !== "") {
                try {
                    new_password = await bcrypt.hash(password, 10);
                } catch (error) {
                    console.log("Error during password hashing:", error);
                    errors.push({
                        msg: "Titkosítási hiba!",
                        id: "encryption_error"
                    });
                
                }
            } else {
                return res.render("adatokszerkesztese", { errors });
            }

            if (errors.length == 0) {
                const result = await UserDAO.updateUser(new_username, new_email, new_password, felhasznalo_id);
                if (result.success === 1) {
                    await req.session.destroy(err => {
                        if (err) {
                            req.session.info = {infoType: 'fail', text: 'Kijelentkezési hiba'};
                            return res.redirect('/');
                        }
                        return res.redirect('/bejelentkezes');
                    });
                } else {
                    errors.push({
                        msg: "Hiba történt a frissítés során!",
                        id: "update_error"
                    });
                    return res.render("adatokszerkesztese", { errors });
                }
            }
        }
    }
}

module.exports = adatokszerkeszteseSiteController;