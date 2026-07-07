const TEAMS = [

{
id: 1,
name: "Arizona Diamondbacks",
players:[
{name:"Corbin Carroll",position:"OF"},
{name:"Ketel Marte",position:"2B"},
{name:"Lourdes Gurriel Jr.",position:"OF"},
{name:"Christian Walker",position:"1B"},
{name:"Eugenio Suarez",position:"3B"},
{name:"Gabriel Moreno",position:"C"},
{name:"Geraldo Perdomo",position:"SS"},
{name:"Joc Pederson",position:"DH"},
{name:"Zac Gallen",position:"P"},
{name:"Merrill Kelly",position:"P"}
]
},

{
id:2,
name:"Atlanta Braves",
players:[
{name:"Ronald Acuña Jr.",position:"OF"},
{name:"Austin Riley",position:"3B"},
{name:"Matt Olson",position:"1B"},
{name:"Ozzie Albies",position:"2B"},
{name:"Marcell Ozuna",position:"DH"},
{name:"Sean Murphy",position:"C"},
{name:"Orlando Arcia",position:"SS"},
{name:"Michael Harris II",position:"OF"},
{name:"Chris Sale",position:"P"},
{name:"Spencer Strider",position:"P"}
]
},

{
id:3,
name:"Baltimore Orioles",
players:[
{name:"Gunnar Henderson",position:"SS"},
{name:"Adley Rutschman",position:"C"},
{name:"Jackson Holliday",position:"2B"},
{name:"Ryan Mountcastle",position:"1B"},
{name:"Anthony Santander",position:"OF"},
{name:"Colton Cowser",position:"OF"},
{name:"Jordan Westburg",position:"3B"},
{name:"Cedric Mullins",position:"OF"},
{name:"Corbin Burnes",position:"P"},
{name:"Grayson Rodriguez",position:"P"}
]
},

{
id:4,
name:"Boston Red Sox",
players:[
{name:"Rafael Devers",position:"3B"},
{name:"Jarren Duran",position:"OF"},
{name:"Triston Casas",position:"1B"},
{name:"Wilyer Abreu",position:"OF"},
{name:"Ceddanne Rafaela",position:"SS"},
{name:"Masataka Yoshida",position:"OF"},
{name:"Connor Wong",position:"C"},
{name:"Trevor Story",position:"SS"},
{name:"Brayan Bello",position:"P"},
{name:"Garrett Whitlock",position:"P"}
]
},

{
id:5,
name:"Chicago Cubs",
players:[
{name:"Dansby Swanson",position:"SS"},
{name:"Seiya Suzuki",position:"OF"},
{name:"Ian Happ",position:"OF"},
{name:"Nico Hoerner",position:"2B"},
{name:"Michael Busch",position:"1B"},
{name:"Cody Bellinger",position:"OF"},
{name:"Miguel Amaya",position:"C"},
{name:"Christopher Morel",position:"3B"},
{name:"Shota Imanaga",position:"P"},
{name:"Justin Steele",position:"P"}
]
},

{
id:6,
name:"Chicago White Sox",
players:[
{name:"Luis Robert Jr.",position:"OF"},
{name:"Andrew Vaughn",position:"1B"},
{name:"Andrew Benintendi",position:"OF"},
{name:"Lenyn Sosa",position:"2B"},
{name:"Yoan Moncada",position:"3B"},
{name:"Korey Lee",position:"C"},
{name:"Paul DeJong",position:"SS"},
{name:"Gavin Sheets",position:"1B"},
{name:"Garrett Crochet",position:"P"},
{name:"Michael Soroka",position:"P"}
]
},

{
id:7,
name:"Cincinnati Reds",
players:[
{name:"Elly De La Cruz",position:"SS"},
{name:"Matt McLain",position:"2B"},
{name:"Spencer Steer",position:"1B"},
{name:"TJ Friedl",position:"OF"},
{name:"Jeimer Candelario",position:"3B"},
{name:"Jonathan India",position:"2B"},
{name:"Will Benson",position:"OF"},
{name:"Tyler Stephenson",position:"C"},
{name:"Hunter Greene",position:"P"},
{name:"Andrew Abbott",position:"P"}
]
},

{
id:8,
name:"Cleveland Guardians",
players:[
{name:"Jose Ramirez",position:"3B"},
{name:"Steven Kwan",position:"OF"},
{name:"Josh Naylor",position:"1B"},
{name:"Andres Gimenez",position:"2B"},
{name:"Bo Naylor",position:"C"},
{name:"David Fry",position:"C"},
{name:"Brayan Rocchio",position:"SS"},
{name:"Lane Thomas",position:"OF"},
{name:"Tanner Bibee",position:"P"},
{name:"Triston McKenzie",position:"P"}
]
},

{
id:9,
name:"Colorado Rockies",
players:[
{name:"Ezequiel Tovar",position:"SS"},
{name:"Brenton Doyle",position:"OF"},
{name:"Ryan McMahon",position:"3B"},
{name:"Kris Bryant",position:"OF"},
{name:"Michael Toglia",position:"1B"},
{name:"Elias Diaz",position:"C"},
{name:"Nolan Jones",position:"OF"},
{name:"Adael Amador",position:"2B"},
{name:"Kyle Freeland",position:"P"},
{name:"German Marquez",position:"P"}
]
},

{
id:10,
name:"Detroit Tigers",
players:[
{name:"Riley Greene",position:"OF"},
{name:"Spencer Torkelson",position:"1B"},
{name:"Kerry Carpenter",position:"OF"},
{name:"Colt Keith",position:"2B"},
{name:"Matt Vierling",position:"OF"},
{name:"Javier Baez",position:"SS"},
{name:"Jake Rogers",position:"C"},
{name:"Zach McKinstry",position:"3B"},
{name:"Tarik Skubal",position:"P"},
{name:"Reese Olson",position:"P"}
]
}

];
{

id:11,
name:"Houston Astros",
players:[
{name:"Jose Altuve",position:"2B"},
{name:"Yordan Alvarez",position:"OF"},
{name:"Kyle Tucker",position:"OF"},
{name:"Alex Bregman",position:"3B"},
{name:"Jeremy Pena",position:"SS"},
{name:"Yainer Diaz",position:"C"},
{name:"Jose Abreu",position:"1B"},
{name:"Jake Meyers",position:"OF"},
{name:"Framber Valdez",position:"P"},
{name:"Hunter Brown",position:"P"}
]
},

{
id:12,
name:"Kansas City Royals",
players:[
{name:"Bobby Witt Jr.",position:"SS"},
{name:"Salvador Perez",position:"C"},
{name:"Vinnie Pasquantino",position:"1B"},
{name:"Maikel Garcia",position:"3B"},
{name:"MJ Melendez",position:"OF"},
{name:"Kyle Isbel",position:"OF"},
{name:"Adam Frazier",position:"2B"},
{name:"Nelson Velazquez",position:"OF"},
{name:"Cole Ragans",position:"P"},
{name:"Brady Singer",position:"P"}
]
},

{
id:13,
name:"Los Angeles Angels",
players:[
{name:"Mike Trout",position:"OF"},
{name:"Taylor Ward",position:"OF"},
{name:"Logan O'Hoppe",position:"C"},
{name:"Nolan Schanuel",position:"1B"},
{name:"Anthony Rendon",position:"3B"},
{name:"Zach Neto",position:"SS"},
{name:"Jo Adell",position:"OF"},
{name:"Luis Rengifo",position:"2B"},
{name:"Tyler Anderson",position:"P"},
{name:"Reid Detmers",position:"P"}
]
},

{
id:14,
name:"Los Angeles Dodgers",
players:[
{name:"Shohei Ohtani",position:"DH"},
{name:"Mookie Betts",position:"IF"},
{name:"Freddie Freeman",position:"1B"},
{name:"Teoscar Hernandez",position:"OF"},
{name:"Will Smith",position:"C"},
{name:"Max Muncy",position:"3B"},
{name:"Gavin Lux",position:"2B"},
{name:"Andy Pages",position:"OF"},
{name:"Yoshinobu Yamamoto",position:"P"},
{name:"Tyler Glasnow",position:"P"}
]
},

{
id:15,
name:"Miami Marlins",
players:[
{name:"Jazz Chisholm Jr.",position:"OF"},
{name:"Jake Burger",position:"3B"},
{name:"Josh Bell",position:"1B"},
{name:"Xavier Edwards",position:"2B"},
{name:"Nick Gordon",position:"OF"},
{name:"Bryan De La Cruz",position:"OF"},
{name:"Jesus Sanchez",position:"OF"},
{name:"Nick Fortes",position:"C"},
{name:"Jesus Luzardo",position:"P"},
{name:"Edward Cabrera",position:"P"}
]
},

{
id:16,
name:"Milwaukee Brewers",
players:[
{name:"William Contreras",position:"C"},
{name:"Christian Yelich",position:"OF"},
{name:"Willy Adames",position:"SS"},
{name:"Brice Turang",position:"2B"},
{name:"Rhys Hoskins",position:"1B"},
{name:"Sal Frelick",position:"OF"},
{name:"Jackson Chourio",position:"OF"},
{name:"Joey Ortiz",position:"3B"},
{name:"Freddy Peralta",position:"P"},
{name:"DL Hall",position:"P"}
]
},

{
id:17,
name:"Minnesota Twins",
players:[
{name:"Carlos Correa",position:"SS"},
{name:"Byron Buxton",position:"OF"},
{name:"Royce Lewis",position:"3B"},
{name:"Jose Miranda",position:"1B"},
{name:"Max Kepler",position:"OF"},
{name:"Edouard Julien",position:"2B"},
{name:"Ryan Jeffers",position:"C"},
{name:"Trevor Larnach",position:"OF"},
{name:"Pablo Lopez",position:"P"},
{name:"Joe Ryan",position:"P"}
]
},

{
id:18,
name:"New York Mets",
players:[
{name:"Francisco Lindor",position:"SS"},
{name:"Pete Alonso",position:"1B"},
{name:"Brandon Nimmo",position:"OF"},
{name:"Starling Marte",position:"OF"},
{name:"J.D. Martinez",position:"DH"},
{name:"Francisco Alvarez",position:"C"},
{name:"Jeff McNeil",position:"2B"},
{name:"Mark Vientos",position:"3B"},
{name:"Kodai Senga",position:"P"},
{name:"Luis Severino",position:"P"}
]
},

{
id:19,
name:"New York Yankees",
players:[
{name:"Aaron Judge",position:"OF"},
{name:"Juan Soto",position:"OF"},
{name:"Gleyber Torres",position:"2B"},
{name:"Anthony Volpe",position:"SS"},
{name:"Giancarlo Stanton",position:"DH"},
{name:"Anthony Rizzo",position:"1B"},
{name:"Austin Wells",position:"C"},
{name:"DJ LeMahieu",position:"IF"},
{name:"Gerrit Cole",position:"P"},
{name:"Carlos Rodon",position:"P"}
]
},

{
id:20,
name:"Oakland Athletics",
players:[
{name:"Brent Rooker",position:"OF"},
{name:"JJ Bleday",position:"OF"},
{name:"Zack Gelof",position:"2B"},
{name:"Shea Langeliers",position:"C"},
{name:"Lawrence Butler",position:"OF"},
{name:"Tyler Soderstrom",position:"1B"},
{name:"Max Schuemann",position:"IF"},
{name:"Miguel Andujar",position:"3B"},
{name:"JP Sears",position:"P"},
{name:"Mason Miller",position:"P"}
]
},
{
id:21,
name:"Philadelphia Phillies",
players:[
{name:"Bryce Harper",position:"1B"},
{name:"Trea Turner",position:"SS"},
{name:"Kyle Schwarber",position:"DH"},
{name:"Alec Bohm",position:"3B"},
{name:"J.T. Realmuto",position:"C"},
{name:"Nick Castellanos",position:"OF"},
{name:"Bryson Stott",position:"2B"},
{name:"Brandon Marsh",position:"OF"},
{name:"Zack Wheeler",position:"P"},
{name:"Aaron Nola",position:"P"}
]
},

{
id:22,
name:"Pittsburgh Pirates",
players:[
{name:"Oneil Cruz",position:"SS"},
{name:"Bryan Reynolds",position:"OF"},
{name:"Ke'Bryan Hayes",position:"3B"},
{name:"Andrew McCutchen",position:"OF"},
{name:"Nick Gonzales",position:"2B"},
{name:"Rowdy Tellez",position:"1B"},
{name:"Joey Bart",position:"C"},
{name:"Jack Suwinski",position:"OF"},
{name:"Paul Skenes",position:"P"},
{name:"Mitch Keller",position:"P"}
]
},

{
id:23,
name:"San Diego Padres",
players:[
{name:"Fernando Tatis Jr.",position:"OF"},
{name:"Manny Machado",position:"3B"},
{name:"Luis Arraez",position:"2B"},
{name:"Jurickson Profar",position:"OF"},
{name:"Xander Bogaerts",position:"SS"},
{name:"Jake Cronenworth",position:"1B"},
{name:"Jackson Merrill",position:"OF"},
{name:"Kyle Higashioka",position:"C"},
{name:"Dylan Cease",position:"P"},
{name:"Yu Darvish",position:"P"}
]
},

{
id:24,
name:"San Francisco Giants",
players:[
{name:"Matt Chapman",position:"3B"},
{name:"Jung Hoo Lee",position:"OF"},
{name:"Heliot Ramos",position:"OF"},
{name:"LaMonte Wade Jr.",position:"1B"},
{name:"Mike Yastrzemski",position:"OF"},
{name:"Patrick Bailey",position:"C"},
{name:"Tyler Fitzgerald",position:"SS"},
{name:"Thairo Estrada",position:"2B"},
{name:"Logan Webb",position:"P"},
{name:"Jordan Hicks",position:"P"}
]
},

{
id:25,
name:"Seattle Mariners",
players:[
{name:"Julio Rodriguez",position:"OF"},
{name:"Cal Raleigh",position:"C"},
{name:"Jorge Polanco",position:"2B"},
{name:"J.P. Crawford",position:"SS"},
{name:"Ty France",position:"1B"},
{name:"Josh Rojas",position:"3B"},
{name:"Luke Raley",position:"OF"},
{name:"Dominic Canzone",position:"OF"},
{name:"Luis Castillo",position:"P"},
{name:"George Kirby",position:"P"}
]
},

{
id:26,
name:"St. Louis Cardinals",
players:[
{name:"Nolan Arenado",position:"3B"},
{name:"Paul Goldschmidt",position:"1B"},
{name:"Willson Contreras",position:"C"},
{name:"Masyn Winn",position:"SS"},
{name:"Brendan Donovan",position:"2B"},
{name:"Lars Nootbaar",position:"OF"},
{name:"Jordan Walker",position:"OF"},
{name:"Alec Burleson",position:"OF"},
{name:"Sonny Gray",position:"P"},
{name:"Miles Mikolas",position:"P"}
]
},

{
id:27,
name:"Tampa Bay Rays",
players:[
{name:"Yandy Diaz",position:"1B"},
{name:"Isaac Paredes",position:"3B"},
{name:"Josh Lowe",position:"OF"},
{name:"Brandon Lowe",position:"2B"},
{name:"Jose Caballero",position:"SS"},
{name:"Jonny DeLuca",position:"OF"},
{name:"Ben Rortvedt",position:"C"},
{name:"Jose Siri",position:"OF"},
{name:"Zack Littell",position:"P"},
{name:"Taj Bradley",position:"P"}
]
},

{
id:28,
name:"Texas Rangers",
players:[
{name:"Corey Seager",position:"SS"},
{name:"Marcus Semien",position:"2B"},
{name:"Adolis Garcia",position:"OF"},
{name:"Josh Jung",position:"3B"},
{name:"Nathaniel Lowe",position:"1B"},
{name:"Wyatt Langford",position:"OF"},
{name:"Jonah Heim",position:"C"},
{name:"Leody Taveras",position:"OF"},
{name:"Nathan Eovaldi",position:"P"},
{name:"Max Scherzer",position:"P"}
]
},

{
id:29,
name:"Toronto Blue Jays",
players:[
{name:"Vladimir Guerrero Jr.",position:"1B"},
{name:"Bo Bichette",position:"SS"},
{name:"George Springer",position:"OF"},
{name:"Daulton Varsho",position:"OF"},
{name:"Ernie Clement",position:"3B"},
{name:"Alejandro Kirk",position:"C"},
{name:"Spencer Horwitz",position:"1B"},
{name:"Isiah Kiner-Falefa",position:"IF"},
{name:"Kevin Gausman",position:"P"},
{name:"Chris Bassitt",position:"P"}
]
},

{
id:30,
name:"Washington Nationals",
players:[
{name:"CJ Abrams",position:"SS"},
{name:"James Wood",position:"OF"},
{name:"Lane Thomas",position:"OF"},
{name:"Keibert Ruiz",position:"C"},
{name:"Luis Garcia Jr.",position:"2B"},
{name:"Joey Meneses",position:"1B"},
{name:"Eddie Rosario",position:"OF"},
{name:"Nick Senzel",position:"3B"},
{name:"MacKenzie Gore",position:"P"},
{name:"Josiah Gray",position:"P"}
]
}

];
