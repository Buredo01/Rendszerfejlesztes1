# Tesztjegyzőkönyv-Email-es értesítés rendelésről funkcióhoz

Az alábbi tesztdokumentum a `Webshop` projekthez tartozó `8.3.18 Email-es kiértesítés a felhasználónak a rendelésről` funkcióihoz készült. Felelőse: `Bogár Kíra` 


## 3. Tesztriportok (TR)

### 3.1. Email-es kiértesítés funkció tesztelése
##### 3.1.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a 'Kosár' oldalt
    1. lépés: Ellenőrizzük, hogy a kosár üres
    2. lépés: 'szallitasi_cim' = Teszt utca 42
    3. lépés: Megnyomjuk a 'Rendelés leadása' gombot.
    4. lépés: A 'Rendelés leadása' gomb nem irányít át a 'sikeresrendeles' oldalra, e-mail címre nem érkezik üzenet.

##### 3.2.1. A riporthoz tartozó teszteset: TC-02
    0. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a 'könyveink' oldalt
    1. lépés: Megnyomjuk a 'Kosárba' gombot a 'Figyelj rám' könyvön -> átirányítás a Kosár oldalra
    2. lépés: A 'szallitasi_cim' beviteli mezőbe írjuk a szállítási címet 
    3. lépés: Megnyomjuk a 'Rendelés leadása' gombot.
    4. lépés: Átírányít a 'sikeresrendeles' oldalra, e-mail címre üzenet érkezett benne a megrendelt könyvek címével, darabszámával, egyenkénti és összegzett árával, valamint a szállítási címmel.
    

### 3.3. Rendelés leadása, különböző adatokkal ellátott szállítási mezőhöz tartozó tesztesetek
##### 3.3.1. A riporthoz tartozó teszteset: TC-02
0. lépés: Regisztrált fiókkal tesztelek
1. lépés: DBINPUT=2
2. lépés: KONYVINPUT = "Figyelj rám"
3. lépés: SZALLITASINPUT="     "
4. lépés: Rendelés gomb lenyomása
6. lépés: Visszajelzést kaptam, hogy sikeres rendelést adtam le


##### 3.3.2. A riporthoz tartozó teszteset: TC-02
0. lépés: Regisztrált fiókkal tesztelek
1. lépés: DBINPUT=2
2. lépés: KONYVINPUT = "Figyelj rám"
3. lépés: SZALLITASINPUT="0101110011101110111"
4. lépés: Rendelés gomb lenyomása
6. lépés: Visszajelzést kaptam, hogy sikeres rendelést adtam le
    

### 3.4. Rendelés leadása, üres kosárral tesztesete
##### 3.4.1. A riporthoz tartozó teszteset: TC-01
0. lépés: Regisztrált fiókkal tesztelek
1. lépés: DBINPUT=0
2. lépés: KONYVINPUT = ""
3. lépés: SZALLITASINPUT="6700 SZTE TIK Ady tér 20"
4. lépés: Rendelés gomb lenyomása
6. lépés: Visszajelzést kaptam, hogy hiba történt a lekérdezésben.