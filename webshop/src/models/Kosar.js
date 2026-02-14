class Kosar{
    constructor(id,felhasznalo_id,konyv_id,darab,konyv_cim,konyv_ar){
        this.id = id;
        this.felhasznalo_id = felhasznalo_id;
        this.konyv_id = konyv_id;
        this.darab=darab;
        this.konyv_cim = konyv_cim;
        this.konyv_ar = konyv_ar;
        
    }
    static generateKosar(kosarArray){

        let kosarak = [];
        kosarArray.forEach(element => {
            kosarak.push(new Kosar(...Object.values(element)));
            
        });
        return kosarak;
    }

}


module.exports = Kosar;