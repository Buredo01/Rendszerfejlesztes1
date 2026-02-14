# Tesztjegyzőkönyv - Rendelés Funkció tesztelése

Az alábbi tesztdokumentum a 2024_IB153l-10_A/Webshop projekthez tartozó, 8.4.10. pontban szereplő Rendelés használatához tartozó funkciók teszteléséhez készült.
Felelőse: Tóth Norbert


## 1. Teszteljárások (TP)

### 1.1. Rendelés leadásának tesztelése meglévő fiókkal
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Rendelés leadása, regisztrált fiókkal való tesztelése
    0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be és navigáljunk egy adott könyvre (KONYVINPUT="Figyelj Rám").
    1. lépés: A darab számbeviteli mezőbe írjuk be a mennyiséget (DBINPUT=4).
    2. lépés: A 'Kosárba' feliratú gombra kattintsunk rá, hogy hozzáadjuk a könyvünket a kosarunkhoz.
    3. lépés: Adjunk meg egy szállítási címet (SZALLITASINPUT="6723 Szeged Irinyi 217") és kattintsunk a 'Rendelés leadása' gombra.
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Visszajelzünk a felhasználónak a sikeres rendelésről, ahol meg tudjuk tekinteni hogy miket rendeltünk, milyen összegben és milyen szállítási címre kértük a könyveket.

### 1.2. Rendelés leadásának tesztelése bejelentkezés nélkül
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: Rendelés leadása, bejelentkezés nélküli tesztelése
    0. lépés: Nyissuk meg az alkalmazást.
    1. lépés: Navigáljunk egy adott könyvre (KONYVINPUT="Figyelj Rám"), adjuk meg a darabszámot (DBINPUT=2) és helyezzük a könyvet kosárba.
    2. lépés: Az alkalmazás átírányit minket a kosár oldalára, adjunk meg egy szállítási címet (SZALLITASINPUT="6723 Szeged Irinyi 217") és kattintsunk a 'Rendelés leadása' gombra.
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Hibajelzést kapunk, hogy csak bejelentkezett felhasználó tud könyvet rendelni.

### 1.3. Rendelés leadásának tesztelése, különböző adatokkal ellátott szállítási mezővel
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02
- Leírás: Rendelés leadása, különböző adatokkal ellátott szállítási mezővel való tesztelése
    0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be és navigáljunk egy adott könyvre (KONYVINPUT="Figyelj Rám").
    1. lépés: A 'darab' számbeviteli mezőbe írjuk be a mennyiséget (DBINPUT=2).
    2. lépés: A 'Kosárba' feliratú gombra kattintsunk rá, hogy hozzáadjuk a könyvünket a kosarunkhoz.
    3. lépés: Adjunk meg egy szállítási címet (SZALLITASINPUT="    "/"010111001") és kattintsunk a 'Rendelés leadása' gombra.
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Visszajelzünk a felhasználónak hogy töltse ki az szállítási címet megfelelően.

### 1.4. Rendelés leadásának tesztelése, üres kosárral
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Rendelés leadása, üres kosárral való tesztelése
    0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be.
    1. lépés: Navigáljunk a kosarunkhoz.
    2. lépés: Adjunk meg egy szállítási címet (SZALLITASINPUT="6700 SZTE TIK Ady tér 20") és kattintsunk a 'Rendelés leadása' gombra.
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Visszajelzünk a felhasználónak, hogy a rendeléshez rakjon könyvet a kosárba.


## 2. Teszesetek (TC)

### 2.1. Rendelés leadása regisztrált fiókkal tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Regisztrált fiókkal adunk le rendelést 
- Bemenet: DBINPUT=4 ; KONYVINPUT = "Figyelj rám"; SZALLITASINPUT="6723 Szeged Irinyi 217"
- Művelet: Nyomjuk meg a 'Rendelés leadása' gombot 
- Elvárt kimenet: Kapunk egy visszajelzést, ahol sikeres rendelésről értesítenek minket, és láthatjuk, hogy (DBINPUT=4 és a KONYVINPUT= "Figyelj rám" és a SZALLITASINPUT="6723 Szeged Irinyi 217") minden adatot rendesen visszakapunk.

### 2.2. Rendelés leadása bejelentkezés nélkül történő tesztesete

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Nem regisztrált fiókkal adunk le rendelést 
- Bemenet: DBINPUT=2 ; KONYVINPUT = "Figyelj rám", SZALLITASINPUT="6723 Szeged Irinyi 217"
- Művelet: Nyomjuk meg a 'Rendelés leadása' gombot 
- Elvárt kimenet: Kapunk egy visszajelzést, ahol értesítenek minket, hogy be kell jelentkeznünk a rendelés leadásához.

### 2.3. Rendelés leadása, különböző adatokkal ellátott szállítási mezőhöz tartozó tesztesetek

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Rendelés leadása üres szállítási mezővel
- Bemenet: DBINPUT=2; KONYVINPUT="Figyelj rám"; SZALLITASINPUT="     "
- Művelet: Nyomjuk meg az 'Rendelés leadása' feliratú gombot 
- Elvárt kimenet: Kapunk egy visszajelzést, ahol értesítenek minket, hogy ki kell tölteni a szállítási címet.

#### 2.3.2. TC-02
- TP: TP-03
- Leírás: Rendelés leadása számokkal kitöltött szállítási mezővel
- Bemenet: DBINPUT=2; KONYVINPUT="Figyelj rám"; SZALLITASINPUT="0101110011101110111"
- Művelet: Nyomjuk meg a 'Rendelés leadása' feliratú gombot 
- Elvárt kimenet: Kapunk egy visszajelzést, ahol értesítenek minket, hogy megfelelő formátumban kell a szállítási címet megadnunk.

### 2.4. Rendelés leadása, üres kosárral tesztesete

#### 2.4.1. TC-01
- TP: TP-04
- Leírás: Üres kosárral történő rendelés leadása
- Bemenet: DBINPUT= 0 ; KONYVINPUT = ""; SZALLITASINPUT="6700 SZTE TIK Ady tér 20"
- Művelet: Nyomjuk meg a 'Rendelés leadása' feliratú gombot 
- Elvárt kimenet: Kapunk egy visszajelzést, ahol értesítenek minket, hogy a rendeléshet helyezzünk könyvet a kosarunkba.

