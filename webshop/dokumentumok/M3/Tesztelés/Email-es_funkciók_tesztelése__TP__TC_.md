# Tesztjegyzőkönyv-`Email-es funkciók`

Az alábbi tesztdokumentum a `Webshop` projekthez tartozó `8.3.18 Email-es kiértesítés a felhasználónak a rendelésről` funkcióihoz készült. Felelőse: `Bogár Kíra` 

## 1. Teszteljárások (TP)

### 1.1. Email-es kiértesítés funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: email-es kiértesítés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a 'könyveink' oldalt
    1. lépés: Megnyomjuk a 'Kosárba' gombot -> átirányítás a Kosár oldalra
    2. lépés: Növeljük/csökkentjük a 'Könyv' darabszámát
    3. lépés: A 'szallitasi_cim' beviteli mezőbe írjuk a szállítási címet 
    4. lépés: Megnyomjuk a 'Rendelés leadása' gombot.
    5. lépés: Ellenőrizzük, hogy az e-mail elküldésre került.

## 2. Tesztesetek (TC)

### 2.1. Email-es kiértesítés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: email-es kiértesítés funkció tesztelése 
    0. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a 'Kosár' oldalt
    1. lépés: Ellenőrizzük, hogy a kosár üres
    2. lépés: A 'szallitasi_cim' beviteli mezőbe írjuk a szállítási címet 
    3. lépés: Megnyomjuk a 'Rendelés leadása' gombot.
- Elvárt eredmény: A 'Rendelés leadása' gomb nem irányít át a 'sikeresrendeles' oldalra, a felhasználó e-mail címére nem érkezik üzenet.

#### 2.1.2 TC-02
- TP: TP-01
- Leírás: email-es kiértesítés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a 'könyveink' oldalt
    1. lépés: Megnyomjuk a 'Kosárba' gombot a 'Figyelj rám' könyvön -> átirányítás a Kosár oldalra
    2. lépés: A 'szallitasi_cim' beviteli mezőbe írjuk a szállítási címet 
    3. lépés: Megnyomjuk a 'Rendelés leadása' gombot.
 - Elvárt eredmény: Átírányít a 'sikeresrendeles' oldalra, és a felhasználó e-mail címére üzenet érkezik benne a megrendelt könyvek címével, darabszámával, egyenkénti és összegzett árával, valamint a szállítási címmel.
