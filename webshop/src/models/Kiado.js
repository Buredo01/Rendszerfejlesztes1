class Kiado {
    constructor(id, megnevezes) {
        this.id = id;
        this.megnevezes = megnevezes;
    }

    toString() {
        return this.id + ' ' + this.megnevezes;
    }

    static generateKiado(kiadoArray) {
        let kiadok = [];
        pozicioArray.forEach(element => {
            kiadok.push(
                new Kiado(...Object.values(element))
            );
        });
        return kiadok;
    }
}