# Tesztjegyzőkönyv-`Felhasználói munkamenet`

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `Felhasználói munkamenet` funkcióihoz készült. Felelőse: `Kovács Máté`

## 1. Tesztriportok (TR)

### 1.1. Regisztráció funkció tesztelése
##### 1.1.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Megnyitottuk az alkalmazást és rákattintottunk a "Regisztráció" gombra
    1. lépés: Megadtuk az adatokat : `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = "teszt@elek.hu"; `JELSZO` = "almafa" ; `JELSZO2` = "almafa";
    2. lépés Rákattintottunk a "Regisztráció" gombra

    Várt eredmény: Átirányítás a bejelentkezés oldalra
    Eredmény: Átirányítás a bejelentkezés oldalra

##### 1.1.2. A riporthoz tartozó teszteset: TC-02
    0. lépés: Megnyitottuk az alkalmazást és rákattintottunk a "Regisztráció" gombra
    1. lépés: Megadtuk az adatokat :
    `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = ""; `JELSZO` = "almafa" ; `JELSZO2` = "";
    2. lépés Rákattintottunk a "Regisztráció" gombra
    
    Várt eredmény: Az oldal visszajelez a kitöltetlen elemről
    Eredmény: Az oldal visszajelez a kitöltetlen elemről

##### 1.1.3. A riporthoz tartozó teszteset: TC-03
    0. lépés: Megnyitottuk az alkalmazást és rákattintottunk a "Regisztráció" gombra
    1. lépés: Megadtuk az adatokat :
    `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = "teszt@elek.hu"; `JELSZO` = "almafa" ; `JELSZO2` = "alma"
    2. lépés Rákattintottunk a "Regisztráció" gombra
    
    Várt eredmény: Az oldal visszajelez, hogy nem egyeznek meg a jelszavak
    Eredmény: Az oldal visszajelez, hogy nem egyeznek meg a jelszavak

##### 1.1.4. A riporthoz tartozó teszteset: TC-04
    0. lépés: Megnyitottuk az alkalmazást és rákattintottunk a "Regisztráció" gombra
    1. lépés: Megadtuk az adatokat :
    `FELHASZNALONEV` = "Teszt Elek" ; `EMAIL` = "teszt@elek.hu"; `JELSZO` = "almafa" ; `JELSZO2` = "almafa"
    2. lépés Rákattintottunk a "Regisztráció" gombra
    
    Várt eredmény:Az oldal visszajelez, hogy már van ilyen email
    Eredmény: Az oldal visszajelez, hogy már van ilyen email

### 1.2. Bejelentkezés funkció tesztelése
##### 1.2.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Megnyitottuk az alkalmazást és beregisztáltunk, majd átnavigálunk a bejelentkezésre.
    1. lépés: Megadtuk az adatokat : 
    `EMAIL` = "teszt@elek.hu"; `JELSZO` ="almafa";
    2. lépés Rákattintottunk a "Bejelentkezés" gombra

    Várt eredmény: Átirányítás a főoldalra
    Eredmény: Átirányítás a főoldalra

##### 1.2.2. A riporthoz tartozó teszteset: TC-02
     0. lépés: Megnyitottuk az alkalmazást és beregisztáltunk, majd átnavigálunk a bejelentkezésre.
    1. lépés: Megadtuk az adatokat : 
    `EMAIL` = "teszt@elek.hu"; `JELSZO` ="alma";
    2. lépés Rákattintottunk a "Bejelentkezés" gombra
    
    Várt eredmény: Az oldal visszajelez az invalid adatról
    Eredmény: Az oldal visszajelez az invalid adatról

##### 1.1.3. A riporthoz tartozó teszteset: TC-03
    0. lépés: Megnyitottuk az alkalmazást és beregisztáltunk, majd átnavigálunk a bejelentkezésre.
    1. lépés: Megadtuk az adatokat : 
    `EMAIL` = "teszt@elek.hu"; `JELSZO` ="";
    2. lépés Rákattintottunk a "Bejelentkezés" gombra
    
    Várt eredmény: Az oldal visszajelez a kitöltetlen mezőről
    Eredmény: Az oldal visszajelez a kitöltetlen mezőről

### 1.3. Kijelentkezés funkció tesztelése 
##### 1.3.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg az `Kijelentkezés` gombot. 
   
    Várt eredmény: Átirányítás a bejelentkezés oldalra
    Eredmény: Átirányítás a bejelentkezés oldalra


### 1.4. Profil gomb tesztelése
##### 1.4.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot.

    Várt eredmény: `Átirányítás a profil oldalra` és megjeleníti a felhasználói adatokat.
    Eredmény: `Átirányítás a profil oldalra` és megjeleníti a felhasználói adatokat.

### 1.5. Profil módosítása gomb tesztelése
##### 1.5.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot.
    2. lépés: Nyomjuk meg `Profil módosítása` gombot.

    Elvárt eredmény: `Átirányítás a profil módosítása oldalra`.
    Eredmény: `Átirányítás a profil módosítása oldalra`.

### 1.6. Profil módosítása funkció tesztelése
##### 1.6.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot.
    2. lépés: Nyomjuk meg `Profil módosítása` gombot.
    3. lépés: Írjuk be az adatokat:
     `FELHASZNALONEV` = "Teszt Péter" ; `EMAIL` = "teszt@elek.com"; `JELSZO` = "alma" ;
    4. lépés: Nyomjuk meg `Mentés` gombot.
    
    Elvárt eredmény: Átirányítás a bejelentkezés oldalra.
    Eredmény: Átirányítás a bejelentkezés oldalra.

### 1.7. Profil törlése funkció tesztelése
##### 1.7.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: Nyomjuk meg a `Profil` gombot.
    3. lépés: Nyomjuk meg `Profil törlése` gombot.

    Elvárt eredmény: `A fiók törlésre kerül és átirányítódunk a regisztráció oldalra`.
    Eredmény: `A fiók törlésre kerül és átirányítódunk a regisztráció oldalra`.