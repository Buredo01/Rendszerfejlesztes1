class Ertekeles {
    constructor(ertekeles_id, konyv_id, felhasznalo_id, szoveg, csillag, statusz, felh) {
        this.ertekeles_id = ertekeles_id;
        this.konyv_id = konyv_id;
        this.felhasznalo_id = felhasznalo_id;
        this.szoveg = szoveg;
        this.csillag = csillag;
        this.statusz = statusz;
        this.felhasznalo = felh;
    }

    static generateErtekeles(arrayErtekeles){
        let ertekelesek =[];
        arrayErtekeles.forEach(element => {
            ertekelesek.push(
                new Ertekeles(...Object.values(element))
            );
        });
        return ertekelesek;

    }
}
module.exports = Ertekeles;