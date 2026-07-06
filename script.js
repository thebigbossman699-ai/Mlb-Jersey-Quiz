const teams = [
    {
        name: "Arizona Diamondbacks",
        roster: [
            { pos: "cf", number: 12, player: "Drey Jameson", label: "CF" },
            { pos: "lf", number: 7, player: "Corbin Carroll", label: "LF" },
            { pos: "rf", number: 14, player: "Lourdes Gurriel Jr.", label: "RF" },
            { pos: "ss", number: 5, player: "Eugenio Suarez", label: "SS" },
            { pos: "b2", number: 4, player: "Ketel Marte", label: "2B" },
            { pos: "b3", number: 2, player: "Geraldo Perdomo", label: "3B" },
            { pos: "ace", number: 23, player: "Zac Gallen", label: "ACE" },
            { pos: "b1", number: 53, player: "Christian Walker", label: "1B" },
            { pos: "dh", number: 16, player: "Joc Pederson", label: "DH" },
            { pos: "c", number: 8, player: "Gabriel Moreno", label: "C" }
        ]
    },
    {
        name: "Atlanta Braves",
        roster: [
            { pos: "cf", number: 13, player: "Michael Harris II", label: "CF" },
            { pos: "lf", number: 1, player: "Ozzie Albies", label: "LF" },
            { pos: "rf", number: 16, player: "Jarred Kelenic", label: "RF" },
            { pos: "ss", number: 11, player: "Orlando Arcia", label: "SS" },
            { pos: "b2", number: 27, player: "Austin Riley", label: "2B" },
            { pos: "b3", number: 28, player: "Matt Olson", label: "3B" },
            { pos: "ace", number: 51, player: "Chris Sale", label: "ACE" },
            { pos: "b1", number: 24, player: "Sean Murphy", label: "1B" },
            { pos: "dh", number: 20, player: "Marcell Ozuna", label: "DH" },
            { pos: "c", number: 12, player: "Travis d'Arnaud", label: "C" }
        ]
    },
    {
        name: "Baltimore Orioles",
        roster: [
            { pos: "cf", number: 31, player: "Cedric Mullins", label: "CF" },
            { pos: "lf", number: 17, player: "Colton Cowser", label: "LF" },
            { pos: "rf", number: 25, player: "Anthony Santander", label: "RF" },
            { pos: "ss", number: 2, player: "Gunnar Henderson", label: "SS" },
            { pos: "b2", number: 29, player: "Jordan Westburg", label: "2B" },
            { pos: "b3", number: 11, player: "Jackson Holliday", label: "3B" },
            { pos: "ace", number: 39, player: "Corbin Burnes", label: "ACE" },
            { pos: "b1", number: 32, player: "Ryan Mountcastle", label: "1B" },
            { pos: "dh", number: 16, player: "Ryan O'Hearn", label: "DH" },
            { pos: "c", number: 35, player: "Adley Rutschman", label: "C" }
        ]
    },
    {
        name: "Boston Red Sox",
        roster: [
            { pos: "cf", number: 16, player: "Jarren Duran", label: "CF" },
            { pos: "lf", number: 7, player: "Masataka Yoshida", label: "LF" },
            { pos: "rf", number: 38, player: "Rob Refsnyder", label: "RF" },
            { pos: "ss", number: 10, player: "Trevor Story", label: "SS" },
            { pos: "b2", number: 2, player: "Vaughn Grissom", label: "2B" },
            { pos: "b3", number: 11, player: "Rafael Devers", label: "3B" },
            { pos: "ace", number: 39, player: "Tanner Houck", label: "ACE" },
            { pos: "b1", number: 36, player: "Triston Casas", label: "1B" },
            { pos: "dh", number: 16, player: "Tyler O'Neill", label: "DH" },
            { pos: "c", number: 28, player: "Connor Wong", label: "C" }
        ]
    },
    {
        name: "Chicago Cubs",
        roster: [
            { pos: "cf", number: 24, player: "Pete Crow-Armstrong", label: "CF" },
            { pos: "lf", number: 4, player: "Mike Tauchman", label: "LF" },
            { pos: "rf", number: 8, player: "Ian Happ", label: "RF" },
            { pos: "ss", number: 7, player: "Dansby Swanson", label: "SS" },
            { pos: "b2", number: 2, player: "Nico Hoerner", label: "2B" },
            { pos: "b3", number: 29, player: "Michael Busch", label: "3B" },
            { pos: "ace", number: 41, player: "Justin Steele", label: "ACE" },
            { pos: "b1", number: 36, player: "Cody Bellinger", label: "1B" },
            { pos: "dh", number: 17, player: "Seiya Suzuki", label: "DH" },
            { pos: "c", number: 28, player: "Miguel Amaya", label: "C" }
        ]
    },
    {
        name: "Chicago White Sox",
        roster: [
            { pos: "cf", number: 88, player: "Luis Robert Jr.", label: "CF" },
            { pos: "lf", number: 23, player: "Andrew Benintendi", label: "LF" },
            { pos: "rf", number: 15, player: "Gavin Sheets", label: "RF" },
            { pos: "ss", number: 7, player: "Nicky Lopez", label: "SS" },
            { pos: "b2", number: 1, player: "Yoan Moncada", label: "2B" },
            { pos: "b3", number: 5, player: "Bryan Ramos", label: "3B" },
            { pos: "ace", number: 45, player: "Garrett Crochet", label: "ACE" },
            { pos: "b1", number: 25, player: "Andrew Vaughn", label: "1B" },
            { pos: "dh", number: 20, player: "Eloy Jimenez", label: "DH" },
            { pos: "c", number: 24, player: "Korey Lee", label: "C" }
        ]
    },
    {
        name: "Cincinnati Reds",
        roster: [
            { pos: "cf", number: 29, player: "TJ Friedl", label: "CF" },
            { pos: "lf", number: 30, player: "Will Benson", label: "LF" },
            { pos: "rf", number: 33, player: "Jake Fraley", label: "RF" },
            { pos: "ss", number: 44, player: "Elly De La Cruz", label: "SS" },
            { pos: "b2", number: 3, player: "Jeimer Candelario", label: "2B" },
            { pos: "b3", number: 7, player: "Spencer Steer", label: "3B" },
            { pos: "ace", number: 21, player: "Hunter Greene", label: "ACE" },
            { pos: "b1", number: 19, player: "Christian Encarnacion-Strand", label: "1B" },
            { pos: "dh", number: 12, player: "Nick Martini", label: "DH" },
            { pos: "c", number: 37, player: "Tyler Stephenson", label: "C" }
        ]
    },
    {
        name: "Cleveland Guardians",
        roster: [
            { pos: "cf", number: 25, player: "Lane Thomas", label: "CF" },
            { pos: "lf", number: 38, player: "Steven Kwan", label: "LF" },
            { pos: "rf", number: 22, player: "Will Brennan", label: "RF" },
            { pos: "ss", number: 0, player: "Andres Gimenez", label: "SS" },
            { pos: "b2", number: 4, player: "Brayan Rocchio", label: "2B" },
            { pos: "b3", number: 13, player: "Jose Ramirez", label: "3B" },
            { pos: "ace", number: 24, player: "Tanner Bibee", label: "ACE" },
            { pos: "b1", number: 11, player: "Josh Naylor", label: "1B" },
            { pos: "dh", number: 7, player: "David Fry", label: "DH" },
            { pos: "c", number: 23, player: "Bo Naylor", label: "C" }
        ]
    },
    {
        name: "Colorado Rockies",
        roster: [
            { pos: "cf", number: 9, player: "Brenton Doyle", label: "CF" },
            { pos: "lf", number: 23, player: "Kris Bryant", label: "LF" },
            { pos: "rf", number: 15, player: "Charlie Blackmon", label: "RF" },
            { pos: "ss", number: 14, player: "Ezequiel Tovar", label: "SS" },
            { pos: "b2", number: 4, player: "Brendan Rodgers", label: "2B" },
            { pos: "b3", number: 10, player: "Ryan McMahon", label: "3B" },
            { pos: "ace", number: 18, player: "Cal Quantrill", label: "ACE" },
            { pos: "b1", number: 27, player: "Michael Toglia", label: "1B" },
            { pos: "dh", number: 24, player: "Elehuris Montero", label: "DH" },
            { pos: "c", number: 35, player: "Elias Diaz", label: "C" }
        ]
    },
    {
        name: "Detroit Tigers",
        roster: [
            { pos: "cf", number: 31, player: "Riley Greene", label: "CF" },
            { pos: "lf", number: 46, player: "Wenceel Perez", label: "LF" },
            { pos: "rf", number: 30, player: "Kerry Carpenter", label: "RF" },
            { pos: "ss", number: 39, player: "Zach McKinstry", label: "SS" },
            { pos: "b2", number: 3, player: "Colt Keith", label: "2B" },
            { pos: "b3", number: 20, player: "Spencer Torkelson", label: "3B" },
            { pos: "ace", number: 29, player: "Tarik Skubal", label: "ACE" },
            { pos: "b1", number: 33, player: "Mark Canha", label: "1B" },
            { pos: "dh", number: 13, player: "Matt Vierling", label: "DH" },
            { pos: "c", number: 13, player: "Jake Rogers", label: "C" }
        ]
    },
    {
        name: "Houston Astros",
        roster: [
            { pos: "cf", number: 3, player: "Jeremy Pena", label: "CF" },
            { pos: "lf", number: 30, player: "Kyle Tucker", label: "LF" },
            { pos: "rf", number: 44, player: "Yordan Alvarez", label: "RF" },
            { pos: "ss", number: 27, player: "Jose Altuve", label: "SS" },
            { pos: "b2", number: 2, player: "Alex Bregman", label: "2B" },
            { pos: "b3", number: 14, player: "Mauricio Dubon", label: "3B" },
            { pos: "ace", number: 35, player: "Justin Verlander", label: "ACE" },
            { pos: "b1", number: 79, player: "Jose Abreu", label: "1B" },
            { pos: "dh", number: 15, player: "Chas McCormick", label: "DH" },
            { pos: "c", number: 21, player: "Yainer Diaz", label: "C" }
        ]
    },
    {
        name: "Kansas City Royals",
        roster: [
            { pos: "cf", number: 1, player: "Kyle Isbel", label: "CF" },
            { pos: "lf", number: 28, player: "MJ Melendez", label: "LF" },
            { pos: "rf", number: 13, player: "Salvador Perez", label: "RF" },
            { pos: "ss", number: 7, player: "Bobby Witt Jr.", label: "SS" },
            { pos: "b2", number: 2, player: "Michael Massey", label: "2B" },
            { pos: "b3", number: 9, player: "Vinnie Pasquantino", label: "3B" },
            { pos: "ace", number: 55, player: "Cole Ragans", label: "ACE" },
            { pos: "b1", number: 16, player: "Hunter Renfroe", label: "1B" },
            { pos: "dh", number: 18, player: "Adam Frazier", label: "DH" },
            { pos: "c", number: 34, player: "Freddy Fermin", label: "C" }
        ]
    },
    {
        name: "Los Angeles Angels",
        roster: [
            { pos: "cf", number: 27, player: "Mike Trout", label: "CF" },
            { pos: "lf", number: 12, player: "Kevin Pillar", label: "LF" },
            { pos: "rf", number: 9, player: "Jo Adell", label: "RF" },
            { pos: "ss", number: 4, player: "Zach Neto", label: "SS" },
            { pos: "b2", number: 2, player: "Luis Rengifo", label: "2B" },
            { pos: "b3", number: 18, player: "Anthony Rendon", label: "3B" },
            { pos: "ace", number: 17, player: "Tyler Anderson", label: "ACE" },
            { pos: "b1", number: 3, player: "Nolan Schanuel", label: "1B" },
            { pos: "dh", number: 5, player: "Taylor Ward", label: "DH" },
            { pos: "c", number: 14, player: "Logan O'Hoppe", label: "C" }
        ]
    },
    {
        name: "Los Angeles Dodgers",
        roster: [
            { pos: "cf", number: 25, player: "Tommy Edman", label: "CF" },
            { pos: "lf", number: 37, player: "Teoscar Hernandez", label: "LF" },
            { pos: "rf", number: 16, player: "Andy Pages", label: "RF" },
            { pos: "ss", number: 50, player: "Mookie Betts", label: "SS" },
            { pos: "b2", number: 5, player: "Freddie Freeman", label: "2B" },
            { pos: "b3", number: 13, player: "Max Muncy", label: "3B" },
            { pos: "ace", number: 22, player: "Tyler Glasnow", label: "ACE" },
            { pos: "b1", number: 5, player: "Gavin Lux", label: "1B" },
            { pos: "dh", number: 17, player: "Shohei Ohtani", label: "DH" },
            { pos: "c", number: 16, player: "Will Smith", label: "C" }
        ]
    },
    {
        name: "Miami Marlins",
        roster: [
            { pos: "cf", number: 1, player: "Jazz Chisholm Jr.", label: "CF" },
            { pos: "lf", number: 17, player: "Bryan De La Cruz", label: "LF" },
            { pos: "rf", number: 15, player: "Jesus Sanchez", label: "RF" },
            { pos: "ss", number: 7, player: "Tim Anderson", label: "SS" },
            { pos: "b2", number: 3, player: "Luis Arraez", label: "2B" },
            { pos: "b3", number: 24, player: "Jake Burger", label: "3B" },
            { pos: "ace", number: 22, player: "Jesus Luzardo", label: "ACE" },
            { pos: "b1", number: 36, player: "Josh Bell", label: "1B" },
            { pos: "dh", number: 12, player: "Nick Gordon", label: "DH" },
            { pos: "c", number: 58, player: "Nick Fortes", label: "C" }
        ]
    },
    {
        name: "Milwaukee Brewers",
        roster: [
            { pos: "cf", number: 10, player: "Sal Frelick", label: "CF" },
            { pos: "lf", number: 22, player: "Christian Yelich", label: "LF" },
            { pos: "rf", number: 24, player: "William Contreras", label: "RF" },
            { pos: "ss", number: 2, player: "Brice Turang", label: "SS" },
            { pos: "b2", number: 27, player: "Willy Adames", label: "2B" },
            { pos: "b3", number: 11, player: "Jackson Chourio", label: "3B" },
            { pos: "ace", number: 32, player: "Freddy Peralta", label: "ACE" },
            { pos: "b1", number: 12, player: "Rhys Hoskins", label: "1B" },
            { pos: "dh", number: 18, player: "Gary Sanchez", label: "DH" },
            { pos: "c", number: 15, player: "Eric Haase", label: "C" }
        ]
    },
    {
        name: "Minnesota Twins",
        roster: [
            { pos: "cf", number: 25, player: "Byron Buxton", label: "CF" },
            { pos: "lf", number: 13, player: "Trevor Larnach", label: "LF" },
            { pos: "rf", number: 38, player: "Max Kepler", label: "RF" },
            { pos: "ss", number: 4, player: "Carlos Correa", label: "SS" },
            { pos: "b2", number: 2, player: "Edouard Julien", label: "2B" },
            { pos: "b3", number: 11, player: "Royce Lewis", label: "3B" },
            { pos: "ace", number: 17, player: "Joe Ryan", label: "ACE" },
            { pos: "b1", number: 30, player: "Carlos Santana", label: "1B" },
            { pos: "dh", number: 20, player: "Ryan Jeffers", label: "DH" },
            { pos: "c", number: 37, player: "Christian Vazquez", label: "C" }
        ]
    },
    {
        name: "New York Mets",
        roster: [
            { pos: "cf", number: 9, player: "Brandon Nimmo", label: "CF" },
            { pos: "lf", number: 20, player: "DJ Stewart", label: "LF" },
            { pos: "rf", number: 12, player: "Starling Marte", label: "RF" },
            { pos: "ss", number: 1, player: "Francisco Lindor", label: "SS" },
            { pos: "b2", number: 4, player: "Jeff McNeil", label: "2B" },
            { pos: "b3", number: 28, player: "Mark Vientos", label: "3B" },
            { pos: "ace", number: 34, player: "Kodai Senga", label: "ACE" },
            { pos: "b1", number: 20, player: "Pete Alonso", label: "1B" },
            { pos: "dh", number: 15, player: "J.D. Martinez", label: "DH" },
            { pos: "c", number: 33, player: "Francisco Alvarez", label: "C" }
        ]
    },
    {
        name: "New York Yankees",
        roster: [
            { pos: "cf", number: 99, player: "Aaron Judge", label: "CF" },
            { pos: "lf", number: 11, player: "Alex Verdugo", label: "LF" },
            { pos: "rf", number: 22, player: "Juan Soto", label: "RF" },
            { pos: "ss", number: 25, player: "Gleyber Torres", label: "SS" },
            { pos: "b2", number: 26, player: "DJ LeMahieu", label: "2B" },
            { pos: "b3", number: 13, player: "Jazz Chisholm Jr.", label: "3B" },
            { pos: "ace", number: 45, player: "Gerrit Cole", label: "ACE" },
            { pos: "b1", number: 48, player: "Anthony Rizzo", label: "1B" },
            { pos: "dh", number: 27, player: "Giancarlo Stanton", label: "DH" },
            { pos: "c", number: 28, player: "Austin Wells", label: "C" }
        ]
    },
    {
        name: "Oakland Athletics",
        roster: [
            { pos: "cf", number: 20, player: "JJ Bleday", label: "CF" },
            { pos: "lf", number: 31, player: "Lawrence Butler", label: "LF" },
            { pos: "rf", number: 25, player: "Brent Rooker", label: "RF" },
            { pos: "ss", number: 5, player: "Max Schuemann", label: "SS" },
            { pos: "b2", number: 2, player: "Zack Gelof", label: "2B" },
            { pos: "b3", number: 7, player: "Tyler Soderstrom", label: "3B" },
            { pos: "ace", number: 40, player: "Mitch Spence", label: "ACE" },
            { pos: "b1", number: 49, player: "Ryan Noda", label: "1B" },
            { pos: "dh", number: 15, player: "Seth Brown", label: "DH" },
            { pos: "c", number: 23, player: "Shea Langeliers", label: "C" }
        ]
    },
    {
        name: "Philadelphia Phillies",
        roster: [
            { pos: "cf", number: 8, player: "Brandon Marsh", label: "CF" },
            { pos: "lf", number: 12, player: "Kyle Schwarber", label: "LF" },
            { pos: "rf", number: 3, player: "Bryce Harper", label: "RF" },
            { pos: "ss", number: 7, player: "Trea Turner", label: "SS" },
            { pos: "b2", number: 2, player: "Bryson Stott", label: "2B" },
            { pos: "b3", number: 28, player: "Alec Bohm", label: "3B" },
            { pos: "ace", number: 45, player: "Zack Wheeler", label: "ACE" },
            { pos: "b1", number: 17, player: "Nick Castellanos", label: "1B" },
            { pos: "dh", number: 10, player: "J.T. Realmuto", label: "DH" },
            { pos: "c", number: 23, player: "Garrett Stubbs", label: "C" }
        ]
    },
    {
        name: "Pittsburgh Pirates",
        roster: [
            { pos: "cf", number: 65, player: "Jack Suwinski", label: "CF" },
            { pos: "lf", number: 10, player: "Bryan Reynolds", label: "LF" },
            { pos: "rf", number: 15, player: "Oneil Cruz", label: "RF" },
            { pos: "ss", number: 3, player: "Ke'Bryan Hayes", label: "SS" },
            { pos: "b2", number: 39, player: "Nick Gonzales", label: "2B" },
            { pos: "b3", number: 13, player: "Jared Triolo", label: "3B" },
            { pos: "ace", number: 30, player: "Paul Skenes", label: "ACE" },
            { pos: "b1", number: 19, player: "Rowdy Tellez", label: "1B" },
            { pos: "dh", number: 22, player: "Andrew McCutchen", label: "DH" },
            { pos: "c", number: 32, player: "Henry Davis", label: "C" }
        ]
    },
    {
        name: "San Diego Padres",
        roster: [
            { pos: "cf", number: 23, player: "Fernando Tatis Jr.", label: "CF" },
            { pos: "lf", number: 10, player: "Jurickson Profar", label: "LF" },
            { pos: "rf", number: 3, player: "Jackson Merrill", label: "RF" },
            { pos: "ss", number: 7, player: "Ha-Seong Kim", label: "SS" },
            { pos: "b2", number: 2, player: "Xander Bogaerts", label: "2B" },
            { pos: "b3", number: 13, player: "Manny Machado", label: "3B" },
            { pos: "ace", number: 11, player: "Yu Darvish", label: "ACE" },
            { pos: "b1", number: 9, player: "Jake Cronenworth", label: "1B" },
            { pos: "dh", number: 20, player: "Luis Campusano", label: "DH" },
            { pos: "c", number: 17, player: "Kyle Higashioka", label: "C" }
        ]
    },
    {
        name: "San Francisco Giants",
        roster: [
            { pos: "cf", number: 51, player: "Jung Hoo Lee", label: "CF" },
            { pos: "lf", number: 29, player: "Michael Conforto", label: "LF" },
            { pos: "rf", number: 5, player: "Mike Yastrzemski", label: "RF" },
            { pos: "ss", number: 14, player: "Tyler Fitzgerald", label: "SS" },
            { pos: "b2", number: 39, player: "Thairo Estrada", label: "2B" },
            { pos: "b3", number: 26, player: "Matt Chapman", label: "3B" },
            { pos: "ace", number: 62, player: "Logan Webb", label: "ACE" },
            { pos: "b1", number: 41, player: "LaMonte Wade Jr.", label: "1B" },
            { pos: "dh", number: 17, player: "Heliot Ramos", label: "DH" },
            { pos: "c", number: 14, player: "Patrick Bailey", label: "C" }
        ]
    },
    {
        name: "Seattle Mariners",
        roster: [
            { pos: "cf", number: 44, player: "Julio Rodriguez", label: "CF" },
            { pos: "lf", number: 10, player: "Luke Raley", label: "LF" },
            { pos: "rf", number: 20, player: "Victor Robles", label: "RF" },
            { pos: "ss", number: 3, player: "J.P. Crawford", label: "SS" },
            { pos: "b2", number: 4, player: "Jorge Polanco", label: "2B" },
            { pos: "b3", number: 29, player: "Cal Raleigh", label: "3B" },
            { pos: "ace", number: 36, player: "Logan Gilbert", label: "ACE" },
            { pos: "b1", number: 23, player: "Ty France", label: "1B" },
            { pos: "dh", number: 17, player: "Mitch Garver", label: "DH" },
            { pos: "c", number: 2, player: "Mitch Haniger", label: "C" }
        ]
    },
    {
        name: "St. Louis Cardinals",
        roster: [
            { pos: "cf", number: 21, player: "Lars Nootbaar", label: "CF" },
            { pos: "lf", number: 19, player: "Alec Burleson", label: "LF" },
            { pos: "rf", number: 3, player: "Jordan Walker", label: "RF" },
            { pos: "ss", number: 0, player: "Masyn Winn", label: "SS" },
            { pos: "b2", number: 33, player: "Brendan Donovan", label: "2B" },
            { pos: "b3", number: 28, player: "Nolan Arenado", label: "3B" },
            { pos: "ace", number: 50, player: "Sonny Gray", label: "ACE" },
            { pos: "b1", number: 46, player: "Paul Goldschmidt", label: "1B" },
            { pos: "dh", number: 18, player: "Ivan Herrera", label: "DH" },
            { pos: "c", number: 40, player: "Willson Contreras", label: "C" }
        ]
    },
    {
        name: "Tampa Bay Rays",
        roster: [
            { pos: "cf", number: 19, player: "Jose Siri", label: "CF" },
            { pos: "lf", number: 17, player: "Randy Arozarena", label: "LF" },
            { pos: "rf", number: 15, player: "Jonny DeLuca", label: "RF" },
            { pos: "ss", number: 7, player: "Taylor Walls", label: "SS" },
            { pos: "b2", number: 2, player: "Yandy Diaz", label: "2B" },
            { pos: "b3", number: 5, player: "Isaac Paredes", label: "3B" },
            { pos: "ace", number: 22, player: "Zach Eflin", label: "ACE" },
            { pos: "b1", number: 62, player: "Jonathan Aranda", label: "1B" },
            { pos: "dh", number: 21, player: "Harold Ramirez", label: "DH" },
            { pos: "c", number: 30, player: "Ben Rortvedt", label: "C" }
        ]
    },
    {
        name: "Texas Rangers",
        roster: [
            { pos: "cf", number: 53, player: "Leody Taveras", label: "CF" },
            { pos: "lf", number: 36, player: "Evan Carter",
