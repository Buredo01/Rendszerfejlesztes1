class Pozicio {
    constructor(id, megnevezes) {
        this.id = id;
        this.megnevezes = megnevezes;
    }

    toString() {
        return this.id + ' ' + this.megnevezes;
    }

    static generatePozicio(pozicioArray) {
        let poziciok = [];
        pozicioArray.forEach(element => {
            poziciok.push(
                new Pozicio(...Object.values(element))
            );
        });
        return poziciok;
    }
}

module.exports = Pozicio;