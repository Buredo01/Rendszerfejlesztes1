const connection = require("../utils/SQLConfig");
const { User, generateUser } = require("../models/User");

class UserDAO {

    //felhasznalo felvitele az adatbazisba, default 0 a pozicio id
    static async createUser(username,email,password) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO felhasznalo (nev, email, jelszo, pozicio_id) VALUES (?,?,?, 1)`;
            connection.execute(query, [username,email,password], (err, res) => {
                if (err) {
                    resolve({ "success": 0, "info": "Adatbázis hiba történt felhasználó létrehozásakor!"});
                    return;
                } else {
                    resolve({ "success": 1, "info": "Új felhasználó sikeresen létrehozva"});
                    return;
                }
            });
        });
    }

    static async getAllUserExceptMe(id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT id, email FROM Felhasznalo WHERE id != ?';
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt','UserObject': []});
                    return;
                }
                if (result.length === 0) {
                    resolve({'success': 0, 'info': 'Nincsenek adataok az adatbázisban!', 'UserObject': []});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres bejelentkezés', 'UserObject': result});
                    return;
                }
            });
        });
    }

    static async getAllUserByRole(role){
        return new Promise((resolve, reject) => {
            const query = 'SELECT id, nev, email  FROM Felhasznalo WHERE pozicio_id = ?';
            connection.execute(query, [role], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt','UserObject': []});
                    return;
                }
                if (result.length === 0) {
                    resolve({'success': 0, 'info': 'Nincsenek adataok az adatbázisban!', 'UserObject': []});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres bejelentkezés', 'UserObject': generateUser(result)});
                    return;
                }
            });
        });
    }

    static async getUser(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM felhasznalok WHERE felhasznalo_id = ?';
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'});
                    return;
                }
                if (result.length === 0) {
                    resolve({'success': 0, 'info': 'Nincs ilyen felhasználó!'});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres bejelentkezés', 'UserObject': generateUser(result)});
                    return;
                }
            });
        });
    }
    
    static async getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM felhasznalo WHERE email = ?';
             connection.execute(query, [email], (err, result) => {
                  if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'}); 
                    return;
                   }
                   resolve({'success': 1, 'info': 'Sikeres lekérés', 'UserObject': generateUser(result)});
                   return;
                });
            });
        }

    static async updateUser(username, email, password, id){
        return new Promise((resolve, reject) => {
            const updateQuery = 'UPDATE felhasznalo SET nev = ?, email = ?, jelszo = ? WHERE id = ?';
            connection.execute(updateQuery, [username, email, password, id], (err, res) => {
                if (err) {
                    resolve({ success: 0, info: 'Adatbázis hiba történt' });
                    return;
                }
                if (res.affectedRows > 0) {
                    resolve({ success: 1, info: 'Adatok sikeresen megváltoztatva' });
                    return;
                } else {
                    resolve({ success: 0, info: 'Nincs változás. Nem történt módosítás.' });
                    return;
                }
            });
        });
    }

    static async updateUserRole(id, role){
        return new Promise((resolve, reject) => {
            const updateQuery = 'UPDATE felhasznalo SET pozicio_id = ? WHERE id = ?';
            connection.execute(updateQuery, [role, id], (err, res) => {
                if (err) {
                    resolve({ success: 0, info: 'Adatbázis hiba történt' });
                    return;
                }
                if (res.affectedRows > 0) {
                    resolve({ success: 1, info: 'Adatok sikeresen megváltoztatva' });
                    return;
                } else {
                    resolve({ success: 0, info: 'Nincs változás. Nem történt módosítás.' });
                    return;
                }
            });
        });
    }

    static async deleteUser(id){
        return new Promise((resolve, reject) => {
            const deleteQuery = 'DELETE FROM felhasznalo WHERE id = ?';
            connection.execute(deleteQuery, [id], (err, res) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'});
                    return;
                } else {
                    resolve({ "success": 1, "info": "Felhasználó sikeresen törölve"});
                    return;
                }
            });
        });
    }

    static getUserToSession(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT felhasznalo.`id`, `nev`, `email`,pozicio_id , pozicio.megnevezes , `kivansag_lista` FROM `felhasznalo`, pozicio WHERE felhasznalo.pozicio_id = pozicio.id AND felhasznalo.id = ?;';
            connection.execute(query, [id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt'});
                    return;
                }
                if (result.length === 0) {
                    resolve({'success': 0, 'info': 'Nincs ilyen felhasználó!'});
                    return;
                } else {
                    resolve({'success': 1, 'info': 'Sikeres lekérdezés', 'UserObject': result[0]});
                    return;
                }
            });
        });
    }


    static async rendeleslekerdzes(felhasznalo_id) {
        return new Promise((resolve, reject) => {
            const query = ` SELECT id, rendeles_datuma, konyvek, szallitasi_cim FROM rendeles WHERE felhasznalo_id = ?
            ORDER BY rendeles_datuma DESC
            `;
            connection.execute(query, [felhasznalo_id], (err, results) => {
                if (err)
                {
                    resolve({'success': 0,'info': "Nem sikerült lekérni a rendeléseket."});
                }
                else
                {
                    resolve({'success': 1, 'info':'sikeres lekérdezés', 'rendelesek': results});
                }
            });
        });
    }

    static async saveKedvenc(felhasznalo_id, konyvek) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE  felhasznalo  SET  kivansag_lista = ? WHERE id=?`;
            connection.execute(query, [konyvek, felhasznalo_id], (err, results) => {
                if (err)
                {
                    resolve({'success': 0,'info': "Nem sikerült elmenteni a kedvenceket"});
                }
                else
                {
                    resolve({'success': 1, 'info':'Sikeres mentes'});
                }
            });
        });
    }

    

}


module.exports = UserDAO;