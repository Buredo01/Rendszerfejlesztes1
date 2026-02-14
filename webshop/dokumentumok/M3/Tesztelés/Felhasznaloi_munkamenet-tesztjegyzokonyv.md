# Tesztjegyzőkönyv-`Felhasználói munkamenet`

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `Felhasználói munkamenet` funkcióihoz készült. Felelőse: `Kovács Máté`

## 1. Teszteljárások (TP)

### 1.1. Regisztráció funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: Regisztráció funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el a regisztráció funkciót.
    1. lépés: A `Felhasználónév` szövegbeviteli mezőbe írjunk be a `FELHASZNALONEV` szöveget.
    2. lépés: Az `Email-cím` szövegbeviteli mezőbe írjunk be a `EMAIL` szöveget.
    3. lépés: Az `Jelszó` szövegbeviteli mezőbe írjunk be a `JELSZO` szöveget.
    4. lépés: Az `Jelszó-újra` szövegbeviteli mezőbe írjunk be a `JELSZO2` szöveget.
    5. lépés: Nyomjuk meg az `Regisztráció` gombot. 
    6. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Átirányítás a bejelentkezés oldalra`.

### 1.2. Bejelentkezés funkció tesztelése 
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Bejelentkezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el a bejelentkezés funkciót.
    1. lépés: Az `Email-cím` szövegbeviteli mezőbe írjunk be a `EMAIL` szöveget.
    2. lépés: Az `Jelszó` szövegbeviteli mezőbe írjunk be a `JELSZO` szöveget.
    3. lépés: Nyomjuk meg az `Bejelentkezés` gombot. 
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Átirányítás a főoldalra`.

### 1.3. Kijelentkezés funkció tesztelése 
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: Kijelentkezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg az `Kijelentkezés` gombot. 
    2. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Átirányítás a bejelentkezés oldalra`.

### 1.4. Profil gomb tesztelése 
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Profil gomb funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot. 
    2. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Átirányítás a profil oldalra` és megjeleníti a felhasználói adatokat.   

### 1.5. Profil módosítása gomb tesztelése
- Azonosító: TP-05
- Tesztesetek: TC-01
- Leírás:  Profil módosítása gomb funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot.
    2. lépés: Nyomjuk meg `Profil módosítása` gombot.
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Átirányítás a profil módosítása oldalra`.

### 1.6. Profil módosítása funkció tesztelése
- Azonosító: TP-06
- Tesztesetek: TC-01
- Leírás: Profil módosítása funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot.
    2. lépés: Nyomjuk meg `Profil módosítása` gombot.
    3. lépés: A megjelent oldalon a `Felhasználónév` szövegbeviteli mezőbe írjunk be a `FELHASZNALONEV` szöveget.
    4. lépés: Az `Email-cím` szövegbeviteli mezőbe írjunk be a `EMAIL` szöveget.
    5. lépés: Az `Jelszó` szövegbeviteli mezőbe írjunk be a `JELSZO` szöveget.
    6. lépés: Nyomjuk meg `Mentés` gombot.
    7. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Átirányítás a profil oldalra és a régi adataink helyett az új adatok láthatóak`.

### 1.7. Profil törlése funkció tesztelése
- Azonosító: TP-07
- Tesztesetek: TC-01
- Leírás: Bejelentkezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot.
    3. lépés: Nyomjuk meg `Profil törlése` gombot.
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `A fiók törlésre kerül és átirányítódunk a regisztráció oldalra`.

## 2. Teszesetek (TC)

### 2.1. Regisztráció funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Regisztráció funkció tesztelése 
- Bemenet: `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = "teszt@elek.hu"; `JELSZO` = "almafa" ; `JELSZO2` = "almafa";
- Művelet: nyomjuk meg az `Regisztráció` gombot 
- Elvárt kimenet:  `Átirányítás a bejelentkezés oldalra`.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Regisztráció funkció tesztelése email megadása nélkül
- Bemenet: `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = ""; `JELSZO` = "almafa" ; `JELSZO2` = "";
- Művelet: nyomjuk meg az `Regisztráció` gombot 
- Elvárt kimenet:  `Az oldal visszajelez a kitöltetlen elemekről`.

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: Regisztráció funkció tesztelése különböző jelszavakkal
- Bemenet: `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = "teszt@elek.hu"; `JELSZO` = "almafa" ; `JELSZO2` = "alma";
- Művelet: nyomjuk meg az `Regisztráció` gombot
- Elvárt kimenet:  `Az oldal visszajelez, hogy nem egyeznek meg a jelszavak`.

#### 2.1.3. TC-04
- TP: TP-01
- Leírás: Regisztráció funkció tesztelése, már létező email címmel
- Bemenet: `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = "teszt@elek.hu"; `JELSZO` = "almafa" ; `JELSZO2` = "almafa";
- Művelet: nyomjuk meg az `Regisztráció` gombot
- Elvárt kimenet:  `Az oldal visszajelez, hogy már van ilyen email`.

### 2.2. Bejelentkezés funkció tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Bejelentkezés funkció tesztelése 
- Bemenet: `EMAIL` = "teszt@elek.hu"; `JELSZO` ="almafa";
- Művelet: nyomjuk meg az `Bejelentkezés` gombot 
- Elvárt kimenet:  `Átirányítás a főoldalra`.

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Bejelentkezés funkció tesztelése helyetelen jelszóval
- Bemenet: `EMAIL` = "teszt@elek.hu"; `JELSZO` ="alma";
- Művelet: nyomjuk meg az `Bejelentkezés` gombot 
- Elvárt kimenet:  `Az oldal visszajelez az invalid adatról`.

#### 2.2.3. TC-03
- TP: TP-02
- Leírás: Bejelentkezés funkció tesztelése, hiányzó jelszóval
- Bemenet: `EMAIL` = "teszt@elek.hu"; `JELSZO` ="";
- Művelet: nyomjuk meg az `Bejelentkezés` gombot 
- Elvárt kimenet:  `Az oldal visszajelez a kitöltetlen mezőről`.

### 2.3. Kijelentkezés funkció tesztesetei

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Kijelentkezés funkció tesztelése 
- Bemenet: Nincs;
- Művelet: nyomjuk meg az `Kijelentkezés` gombot 
- Elvárt kimenet:  `Átirányítás a bejelentkezés`.

### 2.4. Profil gomb tesztesetei

#### 2.4.1. TC-01
- TP: TP-04
- Leírás: Profil gomb tesztelése 
- Bemenet: Nincs;
- Művelet: nyomjuk meg az `Profil` gombot 
- Elvárt kimenet:  `Átirányítás a profil oldalra`.

### 2.5.Profil módosítása gomb tesztesetei

#### 2.5.1. TC-01
- TP: TP-05
- Leírás: Profil módosítása gomb tesztelése 
- Bemenet: Nincs;
- Művelet: nyomjuk meg az `Profil módosítása` gombot 
- Elvárt kimenet:  `Átirányítás a profil módosítása oldalra`.

### 2.6.Profil módosítása funkció tesztesetei

#### 2.6.1. TC-01
- TP: TP-06
- Leírás: Profil módosítása funkció tesztelése 
- Bemenet: `FELHASZNALONEV` = "Teszt Péter" ; `EMAIL` = "teszt@elek.com"; `JELSZO` = "alma" ;
- Művelet: nyomjuk meg az `Mentés` gombot 
- Elvárt kimenet:  `Átirányítás a bejelentkezés oldalra`.

### 2.7.Profil törlése funkció tesztesetei

#### 2.7.1. TC-01
- TP: TP-07
- Leírás: Profil törlése funkció  tesztelése 
- Bemenet: Nincs;
- Művelet: nyomjuk meg az `Profil törlése` gombot 
- Elvárt kimenet:  `A fiók törlésre kerül és átirányítódunk a regisztráció oldalra`.

## 3. Tesztriportok (TR)
    A tesztriport a 4. mérföldkőnél, a Tesztelés mappában található "Fehasznaloi_munkamenet (TR).md" néven.