const connection = require("../utils/SQLConfig");
const Pozicio = require("../models/Pozicio");

class PozicioDAO {

    static async getMegnevezes(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT megnevezes FROM pozicio WHERE id = ?`;
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt felhasználó létrehozásakor!"});
                    return;
                } else {
                    resolve({ "success": 1, "info": "Sikeres lekérdezés", "nev": result[0]});
                    return;
                }
            });
        });
    }
}


module.exports = PozicioDAO;