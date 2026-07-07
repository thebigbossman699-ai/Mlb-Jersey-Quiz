// ===============================
// MLB ROSTER API HANDLER
// ===============================


// Load roster
async function getTeamRoster(teamID){


    // Offline mode

    if(!CONFIG.USE_LIVE_API){

        return getOfflineRoster(teamID);

    }



    // Live MLB API

    try{


        const response =
        await fetch(
        `${CONFIG.MLB_API}/v1/teams/${teamID}/roster`
        );


        if(!response.ok){

            throw new Error(
            "Roster API failed"
            );

        }


        const data =
        await response.json();



        return data.roster.map(player=>({

            name:
            player.person.fullName,


            position:
            player.position.name,


            id:
            player.person.id

        }));


    }

    catch(error){


        console.error(
            "API Error:",
            error
        );


        return [];

    }

}



// Offline roster loader

function getOfflineRoster(teamID){


    const team =
    TEAMS.find(
        team =>
        team.id === teamID
    );


    if(!team){

        return [];

    }


    return team.players;


}



// Load all teams

async function loadAllTeams(){


    if(CONFIG.USE_LIVE_API){

        return MLB_TEAMS;

    }


    return TEAMS;

}
