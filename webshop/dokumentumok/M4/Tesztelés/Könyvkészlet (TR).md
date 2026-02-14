# Tesztjegyzőkönyv-`Könyvkészlet`

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `8.4.5 Könnyvkészlet kezelésének tesztelése` funkcióihoz készült. Felelőse: `Szabó Péter` 

1. Tesztriportok (TR)

### 1.1. Könyvek megjelenésének tesztelése
##### 1.1.1. A riporthoz tartozó teszteset: TC-01
    0. lépés: Megnyitottuk a `könyveink` oldalt
    1. lépés: Leellenőriztük sorban az adatok helyességét, miszerint:
    - Könyv képe
    - Könyv címe
    - Könyv írója
    - Könyv ára
    - Megnyitás gomb
    - Rendelési darabszám
    - Rendelés gomb a sorrend.

### 1.2. Könyvek készletének csökkenésének tesztelése
##### 1.2.1. A riporthoz tartozó teszteset: TC-01

-    1. lépés: Megnyitottuk a `könyveink` oldalt
    2. lépés: Megnyitottuk a `Figyelj Rám` könyvet
    3. lépés: Leellenőriztük, hogy `33` könyv van.
    3. lépés: Betettünk `1` példányt a kosárba
    4. lépés: Megnyomtuk a `rendelés leadása` gombot
    5. lépés: Megnyitottuk a `könyveink` oldalt
    6. lépés: Megnyitottuk a `Figyelj Rám` könyvet
    7. lépés: A `Raktáron elérhető darabszám` esetén `32` könyv elérhető.

##### 1.2.2. A riporthoz tartozó teszteset: TC-02
-    1. lépés: Megnyitottuk a `könyveink` oldalt
    2. lépés: Megnyitottuk a `Figyelj Rám` könyvet
    3. lépés: Leellenőriztük, hogy `32` könyv van.
    3. lépés: Betettünk `3` példányt a kosárba
    4. lépés: Megnyomtuk a `rendelés leadása` gombot
    5. lépés: Megnyitottuk a `könyveink` oldalt
    6. lépés: Megnyitottuk a `Figyelj Rám` könyvet
    7. lépés: A `Raktáron elérhető darabszám` esetén `29` könyv elérhető.

##### 1.2.3. A riporthoz tartozó teszteset: TC-03
-    1. lépés: Megnyitottuk a `könyveink` oldalt
    2. lépés: Megnyitottuk a `Figyelj Rám` könyvet
    3. lépés: Leellenőriztük, hogy `29` könyv van.
    3. lépés: Betettünk `333` példányt a kosárba
    4. lépés: Megnyomtuk a `rendelés leadása` gombot
    5. lépés: Felugrott a `Nincs elég könyv a raktárban!` szöveg
    5. lépés: Megnyitottuk a `könyveink` oldalt
    6. lépés: Megnyitottuk a `Figyelj Rám` könyvet
    7. lépés: A `Raktáron elérhető darabszám` nem csökkent.


### 1.3. Könyvek készletének csökkenésének tesztelése
##### 1.3.1. A riporthoz tartozó teszteset: TC-03
-    1. lépés: Megnyitottuk a `könyveink` oldalt adminként
    2. lépés: Megnyitottuk a `Figyelj Rám` könyvet
    3. lépés: Leellenőriztük, hogy `29` könyv van.
    3. lépés: Szerkesztettük a könyvet
    4. lépés: Növeltük 1 db-al a könyv számát
    5. lépés: Megnyomtuk a `könyv frissítése` gombot
    6. lépés: Hibás teszteset, nem folytatódik semmi!
