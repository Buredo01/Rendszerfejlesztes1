class Rendeles {
    constructor(id, felhasznalo_id, rendeles_datuma, megrendelt_konyvek, kiszallitasi_cim) {
        this.id = id;
        this.felhasznalo_id = felhasznalo_id;
        this.rendeles_datuma = rendeles_datuma;
        this.kiszallitasi_cim = kiszallitasi_cim;
        this.megrendelt_konyvek = JSON.parse(megrendelt_konyvek);
        if (typeof this.megrendelt_konyvek == 'string') {
            this.megrendelt_konyvek = [this.megrendelt_konyvek];
        }
    }

    static generateRendeles(rendelesArray) {
        let rendelesek = [];
        rendelesArray.forEach(element => {
            rendelesek.push(
                new Rendeles(...Object.values(element))
            );
        });
        return rendelesek;
    }
}



module.exports = Rendeles;