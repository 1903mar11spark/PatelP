// Navigation Bar Functionality

function openSM(){
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("play-content").style.marginLeft = "250px";
}
function closeSM(){
    document.getElementById("navbar").style.width = "0";
    document.getElementById("play-content").style.marginLeft = "0";
}

// Retrieve Data from Local Storage and Populate Data on Screen

playerCount = localStorage.getItem("numberOfPlayers");
console.log(playerCount);
document.getElementById("hello").innerText = "Current Number of Players: " + playerCount;

player1 = window.localStorage.getItem("player1");
document.getElementById("player1name").innerText = player1;

player2 = window.localStorage.getItem("player2");
document.getElementById("player2name").innerText = player2;

player3 = window.localStorage.getItem("player3");
document.getElementById("player3name").innerText = player3;

player4 = window.localStorage.getItem("player4");
document.getElementById("player4name").innerText = player4;

player5 = window.localStorage.getItem("player5");
document.getElementById("player5name").innerText = player5;

player6 = window.localStorage.getItem("player6");
document.getElementById("player6name").innerText = player6;


// Fetch and Content Display Functionality and Modal Functionality
    window.onload=function(){
    document.getElementById("newround").addEventListener("click", getAdjCards);
    document.getElementById("newround").addEventListener("click", getNounCards);
    //document.getElementById("toplay").addEventListener("click", getModal);
};

//function getModal(){
//    document.querySelector(".bg-modal").style.display= "flex";};


const apiUrl = "https://raw.githubusercontent.com/andrew12/apples/master/cards.json";

let state = {
    ADJECTIVES: '',
    NOUNS: ''
} 

let updateContent = function(){
    document.getElementById("adj").innerText = state.ADJECTIVES[randomAdj()];
    document.getElementById("noun1").innerText = state.NOUNS[randomNoun()];
    document.getElementById("noun2").innerText = state.NOUNS[randomNoun()];
    document.getElementById("noun3").innerText = state.NOUNS[randomNoun()];
    document.getElementById("noun4").innerText = state.NOUNS[randomNoun()];
    document.getElementById("noun5").innerText = state.NOUNS[randomNoun()];
    document.getElementById("noun6").innerText = state.NOUNS[randomNoun()];
    document.getElementById("noun7").innerText = state.NOUNS[randomNoun()];
}

function getAdjCards(){
    fetch(apiUrl, {method: "GET", headers: {"Accept":"application/json"}})
  
    .then((response) => {
        
        return response.json();
    })

    .then((data) => {
        console.log(data);
        state.ADJECTIVES= data.ADJECTIVES;
        updateContent();
    })

    .catch((error) => {
        alert();
        console.log("adj error");
    })
}


function getNounCards(){
    fetch(apiUrl, {method: "GET", headers: {"Accept":"application/json"}})
  
    .then((response) => {
        
        return response.json();
    })

    .then((data) => {
        console.log(data);
        state.NOUNS= data.NOUNS;
        updateContent();
    })

    .catch((error) => {
        alert();
        console.log("noun error");
    })
}


//Random Number Generators for API 

function randomAdj() {
    return Math.floor(Math.random()*250);
}

let adjCard = randomAdj();
console.log (adjCard);


function randomNoun() {
    return (Math.floor(Math.random()*748));
};
    
let nounCard1 = randomNoun();
let nounCard2 = randomNoun();
let nounCard3 = randomNoun();
let nounCard4 = randomNoun();
let nounCard5 = randomNoun();
let nounCard6 = randomNoun();
let nounCard7 = randomNoun();


console.log (nounCard1, nounCard2, nounCard3, nounCard4, nounCard5, nounCard6, nounCard7);

