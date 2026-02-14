const connection = require("../utils/SQLConfig");
const Kiado = require("../models/Kiado");

class KiadoDAO {

    static async getMegnevezes(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT megnevezes FROM kiado WHERE id = ?`;
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba a kiado nevének lekérdezésekor!", "nev": "Hiba!"});
                    return;
                } else {
                    resolve({ "success": 1, "info": "Sikeres lekérdezés", "nev": result[0]});
                    return;
                }
            });
        });
    }
}


module.exports = KiadoDAO;