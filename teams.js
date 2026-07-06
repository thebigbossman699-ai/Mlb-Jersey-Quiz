const TEAMS = [
  {
    team: "Arizona Diamondbacks",
    abbr: "ARI",
    numbers: { CF: 12, LF: 7, RF: 14, SS: 5, "2B": 4, "3B": 2, SP1: 23, "1B": 53, DH: 16, C: 8 },
    players: { SP1: "Zac Gallen", C: "Gabriel Moreno", "1B": "Christian Walker", "2B": "Ketel Marte", "3B": "Eugenio Suárez", SS: "Geraldo Perdomo", LF: "Corbin Carroll", CF: "Alek Thomas", RF: "Jake McCarthy", DH: "Joc Pederson" }
  },
  {
    team: "Atlanta Braves",
    abbr: "ATL",
    numbers: { CF: 13, LF: 1, RF: 16, SS: 11, "2B": 27, "3B": 28, SP1: 51, "1B": 24, DH: 20, C: 12 },
    players: { SP1: "Chris Sale", C: "Sean Murphy", "1B": "Matt Olson", "2B": "Ozzie Albies", "3B": "Austin Riley", SS: "Orlando Arcia", LF: "Jarred Kelenic", CF: "Michael Harris II", RF: "Ronald Acuña Jr.", DH: "Marcell Ozuna" }
  },
  {
    team: "Baltimore Orioles",
    abbr: "BAL",
    numbers: { CF: 31, LF: 17, RF: 25, SS: 2, "2B": 29, "3B": 11, SP1: 39, "1B": 32, DH: 16, C: 35 },
    players: { SP1: "Corbin Burnes", C: "Adley Rutschman", "1B": "Ryan Mountcastle", "2B": "Jackson Holliday", "3B": "Jordan Westburg", SS: "Gunnar Henderson", LF: "Colton Cowser", CF: "Cedric Mullins", RF: "Anthony Santander", DH: "Ryan O'Hearn" }
  },
  {
    team: "Boston Red Sox",
    abbr: "BOS",
    numbers: { CF: 16, LF: 7, RF: 38, SS: 10, "2B": 2, "3B": 11, SP1: 39, "1B": 36, DH: 16, C: 28 },
    players: { SP1: "Brayan Bello", C: "Connor Wong", "1B": "Triston Casas", "2B": "Vaughn Grissom", "3B": "Rafael Devers", SS: "Trevor Story", LF: "Jarren Duran", CF: "Ceddanne Rafaela", RF: "Wilyer Abreu", DH: "Masataka Yoshida" }
  },
  {
    team: "Chicago Cubs",
    abbr: "CHC",
    numbers: { CF: 24, LF: 4, RF: 8, SS: 7, "2B": 2, "3B": 29, SP1: 41, "1B": 36, DH: 17, C: 28 },
    players: { SP1: "Shota Imanaga", C: "Miguel Amaya", "1B": "Michael Busch", "2B": "Nico Hoerner", "3B": "Isaac Paredes", SS: "Dansby Swanson", LF: "Ian Happ", CF: "Pete Crow-Armstrong", RF: "Seiya Suzuki", DH: "Cody Bellinger" }
  },
  {
    team: "Chicago White Sox",
    abbr: "CWS",
    numbers: { CF: 88, LF: 23, RF: 15, SS: 7, "2B": 1, "3B": 5, SP1: 45, "1B": 25, DH: 20, C: 24 },
    players: { SP1: "Garrett Crochet", C: "Korey Lee", "1B": "Andrew Vaughn", "2B": "Nicky Lopez", "3B": "Yoán Moncada", SS: "Paul DeJong", LF: "Andrew Benintendi", CF: "Luis Robert Jr.", RF: "Gavin Sheets", DH: "Eloy Jiménez" }
  },
  {
    team: "Cincinnati Reds",
    abbr: "CIN",
    numbers: { CF: 29, LF: 30, RF: 33, SS: 44, "2B": 3, "3B": 7, SP1: 21, "1B": 19, DH: 12, C: 37 },
    players: { SP1: "Hunter Greene", C: "Tyler Stephenson", "1B": "Jeimer Candelario", "2B": "Jonathan India", "3B": "Noelvi Marte", SS: "Elly De La Cruz", LF: "Spencer Steer", CF: "TJ Friedl", RF: "Jake Fraley", DH: "Will Benson" }
  },
  {
    team: "Cleveland Guardians",
    abbr: "CLE",
    numbers: { CF: 25, LF: 38, RF: 22, SS: 0, "2B": 4, "3B": 13, SP1: 24, "1B": 11, DH: 7, C: 23 },
    players: { SP1: "Tanner Bibee", C: "Bo Naylor", "1B": "Josh Naylor", "2B": "Andrés Giménez", "3B": "José Ramírez", SS: "Brayan Rocchio", LF: "Steven Kwan", CF: "Myles Straw", RF: "Will Brennan", DH: "David Fry" }
  },
  {
    team: "Colorado Rockies",
    abbr: "COL",
    numbers: { CF: 9, LF: 23, RF: 15, SS: 14, "2B": 4, "3B": 10, SP1: 18, "1B": 27, DH: 24, C: 35 },
    players: { SP1: "Kyle Freeland", C: "Elias Díaz", "1B": "Elehuris Montero", "2B": "Brendan Rodgers", "3B": "Ryan McMahon", SS: "Ezequiel Tovar", LF: "Nolan Jones", CF: "Brenton Doyle", RF: "Charlie Blackmon", DH: "Kris Bryant" }
  },
  {
    team: "Detroit Tigers",
    abbr: "DET",
    numbers: { CF: 31, LF: 46, RF: 30, SS: 39, "2B": 3, "3B": 20, SP1: 29, "1B": 33, DH: 13, C: 13 },
    players: { SP1: "Tarik Skubal", C: "Jake Rogers", "1B": "Spencer Torkelson", "2B": "Colt Keith", "3B": "Matt Vierling", SS: "Javier Báez", LF: "Riley Greene", CF: "Parker Meadows", RF: "Kerry Carpenter", DH: "Mark Canha" }
  },
  {
    team: "Houston Astros",
    abbr: "HOU",
    numbers: { CF: 3, LF: 30, RF: 44, SS: 27, "2B": 2, "3B": 14, SP1: 35, "1B": 79, DH: 15, C: 21 },
    players: { SP1: "Framber Valdez", C: "Yainer Diaz", "1B": "José Abreu", "2B": "Jose Altuve", "3B": "Alex Bregman", SS: "Jeremy Peña", LF: "Yordan Alvarez", CF: "Jake Meyers", RF: "Kyle Tucker", DH: "Chas McCormick" }
  },
  {
    team: "Kansas City Royals",
    abbr: "KC",
    numbers: { CF: 1, LF: 28, RF: 13, SS: 7, "2B": 2, "3B": 9, SP1: 55, "1B": 16, DH: 18, C: 34 },
    players: { SP1: "Cole Ragans", C: "Salvador Perez", "1B": "Vinnie Pasquantino", "2B": "Michael Massey", "3B": "Maikel Garcia", SS: "Bobby Witt Jr.", LF: "MJ Melendez", CF: "Kyle Isbel", RF: "Hunter Renfroe", DH: "Nelson Velázquez" }
  },
  {
    team: "Los Angeles Angels",
    abbr: "LAA",
    numbers: { CF: 27, LF: 12, RF: 9, SS: 4, "2B": 2, "3B": 18, SP1: 17, "1B": 3, DH: 5, C: 14 },
    players: { SP1: "Reid Detmers", C: "Logan O'Hoppe", "1B": "Nolan Schanuel", "2B": "Brandon Drury", "3B": "Anthony Rendon", SS: "Zach Neto", LF: "Taylor Ward", CF: "Mike Trout", RF: "Jo Adell", DH: "Jorge Soler" }
  },
  {
    team: "Los Angeles Dodgers",
    abbr: "LAD",
    numbers: { CF: 25, LF: 37, RF: 16, SS: 50, "2B": 5, "3B": 13, SP1: 22, "1B": 5, DH: 17, C: 16 },
    players: { SP1: "Tyler Glasnow", C: "Will Smith", "1B": "Freddie Freeman", "2B": "Gavin Lux", "3B": "Max Muncy", SS: "Mookie Betts", LF: "Teoscar Hernández", CF: "Tommy Edman", RF: "Andy Pages", DH: "Shohei Ohtani" }
  },
  {
    team: "Miami Marlins",
    abbr: "MIA",
    numbers: { CF: 1, LF: 17, RF: 15, SS: 7, "2B": 3, "3B": 24, SP1: 22, "1B": 36, DH: 12, C: 58 },
    players: { SP1: "Jesús Luzardo", C: "Nick Fortes", "1B": "Josh Bell", "2B": "Luis Arraez", "3B": "Jake Burger", SS: "Tim Anderson", LF: "Bryan De La Cruz", CF: "Jazz Chisholm Jr.", RF: "Jesús Sánchez", DH: "Avisaíl García" }
  },
  {
    team: "Milwaukee Brewers",
    abbr: "MIL",
    numbers: { CF: 10, LF: 22, RF: 24, SS: 2, "2B": 27, "3B": 11, SP1: 32, "1B": 12, DH: 18, C: 15 },
    players: { SP1: "Freddy Peralta", C: "William Contreras", "1B": "Rhys Hoskins", "2B": "Brice Turang", "3B": "Joey Ortiz", SS: "Willy Adames", LF: "Christian Yelich", CF: "Jackson Chourio", RF: "Sal Frelick", DH: "Gary Sánchez" }
  },
  {
    team: "Minnesota Twins",
    abbr: "MIN",
    numbers: { CF: 25, LF: 38, RF: 38, SS: 4, "2B": 2, "3B": 11, SP1: 17, "1B": 30, DH: 20, C: 37 },
    players: { SP1: "Pablo López", C: "Ryan Jeffers", "1B": "Carlos Santana", "2B": "Edouard Julien", "3B": "Royce Lewis", SS: "Carlos Correa", LF: "Max Kepler", CF: "Byron Buxton", RF: "Matt Wallner", DH: "Trevor Larnach" }
  },
  {
    team: "New York Mets",
    abbr: "NYM",
    numbers: { CF: 9, LF: 20, RF: 12, SS: 1, "2B": 4, "3B": 28, SP1: 34, "1B": 20, DH: 15, C: 33 },
    players: { SP1: "Kodai Senga", C: "Francisco Alvarez", "1B": "Pete Alonso", "2B": "Jeff McNeil", "3B": "Mark Vientos", SS: "Francisco Lindor", LF: "Brandon Nimmo", CF: "Harrison Bader", RF: "Starling Marte", DH: "J.D. Martinez" }
  },
  {
    team: "New York Yankees",
    abbr: "NYY",
    numbers: { CF: 99, LF: 11, RF: 22, SS: 25, "2B": 26, "3B": 13, SP1: 45, "1B": 48, DH: 27, C: 28 },
    players: { SP1: "Gerrit Cole", C: "Austin Wells", "1B": "Anthony Rizzo", "2B": "Gleyber Torres", "3B": "Jazz Chisholm Jr.", SS: "Anthony Volpe", LF: "Alex Verdugo", CF: "Aaron Judge", RF: "Juan Soto", DH: "Giancarlo Stanton" }
  },
  {
    team: "Oakland Athletics",
    abbr: "OAK",
    numbers: { CF: 20, LF: 31, RF: 25, SS: 5, "2B": 2, "3B": 7, SP1: 40, "1B": 49, DH: 15, C: 23 },
    players: { SP1: "JP Sears", C: "Shea Langeliers", "1B": "Ryan Noda", "2B": "Zack Gelof", "3B": "Abraham Toro", SS: "Nick Allen", LF: "JJ Bleday", CF: "Esteury Ruiz", RF: "Brent Rooker", DH: "Seth Brown" }
  },
  {
    team: "Philadelphia Phillies",
    abbr: "PHI",
    numbers: { CF: 8, LF: 12, RF: 3, SS: 7, "2B": 2, "3B": 28, SP1: 45, "1B": 17, DH: 10, C: 23 },
    players: { SP1: "Zack Wheeler", C: "J.T. Realmuto", "1B": "Bryce Harper", "2B": "Bryson Stott", "3B": "Alec Bohm", SS: "Trea Turner", LF: "Brandon Marsh", CF: "Johan Rojas", RF: "Nick Castellanos", DH: "Kyle Schwarber" }
  },
  {
    team: "Pittsburgh Pirates",
    abbr: "PIT",
    numbers: { CF: 65, LF: 10, RF: 15, SS: 3, "2B": 39, "3B": 13, SP1: 30, "1B": 19, DH: 22, C: 32 },
    players: { SP1: "Mitch Keller", C: "Henry Davis", "1B": "Rowdy Tellez", "2B": "Nick Gonzales", "3B": "Ke'Bryan Hayes", SS: "Oneil Cruz", LF: "Bryan Reynolds", CF: "Michael A. Taylor", RF: "Connor Joe", DH: "Andrew McCutchen" }
  },
  {
    team: "San Diego Padres",
    abbr: "SD",
    numbers: { CF: 23, LF: 10, RF: 3, SS: 7, "2B": 2, "3B": 13, SP1: 11, "1B": 9, DH: 20, C: 17 },
    players: { SP1: "Dylan Cease", C: "Luis Campusano", "1B": "Jake Cronenworth", "2B": "Xander Bogaerts", "3B": "Manny Machado", SS: "Ha-Seong Kim", LF: "Jurickson Profar", CF: "Jackson Merrill", RF: "Fernando Tatis Jr.", DH: "Donovan Solano" }
  },
  {
    team: "San Francisco Giants",
    abbr: "SF",
    numbers: { CF: 51, LF: 29, RF: 5, SS: 14, "2B": 39, "3B": 26, SP1: 62, "1B": 41, DH: 17, C: 14 },
    players: { SP1: "Logan Webb", C: "Patrick Bailey", "1B": "LaMonte Wade Jr.", "2B": "Thairo Estrada", "3B": "Matt Chapman", SS: "Tyler Fitzgerald", LF: "Michael Conforto", CF: "Jung Hoo Lee", RF: "Mike Yastrzemski", DH: "Jorge Soler" }
  },
  {
    team: "Seattle Mariners",
    abbr: "SEA",
    numbers: { CF: 44, LF: 10, RF: 20, SS: 3, "2B": 4, "3B": 29, SP1: 36, "1B": 23, DH: 17, C: 2 },
    players: { SP1: "Logan Gilbert", C: "Cal Raleigh", "1B": "Ty France", "2B": "Jorge Polanco", "3B": "Luis Urías", SS: "J.P. Crawford", LF: "Randy Arozarena", CF: "Julio Rodríguez", RF: "Mitch Haniger", DH: "Mitch Garver" }
  },
  {
    team: "St. Louis Cardinals",
    abbr: "STL",
    numbers: { CF: 21, LF: 19, RF: 3, SS: 0, "2B": 33, "3B": 28, SP1: 50, "1B": 46, DH: 18, C: 40 },
    players: { SP1: "Sonny Gray", C: "Willson Contreras", "1B": "Paul Goldschmidt", "2B": "Nolan Gorman", "3B": "Nolan Arenado", SS: "Masyn Winn", LF: "Lars Nootbaar", CF: "Michael Siani", RF: "Jordan Walker", DH: "Alec Burleson" }
  },
  {
    team: "Tampa Bay Rays",
    abbr: "TB",
    numbers: { CF: 19, LF: 17, RF: 15, SS: 7, "2B": 2, "3B": 5, SP1: 22, "1B": 62, DH: 21, C: 30 },
    players: { SP1: "Shane Baz", C: "Ben Rortvedt", "1B": "Yandy Díaz", "2B": "Brandon Lowe", "3B": "Isaac Paredes", SS: "José Caballero", LF: "Randy Arozarena", CF: "Jose Siri", RF: "Josh Lowe", DH: "Harold Ramírez" }
  },
  {
    team: "Texas Rangers",
    abbr: "TEX",
    numbers: { CF: 53, LF: 36, RF: 5, SS: 2, "2B": 20, "3B": 6, SP1: 48, "1B": 30, DH: 18, C: 47 },
    players: { SP1: "Jacob deGrom", C: "Jonah Heim", "1B": "Nathaniel Lowe", "2B": "Marcus Semien", "3B": "Josh Jung", SS: "Corey Seager", LF: "Evan Carter", CF: "Leody Taveras", RF: "Adolis García", DH: "Wyatt Langford" }
  },
  {
    team: "Toronto Blue Jays",
    abbr: "TOR",
    numbers: { CF: 25, LF: 11, RF: 4, SS: 7, "2B": 27, "3B": 13, SP1: 34, "1B": 30, DH: 14, C: 30 },
    players: { SP1: "Kevin Gausman", C: "Alejandro Kirk", "1B": "Vladimir Guerrero Jr.", "2B": "Davis Schneider", "3B": "Bo Bichette", SS: "Ernie Clement", LF: "Daulton Varsho", CF: "George Springer", RF: "Nathan Lukes", DH: "Justin Turner" }
  },
  {
    team: "Washington Nationals",
    abbr: "WSH",
    numbers: { CF: 1, LF: 28, RF: 29, SS: 5, "2B": 2, "3B": 11, SP1: 40, "1B": 19, DH: 20, C: 14 },
    players: { SP1: "Jake Irvin", C: "Keibert Ruiz", "1B": "Joey Meneses", "2B": "Luis García Jr.", "3B": "Nick Senzel", SS: "CJ Abrams", LF: "Jesse Winker", CF: "Jacob Young", RF: "Lane Thomas", DH: "Joey Gallo" }
  }
];
