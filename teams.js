const teams = [
    {
        name: "Arizona Diamondbacks",
        roster: [
            { pos: "cf", number: 6, player: "Jake McCarthy", label: "CF" },
            { pos: "lf", number: 5, player: "Lourdes Gurriel Jr.", label: "LF" },
            { pos: "rf", number: 4, player: "Corbin Carroll", label: "RF" },
            { pos: "ss", number: 2, player: "Geraldo Perdomo", label: "SS" },
            { pos: "b2", number: 12, player: "Ketel Marte", label: "2B" },
            { pos: "b3", number: 28, player: "Eugenio Suarez", label: "3B" },
            { pos: "ace", number: 33, player: "Merrill Kelly", label: "ACE" },
            { pos: "b1", number: 26, player: "Pavin Smith", label: "1B" },
            { pos: "dh", number: 10, player: "Joc Pederson", label: "DH" },
            { pos: "c", number: 11, player: "Gabriel Moreno", label: "C" }
        ]
    },
    {
        name: "Atlanta Braves",
        roster: [
            { pos: "cf", number: 13, player: "Michael Harris II", label: "CF" },
            { pos: "lf", number: 16, player: "Jurickson Profar", label: "LF" },
            { pos: "rf", number: 17, player: "Marcell Ozuna", label: "RF" },
            { pos: "ss", number: 8, player: "Orlando Arcia", label: "SS" },
            { pos: "b2", number: 1, player: "Ozzie Albies", label: "2B" },
            { pos: "b3", number: 27, player: "Austin Riley", label: "3B" },
            { pos: "ace", number: 26, player: "Spencer Strider", label: "ACE" },
            { pos: "b1", number: 5, player: "Matt Olson", label: "1B" },
            { pos: "dh", number: 17, player: "Marcell Ozuna", label: "DH" },
            { pos: "c", number: 24, player: "Sean Murphy", label: "C" }
        ]
    },
    {
        name: "Baltimore Orioles",
        roster: [
            { pos: "cf", number: 21, player: "Cedric Mullins", label: "CF" },
            { pos: "lf", number: 35, player: "Colton Cowser", label: "LF" },
            { pos: "rf", number: 31, player: "Ryan O'Hearn", label: "RF" },
            { pos: "ss", number: 2, player: "Gunnar Henderson", label: "SS" },
            { pos: "b2", number: 29, player: "Jordan Westburg", label: "2B" },
            { pos: "b3", number: 32, player: "Coby Mayo", label: "3B" },
            { pos: "ace", number: 19, player: "Zach Eflin", label: "ACE" },
            { pos: "b1", number: 19, player: "Ryan Mountcastle", label: "1B" },
            { pos: "dh", number: 25, player: "Anthony Santander", label: "DH" },
            { pos: "c", number: 23, player: "Adley Rutschman", label: "C" }
        ]
    },
    {
        name: "Boston Red Sox",
        roster: [
            { pos: "cf", number: 43, player: "Ceddanne Rafaela", label: "CF" },
            { pos: "lf", number: 36, player: "Tyler O'Neill", label: "LF" },
            { pos: "rf", number: 16, player: "Wilyer Abreu", label: "RF" },
            { pos: "ss", number: 23, player: "Trevor Story", label: "SS" },
            { pos: "b2", number: 2, player: "Vaughn Grissom", label: "2B" },
            { pos: "b3", number: 11, player: "Rafael Devers", label: "3B" },
            { pos: "ace", number: 83, player: "Brayan Bello", label: "ACE" },
            { pos: "b1", number: 44, player: "Triston Casas", label: "1B" },
            { pos: "dh", number: 28, player: "Masataka Yoshida", label: "DH" },
            { pos: "c", number: 25, player: "Connor Wong", label: "C" }
        ]
    },
    {
        name: "Chicago Cubs",
        roster: [
            { pos: "cf", number: 24, player: "Pete Crow-Armstrong", label: "CF" },
            { pos: "lf", number: 8, player: "Ian Happ", label: "LF" },
            { pos: "rf", number: 22, player: "Kyle Tucker", label: "RF" },
            { pos: "ss", number: 7, player: "Dansby Swanson", label: "SS" },
            { pos: "b2", number: 4, player: "Nico Hoerner", label: "2B" },
            { pos: "b3", number: 27, player: "Matt Shaw", label: "3B" },
            { pos: "ace", number: 12, player: "Justin Steele", label: "ACE" },
            { pos: "b1", number: 3, player: "Michael Busch", label: "1B" },
            { pos: "dh", number: 32, player: "Seiya Suzuki", label: "DH" },
            { pos: "c", number: 9, player: "Miguel Amaya", label: "C" }
        ]
    },
    {
        name: "Chicago White Sox",
        roster: [
            { pos: "cf", number: 7, player: "Luis Robert Jr.", label: "CF" },
            { pos: "lf", number: 22, player: "Andrew Benintendi", label: "LF" },
            { pos: "rf", number: 23, player: "Oscar Colas", label: "RF" },
            { pos: "ss", number: 10, player: "Paul DeJong", label: "SS" },
            { pos: "b2", number: 20, player: "Lenyn Sosa", label: "2B" },
            { pos: "b3", number: 3, player: "Yoan Moncada", label: "3B" },
            { pos: "ace", number: 66, player: "Garrett Crochet", label: "ACE" },
            { pos: "b1", number: 79, player: "Andrew Vaughn", label: "1B" },
            { pos: "dh", number: 88, player: "Eloy Jimenez", label: "DH" },
            { pos: "c", number: 21, player: "Korey Lee", label: "C" }
        ]
    },
    {
        name: "Cincinnati Reds",
        roster: [
            { pos: "cf", number: 23, player: "Will Benson", label: "CF" },
            { pos: "lf", number: 44, player: "Elly De La Cruz", label: "LF" },
            { pos: "rf", number: 27, player: "Jake Fraley", label: "RF" },
            { pos: "ss", number: 44, player: "Elly De La Cruz", label: "SS" },
            { pos: "b2", number: 4, player: "Santiago Espinal", label: "2B" },
            { pos: "b3", number: 3, player: "Jeimer Candelario", label: "3B" },
            { pos: "ace", number: 46, player: "Hunter Greene", label: "ACE" },
            { pos: "b1", number: 19, player: "Christian Encarnacion-Strand", label: "1B" },
            { pos: "dh", number: 6, player: "Spencer Steer", label: "DH" },
            { pos: "c", number: 37, player: "Tyler Stephenson", label: "C" }
        ]
    },
    {
        name: "Cleveland Guardians",
        roster: [
            { pos: "cf", number: 24, player: "Tyler Freeman", label: "CF" },
            { pos: "lf", number: 8, player: "Steven Kwan", label: "LF" },
            { pos: "rf", number: 9, player: "Will Brennan", label: "RF" },
            { pos: "ss", number: 13, player: "Brayan Rocchio", label: "SS" },
            { pos: "b2", number: 7, player: "Andres Gimenez", label: "2B" },
            { pos: "b3", number: 11, player: "Jose Ramirez", label: "3B" },
            { pos: "ace", number: 57, player: "Shane Bieber", label: "ACE" },
            { pos: "b1", number: 22, player: "Josh Naylor", label: "1B" },
            { pos: "dh", number: 10, player: "David Fry", label: "DH" },
            { pos: "c", number: 27, player: "Bo Naylor", label: "C" }
        ]
    },
    {
        name: "Colorado Rockies",
        roster: [
            { pos: "cf", number: 9, player: "Brenton Doyle", label: "CF" },
            { pos: "lf", number: 24, player: "Kris Bryant", label: "LF" },
            { pos: "rf", number: 3, player: "Charlie Blackmon", label: "RF" },
            { pos: "ss", number: 14, player: "Ezequiel Tovar", label: "SS" },
            { pos: "b2", number: 15, player: "Brendan Rodgers", label: "2B" },
            { pos: "b3", number: 19, player: "Ryan McMahon", label: "3B" },
            { pos: "ace", number: 48, player: "German Marquez", label: "ACE" },
            { pos: "b1", number: 1, player: "Michael Toglia", label: "1B" },
            { pos: "dh", number: 7, player: "Elehuris Montero", label: "DH" },
            { pos: "c", number: 20, player: "Elias Diaz", label: "C" }
        ]
    },
    {
        name: "Detroit Tigers",
        roster: [
            { pos: "cf", number: 31, player: "Riley Greene", label: "CF" },
            { pos: "lf", number: 30, player: "Kerry Carpenter", label: "LF" },
            { pos: "rf", number: 43, player: "James Outman", label: "RF" },
            { pos: "ss", number: 7, player: "Kevin McGonigle", label: "SS" },
            { pos: "b2", number: 33, player: "Colt Keith", label: "2B" },
            { pos: "b3", number: 39, player: "Zach McKinstry", label: "3B" },
            { pos: "ace", number: 12, player: "Casey Mize", label: "ACE" },
            { pos: "b1", number: 20, player: "Spencer Torkelson", label: "1B" },
            { pos: "dh", number: 8, player: "Matt Vierling", label: "DH" },
            { pos: "c", number: 13, player: "Dillon Dingler", label: "C" }
        ]
    },
    {
        name: "Houston Astros",
        roster: [
            { pos: "cf", number: 44, player: "Jake Meyers", label: "CF" },
            { pos: "lf", number: 12, player: "Yordan Alvarez", label: "LF" },
            { pos: "rf", number: 20, player: "Chas McCormick", label: "RF" },
            { pos: "ss", number: 3, player: "Jeremy Pena", label: "SS" },
            { pos: "b2", number: 27, player: "Jose Altuve", label: "2B" },
            { pos: "b3", number: 2, player: "Alex Bregman", label: "3B" },
            { pos: "ace", number: 59, player: "Framber Valdez", label: "ACE" },
            { pos: "b1", number: 10, player: "Yuli Gurriel", label: "1B" },
            { pos: "dh", number: 12, player: "Yordan Alvarez", label: "DH" },
            { pos: "c", number: 15, player: "Martin Maldonado", label: "C" }
        ]
    },
    {
        name: "Kansas City Royals",
        roster: [
            { pos: "cf", number: 15, player: "Lane Thomas", label: "CF" },
            { pos: "lf", number: 0, player: "Starling Marte", label: "LF" },
            { pos: "rf", number: 14, player: "Jac Caglianone", label: "RF" },
            { pos: "ss", number: 7, player: "Bobby Witt Jr.", label: "SS" },
            { pos: "b2", number: 12, player: "Nick Loftin", label: "2B" },
            { pos: "b3", number: 40, player: "Josh Rojas", label: "3B" },
            { pos: "ace", number: 65, player: "Noah Cameron", label: "ACE" },
            { pos: "b1", number: 9, player: "Vinnie Pasquantino", label: "1B" },
            { pos: "dh", number: 2, player: "Tyler Tolbert", label: "DH" },
            { pos: "c", number: 13, player: "Salvador Perez", label: "C" }
        ]
    },
    {
        name: "Los Angeles Angels",
        roster: [
            { pos: "cf", number: 27, player: "Mike Trout", label: "CF" },
            { pos: "lf", number: 8, player: "Taylor Ward", label: "LF" },
            { pos: "rf", number: 12, player: "Hunter Renfroe", label: "RF" },
            { pos: "ss", number: 5, player: "Zach Neto", label: "SS" },
            { pos: "b2", number: 22, player: "Luis Rengifo", label: "2B" },
            { pos: "b3", number: 91, player: "Anthony Rendon", label: "3B" },
            { pos: "ace", number: 40, player: "Reid Detmers", label: "ACE" },
            { pos: "b1", number: 18, player: "Nolan Schanuel", label: "1B" },
            { pos: "dh", number: 17, player: "Shohei Ohtani", label: "DH" },
            { pos: "c", number: 10, player: "Logan O'Hoppe", label: "C" }
        ]
    },
    {
        name: "Los Angeles Dodgers",
        roster: [
            { pos: "cf", number: 25, player: "Tommy Edman", label: "CF" },
            { pos: "lf", number: 37, player: "Teoscar Hernandez", label: "LF" },
            { pos: "rf", number: 23, player: "Kyle Tucker", label: "RF" },
            { pos: "ss", number: 50, player: "Mookie Betts", label: "SS" },
            { pos: "b2", number: 13, player: "Max Muncy", label: "2B" },
            { pos: "b3", number: 5, player: "Freddie Freeman", label: "3B" },
            { pos: "ace", number: 17, player: "Shohei Ohtani", label: "ACE" },
            { pos: "b1", number: 44, player: "Andy Pages", label: "1B" },
            { pos: "dh", number: 17, player: "Shohei Ohtani", label: "DH" },
            { pos: "c", number: 68, player: "Dalton Rushing", label: "C" }
        ]
    },
    {
        name: "Miami Marlins",
        roster: [
            { pos: "cf", number: 16, player: "Derek Hill", label: "CF" },
            { pos: "lf", number: 3, player: "Jazz Chisholm Jr.", label: "LF" },
            { pos: "rf", number: 22, player: "Jesus Sanchez", label: "RF" },
            { pos: "ss", number: 5, player: "Tim Anderson", label: "SS" },
            { pos: "b2", number: 7, player: "Luis Arraez", label: "2B" },
            { pos: "b3", number: 9, player: "Jake Burger", label: "3B" },
            { pos: "ace", number: 28, player: "Jesus Luzardo", label: "ACE" },
            { pos: "b1", number: 13, player: "Josh Bell", label: "1B" },
            { pos: "dh", number: 10, player: "Bryan De La Cruz", label: "DH" },
            { pos: "c", number: 4, player: "Nick Fortes", label: "C" }
        ]
    },
    {
        name: "Milwaukee Brewers",
        roster: [
            { pos: "cf", number: 16, player: "Blake Perkins", label: "CF" },
            { pos: "lf", number: 22, player: "Christian Yelich", label: "LF" },
            { pos: "rf", number: 11, player: "Jackson Chourio", label: "RF" },
            { pos: "ss", number: 14, player: "Willy Adames", label: "SS" },
            { pos: "b2", number: 18, player: "Brice Turang", label: "2B" },
            { pos: "b3", number: 7, player: "Joey Ortiz", label: "3B" },
            { pos: "ace", number: 45, player: "Brandon Woodruff", label: "ACE" },
            { pos: "b1", number: 3, player: "Rhys Hoskins", label: "1B" },
            { pos: "dh", number: 21, player: "William Contreras", label: "DH" },
            { pos: "c", number: 10, player: "William Contreras", label: "C" }
        ]
    },
    {
        name: "Minnesota Twins",
        roster: [
            { pos: "cf", number: 25, player: "Byron Buxton", label: "CF" },
            { pos: "lf", number: 12, player: "Trevor Larnach", label: "LF" },
            { pos: "rf", number: 26, player: "Max Kepler", label: "RF" },
            { pos: "ss", number: 4, player: "Carlos Correa", label: "SS" },
            { pos: "b2", number: 16, player: "Edouard Julien", label: "2B" },
            { pos: "b3", number: 11, player: "Royce Lewis", label: "3B" },
            { pos: "ace", number: 49, player: "Pablo Lopez", label: "ACE" },
            { pos: "b1", number: 38, player: "Alex Kirilloff", label: "1B" },
            { pos: "dh", number: 22, player: "Ryan Jeffers", label: "DH" },
            { pos: "c", number: 27, player: "Ryan Jeffers", label: "C" }
        ]
    },
    {
        name: "New York Mets",
        roster: [
            { pos: "cf", number: 6, player: "Harrison Bader", label: "CF" },
            { pos: "lf", number: 9, player: "Brandon Nimmo", label: "LF" },
            { pos: "rf", number: 44, player: "Starling Marte", label: "RF" },
            { pos: "ss", number: 1, player: "Francisco Lindor", label: "SS" },
            { pos: "b2", number: 7, player: "Jeff McNeil", label: "2B" },
            { pos: "b3", number: 12, player: "Mark Vientos", label: "3B" },
            { pos: "ace", number: 30, player: "Kodai Senga", label: "ACE" },
            { pos: "b1", number: 20, player: "Pete Alonso", label: "1B" },
            { pos: "dh", number: 12, player: "J.D. Martinez", label: "DH" },
            { pos: "c", number: 4, player: "Francisco Alvarez", label: "C" }
        ]
    },
    {
        name: "New York Yankees",
        roster: [
            { pos: "cf", number: 22, player: "Jasson Dominguez", label: "CF" },
            { pos: "lf", number: 24, player: "Alex Verdugo", label: "LF" },
            { pos: "rf", number: 99, player: "Aaron Judge", label: "RF" },
            { pos: "ss", number: 2, player: "Anthony Volpe", label: "SS" },
            { pos: "b2", number: 25, player: "Gleyber Torres", label: "2B" },
            { pos: "b3", number: 11, player: "DJ LeMahieu", label: "3B" },
            { pos: "ace", number: 45, player: "Gerrit Cole", label: "ACE" },
            { pos: "b1", number: 48, player: "Anthony Rizzo", label: "1B" },
            { pos: "dh", number: 27, player: "Giancarlo Stanton", label: "DH" },
            { pos: "c", number: 28, player: "Austin Wells", label: "C" }
        ]
    },
    {
        name: "Oakland Athletics",
        roster: [
            { pos: "cf", number: 2, player: "JJ Bleday", label: "CF" },
            { pos: "lf", number: 25, player: "Brent Rooker", label: "LF" },
            { pos: "rf", number: 23, player: "Lawrence Butler", label: "RF" },
            { pos: "ss", number: 1, player: "Nick Allen", label: "SS" },
            { pos: "b2", number: 13, player: "Zack Gelof", label: "2B" },
            { pos: "b3", number: 7, player: "Tyler Soderstrom", label: "3B" },
            { pos: "ace", number: 58, player: "JP Sears", label: "ACE" },
            { pos: "b1", number: 26, player: "Seth Brown", label: "1B" },
            { pos: "dh", number: 25, player: "Brent Rooker", label: "DH" },
            { pos: "c", number: 15, player: "Shea Langeliers", label: "C" }
        ]
    },
    {
        name: "Philadelphia Phillies",
        roster: [
            { pos: "cf", number: 49, player: "Derek Hill", label: "CF" },
            { pos: "lf", number: 16, player: "Brandon Marsh", label: "LF" },
            { pos: "rf", number: 3, player: "Bryce Harper", label: "RF" },
            { pos: "ss", number: 7, player: "Trea Turner", label: "SS" },
            { pos: "b2", number: 5, player: "Bryson Stott", label: "2B" },
            { pos: "b3", number: 28, player: "Alec Bohm", label: "3B" },
            { pos: "ace", number: 61, player: "Cristopher Sanchez", label: "ACE" },
            { pos: "b1", number: 12, player: "Kyle Schwarber", label: "1B" },
            { pos: "dh", number: 12, player: "Kyle Schwarber", label: "DH" },
            { pos: "c", number: 10, player: "J.T. Realmuto", label: "C" }
        ]
    },
    {
        name: "Pittsburgh Pirates",
        roster: [
            { pos: "cf", number: 15, player: "Oneil Cruz", label: "CF" },
            { pos: "lf", number: 10, player: "Bryan Reynolds", label: "LF" },
            { pos: "rf", number: 25, player: "Edward Olivares", label: "RF" },
            { pos: "ss", number: 15, player: "Oneil Cruz", label: "SS" },
            { pos: "b2", number: 13, player: "Nick Gonzales", label: "2B" },
            { pos: "b3", number: 3, player: "Ke'Bryan Hayes", label: "3B" },
            { pos: "ace", number: 49, player: "Mitch Keller", label: "ACE" },
            { pos: "b1", number: 55, player: "Rowdy Tellez", label: "1B" },
            { pos: "dh", number: 22, player: "Andrew McCutchen", label: "DH" },
            { pos: "c", number: 35, player: "Henry Davis", label: "C" }
        ]
    },
    {
        name: "San Diego Padres",
        roster: [
            { pos: "cf", number: 3, player: "Jackson Merrill", label: "CF" },
            { pos: "lf", number: 41, player: "Miguel Andujar", label: "LF" },
            { pos: "rf", number: 23, player: "Fernando Tatis Jr.", label: "RF" },
            { pos: "ss", number: 2, player: "Xander Bogaerts", label: "SS" },
            { pos: "b2", number: 9, player: "Jake Cronenworth", label: "2B" },
            { pos: "b3", number: 13, player: "Manny Machado", label: "3B" },
            { pos: "ace", number: 38, player: "JP Sears", label: "ACE" },
            { pos: "b1", number: 25, player: "Ty France", label: "1B" },
            { pos: "dh", number: 30, player: "Gavin Sheets", label: "DH" },
            { pos: "c", number: 12, player: "Luis Campusano", label: "C" }
        ]
    },
    {
        name: "San Francisco Giants",
        roster: [
            { pos: "cf", number: 8, player: "Jung Hoo Lee", label: "CF" },
            { pos: "lf", number: 17, player: "Heliot Ramos", label: "LF" },
            { pos: "rf", number: 51, player: "Mike Yastrzemski", label: "RF" },
            { pos: "ss", number: 39, player: "Tyler Fitzgerald", label: "SS" },
            { pos: "b2", number: 1, player: "Thairo Estrada", label: "2B" },
            { pos: "b3", number: 16, player: "Matt Chapman", label: "3B" },
            { pos: "ace", number: 75, player: "Logan Webb", label: "ACE" },
            { pos: "b1", number: 12, player: "LaMonte Wade Jr.", label: "1B" },
            { pos: "dh", number: 2, player: "Wilmer Flores", label: "DH" },
            { pos: "c", number: 14, player: "Patrick Bailey", label: "C" }
        ]
    },
    {
        name: "Seattle Mariners",
        roster: [
            { pos: "cf", number: 20, player: "Luke Raley", label: "CF" },
            { pos: "lf", number: 56, player: "Randy Arozarena", label: "LF" },
            { pos: "rf", number: 10, player: "Victor Robles", label: "RF" },
            { pos: "ss", number: 3, player: "J.P. Crawford", label: "SS" },
            { pos: "b2", number: 2, player: "Cole Young", label: "2B" },
            { pos: "b3", number: 4, player: "Colt Emerson", label: "3B" },
            { pos: "ace", number: 26, player: "Emerson Hancock", label: "ACE" },
            { pos: "b1", number: 12, player: "Josh Naylor", label: "1B" },
            { pos: "dh", number: 18, player: "Mitch Garver", label: "DH" },
            { pos: "c", number: 29, player: "Cal Raleigh", label: "C" }
        ]
    },
    {
        name: "St. Louis Cardinals",
        roster: [
            { pos: "cf", number: 34, player: "Lars Nootbaar", label: "CF" },
            { pos: "lf", number: 47, player: "Brendan Donovan", label: "LF" },
            { pos: "rf", number: 16, player: "Jordan Walker", label: "RF" },
            { pos: "ss", number: 11, player: "Masyn Winn", label: "SS" },
            { pos: "b2", number: 5, player: "Nolan Gorman", label: "2B" },
            { pos: "b3", number: 28, player: "Nolan Arenado", label: "3B" },
            { pos: "ace", number: 18, player: "Sonny Gray", label: "ACE" },
            { pos: "b1", number: 46, player: "Paul Goldschmidt", label: "1B" },
            { pos: "dh", number: 19, player: "Alec Burleson", label: "DH" },
            { pos: "c", number: 7, player: "Willson Contreras", label: "C" }
        ]
    },
    {
        name: "Tampa Bay Rays",
        roster: [
            { pos: "cf", number: 8, player: "Jose Siri", label: "CF" },
            { pos: "lf", number: 56, player: "Randy Arozarena", label: "LF" },
            { pos: "rf", number: 17, player: "Jonny DeLuca", label: "RF" },
            { pos: "ss", number: 10, player: "Wander Franco", label: "SS" },
            { pos: "b2", number: 2, player: "Yandy Diaz", label: "2B" },
            { pos: "b3", number: 13, player: "Junior Caminero", label: "3B" },
            { pos: "ace", number: 22, player: "Zack Littell", label: "ACE" },
            { pos: "b1", number: 1, player: "Isaac Paredes", label: "1B" },
            { pos: "dh", number: 43, player: "Harold Ramirez", label: "DH" },
            { pos: "c", number: 28, player: "Rene Pinto", label: "C" }
        ]
    },
    {
        name: "Texas Rangers",
        roster: [
            { pos: "cf", number: 32, player: "Evan Carter", label: "CF" },
            { pos: "lf", number: 24, player: "Brandon Nimmo", label: "LF" },
            { pos: "rf", number: 19, player: "Alejandro Osuna", label: "RF" },
            { pos: "ss", number: 8, player: "Josh Smith", label: "SS" },
            { pos: "b2", number: 33, player: "Nicky Lopez", label: "2B" },
            { pos: "b3", number: 6, player: "Josh Jung", label: "3B" },
            { pos: "ace", number: 80, player: "Kumar Rocker", label: "ACE" },
            { pos: "b1", number: 21, player: "Jake Burger", label: "1B" },
            { pos: "dh", number: 3, player: "Joc Pederson", label: "DH" },
            { pos: "c", number: 35, player: "Elias Diaz", label: "C" }
        ]
    },
    {
        name: "Toronto Blue Jays",
        roster: [
            { pos: "cf", number: 5, player: "Daulton Varsho", label: "CF" },
            { pos: "lf", number: 38, player: "Nathan Lukes", label: "LF" },
            { pos: "rf", number: 24, player: "Yohendrick Pinango", label: "RF" },
            { pos: "ss", number: 7, player: "Kazuma Okamoto", label: "SS" },
            { pos: "b2", number: 48, player: "Luis Urias", label: "2B" },
            { pos: "b3", number: 22, player: "Ernie Clement", label: "3B" },
            { pos: "ace", number: 39, player: "Trey Yesavage", label: "ACE" },
            { pos: "b1", number: 27, player: "Vladimir Guerrero Jr.", label: "1B" },
            { pos: "dh", number: 3, player: "Myles Straw", label: "DH" },
            { pos: "c", number: 30, player: "Alejandro Kirk", label: "C" }
        ]
    },
    {
        name: "Washington Nationals",
        roster: [
            { pos: "cf", number: 1, player: "Dylan Crews", label: "CF" },
            { pos: "lf", number: 2, player: "Alex Call", label: "LF" },
            { pos: "rf", number: 28, player: "Lane Thomas", label: "RF" },
            { pos: "ss", number: 5, player: "CJ Abrams", label: "SS" },
            { pos: "b2", number: 6, player: "Luis Garcia Jr.", label: "2B" },
            { pos: "b3", number: 13, player: "Nick Senzel", label: "3B" },
            { pos: "ace", number: 47, player: "MacKenzie Gore", label: "ACE" },
            { pos: "b1", number: 29, player: "Joey Meneses", label: "1B" },
            { pos: "dh", number: 45, player: "Joey Gallo", label: "DH" },
            { pos: "c", number: 15, player: "Keibert Ruiz", label: "C" }
        ]
    }
