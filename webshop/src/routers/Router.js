const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
/////////////////////////osszes oldal///////////////////////////////////////////
const indexSiteController = require("../controllers/sites/indexSiteController");

const ujKonyvSiteController = require("../controllers/sites/ujKonyvSiteController");
const konyveinkSiteController = require("../controllers/sites/konyveinkSiteController");
const konyvAdatlapSiteController = require("../controllers/sites/konyvAdatlapSiteController");
const egyKonyvController = require("../controllers/sites/egyKonyvController");
const KonyvszerkeszteseSiteController = require("../controllers/sites/konyvszerkeszteseSiteController");

const ertekelesController = require("../controllers/sites/ertekelesController");

const regisztracioSiteController = require("../controllers/sites/regisztracioSiteController");
const bejelentkezesSiteController = require("../controllers/sites/bejelentkezesSiteController");

const profilSiteController = require("../controllers/sites/profilSiteController");
const adatokszerkeszteseSiteController = require("../controllers/sites/adatokszerkeszteseSiteController");
const adminController = require("../controllers/sites/adminController");

const kosarSiteController = require("../controllers/sites/kosarSiteController");
const rendelesController = require("../controllers/sites/rendelesController");
const UserDAO = require("../dao/UserDAO");



//Főoldal
router.get("/", indexSiteController.getSite);
router.get("/index", indexSiteController.getSite);

//Könyv
router.get("/ujKonyv", ujKonyvSiteController.getSite);
router.get("/konyveink", konyveinkSiteController.getSite);
router.get("/konyvadatlap/:isbn", konyvAdatlapSiteController.getSite);
router.get("/keresettKonyvek", indexSiteController.kereses);
router.get("/szurtKonyvek", indexSiteController.szures);
router.get("/konyv", egyKonyvController.getSite);
router.post("/ujErtekeles", ertekelesController.ujErtekeles);
router.post("/ertekelesTorlese", ertekelesController.ertekelesTorlese);
router.post("/konyvtorlese", konyvAdatlapSiteController.konyvTorles);
router.get("/konyvmodositas", KonyvszerkeszteseSiteController.getSite);
router.get("/kedveles", konyvAdatlapSiteController.addKedvenc);
router.get("/kedvelestorlese", konyvAdatlapSiteController.deleteKedvenc);



//Bejelentkezes, Regisztráció
router.get("/bejelentkezes", bejelentkezesSiteController.getSite);
router.post("/bejelentkezes_login", bejelentkezesSiteController.loginUser);
router.get("/regisztracio", regisztracioSiteController.getSite);
router.post("/regisztracio_reg", regisztracioSiteController.registerUser);

//Kijelentkezés
router.get("/kijelentkezes", bejelentkezesSiteController.logoutUser);

//Admin
router.get("/admin", adminController.getSite);
router.post("/jogkormodositas", adminController.jogkorModositas);
router.post("/felhasznalotorles", adminController.felhasznaloTorles);



//Kosár
router.get("/kosar", kosarSiteController.getSite);
router.get("/kosar_torles", kosarSiteController.torles);
router.get("/kosarbarak", kosarSiteController.kosarbarak);
router.get("/kosar_noveles", kosarSiteController.noveles);
router.get("/kosar_csokkentes", kosarSiteController.csokkentes);

//Rendelés
router.get("/rendeles", rendelesController.rendelesLeadas);

//Profil
router.get("/profil", profilSiteController.getProfil);
router.get("/adatokszerkesztese", profilSiteController.getAdatokSzerkesztese);
router.get("/profil_delete", profilSiteController.deleteUser);

//Adatok szerkesztése
router.get("/adatokszerkesztese", adatokszerkeszteseSiteController.getSite);
router.post("/adatokszerkesztese_update", adatokszerkeszteseSiteController.updateUser);
///////////////////////////////////////////////////////////////////////////////

/////////////////////////könyv hozzáadása///////////////////////////////////////
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/book_covers"));
    },
    filename: function(req, file, cb) {
        const name = req.body.isbn;
        const extension = path.extname(file.originalname);
        cb(null, `${name}${extension}`);
    }
});
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5242880 //5MB max fájl méret
    }
 });

router.post("/addbook", upload.single("cover"), ujKonyvSiteController.ujKonyvHozzaad);
router.post("/updateBook", upload.single("cover"), KonyvszerkeszteseSiteController.updateBook);

router.get("/sikeresrendeles", (req, res) => {
    res.render("sikeresrendeles", { rendelesek: [] });
});

//////////////////////////////könyv törlés////////////////////////////////////





module.exports = router;