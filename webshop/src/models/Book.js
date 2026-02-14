class Book {
    constructor(isbn, cim, szerzo, megjelenesEve, ar, darab, borito, kiado, leiras, ertekelesek = []) {
        this.isbn = isbn;
        this.cim = cim;
        this.szerzo = szerzo;
        this.megjelenesEve = megjelenesEve;
        this.borito = borito;
        this.kiado = kiado;
        this.ar = ar;
        this.darab = darab;
        this.leiras = leiras;
        this.ertekelesek = ertekelesek;
    }

    static generateBook(arr) {
        let e = [];
        arr.forEach(element => {
            e.push(new Book(...Object.values(element)));
        });
        return e;
    }  
}

 

module.exports = Book;