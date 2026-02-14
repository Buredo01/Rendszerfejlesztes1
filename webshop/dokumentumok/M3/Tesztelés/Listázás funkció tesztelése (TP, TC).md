# Tesztjegyzőkönyv-`Könyvkészlet`

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `8.4.7 Listázás funkció tesztelése (TR)` funkcióihoz készült. Felelőse: `Dávid Dominika` 

## 1. Teszteljárások (TP)

### 1.1. Listázás funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: listázás funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és lépjünk a `Könyveink` oldalra
    1. lépés: A `Szűrő` szövegbeviteli mezőbe írjuk be a `SZÖVEG` szöveget.
    2. lépés: Válasszuk ki a legördülő mezőben a szűrési feltételt.
    3. lépés: Nyomjuk meg az `Szűrés` gombot 
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: szűrési feltételnek megfelelő könyvek kilistázása.

## 2. Teszesetek (TC)

### 2.1. Listázás funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: listázás funkció tesztelése 
- Bemenet: `Könyv`
- Művelet: legördülő mezőben `Kiadó` kiválasztása 
- Elvárt kimenet: nincs ilyen kiadó, nem listáz ki semmit

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: listázás funkció tesztelése 
- Bemenet: `A kívülálló`
- Művelet: legördülő mezőben `Cím` kiválasztása 
- Elvárt kimenet: `A kívülálló` című könyv megjelenítése

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: listázás funkció tesztelése 
- Bemenet: `Jennifer L Armentrout`
- Művelet: legördülő mezőben `Szerző` kiválasztása 
- Elvárt kimenet: `Jennifer L Armentrout` által írt könyvek kilistázása

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: listázás funkció tesztelése 
- Bemenet: `tanú`
- Művelet: legördülő mezőben `Cím` kiválasztása 
- Elvárt kimenet: Az összes könyv olyan, aminek címében szerepel a `tanú` kulcsszó

#### 2.1.5. TC-05
- TP: TP-01
- Leírás: listázás funkció tesztelése 
- Bemenet: `King`
- Művelet: legördülő mezőben `Szerző` kiválasztása 
- Elvárt kimenet: Az összes olyan írónak a könyve(i), akinek szerepel a nevében a `King`

#### 2.1.6. TC-06
- TP: TP-01
- Leírás: listázás funkció tesztelése 
- Bemenet: `Kossuth`
- Művelet: legördülő mezőben `Kiadó` kiválasztása 
- Elvárt kimenet: Az összes olyan könyv, aminek kiadónevében szerepel a `Kossuth`