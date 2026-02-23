// <option value="war4" data-color="white">War 4</option>
//players=warSelect.value=='war4'?players_war_4: ...







const war_points = {
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
{name:"ckdkeovirmdk",points:[96874,0,0,0,0]},
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
{name:"Znaesh91",points:[58325,80500,85800,109800,109800]},
{name:"Superpippo95",points:[45600,141560,48942,210000,210000]},
{name:"Quackor2",points:[31301,30000,23418,58960,58960]},
{name:"Zicky1",points:[69497,147100,65347,219100,219100]},
{name:"Red95",points:[73370,144210,177908,163100,163100]},
{name:"TheMyg",points:[55832,96000,0,215700,215700]},
{name:"ZINGARO",points:[29853,97900,37381,89540,89540]},
{name:"Extonn",points:[13192,82230,9612,118000,118000]},
{name:"TheToasty",points:[38922,70970,30475,44300,44300]},
{name:"Gauner",points:[32913,78950,20286,90000,90000]},
{name:"Wpierdol",points:[46749,52200,50630,144400,144400]},
{name:"Adam2025",points:[28332,29450,12647,57100,57100]},
{name:"Ergon",points:[50000,121360,82283,153400,153400]},
{name:"Spamer",points:[16337,71000,14736,115260,115260]},
{name:"Faras",points:[20592,78750,47968,60600,60600]},
{name:"Thaurin",points:[105514,88100,31101,123800,123800]},
{name:"Houndoom96",points:[44695,53290,10960,45050,45050]},
{name:"Gladiatore",points:[76936,84300,73572,301090,301090]},
{name:"Bellias",points:[48586,81300,40456,161450,161450]},
{name:"Alelk98",points:[27500,43130,0,44050,44050]},
{name:"Avocado93",points:[52947,103800,90529,72950,72950]},
{name:"Neo78to",points:[1500,63830,36818,41700,41700]},
{name:"MaRaSLi",points:[40850,67800,9755,38200,38200]},
{name:"SuperKastiger",points:[29472,38130,23089,45500,45500]},
{name:"Vlieg",points:[27500,46700,58227,90060,90060]},
{name:"danipopeye",points:[38000,49500,14402,45500,45500]},
{name:"SecondWind",points:[27685,48950,42848,19500,19500]},
{name:"kelzyyy",points:[27087,48760,8874,59000,59000]},
{name:"Ribbe",points:[54354,38250,31070,118410,118410]},
{name:"LostGlory",points:[42794,54600,12651,39300,39300]},
{name:"HiJack2",points:[7298,74150,30500,30600,30600]},
{name:"vicio93",points:[29348,118568,72902,141000,141000]},
{name:"ZeRat25",points:[20000,33950,22710,81370,81370]},
{name:"Samantha93",points:[10925,55560,21401,21150,21150]},
{name:"Krexon",points:[29932,37020,8302,46000,46000]},
{name:"Sputnik777",points:[62436,45260,18860,37850,37850]},
{name:"mavon10",points:[25612,28150,30336,66300,66300]},
{name:"Winstons",points:[30030,44160,5240,23500,23500]},
{name:"Septem",points:[23425,44250,4400,35000,35000]},
{name:"ShadowBlade",points:[28963,18400,5571,35250,35250]},
{name:"Naebator228",points:[56147,92680,12653,46900,46900]},
{name:"Kitty87",points:[44519,44100,29385,47100,47100]},
{name:"KittysEngel82",points:[22938,18700,31074,41500,41500]},
{name:"Mobis1",points:[101835,229110,229192,172000,172000]},
{name:"JustLiam",points:[46590,65690,16705,65900,65900]},
{name:"kreolove",points:[53410,134170,69735,52000,52000]},
{name:"utopiah",points:[2214,12650,15354,62220,62220]}
];




// ====== DATA ======
const players_war_3 = [
{name:"Znaesh91",points:[29523,39400,8000,66600,34625]},
{name:"Superpippo95",points:[15000,52250,20250,128850,44784]},
{name:"Quackor2",points:[7569,44450,9517,45000,36676]},
{name:"Zicky1",points:[32688,78400,29535,100020,32589]},
{name:"Red95",points:[48463,162400,42950,197410,80459]},
{name:"TheMyg",points:[77554,156200,94142,116950,8000]},
{name:"ZINGARO",points:[58512,59200,20945,92010,49394]},
{name:"Extonn",points:[33491,21750,8066,23400,15438]},
{name:"TheToasty",points:[7350,31000,14700,58800,29680]},
{name:"Gauner",points:[23697,87990,17573,118000,19421]},
{name:"Wpierdol",points:[32430,52670,25672,38850,15996]},
{name:"Adam2025",points:[23078,68560,16200,33200,15259]},
{name:"Ergon",points:[30600,84650,45645,80000,33200]},
{name:"Spamer",points:[31614,49650,19294,13600,9950]},
{name:"Faras",points:[7570,82570,21599,57400,14433]},
{name:"Thaurin",points:[99567,83470,20663,80350,24485]},
{name:"Houndoom96",points:[14697,41250,6068,12000,12660]},
{name:"Gladiatore",points:[33974,39000,33110,88700,31976]},
{name:"Bellias",points:[27500,79150,31239,105900,18933]},
{name:"Alelk98",points:[26325,44630,557,40000,38762]},
{name:"Avocado93",points:[81814,99560,23062,80650,40053]},
{name:"Neo78to",points:[39366,22200,4800,84260,35959]},
{name:"TonyTough",points:[21884,24600,7724,15750,0]},
{name:"eMDe",points:[0,0,2105,9750,10100]},
{name:"Beatsone",points:[63900,103360,16393,157500,24662]},
{name:"MaRaSLi",points:[27375,30350,20574,30250,9602]},
{name:"SuperKastiger",points:[22566,28450,8940,56980,14517]},
{name:"MoinJungs",points:[30708,54100,29637,110710,60879]},
{name:"Mortex",points:[21837,10500,2241,31130,11027]},
{name:"Vlieg",points:[20000,38600,43775,43400,20552]},
{name:"danipopeye",points:[62913,33200,1925,56050,9050]},
{name:"SecondWind",points:[40335,22000,3603,16000,8149]},
{name:"kelzyyy",points:[20783,47650,38701,54150,20263]},
{name:"Ribbe",points:[44898,30350,5600,54380,29355]},
{name:"LostGlory",points:[9249,59760,8599,53600,16088]},
{name:"HiJack2",points:[30779,63700,19256,21400,18945]},
{name:"vicio93",points:[35450,40500,20962,88550,28385]},
{name:"Hostis",points:[43640,44280,63694,58880,13300]},
{name:"ZeRat25",points:[8448,25500,31665,22160,13800]},
{name:"Samantha93",points:[26388,16000,6363,33820,8000]},
{name:"Krexon",points:[6525,43300,5285,19800,15755]},
{name:"Sputnik777",points:[15186,19650,10150,40620,13785]},
{name:"mavon10",points:[14700,31600,44594,132900,34246]},
{name:"Winstons",points:[16402,21470,5364,11750,12162]},
{name:"Septem",points:[33745,46560,2775,44000,24253]},
{name:"ShadowBlade",points:[6578,18600,4895,30900,14993]},
{name:"Naebator228",points:[20279,23000,13753,70130,13686]},
{name:"Kitty87",points:[35765,33250,25053,52150,23159]},
{name:"KittysEngel82",points:[14019,52500,25554,19800,16953]}
];







const players_war_2 = [
  {name:"Red95",points:[110543,110543,110543,110543,110543]},
  {name:"TheMyg",points:[100238,100238,100238,100238,100238]},
  {name:"Zicky1",points:[69592,69592,69592,69592,69592]},
  {name:"Avocado93",points:[63758,63758,63758,63758,63758]},
  {name:"ZINGARO",points:[61379,61379,61379,61379,61379]},
  {name:"Ergon",points:[60595,60595,60595,60595,60595]},
  {name:"Faras",points:[58262,58262,58262,58262,58262]},
  {name:"Thaurin",points:[52761,52761,52761,52761,52761]},
  {name:"Superpippo95",points:[51352,51352,51352,51352,51352]},
  {name:"Spamer",points:[50056,50056,50056,50056,50056]},
  {name:"MoinJungs",points:[47549,47549,47549,47549,47549]},
  {name:"Gauner",points:[45013,45013,45013,45013,45013]},
  {name:"Gladiatore",points:[42874,42874,42874,42874,42874]},
  {name:"Znaesh91",points:[40496,40496,40496,40496,40496]},
  {name:"Bellias",points:[40237,40237,40237,40237,40237]},
  {name:"TheToasty",points:[39476,39476,39476,39476,39476]},
  {name:"mavon10",points:[37226,37226,37226,37226,37226]},
  {name:"Vlieg",points:[36558,36558,36558,36558,36558]},
  {name:"eMDe",points:[36441,36441,36441,36441,36441]},
  {name:"Hostis",points:[32685,32685,32685,32685,32685]},
  {name:"Adam2025",points:[32542,32542,32542,32542,32542]},
  {name:"Quackor2",points:[31286,31286,31286,31286,31286]},
  {name:"Alelk98",points:[30166,30166,30166,30166,30166]},
  {name:"HiJack2",points:[28985,28985,28985,28985,28985]},
  {name:"Wpierdol",points:[27596,27596,27596,27596,27596]},
  {name:"Neo78to",points:[26475,26475,26475,26475,26475]},
  {name:"Ribbe",points:[25812,25812,25812,25812,25812]},
  {name:"danipopeye",points:[25675,25675,25675,25675,25675]},
  {name:"LostGlory",points:[24753,24753,24753,24753,24753]},
  {name:"SuperKastiger",points:[24053,24053,24053,24053,24053]},
  {name:"SecondWind",points:[23187,23187,23187,23187,23187]},
  {name:"MaRaSLi",points:[23130,23130,23130,23130,23130]},
  {name:"Septem",points:[22949,22949,22949,22949,22949]},
  {name:"vicjo93",points:[22790,22790,22790,22790,22790]},
  {name:"kelzyyy",points:[22364,22364,22364,22364,22364]},
  {name:"TonyTough",points:[22003,22003,22003,22003,22003]},
  {name:"T3ch",points:[21403,21403,21403,21403,21403]},
  {name:"Extonn",points:[19148,19148,19148,19148,19148]},
  {name:"ZeRat25",points:[18907,18907,18907,18907,18907]},
  {name:"Houndoom96",points:[18831,18831,18831,18831,18831]},
  {name:"Krexon",points:[17821,17821,17821,17821,17821]},
  {name:"CupidoGaming",points:[16768,16768,16768,16768,16768]},
  {name:"Samantha93",points:[16758,16758,16758,16758,16758]},
  {name:"Sputnik777",points:[15878,15878,15878,15878,15878]},
  {name:"skoskav",points:[15295,15295,15295,15295,15295]},
  {name:"WhiteMkc",points:[14771,14771,14771,14771,14771]},
  {name:"Zoro67",points:[12955,12955,12955,12955,12955]},
  {name:"Mortex",points:[11769,11769,11769,11769,11769]},
  {name:"Kohza37",points:[11061,11061,11061,11061,11061]},
  {name:"Akirro",points:[10455,10455,10455,10455,10455]}
];

const randomPlayers = () =>
  Array.from({length:50},(_,i)=>({
    name:`Player${i+1}`,
    points:Array.from({length:5},()=>Math.floor(Math.random()*400000+50000))
  }));
  
const players_war_1 = randomPlayers();





