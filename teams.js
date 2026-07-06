const teams = [
    {
        name: "Los Angeles Dodgers",
        roster: [
            { pos: "CF", number: 25, player: "Tommy Edman", label: "CF" },
            { pos: "LF", number: 37, player: "Teoscar Hernández", label: "LF" },
            { pos: "RF", number: 23, player: "Kyle Tucker", label: "RF" },
            { pos: "SS", number: 50, player: "Mookie Betts", label: "SS" },
            { pos: "2B", number: 13, player: "Max Muncy", label: "2B" },
            { pos: "3B", number: 5, player: "Freddie Freeman", label: "3B" },
            { pos: "ACE", number: 17, player: "Shohei Ohtani", label: "ACE" },
            { pos: "1B", number: 44, player: "Andy Pages", label: "1B" },
            { pos: "DH", number: 17, player: "Shohei Ohtani", label: "DH" },
            { pos: "C", number: 68, player: "Dalton Rushing", label: "C" }
        ]
    },
    {
        name: "San Diego Padres",
        roster: [
            { pos: "CF", number: 3, player: "Jackson Merrill", label: "CF" },
            { pos: "LF", number: 41, player: "Miguel Andujar", label: "LF" },
            { pos: "RF", number: 23, player: "Fernando Tatis Jr.", label: "RF" },
            { pos: "SS", number: 2, player: "Xander Bogaerts", label: "SS" },
            { pos: "2B", number: 9, player: "Jake Cronenworth", label: "2B" },
            { pos: "3B", number: 13, player: "Manny Machado", label: "3B" },
            { pos: "ACE", number: 38, player: "JP Sears", label: "ACE" },
            { pos: "1B", number: 25, player: "Ty France", label: "1B" },
            { pos: "DH", number: 30, player: "Gavin Sheets", label: "DH" },
            { pos: "C", number: 12, player: "Luis Campusano", label: "C" }
        ]
    },
    {
        name: "Detroit Tigers",
        roster: [
            { pos: "CF", number: 31, player: "Riley Greene", label: "CF" },
            { pos: "LF", number: 30, player: "Kerry Carpenter", label: "LF" },
            { pos: "RF", number: 43, player: "James Outman", label: "RF" },
            { pos: "SS", number: 7, player: "Kevin McGonigle", label: "SS" },
            { pos: "2B", number: 33, player: "Colt Keith", label: "2B" },
            { pos: "3B", number: 39, player: "Zach McKinstry", label: "3B" },
            { pos: "ACE", number: 12, player: "Casey Mize", label: "ACE" },
            { pos: "1B", number: 20, player: "Spencer Torkelson", label: "1B" },
            { pos: "DH", number: 8, player: "Matt Vierling", label: "DH" },
            { pos: "C", number: 13, player: "Dillon Dingler", label: "C" }
        ]
    },
    {
        name: "Texas Rangers",
        roster: [
            { pos: "CF", number: 32, player: "Evan Carter", label: "CF" },
            { pos: "LF", number: 24, player: "Brandon Nimmo", label: "LF" },
            { pos: "RF", number: 19, player: "Alejandro Osuna", label: "RF" },
            { pos: "SS", number: 8, player: "Josh Smith", label: "SS" },
            { pos: "2B", number: 33, player: "Nicky Lopez", label: "2B" },
            { pos: "3B", number: 6, player: "Josh Jung", label: "3B" },
            { pos: "ACE", number: 80, player: "Kumar Rocker", label: "ACE" },
            { pos: "1B", number: 21, player: "Jake Burger", label: "1B" },
            { pos: "DH", number: 3, player: "Joc Pederson", label: "DH" },
            { pos: "C", number: 35, player: "Elias Díaz", label: "C" }
        ]
    },
    {
        name: "Seattle Mariners",
        roster: [
            { pos: "CF", number: 20, player: "Luke Raley", label: "CF" },
            { pos: "LF", number: 56, player: "Randy Arozarena", label: "LF" },
            { pos: "RF", number: 10, player: "Victor Robles", label: "RF" },
            { pos: "SS", number: 3, player: "J.P. Crawford", label: "SS" },
            { pos: "2B", number: 2, player: "Cole Young", label: "2B" },
            { pos: "3B", number: 4, player: "Colt Emerson", label: "3B" },
            { pos: "ACE", number: 26, player: "Emerson Hancock", label: "ACE" },
            { pos: "1B", number: 12, player: "Josh Naylor", label: "1B" },
            { pos: "DH", number: 18, player: "Mitch Garver", label: "DH" },
            { pos: "C", number: 29, player: "Cal Raleigh", label: "C" }
        ]
    },
    {
        name: "Toronto Blue Jays",
        roster: [
            { pos: "CF", number: 5, player: "Daulton Varsho", label: "CF" },
            { pos: "LF", number: 38, player: "Nathan Lukes", label: "LF" },
            { pos: "RF", number: 24, player: "Yohendrick Piñango", label: "RF" },
            { pos: "SS", number: 7, player: "Kazuma Okamoto", label: "SS" },
            { pos: "2B", number: 48, player: "Luis Urías", label: "2B" },
            { pos: "3B", number: 22, player: "Ernie Clement", label: "3B" },
            { pos: "ACE", number: 39, player: "Trey Yesavage", label: "ACE" },
            { pos: "1B", number: 27, player: "Vladimir Guerrero Jr.", label: "1B" },
            { pos: "DH", number: 3, player: "Myles Straw", label: "DH" },
            { pos: "C", number: 30, player: "Alejandro Kirk", label: "C" }
        ]
    },
    {
        name: "Kansas City Royals",
        roster: [
            { pos: "CF", number: 15, player: "Lane Thomas", label: "CF" },
            { pos: "LF", number: 0, player: "Starling Marte", label: "LF" },
            { pos: "RF", number: 14, player: "Jac Caglianone", label: "RF" },
            { pos: "SS", number: 7, player: "Bobby Witt Jr.", label: "SS" },
            { pos: "2B", number: 12, player: "Nick Loftin", label: "2
