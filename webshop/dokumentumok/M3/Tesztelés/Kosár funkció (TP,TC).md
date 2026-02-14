Tesztjegyzőkönyv - Kosár használatának tesztelése

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `8.3.12. Kosár funkció megvalósítása` funkcióihoz készült. Felelőse: `Egry-Szabó Réka` 

1. Teszteljárások (TP)

    1.1. Kosárba helyezés

Azonosító: TP-01
Tesztesetek: TC-01
Leírás: Kosárba helyezés funkció tesztelése

    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: A könyveink fülre megyünk.
    2. lépés: Az egyik könyvnél a kosárba gombra kattintunk.
    3. lépés: Utána az 'Ugrás a kosárhoz' gombra kattintunk.
    Elvárt eredmény: Az oldalon kijelzi a könyvet amelynél a kosárba gombra kattintottunk.

    1.2. Kosárba helyezés a könyv oldalról

Azonosító: TP-02
Tesztesetek: TC-02
Leírás: Kosárba helyezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be és navigáljunk egy adott könyvre (legyen a Figyelj Rám).
    1. lépés: Az 'darab' számbeviteli mezőbe írjuk be a mennyiséget.
    2. lépés: A 'Kosárba' feliratú gombra kattintsunk rá, hogy hozzáadjuk a könyvünket a kosarunkhoz.
    Elvárt eredmény: A kiválasztott könyv megfelelő darabszámmal és névvel megjelenik a kosár oldalon.

    
     1.3. Kosárban lévő könyvek darbaszámának növelése

Azonosító: TP-3
Tesztesetek: TC-03
Leírás: Kosárban lévő könyvek darbaszámának növelésért felelős funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be.
    1. lépés: Navigáljunk egy adott könyvre, adjuk meg a darabszámot és helyezzük a könyvet kosárba.
    2. Utána az 'Ugrás a kosárhoz' gombra kattintunk.
    2. lépés: A kosár oldalán a kiválasztott könyv megfelelő darabszámmal megjelenik.
    3. lépés: A könyv sávjának végén található egy '+' felirattal rendelkező gomb, nyomjunk rá.
    Elvárt eredmény: A kosarunkban szereplő könyv darabszáma 1 értékkel növekedni fog.

    1.4. Kosárban lévő könyvek darbaszámának csökkentése

Azonosító: TP-04
Tesztesetek: TC-04
Leírás: Kosárban lévő könyvek darbaszámának csökkentésért felelős funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be.
    1. lépés: Navigáljunk egy adott könyvre, adjuk meg a darabszámot és helyezzük a könyvet kosárba.
    2. lépés: Utána az 'Ugrás a kosárhoz' gombra kattintunk.
    3. lépés: A kosár oldalon a kiválasztott könyv megfelelő darabszámmal megjelenik. 
    4. lépés: A könyv sávjának végén található egy '-' felirattal rendelkező gomb, nyomjunk rá.
    Elvárt eredmény: A kosarunkban szereplő könyv  darabszáma 1 értékkel csökkeni fog.

    1.5. Kosárból törlés

Azonosító: TP-05
Tesztesetek: TC-05
Leírás: Kosárból történő törlés tesztelése

    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
    1. lépés: A könyveink fülre megyünk.
    2. lépés: Az egyik könyvnél a kosárba gombra kattintunk
    3. lépés: Utána az 'Ugrás a kosárhoz' gombra kattintunk.
    4. lépés: A könyvvel egy sorban lávő törlés gombra kattintunk.
    Elvárt eredmény: Az oldalon már nem mutatja a könyvet amelynél a törlés gombra kattintottunk.


2. Teszesetek (TC)

    2.1. (TP-01) Kosárba helyezés
    
TP: TP-01
Leírás: A kosárba helyez egy könyvet a bejelentkezett felhasználó a könyveink oldalról
Bemenet: Könyv hozzáadása a kosárhoz
Művelet: Hozzá adjuk egy gomb segítségével a könyvet a kosárhoz
Elvárt kimenet: A kosár oldalon megjelenik az általunk hozzá adott könyv

    2.2. (TP-02) Kosárba helyezés a könyv oldalról

TP: TP-02
Leírás: A kosárba helyez egy könyvet a felhasználó a könyv saját oldaláról a kívánt mennyiséggel.
Bemenet: Könyv hozzáadása a kosárhoz a megfelelő mennyiségi mező kitöltésével.
Művelet: A megadott mennyiséggel hozzáadjuk a könyvet a kosárhoz a „Kosárba” gomb segítségével.
Elvárt kimenet: A kosár oldalon megjelenik a könyv, a kívánt mennyiséggel és pontos könyvcímmel.

    2.3. (TP-03) Kosárban lévő könyvek darabszámának növelése

TP: TP-03
Leírás: Növeli a kosárban lévő könyv darabszámát a „+” gomb segítségével.
Bemenet: A kosárban lévő könyv, amelynek darabszámát növelni szeretnénk.
Művelet: A kosár oldalon rákattintunk a könyv mellett található „+” gombra.
Elvárt kimenet: A kosárban lévő könyv darabszáma 1-gyel növekszik.

    2.4. (TP-04) Kosárban lévő könyvek darabszámának csökkentése

TP: TP-04
Leírás: Csökkenti a kosárban lévő könyv darabszámát a „–” gomb segítségével.
Bemenet: A kosárban lévő könyv, amelynek darabszámát csökkenteni szeretnénk.
Művelet: A kosár oldalon rákattintunk a könyv mellett található „–” gombra.
Elvárt kimenet: A kosárban lévő könyv darabszáma 1-gyel csökken.

    2.5. (TP-05) Kosárban lévő könyvek darabszámának csökkentése

TP: TP-04
Leírás: Csökkenti a kosárban lévő könyv darabszámát a „–” gomb segítségével.
Bemenet: A kosárban lévő könyv, amelynek darabszámát csökkenteni szeretnénk, és csak egy darab könyv van a kosárban.
Művelet: A kosár oldalon rákattintunk a könyv mellett található „–” gombra.
Elvárt kimenet: A kosárban lévő könyv darabszáma 1-gyel csökken, így az 1-ről csökkentve kitörlődik a kosárból.

    2.5. (TP-05) Kosárból törlés

TP: TP-05
Leírás: Törli a kosárban lévő könyvet a felhasználó a törlés gomb segítségével.
Bemenet: Egy könyv a kosárban, amelyet törölni kívánunk.
Művelet: A könyv mellett található „törlés” gombra kattintunk a kosár oldalon.
Elvárt kimenet: A kiválasztott könyv eltűnik a kosárból, így a kosár oldalon már nem jelenik meg.