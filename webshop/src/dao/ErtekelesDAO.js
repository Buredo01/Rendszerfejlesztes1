const connection = require("../utils/SQLConfig");
const Ertekeles = require("../models/Ertekeles");

class ErtekelesDAO {
    static async getErtelekesForKonyv(isbn) {
        return new Promise((resolve, reject) => {
            const query = `SELECT ertekeles.id, ertekeles.konyv_id, ertekeles.felhasznalo_id, ertekeles.szoveg, ertekeles.csillag, ertekeles.statusz, felhasznalo.nev FROM ertekeles, felhasznalo WHERE ertekeles.felhasznalo_id=felhasznalo.id AND konyv_id = ? AND statusz = ?;`;

            connection.execute(query, [isbn, 1], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbazis hiba", "ertekelesek":[] });
                } else {
                    resolve({ "success": 1, "info": "", "ertekelesek": Ertekeles.generateErtekeles(res)});
                }
            });
        });        
    }

    static async addErtekeles(konyv_id, felhasznalo_id, szoveg, csillag, statusz) {
        return new Promise((resolve, reject) => {
            const insertQuery = 'INSERT INTO ertekeles (konyv_id, felhasznalo_id, szoveg, csillag, statusz) VALUES (?, ?, ?, ?, ?)';
            connection.execute(insertQuery, [konyv_id, felhasznalo_id, szoveg, csillag, statusz], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adatbázis hiba történt az új értékelés hozzáadásánál'});
                } else {
                    resolve({'success': 1, 'info': 'Értékelés sikeresen hozzáadva az adatbázishoz'});
                }
            });
        });
    }
  


    static async deleteErtekeles(id) {
        return new Promise((resolve, reject) => {
            const deleteQuery = 'DELETE FROM ertekeles WHERE id = ?';
            connection.execute(deleteQuery, [id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adatbázis hiba történt a törlés során'});
                } else {
                    resolve({'success': 1, 'info': 'Az értékelés sikeresen törölve lett'});
                }
            });
        });
    }
}


module.exports = ErtekelesDAO;