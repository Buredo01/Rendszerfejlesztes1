const nodemailer = require('nodemailer');

// Konfiguráld az e-mail fiók beállításait (pl. Gmail esetén)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'mashusumishu@gmail.com',
        pass: 'zmwu idfk bglo jqik'
    }
});

// A rendelési adatokat tartalmazó függvény
const sendOrderConfirmationEmail = async (customer, address, orderDetails) => {
    //Könyvek formázása
    let booksList = orderDetails.map(book => {
        return `<li>${book.konyv_cim} - ${book.darab} db - ${book.darab * book.konyv_ar} FT (${book.konyv_ar} Ft / db)</li>`;
    }).join('');

    // Összegzett ár
    const totalAmount = orderDetails.reduce((sum, book) => {
        return sum + (book.darab * book.konyv_ar);
    }, 0);

    // E-mail tartalma
    const mailOptions = {
        from: 'Webshop',
        to: customer.email,
        subject: 'Sikeres rendelés visszaigazolás',
        html: `
            <h1>Köszönjük a rendelésedet!</h1>
            <p>Kedves ${customer.nev},</p>
            <p>Örömmel értesítjük, hogy rendelésed sikeresen feldolgozásra került. Az alábbi könyveket rendelted:</p>
            <ul>
                ${booksList}
            </ul>
            <p><strong>Összegzett ár:</strong> ${totalAmount} Ft</p>
            <p><strong>Szállítási cím: </strong> ${address}</p>
            <p>Köszönjük, hogy nálunk vásároltál, és reméljük, hogy hamarosan újra találkozunk!</p>
            <p>Üdvözlettel,<br/>A Könyvesbolt Csapata</p>
        `
    };

    // Küldés
    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Hiba történt az e-mail küldése során:', error);
            } else {
                console.log('Sikeres e-mail küldés');
            }
        });
        return true;
    } catch (e) {
        return false;
    }
}


module.exports = sendOrderConfirmationEmail;