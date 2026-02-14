// controllers/BejelentkezesSiteController.js
const UserDAO = require("../../dao/UserDAO");
const PozicioDAO = require("../../dao/PozicioDAO");
const bcrypt = require("../../node_modules/bcryptjs");

class BejelentkezesSiteController {
  static getSite(req, res) {
    res.render("bejelentkezes");
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;

    const result = await UserDAO.getUserByEmail(email);
    if (
      result.success === 0 ||
      !result.UserObject ||
      result.UserObject.length === 0
    ) {
      req.session.info = "Nincs ilyen felhasználó, regisztrálj hozzánk!";
      return res.redirect("/regisztracio");
    }

    const user = result.UserObject[0];

    const storedHashedPassword = user.jelszo;

    const match = await bcrypt.compare(password, storedHashedPassword);
    if (!match) {
      req.session.info = "Rossz jelszó!";
      return res.redirect("/bejelentkezes");
    }

    req.session.isAuthenticated=true;
    // console.log(req.session.isAuthenticated);
    const sessionbe_user = await UserDAO.getUserToSession(user.id);
    req.session.user = sessionbe_user.UserObject;
    if(sessionbe_user.UserObject.kivansag_lista && sessionbe_user.UserObject.kivansag_lista.length>0){
      req.session.user.kivansag_lista = JSON.parse(sessionbe_user.UserObject.kivansag_lista);
      if (typeof req.session.user.kivansag_lista == 'string') {
        req.session.user.kivansag_lista = [req.session.user.kivansag_lista];
      }
    }else{
      req.session.user.kivansag_lista=[];
    }
    res.redirect("/index");
  }

  static async logoutUser(req, res) {
    await req.session.destroy(err => {
        if (err) {
            req.session.info = {infoType: 'fail', text: 'Kijelentkezési hiba'};
            return res.redirect('/');
        }
        return res.redirect('/bejelentkezes');
    });
  };
}

module.exports = BejelentkezesSiteController;
