const teams = [
    {
        name: "Los Angeles Dodgers",
        roster: [
            { pos: "cf", number: 25, player: "Tommy Edman", label: "CF" },
            { pos: "lf", number: 37, player: "Teoscar Hernández", label: "LF" },
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
            { pos: "c", number: 35, player: "Elias Díaz", label: "C" }
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
        name: "Philadelphia Phillies",
        roster: [
            { pos: "cf", number: 49, player: "Derek Hill", label: "CF" },
            { pos: "lf", number: 16, player: "Brandon Marsh", label: "LF" },
            { pos: "rf", number: 3, player: "Bryce Harper", label: "RF" },
            { pos: "ss", number: 7, player: "Trea Turner", label: "SS" },
            { pos: "b2", number: 5, player: "Bryson Stott", label: "2B" },
            { pos: "b3", number: 28, player: "Alec Bohm", label: "3B" },
            { pos: "ace", number: 61, player: "Cristopher Sánchez", label: "ACE" },
            { pos: "b1", number: 12, player: "Kyle Schwarber", label: "1B" },
            { pos: "dh", number: 12, player: "Kyle Schwarber", label: "DH" },
            { pos: "c", number: 10, player: "J.T. Realmuto", label: "C" }
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
    }
];
