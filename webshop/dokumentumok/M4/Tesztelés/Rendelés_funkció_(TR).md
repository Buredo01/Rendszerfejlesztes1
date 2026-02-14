# Tesztjegyzőkönyv-Rendelés funkcióhoz

Az alábbi tesztdokumentum a 2024_IB153l-10_A/Webshop projekthez tartozó, 8.4.10. pontban szereplő Rendelés használatához tartozó funkciók teszteléséhez készült, az M3-ban elkezdett tesztelési dokumentáció folytatása.
Felelős: Tóth Norbert

## 3. Tesztriportok (TR)

### 3.1. Rendelés leadása regisztrált fiókkal tesztesetei
##### 3.1.1. A riporthoz tartozó teszteset: TC-01
0. lépés: Regisztrált fiókkal tesztelek
1. lépés: DBINPUT=4
2. lépés: KONYVINPUT = "Figyelj rám"
3. lépés: SZALLITASINPUT="6723 Szeged Irinyi 217"
4. lépés: Rendelés gomb lenyomása
6. lépés: Visszajelzést kaptam, hogy sikeres rendelést adtam le

    
### 3.2.  Rendelés leadása bejelentkezés nélkül történő tesztesete
##### 3.2.1. A riporthoz tartozó teszteset: TC-01
0. lépés: Nem regisztrált fiókkal tesztelek
1. lépés: DBINPUT=4
2. lépés: KONYVINPUT = "Figyelj rám"
4. lépés: Kosárba gomb lenyomása
6. lépés: Át lettem irányítva a bejelentkezési oldalra.
    

### 3.3. Rendelés leadása, különböző adatokkal ellátott szállítási mezőhöz tartozó tesztesetek
##### 3.3.1. A riporthoz tartozó teszteset: TC-01
0. lépés: Regisztrált fiókkal tesztelek
1. lépés: DBINPUT=2
2. lépés: KONYVINPUT = "Figyelj rám"
3. lépés: SZALLITASINPUT="     "
4. lépés: Rendelés gomb lenyomása
6. lépés: Visszajelzést kaptam, hogy sikeres rendelést adtam le


##### 3.3.2. A riporthoz tartozó teszteset: TC-02
0. lépés: Regisztrált fiókkal tesztelek
1. lépés: DBINPUT=2
2. lépés: KONYVINPUT = "Figyelj rám"
3. lépés: SZALLITASINPUT="0101110011101110111"
4. lépés: Rendelés gomb lenyomása
6. lépés: Visszajelzést kaptam, hogy sikeres rendelést adtam le
    

### 3.4. Rendelés leadása, üres kosárral tesztesete
##### 3.4.1. A riporthoz tartozó teszteset: TC-01
0. lépés: Regisztrált fiókkal tesztelek
1. lépés: DBINPUT=0
2. lépés: KONYVINPUT = ""
3. lépés: SZALLITASINPUT="6700 SZTE TIK Ady tér 20"
4. lépés: Rendelés gomb lenyomása
6. lépés: Visszajelzést kaptam, hogy hiba történt a lekérdezésben.