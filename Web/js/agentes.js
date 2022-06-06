
var lenguage = '/?language=es-ES';
function selector() {
    var select = document.getElementById('language');
    lenguage = select.options[select.selectedIndex].value;
    getDataFromApi();
}




function agente(agentcode) {
    agent = agentcode
    getDataFromApi();
}

async function Ability(num) {

    var url = 'https://valorant-api.com/v1/agents/' + agent + lenguage;

    var miRespuesta = await fetch(url,
        {
            method: 'GET',

        }
    ).then(function (response) {
        return response.json();
    });
    document.getElementById('ab-title').innerText = miRespuesta.data.abilities[num].displayName;
    document.getElementById('ab-description').innerText = miRespuesta.data.abilities[num].description;
    if (num == 0) {
        document.getElementById('ability0').style.backgroundColor = "#ff4655";
    }
    else {
        document.getElementById('ability0').style.backgroundColor = "grey";
    }
    if (num == 1) {
        document.getElementById('ability1').style.backgroundColor = "#ff4655";
    }
    else {
        document.getElementById('ability1').style.backgroundColor = "grey";
    }
    if (num == 2) {
        document.getElementById('ability2').style.backgroundColor = "#ff4655";
    }
    else {
        document.getElementById('ability2').style.backgroundColor = "grey";
    }
    if (num == 3) {
        document.getElementById('ability3').style.backgroundColor = "#ff4655";
    }
    else {
        document.getElementById('ability3').style.backgroundColor = "grey";
    }
    if (num == 4) {
        document.getElementById('ability4').style.backgroundColor = "#ff4655";
    }
    else {
        document.getElementById('ability4').style.backgroundColor = "grey";
    }


}

function printAbilities(ability) {
    var abilities = '';

    ability.forEach(function (element, i) {
        abilities += '<button class="btnFilter "  onclick="Ability(' + i + '); getVideoAbility(' + i + ')"><span class="btn__inner" id="ability' + i + '"><span class="btn__slide"></span><span class="btn__content"><img class="icon" id="Ability1" src="' + element.displayIcon + '"></span></span></button>';
    });
    document.getElementById('ab-icons').innerHTML = abilities;
}


async function getDataFromApi() {
    var url = 'https://valorant-api.com/v1/agents/' + agent + lenguage;

    var miRespuesta = await fetch(url,
        {
            method: 'GET',

        }
    ).then(function (response) {
        return response.json();
    });
    document.getElementById('agent-background').src = miRespuesta.data.background;
    document.getElementById('sidebar-portrait-agent').src = miRespuesta.data.fullPortraitV2;
    document.getElementById('agent-name').innerText = miRespuesta.data.displayName;
    document.getElementById('description').innerText = miRespuesta.data.description;
    document.getElementById('ab-title').innerText = miRespuesta.data.abilities[0].displayName;
    document.getElementById('ab-description').innerText = miRespuesta.data.abilities[0].description;

    printAbilities(miRespuesta.data.abilities);

    document.getElementById('ability0').style.backgroundColor = "#ff4655";
    /*document.getElementById('Ability1').src = miRespuesta.data.abilities[0].displayIcon;
    document.getElementById('Ability2').src = miRespuesta.data.abilities[1].displayIcon;
    document.getElementById('Grenade').src = miRespuesta.data.abilities[2].displayIcon;
    document.getElementById('Ultimate').src = miRespuesta.data.abilities[3].displayIcon;
    document.getElementById('Passive').src = miRespuesta.data.abilities[4].displayIcon;*/
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", miRespuesta.data.voiceLine.mediaList[0].wave)
    etiquetaAudio.play()
}

/*SCRIPT PARA VIDEOS DE AGENTES*/
var anumber;
function agentnumber(num) {
    anumber = num;
}
async function getVideoAbility(abilityNum) {
    var url = 'https://playvalorant.com/page-data/en-us/agents/page-data.json';

    var miRespuesta = await fetch(url,
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    ).then(function (response) {
        return response.json();
    });
    document.getElementById('imgvideo').setAttribute('poster', miRespuesta.result.data.allContentstackAgentList.nodes[0].agent_list[0].abilities[abilityNum].ability_video[0].static_image.url);
    document.getElementById('videoabilities').src = miRespuesta.result.data.allContentstackAgentList.nodes[0].agent_list[0].abilities[abilityNum].ability_video[0].video.file.url;
}

