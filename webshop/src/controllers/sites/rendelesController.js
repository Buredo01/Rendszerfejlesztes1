const KosarDAO = require("../../dao/KosarDAO");
const RendelesDAO = require("../../dao/RendelesDAO");
const sendOrderConfirmationEmail = require("../../utils/mailer");

class rendelesController {

    //Megkell nézni, hogy bevan-e jelentkezve a felhazsnáló//
    //Megkell nézni, hogy minden adat meglett-t adva//
    //Lekell kérni a felhazsnáló kosarát//
    //Megkell nézni, hogy van-e benne valami//
    //Ha van, megkell nézni, hogy van-e elég könyv raktáron//
    //Ha van, elkell menteni a rendelést//
    //Módosítani kell a raktár tartalmát//
    //Törölni kell a felhasználó kosarát//

    static async rendelesLeadas(req, res) {
        //!!!!!!!!!!!!! Elsőnek megkell nézni hogy bevan-e jelentkezve a felhasználó !!!!!!!!!!!!!
        if(req.session.isAuthenticated){

            const felhasznalo_id = req.session.user.id; //Ide jön majd a felhasználó idja
            const {szallitasi_cim} = req.query; //Ez a formból a szállítási cím
    
            if (felhasznalo_id && szallitasi_cim){ //Ha megvan minden szükséges adat
    
                try{

                    //Elöször lekérem a kosár tartalmát
                    const kosarTartalom = await KosarDAO.getKosarByFelhasznalo(felhasznalo_id);//Lekérjük a kosár tartalmát (Norbi)
    
                    if(kosarTartalom.success && kosarTartalom.kosarak.length > 0){
    
                         // Ha sikeres megnézzük, hogy van-e elég raktáron
                        const raktar = await RendelesDAO.isEnough(felhasznalo_id);
    
                        if(raktar.success) {//Ha sikeres a lekérdezés

                            if(raktar.van==1) {//Ha van elég könyv
                                //Mappolas
                                const konyvek = kosarTartalom.kosarak.map(konyv => ({
                                    ISBN: konyv.konyv_id,
                                    darab: konyv.darab,
                                    darab_ar : konyv.konyv_ar,
                                    osszar: konyv.konyv_ar * konyv.darab
                                }));

                                //JSONre konvertálás
                               const JSON_konyvek = JSON.stringify(konyvek);

                                //Rendelés mentése
                                const mentes = await RendelesDAO.addRendeles(felhasznalo_id, JSON_konyvek, szallitasi_cim);
                                if(mentes.success) {//Ha sikerül létrehozni a rendelést

                                    //Végig megyek a kosarakon és a könyvek készletété módosítom
                                    for(let i = 0; i < konyvek.length; i++){
                                        const modositas = RendelesDAO.updateKonyvekDarab(konyvek[i].ISBN, konyvek[i].darab);
                                        if(modositas.success==0){
                                            console.log("Hiba a könyvkészlet módosításánál");
                                        }
                                    }

                                    //Törlöm a kosarakat
                                    const torles = await KosarDAO.deleteKosarByFelhasznalo(felhasznalo_id);
                                    if(torles.success==0){
                                        console.log("Sikertelen törlés");
                                    }

                                    // Email kiküldés
                                    const kuldes = await sendOrderConfirmationEmail(req.session.user, szallitasi_cim, kosarTartalom.kosarak);
                                    if(kuldes){
                                        //Átirányítás a sikeresrendeles oldalra
                                        return res.render("sikeresrendeles.ejs", {"rendelesek" : kosarTartalom.kosarak, "szallitasi_cim" : szallitasi_cim });
                                    }else{
                                        req.session.info ="Hiba az email kiküldése közben";
                                        console.log("Hiba az email kiküldése közben");
                                    }

                                } else {//Ha nem
                                    req.session.info ="Sikertelen rendelés!";
                                    //console.log("Sikertelen rendelés!");
                                }
    
                            } else {//Ha nem
                                req.session.info = "Nincs elég könyv a raktárban!";
                                //console.log("Nincs elég könyv a raktárban!");
                            }
                           
                        } else {//Ha nem
                            req.session.info = "Hiba a mennyiség lekérdezésekor!";
                            //console.log("Hiba a mennyiség lekérdezésekor!");
                        }
                        
                    }else{
                        req.session.info = "Hiba a kosár lekérdezésekor!";
                        //console.log("Hiba a kosár lekérdezésekor!");
                    }
    
                }catch(err){
                    req.session.info = "Hiba a rendelés leadása közben: "+err;
                    //console.log("Hiba a rendelés leadása közben: "+err)
                }
            } else {
                req.session.info = "Minden mezőt ki kell tölteni!";
                //console.error("Minden mezőt ki kell tölteni!");
            }
            res.redirect("/kosar");
        } else {
            res.redirect("/bejelentkezes");
        }
        
    }
}

module.exports = rendelesController;
