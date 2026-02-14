# Tesztjegyzőkönyv-`Értékelés`

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `8.4.8 Értékelés készítés tesztelése (TR)` funkcióihoz készült. Felelőse: `Farkas Liliána` 

## 1. Teszteljárások (TP)

### 1.1. Listázás funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04, TC-05
- Leírás: értékelés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és lépjünk a `Könyveink` oldalra
    1. lépés: Nyissunk meg egy általunk választott könyvet a =megnyitás` gombbal.
    2. lépés: Tekerjünk le az oldal alján található `értékelés írása` szövegdobozhoz.
    3. lépés: Írjuk meg a vélemányunket a kiválasztott könyvről.
    4. lépés: Küldjük el a véleményt a vélemény `elküldése` gommbal.

## 2. Teszesetek (TC)

### 2.1. Értékelés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: vélemény írása tesztelése 
- Bemenet: `Ez egy szuper könyv volt.` 5 csillag megjelölésével
- Művelet: vélemény beküldése
- Elvárt kimenet: Az értékelés elbírálásra vár.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: csillagozás funkció tesztelése
- Bemenet: `5 csillag` 
- Művelet: ahány csillagot szeretnénk adni, arra a csillagra kattintunk
- Elvárt kimenet: 5 csillag megjelenése

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: vélemény írása tesztelése 
- Bemenet: ` `
- Művelet: vélemény beküldése
- Elvárt kimenet: Értékelje a könyvet szövegesen!

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: szöveges értékelés csillagozás nélkül
- Bemenet: `csak szöveg`
- Művelet: csak szöveg beküldése
- Elvárt kimenet: Értékelje a könyvet csillaggal!

#### 2.1.5. TC-05
- TP: TP-01
- Leírás: csillagos értékelés szöveg nélkül
- Bemenet: `csak csillagozás`
- Művelet: csak csillag beküldése
- Elvárt kimenet: Értékelje a könyvet szövegesen!