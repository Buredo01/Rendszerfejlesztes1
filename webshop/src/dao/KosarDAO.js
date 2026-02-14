const connection = require('../utils/SQLConfig');
const Kosar = require('../models/Kosar');

class KosarDAO {
    
     //Kovács Máté írta, csak kellett, hogy tudjam futtani a rendeléses dolgokat
     static async getKosarByFelhasznalo(felhasznalo_id) { 
        return new Promise((resolve, reject) => {
            const query = `
            SELECT k.id, k.felhasznalo_id, k.konyv_id, k.darab, konyv.cim AS konyv_cim, konyv.ar AS konyv_ar
            FROM Kosar k
            JOIN Konyv konyv ON k.konyv_id = konyv.isbn
            WHERE k.felhasznalo_id = ?`;        
            connection.execute(query, [felhasznalo_id], (err, result) => {
                if (err) {
                    resolve({'success': 0, 'info': 'Adabázis hiba történt', 'kosarak': []});
                }else{
                    resolve({'success': 1, 'info': 'Sikeres hozzáadás!','kosarak': Kosar.generateKosar(result) });
                }
            });
        });
    }
    
    static async removeFromKosar(felhasznalo_id, konyv_id) {
        return new Promise((resolve, reject) => {
            const deleteQuery = 'DELETE FROM Kosar WHERE felhasznalo_id = ? AND konyv_id = ?';
            connection.execute(deleteQuery, [felhasznalo_id, konyv_id], (err, result) => {
                if (err) {
                    resolve({ 'success': 0, 'info': 'Adatbázis hiba történt a törlés során' });
                } else {
                    resolve({ 'success': 1, 'info': 'A könyv sikeresen törölve lett a kosárból' });
                }
            });
        });
    }
    
    //Köny kosárhoz adása
    static async addToKosar(felhasznalo_id, konyv_id, mennyiseg) {
        return new Promise((resolve, reject) => {
            // Ellenőrizze, hogy a könyv már szerepel-e a kosárban
                const checkQuery = 'SELECT * FROM Kosar WHERE felhasznalo_id = ? AND konyv_id = ?';
                connection.execute(checkQuery, [felhasznalo_id, konyv_id], (err, result) => {
                if (err)
                {
                    resolve({'success': 0, 'info': 'Adatbázis hiba történt'});
                }
                else
                {
                    if (result.length > 0)
                    {
                        // Ha a könyv már ott van, akkor a mennyiséget növeljük
                        const updateQuery = 'UPDATE Kosar SET darab = darab + ? WHERE felhasznalo_id = ? AND konyv_id = ?';
                        connection.execute(updateQuery, [mennyiseg, felhasznalo_id, konyv_id], (err, updateResult) => {
                            if (err)
                            {
                                resolve({'success': 0, 'info': 'Adatbázis hiba történt a frissítésnél'});
                            }
                            else
                            {
                                resolve({'success': 1, 'info': 'A könyv mennyisége frissítve lett a kosárban'});
                            }
                        });
                    }
                    else
                    {
                        // Ha a könyv még nincs a kosárban, hozzáadjuk
                        const insertQuery = 'INSERT INTO Kosar (felhasznalo_id, konyv_id, darab) VALUES (?, ?, ?)';
                        connection.execute(insertQuery, [felhasznalo_id, konyv_id, mennyiseg], (err, insertResult) => {
                            if (err)
                            {
                                resolve({'success': 0, 'info': 'Adatbázis hiba történt az új könyv hozzáadásánál'});
                            }
                            else
                            {
                                resolve({'success': 1, 'info': 'Könyv sikeresen hozzáadva a kosárhoz'});
                            }
                        });
                    }
                }
            });
        });
    }


    
    static async deleteKosarByFelhasznalo(felhasznalo_id) {
        return new Promise((resolve, reject) => {
            const deleteQuery = 'DELETE FROM Kosar WHERE felhasznalo_id = ?;';
            connection.execute(deleteQuery, [felhasznalo_id], (err, result) => {
                if (err) {
                    resolve({ 'success': 0, 'info': 'Adatbázis hiba történt a törlés során' });
                } else {
                    resolve({ 'success': 1, 'info': 'A könyv sikeresen törölve lett a kosárból' });
                }
            });
        });
    }

    static async updateKosarQuantity(felhasznalo_id, konyv_id, pluszegy) {
        return new Promise((resolve, reject) => {
            const selectQuery = 'SELECT darab FROM Kosar WHERE felhasznalo_id = ? AND konyv_id = ?';
            connection.execute(selectQuery, [felhasznalo_id, konyv_id], (err, dbszamok) => {
                if (err) {
                    resolve({ 'success': 0, 'info': 'Adatbázis hiba történt a mennyiség lekérdezése során' });
                } else if (dbszamok.length === 0) {
                    resolve({ 'success': 0, 'info': 'A könyv nem található a kosárban' });
                } else {
                    const jelenlegimennyiseg = dbszamok[0].darab;
                    const ujmennyiseg = jelenlegimennyiseg + pluszegy;
    
                    if (ujmennyiseg <= 0) {
                        const deleteQuery = 'DELETE FROM Kosar WHERE felhasznalo_id = ? AND konyv_id = ?';
                        connection.execute(deleteQuery, [felhasznalo_id, konyv_id], (deleteErr, deleteResult) => {
                            if (deleteErr) {
                                resolve({ 'success': 0, 'info': 'Adatbázis hiba történt a törlés során' });
                            } else {
                                resolve({ 'success': 1, 'info': 'A könyv sikeresen törölve lett a kosárból' });
                            }
                        });
                    } else {
                        const updateQuery = 'UPDATE Kosar SET darab = ? WHERE felhasznalo_id = ? AND konyv_id = ?';
                        connection.execute(updateQuery, [ujmennyiseg, felhasznalo_id, konyv_id], (updateErr, updateResult) => {
                            if (updateErr) {
                                resolve({ 'success': 0, 'info': 'Adatbázis hiba történt a mennyiség frissítése során' });
                            } else {
                                resolve({ 'success': 1, 'info': 'A könyv mennyisége sikeresen frissítve lett a kosárban' });
                            }
                        });
                    }
                }
            });
        });
    }
    
}

module.exports = KosarDAO;