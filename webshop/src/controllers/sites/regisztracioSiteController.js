const UserDAO = require("../../dao/UserDAO");
const bcrypt = require('../../node_modules/bcryptjs')
class RegisztracioSiteController {

    static getSite(req, res) {
        res.render("regisztracio");
    }

    static async registerUser(req, res) {
        let nev, email_em, jelszo;
        const {username, email, password, password_again} = req.body;
        if (username && username !== "") {
            nev = username;
        }
        if (email && email !== "") {
            email_em = email;
        }
        if (password === password_again) {
            try {
                jelszo = await bcrypt.hash(password, 10);
                const result = await UserDAO.createUser(username, email, jelszo);
                if (result.success === 1) {
                    req.session.info = "Sikeres regisztráció, jelentkezz be!";
                    res.redirect("/bejelentkezes");
                } else {
                    req.session.info = errors.toString();
                    res.redirect("/regisztracio");
                }
            } catch (error) {
                console.log("Hiba történt a jelszó hashelés közben:", error);
                req.session.info = "Már létezik ilyen email!";
                res.redirect("/regisztracio");
            }

        } else {
            req.session.info = "Nem egyező jelszókat adtál meg!";
            res.redirect("/regisztracio");
        }
    }
}



module.exports = RegisztracioSiteController;