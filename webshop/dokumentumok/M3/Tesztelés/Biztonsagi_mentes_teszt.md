# Tesztjegyzőkönyv-`Biztonsági mentés`

Az alábbi tesztdokumentum a `Webshop` projekthez tartozó `8.3.19 Biztonsági mentés automatikus létrehozása` funkcióihoz készült. Felelőse: `Nagy Dávid` 

## 1. Teszteljárások (TP)

### 1.1. Biztonsági mentés létrehozása 
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: készítünk egy mentést (jelen pillanatban branch) a projektről
    0. lépés: Nyissuk meg a gitlabot, majd nyissuk meg src-t és azon belül kattintsunk a "New Branch" gombra
    1. lépés: Nevezzük el a branchünket (jelen pillanatban biztonsagimentes lesz a neve)
    2. lépés: Okézzuk le és így létrejön a branchünk.

## 2. Tesztesetek (TC)

### 2.1. Branch létrejötte

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: branch ellenörzés
    bemenet: egy új branch ami a projekt jelenlegi verzióját tárolja
    kimenet: egy új branch
- Elvárt eredmény: Az új brancünkön a projekt jelenlegi stabil verzióját tartalmazz amivel egy későbbi esetleg bekövetkező olyan esett miatt muszáj lesz visszaállnunk egy stabil verzióra.

