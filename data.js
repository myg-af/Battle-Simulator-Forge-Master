// Ne pas suppr ces commentaires
// LAST : +KittysEngel82, +Kitty87
// A MAJ :  -T3ch



const war_points = {
  war3: {
    clan:    [1491834,2443230,982830,3005870,0],
    enemy:  [263388,435040,91235,365450,0]
  },
  war2: {
    clan:    [1801654,1948520,764960,2811580,1203711],
    enemy:  [1548562,1592620,979101,3073960,2104085]
  },
  war1: {
    clan:    [0,0,0,0,0],
    enemy:  [0,0,0,0,0]
  }
};


// ====== DATA ======
const players_war_3 = [
{name:"Znaesh91",points:[29523,39400,8000,66600,0]},
{name:"Superpippo95",points:[15000,52250,20250,128850,0]},
{name:"Quackor2",points:[7569,44450,9517,45000,0]},
{name:"Zicky1",points:[32688,78400,29535,100020,0]},
{name:"Red95",points:[48463,162400,42950,197410,0]},
{name:"TheMyg",points:[77554,156200,94142,116950,0]},
{name:"ZINGARO",points:[58512,59200,20945,92010,0]},
{name:"Extonn",points:[33491,21750,8066,23400,0]},
{name:"TheToasty",points:[7350,31000,14700,58800,0]},
{name:"Gauner",points:[23697,87990,17573,118000,0]},
{name:"Wpierdol",points:[32430,52670,25672,38850,0]},
{name:"Adam2025",points:[23078,68560,16200,33200,0]},
{name:"Ergon",points:[30600,84650,45645,80000,0]},
{name:"Spamer",points:[31614,49650,19294,13600,0]},
{name:"Faras",points:[7570,82570,21599,57400,0]},
{name:"Thaurin",points:[99567,83470,20663,80350,0]},
{name:"Houndoom96",points:[14697,41250,6068,12000,0]},
{name:"Gladiatore",points:[33974,39000,33110,88700,0]},
{name:"Bellias",points:[27500,79150,31239,105900,0]},
{name:"Alelk98",points:[26325,44630,557,40000,0]},
{name:"Avocado93",points:[81814,99560,23062,80650,0]},
{name:"Neo78to",points:[39366,22200,4800,84260,0]},
{name:"TonyTough",points:[21884,24600,7724,15750,0]},
{name:"eMDe",points:[0,0,2105,9750,0]},
{name:"Beatsone",points:[63900,103360,16393,157500,0]},
{name:"MaRaSLi",points:[27375,30350,20574,30250,0]},
{name:"SuperKastiger",points:[22566,28450,8940,56980,0]},
{name:"MoinJungs",points:[30708,54100,29637,110710,0]},
{name:"Mortex",points:[21837,10500,2241,31130,0]},
{name:"Vlieg",points:[20000,38600,43775,43400,0]},
{name:"danipopeye",points:[62913,33200,1925,56050,0]},
{name:"SecondWind",points:[40335,22000,3603,16000,0]},
{name:"kelzyyy",points:[20783,47650,38701,54150,0]},
{name:"Ribbe",points:[44898,30350,5600,54380,0]},
{name:"LostGlory",points:[9249,59760,8599,53600,0]},
{name:"HiJack2",points:[30779,63700,19256,21400,0]},
{name:"T3ch",points:[15100,0,0,0,0]},
{name:"vicio93",points:[35450,40500,20962,88550,0]},
{name:"Hostis",points:[43640,44280,63694,58880,0]},
{name:"ZeRat25",points:[8448,25500,31665,22160,0]},
{name:"Samantha93",points:[26388,16000,6363,33820,0]},
{name:"Krexon",points:[6525,43300,5285,19800,0]},
{name:"Sputnik777",points:[15186,19650,10150,40620,0]},
{name:"mavon10",points:[14700,31600,44594,132900,0]},
{name:"Winstons",points:[16402,21470,5364,11750,0]},
{name:"Septem",points:[33745,46560,2775,44000,0]},
{name:"ShadowBlade",points:[6578,18600,4895,30900,0]},
{name:"Naebator228",points:[20279,23000,13753,70130,0]},
{name:"Kitty87",points:[35765,33250,25053,52150,0]},
{name:"KittysEngel82",points:[14019,52500,25554,19800,0]}
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





