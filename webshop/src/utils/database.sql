/*Sessiontábla*/
/* Session tábla létrehozása és beállítás UTF-8 magyar kódolásra */
CREATE DATABASE konyvesboltSession;

/* Konyvesbolt adatbázis létrehozása és beállítás UTF-8 magyar kódolásra */
CREATE DATABASE konyvesbolt CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE konyvesbolt;

CREATE TABLE Pozicio (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     megnevezes varchar(255) UNIQUE NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE Felhasznalo (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nev varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    jelszo varchar(255) NOT NULL,
    pozicio_id INT NOT NULL DEFAULT 0,
    kivansag_lista TEXT DEFAULT NULL,
    FOREIGN KEY (pozicio_id) REFERENCES Pozicio(id)
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE Kiado (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     megnevezes varchar(255) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE Mufaj (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     megnevezes varchar(255) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE Konyv (
    ISBN varchar(255) PRIMARY KEY NOT NULL,
    cim varchar(255) NOT NULL,
    szerzo varchar(255) NOT NULL,
    megjelenes_eve INT NOT NULL DEFAULT 0,
    ar INT NOT NULL DEFAULT 0,
    darab_szam INT NOT NULL DEFAULT 0,
    borito TEXT DEFAULT NULL,
    kiado_id INT NOT NULL DEFAULT 0,
    leiras TEXT DEFAULT NULL,
    FOREIGN KEY (kiado_id) REFERENCES Kiado(id) ON DELETE CASCADE
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE KonyvMufajKapcsolat(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    konyv_id varchar(255) NOT NULL,
    mufaj_id INT NOT NULL,
    FOREIGN KEY (konyv_id) REFERENCES Konyv(ISBN) ON DELETE CASCADE,
    FOREIGN KEY (mufaj_id) REFERENCES Mufaj(id) ON DELETE CASCADE
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE Ertekeles (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    konyv_id varchar(255) NOT NULL,
    felhasznalo_id INT NOT NULL,
    szoveg varchar(255) NOT NULL DEFAULT "",
    csillag INT NOT NULL DEFAULT 0,
    statusz BOOLEAN DEFAULT 0,
    FOREIGN KEY (konyv_id) REFERENCES Konyv(ISBN) ON DELETE CASCADE,
    FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(id) ON DELETE CASCADE
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE Kosar(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    felhasznalo_id INT NOT NULL,
    konyv_id varchar(255) NOT NULL,
    darab INT NOT NULL DEFAULT 1,
    FOREIGN KEY (konyv_id) REFERENCES Konyv(ISBN),
    FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(id) ON DELETE CASCADE
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE Rendeles(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    felhasznalo_id INT NOT NULL,
    rendeles_datuma DATE NOT NULL,
    konyvek TEXT NOT NULL,
    szallitasi_cim TEXT NOT NULL,
    FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(id) ON DELETE CASCADE
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;


INSERT INTO `pozicio` (`id`, `megnevezes`) VALUES 
('1', 'Felhasználó'),
('2', 'Admin'),
('3', 'Moderátor');


INSERT INTO `kiado` (`id`, `megnevezes`) VALUES 
 ('1', 'Kossuth Kiadó'),
 ('2', 'Könyvmolyképző kiadó kft.'),
 ('3', 'Európa Könyvkiadó'),
 ('4', 'Animus Kiadó'),
 ('5', 'Álomgyár Kiadó'),
 ('6', 'Maxim könyvkiadó'),
 ('7', 'Kolibri könyvkiadó'),
 ('8', 'Maxim könyvkiadó'),
 ('9', 'Anassa könyvek'),
 ('10', 'Rainy Days'),
 ('11', 'Magnólia Kiadó'),
 ('12', 'Pioneer Books Könyvkiadó kft.');

INSERT INTO `mufaj`(`id`, `megnevezes`) VALUES 
(1,"Romantikus"),
(2,"Fantasy"),
(3,"Horror"),
(4,"Pszichothriller"), 
(5,"Ifjúsági irodalom"), 
(6,"Skandináv krimi"), 
(7,"Krimi"),
(8,"Dark Romance");


INSERT INTO konyv (ISBN, cim, szerzo, megjelenes_eve, kiado_id, ar, darab_szam,borito, leiras) 
VALUES
('9789635619802', 'Az aranyozott csontkorona (Vér és hamu 3.)', 'Jennifer L Armentrout', 2021, 1, 5899, 20,'/img/book_covers_tmp/az_aranyozott_csontkorona.jpg
','Ő VOLT AZ ÁLDOZAT ÉS A TÚLÉLŐ... Poppy álmodni sem mert volna róla, hogy ekkora szerelemre lel Casteel királyfi mellett. Élvezni szeretné a boldogságát, azonban először ki kell szabadítaniuk Casteel bátyját, majd megkeresni Poppyét. Veszélyes küldetésük következményei olyan messzire nyúlhatnak, amilyenről egyikük sem álmodott. Mert Poppy a Kiválasztott, az Áldott, ő Atlantia valódi uralkodója. Az istenek királyának vére folyik az ereiben. AZ ELLENSÉG ÉS A HARCOS... Poppy mindig arra vágyott, hogy a saját életét irányíthassa, nem másokét. Most azonban döntenie kell, hogy lemond arról, ami megilleti, vagy megszerzi az aranyozott koronát, és a hús és tűz királynőjévé válik. Ám ahogy a királyságok sötét bűnei és véráztatta titkai napvilágra kerülnek, felébred egy rég elfeledett erő, és valódi veszéllyel fenyeget. És őket semmi nem állíthatja meg, hogy megakadályozzák, hogy a korona valaha is Poppy fejére kerüljön. A SZERELMES ÉS A TÁRS... Azonban a legnagyobb fenyegetés rájuk és Atlantiára a távoli Nyugaton várakozik. A vér és hamu királynőjének megvannak a saját tervei, és több száz éve csak arra vár, hogy végre megvalósítsa őket. Poppynak és Casteelnek meg kell próbálnia a lehetetlent - elutazni az istenek földjére, hogy felébresszék magát a királyt. Ahogy fény derül a megdöbbentő titkokra és a legdurvább árulásokra, ellenségek bukkannak fel, hogy megingassák mindazt, amiért ok ketten harcolnak. Ők pedig megtapasztalják, hogy meddig hajlandók elmenni a népükért - és egymásért. ÉS POPPYBÓL KIRÁLYNŐ LESZ...'),
('9789635619800','Vérből és hamuból (Vér és hamu 1.)','Jennifer L Armentrout',2020,2,5999,20,'/img/book_covers_tmp/verbol_es_hamubol.jpg','EGY SZŰZ... Egy új korszak hajnalán, a születésekor kiválasztották Poppyt, ezért az élete sosem volt igazán a sajátja. A Szűz élete magányos. Sohasem érinthetik meg. Sohasem nézhetnek rá. Sohasem szólhatnak hozzá. Sohasem tapasztalhatja meg az élvezeteket. Ám ő Felemelkedésének napjára várva szívesebben tölti idejét a testőreivel, és inkább harcol a gonosszal, ami elvette tőle a családját, mint hogy arra készüljön, hogy az istenek méltónak találják. De ez a döntés sem volt sohasem az övé. EGY KÖTELESSÉG... Az egész királyság jövőjének terhe Poppy vállát nyomja, és ez olyasvalami, amire egyáltalán nem biztos, hogy vágyik. Hiszen egy Szűznek is van szíve. És lelke. És vágyai. És amikor Hawke, az arany szemű őr felesküszik rá, hogy biztosítja a Felemelkedését, így belép az életébe, a végzet és a kötelesség összekuszálódik a sóvárgással. Hawke felkorbácsolja a lány indulatait, elülteti benne a kételyt azzal szemben, amiben eddig hitt, és megkísérti azzal, ami tilos. EGY KIRÁLYSÁG... Egy bukott királyság, amit magára hagytak az istenek, és amitől rettegnek a halandók, ismét feltámad, hogy erőszakkal és bosszúval mindenáron visszaszerezze, ami egykor az övé volt. És ahogy az átkozottak árnyéka egyre közelebb húzódik, a tiltott és a helyes közötti határvonal is elmosódik. Poppy nem csupán a szívét kockáztatja, hanem azt is, hogy méltatlannak találják az istenek, ráadásul az élete is veszélybe kerül, amikor minden véres fenyegetés, ami egyben tartja a világát, kezdi felfedni magát.'
),
(  '9789635619801', 'Hús és tűz királysága (Vér és hamu 2.)', 'Jennifer L Armentrout', 2020, 1, 5499, 20, '/img/book_covers_tmp/hus_es_tuz_kiralysaga.jpg',   'EGY ÁRULÁS… Minden, amiben Poppy valaha hitt, hazugság, beleértve a férfit is, akibe beleszeretett. És nem igazán tudja, ki is ő valójában a Szűz fátyla nélkül. Azt viszont tudja, hogy semmi nem jelent rá akkora veszélyt, mint ő. A Sötét Szerzet. Atlantia királyfija. Aki azt akarja, hogy Poppy küzdjön ellene, és ez egy olyan parancs, aminek ezer örömmel engedelmeskedik. Lehet, hogy elrabolta, de sosem lesz az övé. EGY DÖNTÉS… Casteel Da’Neer hazugságai ugyanolyan megnyerőek, mint az érintése. Az igazságai pedig olyan érzékiek, mint a harapása. De Poppy csak rajta keresztül kaphatja meg, amit akar – hogy megtalálja a bátyját, Iant. Az, hogy együttműködik Casteellel, ahelyett, hogy ellene dolgozna, kockázatot rejt magában. A királyfi mégis minden lélegzetvételével kísérti őt, és azt kínálja fel, amire a lány mindig is vágyott. És Poppy túlságosan vakmerő, túlságosan kiéhezett ahhoz, hogy ellenálljon a kísértésnek. EGY TITOK… Azonban a nyugtalanság egyre fokozódik Atlantiában, miközben a királyfi hazatérését várják. Egyre többet suttognak háborúról, és Poppy az események kellős közepébe csöppent. Sötét titkok törnek felszínre, amelyek beszivárogtak a két királyság véráztatta bűneibe, és mindkét királyság bármit megtenne azért, hogy rejtve maradjon az igazság. De amikor megrázkódik a föld, és az ég vérezni kezd, lehet, hogy már túl késő.'),
('9789635979417', 'Két királynő háborúja (Vér és hamu 4.)', 'Jennifer L Armentrout', 2022, 2, 7999, 15,'/img/book_covers_tmp/ket_kiralyno_haboruja.jpg', 'A háború csak a kezdet... AZ ARANYKORONÁK KÉTSÉGBEESÉSÉBŐL Casteel pontosan tudja, hogy a Vérkirálynőnél nincs alattomosabb és gonoszabb a birodalomban. Azonban a megrázó felfedezésekre még ő sem tudott felkészülni. Már-már elképzelhetetlen a Vérkirálynő gaztetteinek mértéke. HALANDÓ TESTBE SZÜLETVE Poppyt semmit sem akadályozhatja meg abban, hogy kiszabadítsa a királyát, és mindent elpusztítson, ami a Vérkirálysághoz kötődik. Az Élet Ősi Lényének testőrei minden erejükkel támogatják, a vérfarkasok mögötte állnak. Poppynak meg kell győznie az atlantiai tábornokokat, hogy az ő elképzelései szerint cselekedjenek, és ezúttal nem fújhatnak visszavonulót. Nem, amíg őbenne él a remény, hogy olyan jövőt építsen, amiben mindkét királyság békében élhet egymás mellett. EGY HATALMAS, ŐSI ERŐ EMELKEDIK FEL... Poppynak és Casteelnek együtt kell kiállniuk a szerelmükért, a szeretteikért, és megóvni a védteleneket. Régi és új hagyományok közepette. Azonban ahhoz, hogy véget vessen a Vérkirálynő üzelmeinek, a lánynak talán épp azzá kell válnia, amivé a prófécia jövendölte, és amitől a legjobban fél... A HALÁL ÉS PUSZTÍTÁS ELŐHÍRNÖKE'),
('9789635043460', 'A kívülálló', 'Stephen King', 2018, 3, 5999, 10,'/img/book_covers_tmp/a_kivulallo.jpg', 'A Mr. Mercedes - Aki kapja, marja - Agykontroll trilógia után Stephen King - vagy ahogy rajongói világszerte emlegetik: a Mester - ismét egy hátborzongató thrillerrel hozza rá olvasóira az álmatlanságot. Az oklahomai kisváros, Flint City egyik parkjában brutálisan megerőszakolt, meggyilkolt és megcsonkított holttestre bukkannak. Az áldozat Frank Peterson, egy fehér fiúgyermek, életkora 11 év. A felfoghatatlan tett elkövetője pedig szemtanúk állítása és több, cáfolhatatlan bizonyíték szerint Terry Maitland gimnáziumi irodalomtanár és baseballedző, azaz T. edző, egy mindenki által ismert, köztiszteletben álló ember, két kislány édesapja. Ralph Anderson nyomozó letartóztatja az edzőt, méghozzá a lehető legmegalázóbb módon: a Maitland csapata számára kulcsfontosságú meccs közben, a szurkolósereg szeme láttára. Anderson indulata érthető: az ő kamasz fia is T. edző keze alatt tanulta a sportot. '),
('9789635000460', 'Pillangók kertje (A gyűjtő 1)', 'Dot Hutchison', 2016, 2, 4499, 30,'/img/book_covers_tmp/pillangok_kertje.jpg', 'A szépség még soha nem volt ilyen rettentő. Egy elszigetelten álló, hatalmas ház mellett gyönyörű kert terül el. A kert nemcsak buja virágokat és árnyas fákat rejt... A "Pillangók" becses gyűjteményét is: elrabolt fiatal nőket, akiket fogvatartójuk pillangószárnyas tetoválással bélyegez meg. A gyűjtemény ura a brutális, őrült Kertész, akinek mániája, hogy elkapja és megőrizze magának a szépséges pillangólányokat. Miután a kertet végül fölfedezik, az FBI ki akarja kérdezni az egyik túlélőt. Victor Hanoverian és Brandon Eddison ügynökök kapják a feladatot, hogy göngyölítsék fel karrierjük egyik leggyomorforgatóbb ügyét. Ám a kihallgatott lány, akit csak a Maya néven ismernek meg, önmagában is kész rejtélynek bizonyul. Ahogy kibontakozik a lány fordulatos és csavaros története, lassan fény derül a Pillangók kertjére is, Maya pedig mesél régi sérelmekről, új megmentőkről, valamint egy szörnyűséges férfiról, aki semmitől sem riadt vissza, hogy rabságban tarthassa a szépséget. De minél többet árul el a lány, az ügynökök annál inkább gyanakodnak, hogy vajon mit titkol még... Azonnali sikert aratott thriller, mely a Goodreads Choice Awards 2016 szavazáson a 2. helyet érte el, a megfilmesítési jogokat pedig A visszatérő Oscar-díjas producerei vették meg. Ismerd meg a pillangólányok múltba nyúló titkait!'),
('9111235000460', 'Figyelj Rám', 'Sarah Dessen', 2006, 5, 3300, 30,'/img/book_covers_tmp/figyelj_ram.jpg', 'Ahhoz, hogy megleld az igazságot,készen kell állnod rá, hogy meghalld.
Tavaly még Annabel volt "a lány, akinek megvan mindene" - legalábbis ezt a szerepet játszotta egy népszerű reklámban.
Idén azonban ő lett a lány, akinek nem maradt semmije: nincsenek barátai, mert a suli legálnokabb lánya, Sophie, ellenségnek kiáltotta ki; oda az otthoni béke is, mióta a nővére anorexiával küzd; az iskolai ebédszüneteket pedig egyedül kell töltenie. Egészen addig, amíg találkozik Owen Armstronggal.
A magas, sötét hajú és rosszfiú hírében álló Owen a zene és az igazság megszállottja. Az ő segítségével Annabelnek talán sikerül szembenéznie a múlttal...
Mi történt azon az estén, amikor megszakadt a barátsága Sophie-val?
'),

('9111288000460', 'A fantom (Fabian Risk 1.)', 'Stefan Ahnhem', 2014, 7, 4290 , 30,'/img/book_covers_tmp/a_fantom.jpg', 'Egy technikatanár saját tantermében lesz brutális gyilkosság áldozata. A gyilkos egy 1980-as évekből származó osztályképet helyez a holttest mellé, amelyen az áldozat arcát fekete tussal áthúzta.
Fabian Risk évekig a stockholmi rendőrség alkalmazásában állt, most pedig családjával hazatér szülővárosába, Helsingborgba. Ám alig érkeznek meg új házukhoz, főnöke máris megjelenik, és bevonja őt a nyomozásba: az áldozat ugyanis Fabian egyik régi osztálytársa. De hamarosan kiviláglik, hogy a technikatanár korántsem az utolsó áldozat, a gyilkosság pedig egy ördögi pontossággal kitervelt gyilkosságsorozat része.
'),

('9111288010460', 'A kilencedik (Fabian Risk 2.)', 'Stefan Ahnhem', 2016, 4, 4290 , 30,'/img/book_covers_tmp/a_kilencedik.jpg', 'Pár héttel karácsony előtt a svéd igazságügyi miniszter egy heves vitát követően a hátsó kijáraton hagyja el a parlamentet, de a rá váró autóhoz sosem érkezik meg. Mintha a föld nyelte volna el. Bár az ügy hivatalosan nem az ő hatáskörükbe tartozik, Fabian Risket megbízza a felettese, hogy titokban folytasson nyomozást. Fabian és kolléganője, Malin gyanúja egy hírhedt svéd sorozatgyilkosra terelődik.
Közben Koppenhágában holtan találják egy népszerű tévés személyiség feleségét. A vizsgálatot vezető Dunja Hougaard úgy véli, egy ismert dán sorozatgyilkos áll az ügy hátterében, a nyomok azonban egyenesen Svédországba vezetik.
Fabian és Dunja ismeretlenül keresztezik egymás útját, miközben egyre jobban belebonyolódnak egy világméretű összeesküvés felderítésébe, és ráébrednek, hogy a helyzet sokkal rosszabb, mint álmodni merték volna.
'),

('9221288010460', 'A legrosszabb esküvői tanú ', 'Mia Sosa', 2023, 1, 4990 , 30,'/img/book_covers_tmp/a_legrosszabb_eskuvoi_tanu.jpg', 'Egy oltár előtt elhagyott esküvőszervező? Ja, persze, az iróniát Carolina Santos is érzékeli. De múltjának e kellemetlen mozzanata ellenére Lina olyan lehetőséget kap, amely megváltoztathatja az életét. Csak egyetlen bökkenő van: együtt kell működnie a világ legrosszabb esküvői tanújával a saját kudarcba fulladt menyegzőjéről.

Max Hartley marketingszakértő eltökélt szándéka, hogy letegye a névjegyét egy áhított szállodai ügyfélnél, aki az arculata kiterjesztését tervezi. Aztán megtudja, hogy a bátyja eszes, lenyűgöző és abszolút tabu exmenyasszonyával kell dolgoznia, aki ráadásul ki nem állhatja őt...

Ha sikerül egymás kinyírása nélkül összehozniuk a prezentációjukat, mindketten jól járnak. Csakhogy Max az első számú közellenség, mióta arra biztatta a bátyját, hogy hagyja faképnél a menyasszonyt, és Lina a maga részéről kész megfizetni érte.

Lina és Max hamar felfedezik, hogy nem az ellenszenv az egyetlen érzelem, amitől szikrázik közöttük a levegő. Ám ez a rossz csillagzat alatt született páros mégsem lehet több ideiglenes játszópajtásnál, mert Lina nem vágyik szerelemre, Max pedig soha többé nem hajlandó a bátyja mellett másodhegedűst alakítani...

');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789634578550', 'Sötét, magányos átok (Az Átoktörő 1.)', 'Brigid Kemmerer', 2019, 4749, 25, '/img/book_covers/1234567899999.png', 5, 'Egy elátkozott birodalomban... a szerelem a legsötétebb zugokba kényszerül.\n\nLégy szerelmes, törd meg az átkot!\n\nRhen herceg, Emberfall trónörököse azt hitte, minden rendben lesz. Bár egy nagy hatalmú varázslónő megátkozta, és arra ítélte, hogy folyamatosan újraélje a tizennyolcadik évének őszét, ő biztosra vette, hogy ha egy lány beleszeret, azonnal megmenekül. Azonban minden ősz végén gonosz, kíméletlen bestiává változik.\n\nÉs elérkezett az utolsó ősz... Harperhez sosem volt kegyes a sors. A családja romokban, a bátyja pedig, aki képtelen összetartani a családot, folyamatosan alábecsüli őt. Harper már korán megtanulta, hogy csak kemény küzdelmek árán boldogulhat. De amikor egy embertársa megmentésére siet, hirtelen Rhen elátkozott világában találja magát.\n\nTörd meg az átkot, mentsd meg a birodalmat!\n\nHerceg? Szörny? Átok? Harper azt sem tudja, hol van és mit higgyen. De ahogy egyre több időt tölt el Rhennel a mágikus birodalomban, lassan megérti, mi minden forog kockán. És amikor Rhen rájön, hogy Harper nem csak egy újabb meghódítandó nőnemű, ismét feltámad benne a remény. De hatalmas erők állnak szemben Emberfall-lal... Vajon ha megtörik az átok, az elég ahhoz, hogy megmentse őket és a birodalom népét a teljes pusztulástól?');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789635618385', 'Harcos, megtört szív (Az Átoktörő 2.)', 'Brigid Kemmerer', 2020, 4299, 25, '/img/book_covers/1234567899999.png', 8, 'Keresd meg az örököst, nyerd el a trónt!\n\nAz átok végül megtört, de Rhen, Emberfall hercege most még aggasztóbb nehézségekkel szembesül. Szárnyra kelt a pletyka, hogy nem ő a trón jogos örököse, és hogy tiltott varázslat szabadult Emberfallra. Bár Harper Rhen mellett áll, Grey, a herceg testőre eltűnt, ami komoly kérdéseket vet fel.\n\nNyerd el a trónt, mentsd meg a királyságot!\n\nLehet, hogy Grey a trónörökös, de ő nem akarja kiadni a titkát. Mióta megölte Lilithet, szökésben van, és nem kíván szembeszállni Rhennel – mindaddig, amíg Karis Luran ismét fenyegetőzni nem kezd, hogy lerohanja Emberfallt. Karis Luran lánya, Lia Mara azonban gyűlöli az erőszakot, és meglátja a rést anyja tervében. De vajon meg tudja győzni Greyt, hogy Emberfall érdekében álljon ki Rhen ellen?\n\nAz izgalmas, lebilincselő történet folytatódik, miközben emberek mérettetnek meg, és egy új szerelem is kibontakozik a háború szélére sodródott birodalomban.');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789635976416', 'Merész, gyilkos eskü (Az Átoktörő 3.)', 'Brigid Kemmerer', 2021, 4999, 25, '/img/book_covers/1234567899999.png', 2, 'Nézz szembe a félelmeiddel, vívd meg a csatát!\n\nEmberfall rohamosan pusztul, és a végletekig megosztott: vannak, akik úgy vélik, a trón Rhent illeti, ám mások alig várják, hogy új korszak kezdődjön Grey, a jogos örökös vezetésével. Grey két hónap türelmi időt adott Emberfallnak a támadás előtt, ám ez idő alatt Rhen mindenkitől elfordult, még Harpertől is, aki kétségbeesetten próbál segíteni neki, hogy megtalálja a békéhez vezető utat.\n\nVívd meg a csatát, mentsd meg a királyságot!\n\nEközben Lia Mara azért küzd, hogy anyjánál emberségesebben uralkodjon Syhl Shallow felett. Miután a mágusokat kiűzték az országból, évtizedekig tartó békés időszak köszöntött be, ám az alattvalók közül nem mindenki nézi jó szemmel, hogy Lia Mara egy varázserővel bíró herceggel és egy kaparóval szövetkezik. A háború közeledtével Lia Mara elbizonytalanodik: valóban ő az a királynő, akire az országának szüksége van?\n\nA két birodalom egyre közelebb sodródik a fegyveres összecsapáshoz, ami próbára teszi a hűséget, szerelmeket sodor veszélybe, egy régi ellenség újbóli felbukkanása pedig mindenkire fenyegetést jelent.');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789634572435', 'Velünk véget ér', 'Colleen Hoover', 2016, 5499, 25, '/img/book_covers/1234567899999.png', 10, 'Néha az okozza a legtöbb fájdalmat, aki szeret.\n\nLilynek nem ment mindig könnyen a sora, de annál keményebben dolgozott, hogy olyan életet élhessen, amilyenre vágyik. Elhagyta a Maine állambeli kisvárost, ahol felnőtt; egyetemet végzett, és Bostonba költözött, ahol saját vállalkozásba kezdett. Amikor szikrázni kezd a levegő közte és a jóképű idegsebész, Ryle Kincaid között, Lily életében hirtelen minden túl szép lesz ahhoz, hogy igaz legyen.\n\nRyle magabiztos, makacs, kicsit talán arrogáns is, de emellett érzékeny, okos, és Lily a gyengéje - bár a kapcsolatoktól való viszolygása aggodalomra ad okot.\n\nLilyt mégsem csak az új kapcsolata foglalkoztatja. Rengeteget gondol Atlas Corriganre is - az első szerelmére, aki a hátrahagyott múltjához köti. A fiú, aki lelki társa és védelmezője volt, most újra feltűnik a színen, veszélyeztetve ezzel mindent, amit Lily és Ryle együtt felépített.\n\nEbben a merész és mélyen személyes regényben Colleen Hoover szívszorongató történetet tár elénk, ami új, izgalmas utakra vezeti őt magát mint írót is. A Velünk véget ér felejthetetlen mese a szerelemről, amiért nagy árat kell fizetni.\n\nAdd át magad a reménynek!');


INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789633994184', 'Velünk kezdődik', 'Colleen Hoover', 2022, 4499, 25, '/img/book_covers/1234567899999.png', 10, 'Mielőtt véget ért, Atlasszal kezdődött el.\n\nLily és a volt férje, Ryle éppen csak beleszokik a közös gyerekfelügyelet ritmusába, amikor Lily hirtelen újra összefut első szerelmével, Atlasszal. A csaknem két külön töltött év után Lily fellelkesül, hogy az idő most az egyszer az ő javukra játszik, és azonnal igent mond, amikor Atlas randevúra hívja.\n\nÁm lelkesedését csírájában fojtja el a gondolat, hogy noha többé nem házasok, Ryle azért nagyon is része az életének, és gyűlölni fogja Atlas Corrigant, amiért jelen van a volt felesége és a kislánya életében.');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789634577904', 'Verity', 'Colleen Hoover', 2018, 3699, 25, '/img/book_covers/1234567899999.png', 10, '\"A szavaknak egyenesen a zsigerekből, húson és csontokon át kell kiszakadnia.\"\n\nA küszködő, anyagi csőd szélén álló író, Lowen Ashleigh megkapja élete állásajánlatát. A bestsellerszerző Verity Crawford férje felkéri, hogy a balesetben megsérült író helyett megírja sikersorozatának befejező részeit. Lowen megérkezik a Crawford-házba, hogy átnézze Verity többévnyi jegyzeteit és vázlatait, remélve, hogy elegendő anyagot talál a munka elkezdéséhez. Ám az irodában nemcsak kaotikus állapotok fogadják, hanem egy önéletrajz is, amit az asszony a legnagyobb titokban írt. A kézirat minden oldala vérfagyasztó vallomást rejt, köztük annak az éjszakának a történetét is, mely örökre megváltoztatta a család életét. Lowen először úgy dönt, nem mutatja meg a kéziratot, mert annak tartalma még több fájdalmat okozna a gyászoló apának. De ahogy a férfi iránti érzelmei egyre erősebbé válnak, rájön, hogy talán mégis fel kéne fedni Verity mocskos titkait.');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789633733943', 'Reménytelen (Hopeless 1.)', 'Colleen Hoover', 2012, 3999, 25, '/img/book_covers/1234567899999.png', 10, 'Készen állsz a reménytelen igazságra? Vagy szívesebben hiszel a hazugságoknak?\n\nColleen Hoover, a közkedvelt bestseller-író lebilincselő történettel tér vissza. Ez a szenvedélyes, magával ragadó románc két, szörnyű múltat cipelő fiatalról szól, akik az élet, a szerelem és a bizalom útvesztőjében bolyongva együtt ismerik meg az igazság gyógyító erejét.\n\nA koránt sem szent Sky végzős középiskolásként találkozik Dean Holderrel - egy sráccal, aki nagy nőcsábász hírében áll. A fiú már a legelső találkozás alkalmával rabul ejti a szívét, ugyanakkor félelmet is kelt benne. A múltjára emlékezteti Sky-t, aki hosszú időn át próbálta eltemetni magában a történteket. Eldönti, hogy távol tartja magát a fiútól, de annak kitartása és ellenállhatatlan mosolya hamar semmivé foszlatja az elhatározását. Dean azonban maga is nyomasztó emlékeket őrizget. Amikor ezekről tudomást szerez, az visszavonhatatlanul megváltoztatja Sky-t, talán örökre szétrombolva lelkében a bizalom érzését.');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789635041718', 'Az Intézet', 'Stephen King', 2019, 6499, 25, '/img/book_covers/1234567899999.png', 4, 'Az éjszaka közepén Luke Ellis szüleit brutálisan meggyilkolják a saját házukban, őt pedig elrabolják. Másnap Luke egy intézetben ébred egy ugyanolyan szobában, mint a sajátja, mellette pedig hasonló szobák nyílnak, bennük hasonló fiúkkal és lányokkal: mindannyian különleges természetfeletti képességekkel rendelkeznek. A szigorúan őrzött intézményt igazgató Mrs. Sigsby egyetlen célja könyörtelenül kinyerni a gyerekek erejét, akár kínzás árán is. Ahogy sorra tűnnek el társai, Luke érzi, menekülniük kell, azonban ebből az intézetből még soha senki nem szökött meg. Elindul a küzdelem a jó és a gonosz között egy olyan világban, ahol a jók nem mindig győzedelmeskedhetnek.\n\nAz intézet az utóbbi évek legijesztőbb és legjobb könyve a horror királyától rajongói és kritikusai szerint is. Hangulatában egyszerre idéződnek fel benne a nagy klasszikusok, a Carrie, A ragyogás, A tűzgyújtó és az Az.');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789635700028', 'Hontalan lelkek - Hontalan lelkek-trilógia 1.', 'John Cure', 2016, 4274, 25, '/img/book_covers/1234567899999.png', 11, 'Egy amerikai kisváros, ahol szörnyű gyilkosságok történnek... Clive Wallace kiegyensúlyozott, idilli kapcsolatban él feleségével, Susannával és két kisfiával, Timmel és Robinnal. Megszokott életük azonban váratlan fordulatot vesz, amikor a kisvárosban gyerekek tűnnek el nyomtalanul, miközben a szüleiket könyörtelenül lemészárolják. Egy borús délutánon Tim és két barátja sárkányt eregetni indulnak a közeli tisztásra, nem is sejtve, hogy halálos veszély leselkedik rájuk. Jack Homa, a város öregedő seriffje próbál a rejtély megoldására bukkanni, azonban egyre nyilvánvalóbbá válik számára, hogy a kisváros lakói sötét titkot őriznek a múltból. Mindeközben Clive-nak szembe kell néznie szörnyű rémálmaival és eltitkolt múltjával, hogy a családját megmenthesse a borzalmaktól. De ki az a Gerald, aki kezében egy véres csákánnyal bújik meg a sötét árnyékban? És mit akarnak Robintól a halott gyerekek szellemei? John Cure Magyarország egyik legnépszerűbb horror- és pszichothrillerírója. A Hontalan lelkek című regény harmadik, javított kiadása egy olyan hátborzongató misztikus thriller, ami a 80-as és 90-es évek nagy sikerű horrorfilmjeinek, a Rémálom az Elm utcában, a Péntek 13 és a Kampókéz hagyományait viszi tovább, és ötvözi napjaink kísértethistóriáival.');

INSERT INTO `konyv` (`ISBN`, `cim`, `szerzo`, `megjelenes_eve`, `ar`, `darab_szam`, `borito`, `kiado_id`, `leiras`) VALUES 
('9789635700042', 'Rekviem egy halott lányért - Hontalan lelkek 2', 'John Cure', 2018, 4274, 25, '/img/book_covers/1234567899999.png', 11, 'Nem bújhatsz el... Robin Wallace néhány év távollét után végzős egyetemistaként tér vissza Edgar s Hillbe. Megérkezését követően egy halott lány szelleme különös üzenetekkel kér segítséget tőle. Shelly Hewitt színleg boldog, kiegyensúlyozott családban él férjével és kislányával. De mindez csak a látszat, a felszín alatt szörnyű titkok bújnak meg. Kislánya, a négyéves Becky egy olyan rossz bácsiról kezd mesélni, akit a felnőttek nem látnak, pedig napok óta ott van velük a házban. Shelly egy léleklátót kér fel, hogy tisztítsa meg a házat az ártó szellemtől. Úgy tűnik, hogy Roxanne szertartása sikerrel jár, ám az események mégis pokoli fordulatot vesznek. Egy brutális gyilkosság képe rajzolódik ki előttük, ami összefügg a kisváros szörnyű múltjával és az elátkozott dögkúttal. A cél érdekében Robin, Shelly és a léleklátó Roxanne szövetségre lép, de az idő előrehaladtával a túlélésük esélye rohamosan csökken. És felcsendül egy mondóka... John Cure a feszültségkeltés mestere, Magyarország egyik legnépszerűbb horror- és pszichothrillerszerzője. Új regénye rémületes utazás a túlvilági erők világába. A Rekviem egy halott lányért második, javított kiadása minden eddigit felülmúló, hátborzongató ideglelést kínál a misztikus thrillerek kedvelőinek.');


INSERT INTO KonyvMufajKapcsolat (konyv_id, mufaj_id) VALUES 
('9789635619800',2),
('9789635619801', 2),
('9789635619802', 2), 
('9789635979417', 2),
('9789635043460', 3),('9789635000460', 2),('9111235000460', 5),('9111288000460', 2),('9111288010460', 1),('9221288010460',5);


INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789633994184', 1);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789634577904', 2);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789633733943', 1);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789635041718', 4);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789635700028', 4);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789635700042', 4);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789635976416', 4);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789635618385', 2);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789634578550', 1);
INSERT INTO `konyvmufajkapcsolat` (`konyv_id`, `mufaj_id`) VALUES ('9789634572435', 1);
