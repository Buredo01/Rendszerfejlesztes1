# Tesztjegyzőkönyv-`Profil szerkesztése funkció`

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `8.4.11. Profil szerkesztése funkció (TR)` funkcióihoz készült. Felelőse: `Nagy Dávid` 

## 1. Teszteljárások (TP)

### 1.1. Profil szerkesztés funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: profil szerkesztés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és lépjünk a `Profil` oldalra
    1. lépés: Kattintsunk a `Profil módosítása` gombra
    2. lépés: Az `Adatok módosítása` oldalon adjuk meg az adatokat
    3. lépés: Kattintsunk a `Mentés` gombra

## 2. Teszesetek (TC)

### 2.1. Profil szerkesztés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: profil szerkesztés funkció tesztelése üres beviteli mezőkkel
- Bemenet: Minden beviteli mező üres.
- Művelet: `Mentés` gombra való kattintás.
- Elvárt kimenet: Az oldal visszajelez, hogy a beviteli mezőket ki kell tölteni.

### 2.1.2. TC-02
- TP: TP-01
- Leírás: profil szerkesztés funkció tesztelése rövid jelszóval
- Bemenet: Egy olyan jelszót adunk meg ami 6 karakternél rövidebb.
- Művelet: `Mentés` gombra való kattintás.
- Elvárt kimenet: Az oldal visszajelez, hogy a jelszónak minimum 6 karakter hosszúnak kell lennie.

### 2.1.3. TC-03
- TP: TP-01
- Leírás: profil szerkesztés funkció tesztelése nem megfelelő e-mail címmel
- Bemenet: Egy olyan e-mail címet adunk ami nem felel meg az e-mail formátumnak
- Művelet: `Mentés` gombra való kattintás
- Elvárt kimenet: Az oldal visszajelez, hogy az e-mail címnek a formátuma nem megfelelő

### 2.1.4. TC-04
- TP: TP-01
- Leírás: profil szerkesztés funkció tesztelése megfelelő értékekkel
- Bemenet: Minden beviteli mezőt megfelelően töltünk ki.
- Művelet: `Mentés` gombra való kattintás.
- Elvárt kimenet: Az oldal visszajelez, hogy a profil frissítése sikeres volt és a profil oldalon már a felhasználó a módosított adatait fogja látni.