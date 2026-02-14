# Tesztjegyzőkönyv-`Könyvkészlet`

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `8.4.5 Könnyvkészlet kezelésének tesztelése` funkcióihoz készült. Felelőse: `Szabó Péter` 

## 1. Teszteljárások (TP)

### 1.1. Könyvek megjelenésének tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: A könyvek megjelenítésének helyességének tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a `könyveink` oldalt
    1. lépés: Ellenőrizzük le, hogy helyes adatokkal jelennek-e meg a könyvek. A helyes sorrend a következő:
    - Könyv képe
    - Könyv címe
    - Könyv írója
    - Könyv ára
    - Megnyitás gomb
    - Rendelési darabszám
    - Rendelés gomb

### 1.2. Könyvek készletének csökkenésének tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: A könyvek darabszámának csökkenésének ellenőrzése
    0. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a `könyveink` oldalt
    1. lépés: Nyissunk meg egy tetszőleges könyvet.
    2. lépés: Ellenőrizzük le hány darab könyv elérhető.
    3. lépés: Tegyünk kosárba a könyvből 1 példányt a `kosárba` gombbal
    4. lépés: Írjunk be szállítási címet
    5. lépés: Adjuk le a rendelést a `rendelés leadása` gombbal
    6. lépés: Nyissuk meg a `könyveink` oldalt
    7. lépés: Nyissuk meg az előbb megnyitott könyvet
    8. lépés: Ellenőrizzük, hogy csökkent-e a könyv darabszáma 1-el.

### 1.3. Könyvek készletének növelésének tesztelése
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: A könyvek darabszámának növelésének ellenőrzése
    0. lépés: Adminként, vagy moderátorkéntNyissuk meg az alkalmazást, és nyissuk meg a `könyveink` oldalt
    1. lépés: Nyissunk meg egy tetszőleges könyvet.
    2. lépés: Ellenőrizzük le hány darab könyv elérhető.
    3. lépés: Szerkesszük a könyvet a toll gombbal.
    4. lépés: Növeljük a `darab száma` beviteli mezőt. // Ez itt nem működik //
    5. lépés: Kattintsunk a `könyv frissítése` gombra.
    6. lépés: Nyissuk meg ugyanezt a könyvet.



## 2. Teszesetek (TC)

### 2.1. Könyvek megjelenésének tesztelése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Validáljuk a könyvek megjelenését
1. Nyissuk meg a `könyveink` oldalt.
2. Nézzük meg egy tetszőleges könyvnél, hogy a megjelenő adatok fentről lefelé:
    - Könyv képe
    - Könyv címe
    - Könyv írója
    - Könyv ára
    - Megnyitás gomb
    - Rendelési darabszám
    - Rendelés gomb
- Elvárt esemény: A könyveknél megjelenő adatok a felsorolt módon jelennek meg.

### 2.2. Könyvek készletének csökkenésének tesztelése

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Egy könyv vásárlása esetén a könyvkészlet csökkenése
    1. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a `könyveink` oldalt
    2. lépés: Nyissunk meg a `Figyelj Rám` könyvet
    3. lépés: Ellenőrizzük le hány darab könyv elérhető
    4. lépés: Tegyünk kosárba a könyvből 1 példányt a `kosárba` gombbal
    5. lépés: Írjunk be szállítási címet
    6. lépés: Nyomjuk meg az `rendelés leadása` gombot 
    7. lépés: Nyissuk meg a `könyveink` oldalt
    8. lépés: Nyissuk meg a `Figyelj Rám` könyvet
    9. lépés: Ellenőrizzük, hogy csökkent-e a könyv darabszáma 1-el
- Elvárt esemény: a `Figyelj Rám` könyvnél a `Raktáron elérhető darabszám` rész csökkent `n-1` -el

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Több könyv vásárlása esetén a könyvkészlet csökkenése
    1. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a `könyveink` oldalt
    2. lépés: Nyissunk meg a `Figyelj Rám` könyvet
    3. lépés: Ellenőrizzük le hány darab könyv elérhető
    4. lépés: Tegyünk kosárba a könyvből 3 példányt a `kosárba` gombbal
    5. lépés: Írjunk be szállítási címet
    6. lépés: Nyomjuk meg az `rendelés leadása` gombot 
    7. lépés: Nyissuk meg a `könyveink` oldalt
    8. lépés: Nyissuk meg a `Figyelj Rám` könyvet
    9. lépés: Ellenőrizzük, hogy csökkent-e a könyv darabszáma 3-al
- Elvárt esemény: a `Figyelj Rám` könyvnél a `Raktáron elérhető darabszám` rész csökkent `n-3` -el

#### 2.2.3. TC-03
- TP: TP-02
- Leírás: Több könyv rendelése, mint amennyi a raktáron van
    1. lépés: Nyissuk meg az alkalmazást, és nyissuk meg a `könyveink` oldalt
    2. lépés: Nyissunk meg a `Figyelj Rám` könyvet
    3. lépés: Ellenőrizzük le hány darab könyv elérhető
    4. lépés: Tegyünk kosárba a könyvből több példányt, mint amennyi elérhető a `kosárba` gombbal
    5. lépés: Írjunk be szállítási címet
    6. lépés: Nyomjuk meg az `rendelés leadása` gombot 
    7. lépés: Ellenőrizzük le, hogy felugrik-e a `Nincs elég könyv a raktárban!` szöveg
    8. lépés: Nyissuk meg a `könyveink` oldalt
    9. lépés: Nyissuk meg a `Figyelj Rám` könyvet
    10. lépés: Ellenőrizzük, hogy csökkent-e a könyv darabszáma.
- Elvárt esemény: a `Figyelj Rám` könyvnél a `Raktáron elérhető darabszám` rész nem csökkent

### 2.3. Könyvek készletének növelésének tesztelése

### 2.3.1 TC-01
- Azonosító: TP-03
- Leírás: A könyvek darabszámának növelésének ellenőrzése
    0. lépés: Adminként, vagy moderátorként Nyissuk meg az alkalmazást, és nyissuk meg a `könyveink` oldalt
    1. lépés: Nyissunk meg a `Figyelj Rám` könyvet
    2. lépés: Ellenőrizzük le hány darab könyv elérhető.
    3. lépés: Szerkesszük a könyvet a toll gombbal.
    4. lépés: Növeljük a `darab száma` beviteli mezőt 1-el. // Ez itt nem működik //
    5. lépés: Kattintsunk a `könyv frissítése` gombra.
    6. lépés: Nyissunk meg a `Figyelj Rám` könyvet
    Elvárt esemény: a `Figyelj Rám` könyvnél a `Raktáron elérhető darabszám` rész nőtt 1 db-al.
