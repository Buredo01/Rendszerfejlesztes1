const connection = require("../utils/SQLConfig");
const Mufaj = require("../models/Mufaj");

class MufajDAO {

    static async getMufajByKonyvId(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mufaj.id, mufaj.megnevezes FROM konyvmufajkapcsolat, mufaj WHERE konyvmufajkapcsolat.mufaj_id = mufaj.id AND konyvmufajkapcsolat.konyv_id = ?;`;
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba a műfaj lekérdezésekor!" , "mufajok" : []});
                    return;
                } else {
                    resolve({ "success": 1, "info": "Sikeres lekérdezés", "mufajok" : Mufaj.generateMufaj(result)});
                    return;
                }
            });
        });
    }
}


module.exports = MufajDAO;