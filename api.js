async function loadAllTeams(){

    if(typeof TEAMS === "undefined"){

        console.error("TEAMS not loaded");

        return [];

    }


    return TEAMS;

}



async function getTeamRoster(teamID){

    const team = TEAMS.find(
        t => t.id === teamID
    );


    if(!team){

        console.error(
            "Team not found:",
            teamID
        );

        return [];

    }


    return team.players;

}
