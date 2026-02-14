class User {
    constructor(id, nev, email, jelszo, pozicio_id, kivansag_lista) {
        this.id = id;
        this.nev = nev;
        this.email = email;
        this.jelszo = jelszo;
        this.pozicio_id = pozicio_id;
        if(kivansag_lista && kivansag_lista.length>0){
            this.kivansag_lista = JSON.parse(kivansag_lista);
            if (typeof this.kivansag_lista == 'string') {
                this.kivansag_lista = [this.kivansag_lista];
            }
        }
    }
}

function generateUser(userArray) {
    let users = [];
    userArray.forEach(element => {
        users.push(
            new User(...Object.values(element))
        );
    });
    return users;
}

module.exports = { User, generateUser };