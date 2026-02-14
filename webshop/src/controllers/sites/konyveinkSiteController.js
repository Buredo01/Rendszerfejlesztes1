const BookDAO = require("../../dao/BookDAO");


class KonyveinkSiteController {

    static async getSite(req, res) {
        const konyvek = await BookDAO.getAllKonyv();
        res.render("konyveink", {konyvek:konyvek.konyvek});
    }

}

module.exports = KonyveinkSiteController;