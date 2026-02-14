var errors = [];

function checkISBN(isbn) {
    if (isbn === "") {
        errors.push({
            msg: "Az ISBN mező nem lehet üres!",
            id: "isbn_error"
        });
        return false;
    }

    if (isNaN(isbn)) {
        errors.push({
            msg: "Az ISBN mező csak számot tartalmazhat!",
            id: "isbn_error"
        });
        return false;
    }

    if (!/^\d{13}$/.test(isbn)) {
        errors.push({
            msg: "Az ISBN szám 13 számjegyből állhat!",
            id: "isbn_error"
        });
        return false;
    }

    return true;
}

function checkTitle(title) {
    if (title === "") {
        errors.push({
            msg: "A cím mező nem lehet üres!",
            id: "title_error"
        });
        return false;
    }
    return true;
}

function checkWriters(writers) {
    if (writers === "") {
        errors.push({
            msg: "A szerző mező nem lehet üres!",
            id: "writers_error"
        });
        return false;
    }

    return true;
}

function checkGenre(genre_arr, genre) {
    if (genre_arr !== undefined && genre_arr.length === 0 && genre === "") {
        errors.push({
            msg: "A műfajt kötelező kijelölni vagy ha nem szerepel akkor hozzáadni!",
            id: "genre_error"
        });

        return false;
    }
    
    return true;
}

function checkPublisher(publisher) {
    if (publisher === "0") {
        errors.push({
            msg: "A kiadó mezőből ha ki van jelölve akkor egy kiadót ki kell jelölni!",
            id: "publisher_error"
        });

        return false;
    }

    return true;
}

function checkPrice(price) {
    if (price === "") {
        errors.push({
            msg: "Az ár mező nem lehet üres!",
            id: "price_error"
        });

        return false;
    }

    if (isNaN(price)) {
        errors.push({
            msg: "Az ár csak szám lehet!",
            id: "price_error"
        });

        return false;
    }

    if (!/^[1-9]\d*$/.test(price)) {
        errors.push({
            msg: "Az ár mező csak pozitív egész számokat tartalmazhat!",
            id: "price_error"
        });

        return false;
    }

    return true;
}

function checkReleaseDate(releaseDate) {
    if (releaseDate === "") {
        errors.push({
            msg: "A kiadási éve mező nem lehet üres!",
            id: "release_error"
        });

        return false;
    }

    if (isNaN(releaseDate)) {
        errors.push({
            msg: "A kiadás éve mező csak szám lehet!",
            id: "release_error"
        });

        return false;
    }

    if (!/^[1-9]\d{3}$/.test(releaseDate)) {
        errors.push({
            msg: "Az kiadás éve mező csak négyjegyű pozitív egész számból állhat!",
            id: "release_error"
        });

        return false;
    }

    return true;
}

function checkDescription(description) {
    if (description === "") {
        errors.push({
            msg: "A leírás mező nem lehet üres!",
            id: "description_error"
        });

        return false;
    }

    

    return true;
}


function checkPiece(piece) {
    if (piece === "") {
        errors.push({
            msg: "A darab mező nem lehet üres!",
            id: "piece_error"
        });
        return false;
    }

    if(!/^[1-9]\d*$/.test(piece)) {
        errors.push({
            msg: "A darab mező csak pozitív egész számokat tartalmazhat!",
            id: "piece_error"
        });
        return false;
    }

    return true;
}

function checkCover(cover) {
    if (cover === undefined) {
        errors.push({
            msg: "Kötelező boritót feltölteni!",
            id: "cover_error"
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