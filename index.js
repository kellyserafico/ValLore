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

function createProfile(i){ //!!! MAKE CALL DIFF FUNCTIONS
    //description
    description.innerText = dataList[i]["description"];

    //agentImage
    image.src = dataList[i]["fullPortraitV2"];
    agentBackground.src = dataList[i]["background"];



   // abilities

    let abilitiesNameDiv = document.getElementById("abilityName");
    let abilitiesDescriptionDiv = document.getElementById("abilityDescription");

    for(let j = 0; j < dataList[i]["abilities"].length; j++){
        //abilityName
        
        let currAbilityName = (dataList[i]["abilities"][j]["displayName"]);
        let createAbilityName = document.getElementById("abilityName"+ j );
        createAbilityName.innerText = currAbilityName;

        // abilityDescription
        let currAbilityDescription = (dataList[i]["abilities"][j]["description"]);
        let createAbilityDescription = document.getElementById("abilityDescription" + j);
        createAbilityDescription.innerText = currAbilityDescription;

        //abilityImage
        let currAbilityImage = (dataList[i]["abilities"][j]["displayIcon"]);
        let createAbilityImage = document.getElementById("abilityImage" + j);
        if (currAbilityImage != null){
            createAbilityImage.src = currAbilityImage;
        }
        else{
            createAbilityImage.src = '';
        }
        
    }

    if(dataList[i]["abilities"].length < 5){ // if agent does not have passive
        let abilityName4 = document.getElementById("abilityName4");
        abilityName4.innerText = '';
        let abilityDescription4 = document.getElementById("abilityDescription4");
        abilityDescription4.innerText = '';
        let abilityImage4 = document.getElementById("abilityImage4");
        abilityImage4.src = '';
    }

    
    $('#fullAgentImage').addClass('fullAgentImage-active');
    setTimeout(function(){
        $('#fullAgentImage').removeClass('fullAgentImage-active');
    }, 200);
    
    

}
