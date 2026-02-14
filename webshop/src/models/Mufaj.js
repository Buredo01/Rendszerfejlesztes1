class Mufaj {
    constructor(id, megnevezes) {
        this.id = id;
        this.megnevezes = megnevezes;
    }

    toString() {
        return this.id + ' ' + this.megnevezes;
    }

    static generateMufaj(mufajArray) {
        let mufajok = [];
        mufajArray.forEach(element => {
            mufajok.push(
                new Mufaj(...Object.values(element))
            );
        });
        return mufajok;
    }
}
module.exports = Mufaj;
