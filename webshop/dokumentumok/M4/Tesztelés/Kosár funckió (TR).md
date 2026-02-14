Tesztjegyzőkönyv - Kosár használatának tesztelése

Az alábbi tesztdokumentum a `Könyvesbolt` projekthez tartozó `8.3.12. Kosár funkció megvalósítása` funkcióihoz készült. Felelőse: `Egry-Szabó Réka`

1.Tesztriportok (TR)

   2.1. TR-1 : (TP-01) Kosárba helyezés

0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
1. lépés: A könyveink fülre megyünk.
2. lépés: Az egyik könyvnél a kosárba gombra kattintunk
3. lépés:Utána az 'Ugrás a kosárhoz' gombra kattintunk.

4. Elvárt eredmény: Az oldalon kijelzi a könyvet amelynél a kosárba gombra kattintottunk.
5. Kapott eredmény: A kosár oldalon megjelenik a könyv amit hozzáadtam.

   2.2. TR-2 : (TP-02) Kosárba helyezés a könyv oldalról

0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be és navigáljunk egy adott könyvre (legyen a Figyelj Rám).
1. lépés: Az 'darab' számbeviteli mezőbe írjuk be a mennyiséget (5).
2. lépés: A 'Kosárba' feliratú gombra kattintsunk rá, hogy hozzáadjuk a könyvünket a kosarunkhoz.

3. Elvárt eredmény: A kiválasztott könyv megfelelő darabszámmal és névvel megjelenik a kosár oldalon.
4. Kapott eredmény: A kiválasztott könyv megjelenik a kosárban, a sávban a darab szám (5)-öt ír, és az ár is egy könyvnek az ötszöröse.

    2.3. TR-3 : (TP-03) Kosárban lévő könyvek darabszámának növelése

0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be.
1. lépés: Navigáljunk egy adott könyvre, adjuk meg a darabszámot (5) és helyezzük a könyvet kosárba.
2. lépés: Az alkalmazás átírányit minket a kosár oldalára, ahol a kiválasztott könyv megfelelő darabszámmal megjelenik (5).
3. lépés: A könyv sávjának végén található egy '+' felirattal rendelkező gomb, nyomjunk rá.

4. Elvárt eredmény: A kosarunkban szereplő könyv darabszáma 1 értékkel növekedni fog.
5. Kapott eredmény: A könyv darabszáma egyel növekedett és az ára is ezzel megfelelően nőtt.

    2.4. TR-4 : (TP-04) Kosárban lévő könyvek darabszámának csökkentése

0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be.
1. lépés: Navigáljunk egy adott könyvre, adjuk meg a darabszámot(5) és helyezzük a könyvet kosárba.
2. lépés: Az alkalmazás átírányit minket a kosár oldalára, ahol a kiválasztott könyv megfelelő darabszámmal(5) megjelenik.
3. lépés: A könyv sávjának végén található egy '-' felirattal rendelkező gomb, nyomjunk rá.
    
4. Elvárt eredmény: A kosarunkban szereplő könyv  darabszáma 1 értékkel csökkeni fog.
5. Kapott eredmény: A kosarunkban szereplő könyv darabszáma (4) lett, és az ára is ennek megfelelően csökkent.

   2.4. TR-5 : (TP-05) Kosárban lévő könyvek darabszámának csökkentése

0. lépés: Nyissuk meg az alkalmazást, regisztráljunk vagy jelentkezzünk be.
1. lépés: Navigáljunk egy adott könyvre, adjuk meg a darabszámot(1) és helyezzük a könyvet kosárba.
2. lépés: Az alkalmazás átírányit minket a kosár oldalára, ahol a kiválasztott könyv megfelelő darabszámmal(5) megjelenik.
3. lépés: A könyv sávjának végén található egy '-' felirattal rendelkező gomb, nyomjunk rá.

4. Elvárt eredmény: A kosarunkban szereplő könyv kitörlődik onnan.
5. Kapott eredmény: A kosarunkban szereplő könyv eltűnt a kosarunkból.

    2.6. TR-6 : (TP-06) Kosárból törlés

0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be.
1. lépés: A könyveink fülre megyünk.
2. lépés: Az egyik könyvnél a kosárba gombra kattintunk
3. lépés: Utána az 'Ugrás a kosárhoz' gombra kattintunk.
4. lépés: A könyvvel egy sorban lávő törlés gombra kattintunk.

5. Elvárt eredmény: Az oldalon már nem mutatja a könyvet amelynél a törlés gombra kattintottunk.
6. Kapott eredmény: Az kosárból eltűnt a könyv amely mellett rákattintottam a törlésre.