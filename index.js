var dataList;
var image = document.getElementById("agentPic");
var description = document.getElementById("description");
var agentBackground = document.getElementById("agentBackground");
var abilityName = document.getElementById("abilityName");

function makeButtons(){
    let names = document.getElementById("names");
    for(let i = 0; i < dataList.length; i++){
        let currName = (dataList[i]["displayName"]);
        let text = document.createTextNode(currName);
        let button = document.createElement('BUTTON');
        button.onclick = function(){
            createProfile(i);
        }
        button.appendChild(text); //adds content to button
        names.appendChild(button); //appends button to div
    }
}

$.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true", function(data, status){
    console.log(data['data'])
    dataList = data["data"];
    makeButtons();
});

function createProfile(i){
    description.innerText = dataList[i]["description"];
    image.src = dataList[i]["fullPortraitV2"];
    agentBackground.src = dataList[i]["background"];



   // abilities

    let abilitiesNameDiv = document.getElementById("abilityName");
    let abilitiesDescriptionDiv = document.getElementById("abilityDescription");

    for(let j = 0; j < dataList[i]["abilities"].length; j++){
        //abilityName
        let currAbilityName = (dataList[i]["abilities"][j]["displayName"]);
        // console.log(currAbilityName);
        let createAbilityName = document.getElementById("ability"+ j );
        createAbilityName.innerText = currAbilityName;

       // abilityDescription
        let currAbilityDescription = (dataList[i]["abilities"][j]["description"]);
        // console.log(currAbilityDescription);
        let createAbilityDescription = document.getElementById("ability" + j);
        createAbilityDescription.innerText = currAbilityDescription;

    }

    if(dataList[i]["abilities"].length < 5){
        let createAbilityName = document.getElementById("ability4");
        createAbilityName.innerText = '';
    }


}
