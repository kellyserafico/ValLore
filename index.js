var dataList;
var image = document.getElementById("agentPic");
var description = document.getElementById("description");

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

$.get("https://valorant-api.com/v1/agents", function(data, status){
    console.log(data['data'])
    dataList = data["data"];
    makeButtons();
});

function createProfile(i){
    description.innerText = dataList[i]["description"];
    image.src = dataList[i]["fullPortraitV2"];
    // image.style.width = "700px";
    // image.style.height = "200px";
}
