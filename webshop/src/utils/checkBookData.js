

class CheckBookData {

    constructor() {
        this.errors = [];
    }

    checkISBN(isbn) {
        
        if (isbn === "") {
            this.errors.push({
                msg: "Az ISBN mező nem lehet üres!",
                id: "isbn_error"
            });
        return false;
        }

        if (isNaN(isbn)) {
            this.errors.push({
                msg: "Az ISBN mező csak számot tartalmazhat!",
                id: "isbn_error"
            });
            return false;
        }

        if (!/^\d{13}$/.test(isbn)) {
            this.errors.push({
                msg: "Az ISBN szám 13 számjegyből állhat!",
                id: "isbn_error"
            });
            return false;
        }

        return true;
    }

    checkTitle(title) {
        if (title === "") {
            this.errors.push({
                msg: "A cím mező nem lehet üres!",
                id: "title_error"
            });
            return false;
        }
        return true;
    }

    checkWriters(writers) {
        if (writers === "") {
            this.errors.push({
                msg: "A szerző mező nem lehet üres!",
                id: "writers_error"
            });
            return false;
        }

        return true;
    }

    checkPublisher(publisher) {
        if (publisher === "") {
            this.errors.push({
                msg: "A kiadő mező nem lehet üres!",
                id: "publisher_error"
            });

            return false;
        }

        return true;
    }

    checkPrice(price) {
        if (price === "") {
            this.errors.push({
                msg: "Az ár mező nem lehet üres!",
                id: "price_error"
            });

            return false;
        }

        if (isNaN(price)) {
            this.errors.push({
                msg: "Az ár csak szám lehet!",
                id: "price_error"
            });

            return false;
        }

        if (!/^[1-9]\d*$/.test(price)) {
            this.errors.push({
                msg: "Az ár mező csak pozitív egész számokat tartalmazhat!",
                id: "price_error"
            });

            return false;
        }

        return true;
    }

    checkReleaseDate(releaseDate) {
        if (releaseDate === "") {
            this.errors.push({
                msg: "A kiadási éve mező nem lehet üres!",
                id: "release_error"
            });

            return false;
        }

        if (isNaN(releaseDate)) {
            this.errors.push({
                msg: "A kiadás éve mező csak szám lehet!",
                id: "release_error"
            });

            return false;
        }

        if (!/^[1-9]\d{3}$/.test(releaseDate)) {
            this.errors.push({
                msg: "Az kiadás éve mező csak négyjegyű pozitív egész számból állhat!",
                id: "release_error"
            });

            return false;
        }

        return true;
    }

    checkDescription(description) {
        if (description === "") {
            this.errors.push({
                msg: "A leírás mező nem lehet üres!",
                id: "description_error"
            });

            return false;
        }

        return true;
    }

    checkGenre(genre_arr, genre) {
        if (genre_arr !== undefined && genre_arr.length == 0 && genre == undefined) {
            errors.push({
                msg: "A műfajt kötelező kijelölni vagy ha nem szerepel akkor hozzáadni!",
                id: "genre_error"
            });
    
            return false;
        }
        
        return true;
    }

    checkPiece(piece) {
        if (piece === "") {
            this.errors.push({
                msg: "A darab mező nem lehet üres!",
                id: "piece_error"
            });
            return false;
        }
    
        if(!/^[1-9]\d*$/.test(piece)) {
            this.errors.push({
                msg: "A darab mező csak poizitív számokat tartalmazhat!",
                id: "piece_error"
            });
            return false;
        }
    
        return true;
    }

/**
 * isbn_error -> ez lesz az isbn mező alatt
 * writers_error -> ez lesz a szerzők mező alatt
 * title_error -> ez lesz a cím mező alatt
 * genre_error -> ez lesz a műfaj mező alatt
 * publisher_error -> ez lesz a kiadó mező alatt
 * price_error -> ez lesz a ár mező alatt
 * description_error -> ez lesz a leírás mező alatt
 * release_error -> ez lesz a kiadás éve mező alatt
 */
}


module.exports = CheckBookData;