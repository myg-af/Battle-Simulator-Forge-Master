// <option value="war4" data-color="white">War 4</option>
//players=warSelect.value=='war4'?players_war_4: ...







const war_points = {
  war9: {
    clan:    [3170000,3845000,1975000,3427000,1063000],
    enemy:   [212000,173000,192000,102150,88000]
  },
  war8: {
    clan:    [5624000,6184000,3875000,4070000,1206000],
    enemy:   [6258000,4943000,1316000,2678000,769000]
  },
  war7: {
    clan:    [2326000,3094000,1395000,3412000,1079000],
    enemy:   [0,0,0,0,0]
  },
  war6: {
    clan:    [3279000,4901000,2066000,4248000,1709000],
    enemy:   [3481000,4919000,1195000,2048000,944000]
  },
  war5: {
    clan:    [2294223,3573020,1732251,3415390,1470403],
    enemy:   [9000,24020,1625,19800,10525]
  },
  war4: {
    clan:    [1894724,3476520,1898262,4274550,1933463],
    enemy:   [1877282,3493270,1803467,2883450,1311724]
  },
  war3: {
    clan:    [1491834,2443230,982830,3005870,1148007],
    enemy:   [263388,435040,91235,365450,313286]
  },
  war2: {
    clan:    [1801654,1948520,764960,2811580,1203711],
    enemy:   [1548562,1592620,979101,3073960,2104085]
  },
  war1: {
    clan:    [0,0,0,0,0],
    enemy:   [0,0,0,0,0]
  }
};















// ====== DATA ======
const players_war_9 = [
{name:"Znaesh91",points:[500050,0,0,0,0]},
{name:"Superpippo95",points:[353136,0,0,0,0]},
{name:"Quackor2",points:[91152,0,0,0,0]},
{name:"Zicky1",points:[219257,0,0,0,0]},
{name:"Red95",points:[501602,0,0,0,0]},
{name:"TheMyg",points:[350810,0,0,0,0]},
{name:"ZINGARO",points:[323452,0,0,0,0]},
{name:"Gauner",points:[222641,0,0,0,0]},
{name:"Wpierdol",points:[313510,0,0,0,0]},
{name:"Ergon",points:[450237,0,0,0,0]},
{name:"Spamer",points:[152620,0,0,0,0]},
{name:"Faras",points:[309646,0,0,0,0]},
{name:"Thaurin",points:[531601,0,0,0,0]},
{name:"Houndoom96",points:[239701,0,0,0,0]},
{name:"Gladiatore",points:[450018,0,0,0,0]},
{name:"Bellias",points:[365571,0,0,0,0]},
{name:"caccael",points:[152300,0,0,0,0]},
{name:"Avocado93",points:[327557,0,0,0,0]},
{name:"Neo78to",points:[126226,0,0,0,0]},
{name:"MaRaSLi",points:[107141,0,0,0,0]},
{name:"Vlieg",points:[206868,0,0,0,0]},
{name:"danipopeye",points:[202052,0,0,0,0]},
{name:"kelzyyy",points:[396437,0,0,0,0]},
{name:"Ribbe",points:[256292,0,0,0,0]},
{name:"LostGlory",points:[336470,0,0,0,0]},
{name:"vicio93",points:[360350,0,0,0,0]},
{name:"Samantha93",points:[259925,0,0,0,0]},
{name:"Krexon",points:[347383,0,0,0,0]},
{name:"Sputnik777",points:[260561,0,0,0,0]},
{name:"mavon10",points:[195698,0,0,0,0]},
{name:"Septem",points:[308902,0,0,0,0]},
{name:"Naebator228",points:[149326,0,0,0,0]},
{name:"Mobis1",points:[308053,0,0,0,0]},
{name:"JustLiam",points:[308864,0,0,0,0]},
{name:"kreolove",points:[362639,0,0,0,0]},
{name:"utopiah",points:[182936,0,0,0,0]},
{name:"GetBamBam",points:[107253,0,0,0,0]},
{name:"Turi334",points:[185337,0,0,0,0]},
{name:"Buccia1002",points:[96084,0,0,0,0]},
{name:"PolloFritto92",points:[262574,0,0,0,0]},
{name:"Teqqz",points:[322118,0,0,0,0]},
{name:"dorlas",points:[322284,0,0,0,0]},
{name:"Jarheditan",points:[346936,0,0,0,0]},
{name:"DeeoKanis",points:[269422,0,0,0,0]},
{name:"bebs",points:[119925,0,0,0,0]},
{name:"ITAxJOKER",points:[131942,0,0,0,0]},
{name:"stepz",points:[153218,0,0,0,0]},
{name:"ckdkeovlrmdk",points:[161234,0,0,0,0]},
{name:"Akamanah",points:[268953,0,0,0,0]}
];



const players_war_8 = [
{name:"Znaesh91",points:[643274,0,0,0,0]},
{name:"Superpippo95",points:[575038,0,0,0,0]},
{name:"Quackor2",points:[255830,0,0,0,0]},
{name:"Zicky1",points:[516016,0,0,0,0]},
{name:"Red95",points:[1393469,0,0,0,0]},
{name:"TheMyg",points:[602677,0,0,0,0]},
{name:"ZINGARO",points:[477005,0,0,0,0]},
{name:"Extonn",points:[388990,0,0,0,0]},
{name:"Gauner",points:[401461,0,0,0,0]},
{name:"Wpierdol",points:[216899,0,0,0,0]},
{name:"Ergon",points:[641078,0,0,0,0]},
{name:"Spamer",points:[339805,0,0,0,0]},
{name:"Faras",points:[441708,0,0,0,0]},
{name:"Thaurin",points:[803000,0,0,0,0]},
{name:"Houndoom96",points:[207239,0,0,0,0]},
{name:"Gladiatore",points:[700908,0,0,0,0]},
{name:"Bellias",points:[625253,0,0,0,0]},
{name:"caccael",points:[183144,0,0,0,0]},
{name:"Avocado93",points:[431659,0,0,0,0]},
{name:"Neo78to",points:[271274,0,0,0,0]},
{name:"MaRaSLi",points:[136068,0,0,0,0]},
{name:"Vlieg",points:[234483,0,0,0,0]},
{name:"danipopeye",points:[369322,0,0,0,0]},
{name:"kelzyyy",points:[381942,0,0,0,0]},
{name:"Ribbe",points:[382847,0,0,0,0]},
{name:"LostGlory",points:[266132,0,0,0,0]},
{name:"vicio93",points:[684176,0,0,0,0]},
{name:"Samantha93",points:[293064,0,0,0,0]},
{name:"Krexon",points:[280008,0,0,0,0]},
{name:"Sputnik777",points:[283708,0,0,0,0]},
{name:"mavon10",points:[384167,0,0,0,0]},
{name:"Septem",points:[238360,0,0,0,0]},
{name:"Naebator228",points:[97513,0,0,0,0]},
{name:"Mobis1",points:[1541969,0,0,0,0]},
{name:"JustLiam",points:[247812,0,0,0,0]},
{name:"kreolove",points:[517261,0,0,0,0]},
{name:"utopiah",points:[341787,0,0,0,0]},
{name:"GetBamBam",points:[357418,0,0,0,0]},
{name:"Turi334",points:[233135,0,0,0,0]},
{name:"Buccia1002",points:[273790,0,0,0,0]},
{name:"PolloFritto92",points:[457826,0,0,0,0]},
{name:"Teqqz",points:[308860,0,0,0,0]},
{name:"dorlas",points:[357034,0,0,0,0]},
{name:"Jarheditan",points:[591677,0,0,0,0]},
{name:"DeeoKanis",points:[247806,0,0,0,0]},
{name:"bebs",points:[109446,0,0,0,0]},
{name:"ITAxJOKER",points:[187432,0,0,0,0]},
{name:"Sevryn",points:[468019,0,0,0,0]},
{name:"stepz",points:[301422,0,0,0,0]},
{name:"ckdkeovlrmdk",points:[273122,0,0,0,0]}
];








const players_war_7 = [
{name:"Znaesh91",points:[350000,0,0,0,0]},
{name:"Superpippo95",points:[363413,0,0,0,0]},
{name:"Quackor2",points:[104436,0,0,0,0]},
{name:"Zicky1",points:[459998,0,0,0,0]},
{name:"Red95",points:[350184,0,0,0,0]},
{name:"TheMyg",points:[351429,0,0,0,0]},
{name:"ZINGARO",points:[358520,0,0,0,0]},
{name:"Extonn",points:[229633,0,0,0,0]},
{name:"Gauner",points:[245211,0,0,0,0]},
{name:"Wpierdol",points:[175393,0,0,0,0]},
{name:"Ergon",points:[369259,0,0,0,0]},
{name:"Spamer",points:[164724,0,0,0,0]},
{name:"Faras",points:[372731,0,0,0,0]},
{name:"Thaurin",points:[418503,0,0,0,0]},
{name:"Houndoom96",points:[162143,0,0,0,0]},
{name:"Gladiatore",points:[410850,0,0,0,0]},
{name:"Bellias",points:[361264,0,0,0,0]},
{name:"Alelk98",points:[70000,0,0,0,0]},
{name:"caccael",points:[156441,0,0,0,0]},
{name:"Avocado93",points:[320205,0,0,0,0]},
{name:"Neo78to",points:[166654,0,0,0,0]},
{name:"MaRaSLi",points:[199644,0,0,0,0]},
{name:"Vlieg",points:[255362,0,0,0,0]},
{name:"danipopeye",points:[271027,0,0,0,0]},
{name:"kelzyyy",points:[207965,0,0,0,0]},
{name:"Ribbe",points:[227839,0,0,0,0]},
{name:"LostGlory",points:[195103,0,0,0,0]},
{name:"vicio93",points:[350285,0,0,0,0]},
{name:"Samantha93",points:[206071,0,0,0,0]},
{name:"Krexon",points:[165585,0,0,0,0]},
{name:"Sputnik777",points:[245756,0,0,0,0]},
{name:"mavon10",points:[413979,0,0,0,0]},
{name:"Septem",points:[305186,0,0,0,0]},
{name:"Naebator228",points:[133344,0,0,0,0]},
{name:"Mobis1",points:[267217,0,0,0,0]},
{name:"JustLiam",points:[157671,0,0,0,0]},
{name:"kreolove",points:[212465,0,0,0,0]},
{name:"utopiah",points:[206368,0,0,0,0]},
{name:"GetBamBam",points:[266866,0,0,0,0]},
{name:"Turi334",points:[194163,0,0,0,0]},
{name:"Buccia1002",points:[203063,0,0,0,0]},
{name:"PolloFritto92",points:[303693,0,0,0,0]},
{name:"Teqqz",points:[160281,0,0,0,0]},
{name:"dorlas",points:[258306,0,0,0,0]},
{name:"Jarheditan",points:[303555,0,0,0,0]},
{name:"DeeoKanis",points:[180425,0,0,0,0]},
{name:"ckdkeovlrmdk",points:[96874,0,0,0,0]},
{name:"TeuTone21",points:[45584,0,0,0,0]}
];





const players_war_6 = [
{name:"Znaesh91",points:[568704,0,0,0,0]},
{name:"Superpippo95",points:[501373,0,0,0,0]},
{name:"Quackor2",points:[192413,0,0,0,0]},
{name:"Zicky1",points:[564133,0,0,0,0]},
{name:"Red95",points:[974503,0,0,0,0]},
{name:"TheMyg",points:[562204,0,0,0,0]},
{name:"ZINGARO",points:[301142,0,0,0,0]},
{name:"Extonn",points:[245443,0,0,0,0]},
{name:"Gauner",points:[268911,0,0,0,0]},
{name:"Wpierdol",points:[276368,0,0,0,0]},
{name:"Ergon",points:[485825,0,0,0,0]},
{name:"Spamer",points:[241330,0,0,0,0]},
{name:"Faras",points:[409771,0,0,0,0]},
{name:"Thaurin",points:[450327,0,0,0,0]},
{name:"Houndoom96",points:[218128,0,0,0,0]},
{name:"Gladiatore",points:[520732,0,0,0,0]},
{name:"Bellias",points:[480692,0,0,0,0]},
{name:"Alelk98",points:[148761,0,0,0,0]},
{name:"caccael",points:[254175,0,0,0,0]},
{name:"Avocado93",points:[308785,0,0,0,0]},
{name:"Neo78to",points:[258077,0,0,0,0]},
{name:"MaRaSLi",points:[209464,0,0,0,0]},
{name:"Vlieg",points:[272763,0,0,0,0]},
{name:"danipopeye",points:[216389,0,0,0,0]},
{name:"SecondWind",points:[101260,0,0,0,0]},
{name:"kelzyyy",points:[232336,0,0,0,0]},
{name:"Ribbe",points:[298708,0,0,0,0]},
{name:"LostGlory",points:[315831,0,0,0,0]},
{name:"vicio93",points:[524555,0,0,0,0]},
{name:"Samantha93",points:[169602,0,0,0,0]},
{name:"Krexon",points:[319298,0,0,0,0]},
{name:"Sputnik777",points:[293384,0,0,0,0]},
{name:"mavon10",points:[335851,0,0,0,0]},
{name:"Septem",points:[275469,0,0,0,0]},
{name:"ShadowBlade",points:[92673,0,0,0,0]},
{name:"Naebator228",points:[321239,0,0,0,0]},
{name:"Kitty87",points:[278139,0,0,0,0]},
{name:"Mobis1",points:[938577,0,0,0,0]},
{name:"JustLiam",points:[180706,0,0,0,0]},
{name:"kreolove",points:[553717,0,0,0,0]},
{name:"utopiah",points:[172880,0,0,0,0]},
{name:"GetBamBam",points:[270786,0,0,0,0]},
{name:"Turi334",points:[114656,0,0,0,0]},
{name:"Buccia1002",points:[311193,0,0,0,0]},
{name:"PolloFritto92",points:[283986,0,0,0,0]},
{name:"Teqqz",points:[301024,0,0,0,0]},
{name:"dorlas",points:[180791,0,0,0,0]},
{name:"Jarheditan",points:[340098,0,0,0,0]}
];




const players_war_5 = [
{name:"Znaesh91",points:[501249,0,0,0,0]},
{name:"Superpippo95",points:[402107,0,0,0,0]},
{name:"Quackor2",points:[137793,0,0,0,0]},
{name:"Zicky1",points:[395890,0,0,0,0]},
{name:"Red95",points:[834347,0,0,0,0]},
{name:"TheMyg",points:[568603,0,0,0,0]},
{name:"ZINGARO",points:[290850,0,0,0,0]},
{name:"Extonn",points:[255363,0,0,0,0]},
{name:"Gauner",points:[308275,0,0,0,0]},
{name:"Wpierdol",points:[297139,0,0,0,0]},
{name:"Adam2025",points:[3652,0,0,0,0]},
{name:"Ergon",points:[411771,0,0,0,0]},
{name:"Spamer",points:[167420,0,0,0,0]},
{name:"Faras",points:[292877,0,0,0,0]},
{name:"Thaurin",points:[376260,0,0,0,0]},
{name:"Houndoom96",points:[134993,0,0,0,0]},
{name:"Gladiatore",points:[403678,0,0,0,0]},
{name:"Bellias",points:[310658,0,0,0,0]},
{name:"Alelk98",points:[150080,0,0,0,0]},
{name:"caccael",points:[169955,0,0,0,0]},
{name:"Avocado93",points:[418327,0,0,0,0]},
{name:"Neo78to",points:[150304,0,0,0,0]},
{name:"MaRaSLi",points:[174070,0,0,0,0]},
{name:"SuperKastiger",points:[119898,0,0,0,0]},
{name:"Vlieg",points:[205970,0,0,0,0]},
{name:"danipopeye",points:[259940,0,0,0,0]},
{name:"SecondWind",points:[118794,0,0,0,0]},
{name:"kelzyyy",points:[134766,0,0,0,0]},
{name:"Ribbe",points:[212933,0,0,0,0]},
{name:"LostGlory",points:[222011,0,0,0,0]},
{name:"HiJack2",points:[123704,0,0,0,0]},
{name:"vicio93",points:[208697,0,0,0,0]},
{name:"ZeRat25",points:[114051,0,0,0,0]},
{name:"Samantha93",points:[152626,0,0,0,0]},
{name:"Krexon",points:[199627,0,0,0,0]},
{name:"Sputnik777",points:[258658,0,0,0,0]},
{name:"mavon10",points:[279158,0,0,0,0]},
{name:"Winstons",points:[52907,0,0,0,0]},
{name:"Septem",points:[156314,0,0,0,0]},
{name:"ShadowBlade",points:[69103,0,0,0,0]},
{name:"Naebator228",points:[212617,0,0,0,0]},
{name:"Kitty87",points:[273006,0,0,0,0]},
{name:"KittysEngel82",points:[198782,0,0,0,0]},
{name:"Mobis1",points:[645208,0,0,0,0]},
{name:"JustLiam",points:[91560,0,0,0,0]},
{name:"kreolove",points:[229938,0,0,0,0]},
{name:"utopiah",points:[76625,0,0,0,0]},
{name:"GetBamBam",points:[253736,0,0,0,0]},
{name:"Turi334",points:[244173,0,0,0,0]},
{name:"Buccia1002",points:[225541,0,0,0,0]}
];




const players_war_4 = [
{name:"Znaesh91",points:[418225,0,0,0,0]},
{name:"Superpippo95",points:[655102,0,0,0,0]},
{name:"Quackor2",points:[201639,0,0,0,0]},
{name:"Zicky1",points:[700144,0,0,0,0]},
{name:"Red95",points:[721688,0,0,0,0]},
{name:"TheMyg",points:[583232,0,0,0,0]},
{name:"ZINGARO",points:[254614,0,0,0,0]},
{name:"Extonn",points:[236034,0,0,0,0]},
{name:"TheToasty",points:[184667,0,0,0,0]},
{name:"Gauner",points:[222149,0,0,0,0]},
{name:"Wpierdol",points:[387379,0,0,0,0]},
{name:"Adam2025",points:[127529,0,0,0,0]},
{name:"Ergon",points:[509443,0,0,0,0]},
{name:"Spamer",points:[232633,0,0,0,0]},
{name:"Faras",points:[266910,0,0,0,0]},
{name:"Thaurin",points:[371515,0,0,0,0]},
{name:"Houndoom96",points:[153055,0,0,0,0]},
{name:"Gladiatore",points:[831988,0,0,0,0]},
{name:"Bellias",points:[406992,0,0,0,0]},
{name:"Alelk98",points:[114730,0,0,0,0]},
{name:"Avocado93",points:[329226,0,0,0,0]},
{name:"Neo78to",points:[143848,0,0,0,0]},
{name:"MaRaSLi",points:[196805,0,0,0,0]},
{name:"SuperKastiger",points:[141291,0,0,0,0]},
{name:"Vlieg",points:[272547,0,0,0,0]},
{name:"danipopeye",points:[147402,0,0,0,0]},
{name:"SecondWind",points:[138033,0,0,0,0]},
{name:"kelzyyy",points:[143721,0,0,0,0]},
{name:"Ribbe",points:[330294,0,0,0,0]},
{name:"LostGlory",points:[149345,0,0,0,0]},
{name:"HiJack2",points:[143748,0,0,0,0]},
{name:"vicio93",points:[353818,0,0,0,0]},
{name:"ZeRat25",points:[148450,0,0,0,0]},
{name:"Samantha93",points:[129236,0,0,0,0]},
{name:"Krexon",points:[127254,0,0,0,0]},
{name:"Sputnik777",points:[164356,0,0,0,0]},
{name:"mavon10",points:[150598,0,0,0,0]},
{name:"Winstons",points:[104930,0,0,0,0]},
{name:"Septem",points:[107075,0,0,0,0]},
{name:"ShadowBlade",points:[85184,0,0,0,0]},
{name:"Naebator228",points:[216380,0,0,0,0]},
{name:"Kitty87",points:[165104,0,0,0,0]},
{name:"KittysEngel82",points:[156212,0,0,0,0]},
{name:"Mobis1",points:[903137,0,0,0,0]},
{name:"JustLiam",points:[194885,0,0,0,0]},
{name:"kreolove",points:[310315,0,0,0,0]},
{name:"utopiah",points:[92538,0,0,0,0]}
];

const players_war_3 = [
{name:"Znaesh91",points:[178148,0,0,0,0]},
{name:"Superpippo95",points:[271134,0,0,0,0]},
{name:"Quackor2",points:[144212,0,0,0,0]},
{name:"Zicky1",points:[272232,0,0,0,0]},
{name:"Red95",points:[534191,0,0,0,0]},
{name:"TheMyg",points:[367046,0,0,0,0]},
{name:"ZINGARO",points:[280061,0,0,0,0]},
{name:"Extonn",points:[101145,0,0,0,0]},
{name:"TheToasty",points:[141530,0,0,0,0]},
{name:"Gauner",points:[175681,0,0,0,0]},
{name:"Wpierdol",points:[165518,0,0,0,0]},
{name:"Adam2025",points:[153397,0,0,0,0]},
{name:"Ergon",points:[271095,0,0,0,0]},
{name:"Spamer",points:[207808,0,0,0,0]},
{name:"Faras",points:[181572,0,0,0,0]},
{name:"Thaurin",points:[308535,0,0,0,0]},
{name:"Houndoom96",points:[84975,0,0,0,0]},
{name:"Gladiatore",points:[226760,0,0,0,0]},
{name:"Bellias",points:[252722,0,0,0,0]},
{name:"Alelk98",points:[110774,0,0,0,0]},
{name:"Avocado93",points:[274639,0,0,0,0]},
{name:"Neo78to",points:[107783,0,0,0,0]},
{name:"TonyTough",points:[69958,0,0,0,0]},
{name:"eMDe",points:[21955,0,0,0,0]},
{name:"Beatsone",points:[282815,0,0,0,0]},
{name:"MaRaSLi",points:[118151,0,0,0,0]},
{name:"SuperKastiger",points:[151473,0,0,0,0]},
{name:"MoinJungs",points:[225034,0,0,0,0]},
{name:"Mortex",points:[75735,0,0,0,0]},
{name:"Vlieg",points:[163327,0,0,0,0]},
{name:"danipopeye",points:[166138,0,0,0,0]},
{name:"SecondWind",points:[85587,0,0,0,0]},
{name:"kelzyyy",points:[171247,0,0,0,0]},
{name:"Ribbe",points:[165583,0,0,0,0]},
{name:"LostGlory",points:[137196,0,0,0,0]},
{name:"HiJack2",points:[154080,0,0,0,0]},
{name:"vicio93",points:[213847,0,0,0,0]},
{name:"Hostis",points:[225794,0,0,0,0]},
{name:"ZeRat25",points:[101573,0,0,0,0]},
{name:"Samantha93",points:[86771,0,0,0,0]},
{name:"Krexon",points:[90865,0,0,0,0]},
{name:"Sputnik777",points:[99391,0,0,0,0]},
{name:"mavon10",points:[255540,0,0,0,0]},
{name:"Winstons",points:[65748,0,0,0,0]},
{name:"Septem",points:[107333,0,0,0,0]},
{name:"ShadowBlade",points:[74966,0,0,0,0]},
{name:"Naebator228",points:[137848,0,0,0,0]},
{name:"Kitty87",points:[169927,0,0,0,0]},
{name:"KittysEngel82",points:[128026,0,0,0,0]}
];

const players_war_2 = [
{name:"Red95",points:[552715,0,0,0,0]},
{name:"TheMyg",points:[501190,0,0,0,0]},
{name:"Zicky1",points:[347960,0,0,0,0]},
{name:"Avocado93",points:[318790,0,0,0,0]},
{name:"ZINGARO",points:[306895,0,0,0,0]},
{name:"Ergon",points:[302975,0,0,0,0]},
{name:"Faras",points:[291310,0,0,0,0]},
{name:"Thaurin",points:[263805,0,0,0,0]},
{name:"Superpippo95",points:[256760,0,0,0,0]},
{name:"Spamer",points:[250280,0,0,0,0]},
{name:"MoinJungs",points:[237745,0,0,0,0]},
{name:"Gauner",points:[225065,0,0,0,0]},
{name:"Gladiatore",points:[214370,0,0,0,0]},
{name:"Znaesh91",points:[202480,0,0,0,0]},
{name:"Bellias",points:[201185,0,0,0,0]},
{name:"TheToasty",points:[197380,0,0,0,0]},
{name:"mavon10",points:[186130,0,0,0,0]},
{name:"Vlieg",points:[182790,0,0,0,0]},
{name:"eMDe",points:[182205,0,0,0,0]},
{name:"Hostis",points:[163425,0,0,0,0]},
{name:"Adam2025",points:[162710,0,0,0,0]},
{name:"Quackor2",points:[156430,0,0,0,0]},
{name:"Alelk98",points:[150830,0,0,0,0]},
{name:"HiJack2",points:[144925,0,0,0,0]},
{name:"Wpierdol",points:[137980,0,0,0,0]},
{name:"Neo78to",points:[132375,0,0,0,0]},
{name:"Ribbe",points:[129060,0,0,0,0]},
{name:"danipopeye",points:[128375,0,0,0,0]},
{name:"LostGlory",points:[123765,0,0,0,0]},
{name:"SuperKastiger",points:[120265,0,0,0,0]},
{name:"SecondWind",points:[115935,0,0,0,0]},
{name:"MaRaSLi",points:[115650,0,0,0,0]},
{name:"Septem",points:[114745,0,0,0,0]},
{name:"vicjo93",points:[113950,0,0,0,0]},
{name:"kelzyyy",points:[111820,0,0,0,0]},
{name:"TonyTough",points:[110015,0,0,0,0]},
{name:"T3ch",points:[107015,0,0,0,0]},
{name:"Extonn",points:[95740,0,0,0,0]},
{name:"ZeRat25",points:[94535,0,0,0,0]},
{name:"Houndoom96",points:[94155,0,0,0,0]},
{name:"Krexon",points:[89105,0,0,0,0]},
{name:"CupidoGaming",points:[83840,0,0,0,0]},
{name:"Samantha93",points:[83790,0,0,0,0]},
{name:"Sputnik777",points:[79390,0,0,0,0]},
{name:"skoskav",points:[76475,0,0,0,0]},
{name:"WhiteMkc",points:[73855,0,0,0,0]},
{name:"Zoro67",points:[64775,0,0,0,0]},
{name:"Mortex",points:[58845,0,0,0,0]},
{name:"Kohza37",points:[55305,0,0,0,0]},
{name:"Akirro",points:[52275,0,0,0,0]}
];

const randomPlayers = () =>
  Array.from({length:50},(_,i)=>({
    name:`Player${i+1}`,
    points:Array.from({length:5},()=>Math.floor(Math.random()*400000+50000))
  }));
  
const players_war_1 = randomPlayers();





