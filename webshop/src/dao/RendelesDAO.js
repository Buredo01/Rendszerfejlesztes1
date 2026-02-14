const Rendeles = require("../models/Rendeles");
const connection = require('../utils/SQLConfig');

class RendelesDAO {
    
    //Ez a fő funkció (Create)
    static async addRendeles(felhasznalo_id, konyvek, szallitasi_cim) { 
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Rendeles (felhasznalo_id, rendeles_datuma, konyvek, szallitasi_cim) VALUES (? , NOW() , ? , ? )';
            connection.execute(query, [felhasznalo_id, konyvek, szallitasi_cim], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'});
                }else{
                    resolve({'success': 1, 'info': 'Sikeres hozzáadás!'});
                }
            });
        });
    }

    static async isEnough(felhasznalo_id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT CASE WHEN COUNT(*) = 0 THEN TRUE ELSE FALSE END AS elegendo_raktaron FROM Kosar AS k JOIN Konyv AS b ON k.konyv_id = b.ISBN WHERE k.felhasznalo_id = ? AND k.darab > b.darab_szam;';
            connection.execute(query, [felhasznalo_id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt', 'van' : false});
                }else{
                    resolve({'success': 1, 'info': 'Sikeres hozzáadás!', 'van': result[0].elegendo_raktaron});
                }
            });
        });
    }

    static async updateKonyvekDarab(id, darab){
        return new Promise((resolve, reject) => {
            const query = 'UPDATE `konyv` SET `darab_szam`= `darab_szam`-? WHERE `ISBN`= ? ;';
            connection.execute(query, [darab, id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'});
                }else{
                    resolve({'success': 1, 'info': 'Sikeres hozzáadás!'});
                }
            });
        });
    }


    //Ha leakarja mondani a felhasználó a rendelését (Delete)
    static async deleteRendeles(id, felhasznalo_id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM Rendeles WHERE id = ? AND felhasznalo_id = ?';
        connection.execute(query, [id, felhasznalo_id], (err, result) => {
            if (err) {
                resolve ({'success': 0, 'info': 'Adatbázis hiba'});
                return;
            } else {
                resolve ({'success': 1, 'info': 'Sikeres törlés'});
                return;
            }
        });
    });
    }


    //Felhasználói oldalon kilehetne iratni a rendeléseket (Read)
    static getRendelesByFelhaznalo(rendelo) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Rendeles WHERE felhasznalo_id = ?';
            connection.execute(query, [rendelo], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt', 'RendelesObject': []});
                    return;
                }
                if (result.length === 0) {
                    resolve({'success': 0, 'info': 'Nincs rendelése a felhasználónak!', 'RendelesObject': []});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres lekérdezés', 'RendelesObject': Rendeles.generateRendeles(result)});
                    return;
                }
            });
        });
    }

    // Read
    static getRendelesById(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Rendeles WHERE id = ?';
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt', 'RendelesObject': []});
                    return;
                }
                if (result.length === 0) {
                    resolve({'success': 0, 'info': 'Nincs rendelés ezzel az idvel', 'RendelesObject': []});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres lekérdezés', 'RendelesObject': generateRendeles(result)});
                    return;
                }
            });
        });
    }

    // Read
    static getAllRendeles() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Rendeles';
            connection.execute(query, [], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'});
                    return;
                }
                if (result.length === 0) {
                    resolve({'success': 0, 'info': 'Nincs rendelés az adatbázisban', 'RendelesObject': []});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres lekérdezés', 'RendelesObject': Rendeles.generateRendeles(result)});
                    return;
                }
            });
        });
    }

    //Update
    static UpdateRendeles(id, szallitasi_cim, konyvek) {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE Rendeles SET szallitasi_cim = ? , konyvek = ? WHERE id = ?';
            connection.execute(query, [szallitasi_cim, konyvek, id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres modosítás'});
                    return;
                }
            });
        });
    }
}

module.exports = RendelesDAO;