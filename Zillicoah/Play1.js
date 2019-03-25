function openSM(){
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("play1-content").style.marginLeft = "250px";
}
function closeSM(){
    document.getElementById("navbar").style.width = "0";
    document.getElementById("play1-content").style.marginLeft = "0";
}

//displaying input fields 


function inputFields(val) {
x = (document.getElementById("dropdownlist").selectedIndex + 1);
localStorage.setItem("numberOfPlayers", String(x));
console.log(x);
    if (val==2){
        document.getElementById("player1").style.display="block";
        document.getElementById("player2").style.display="block";
        document.getElementById("player3").style.display="none";
        document.getElementById("player4").style.display="none";
        document.getElementById("player5").style.display="none";
        document.getElementById("player6").style.display="none";
        document.getElementById("done").style.display="block";
    }
    if (val==3){
        document.getElementById("player1").style.display="block";
        document.getElementById("player2").style.display="block";
        document.getElementById("player3").style.display="block";
        document.getElementById("player4").style.display="none";
        document.getElementById("player5").style.display="none";
        document.getElementById("player6").style.display="none";
        document.getElementById("done").style.display="block";
    }
    if (val==4){
        document.getElementById("player1").style.display="block";
        document.getElementById("player2").style.display="block";
        document.getElementById("player3").style.display="block";
        document.getElementById("player4").style.display="block";
        document.getElementById("player5").style.display="none";
        document.getElementById("player6").style.display="none";
        document.getElementById("done").style.display="block";
    }
    if (val==5){
        document.getElementById("player1").style.display="block";
        document.getElementById("player2").style.display="block";
        document.getElementById("player3").style.display="block";
        document.getElementById("player4").style.display="block";
        document.getElementById("player5").style.display="block";
        document.getElementById("player6").style.display="none";
        document.getElementById("done").style.display="block";
    }
    if (val==6){
        document.getElementById("player1").style.display="block";
        document.getElementById("player2").style.display="block";
        document.getElementById("player3").style.display="block";
        document.getElementById("player4").style.display="block";
        document.getElementById("player5").style.display="block";
        document.getElementById("player6").style.display="block";
        document.getElementById("done").style.display="block";
    }
};

//local storage of player data

window.onload = function(){
document.getElementById("done").addEventListener("click", storeData);
//document.getElementById("done").addEventListener("click", redirect);
};


function storeData(){
    name1 =  document.getElementById("player1").value;
    console.log(name1);
    localStorage.setItem("player1", String(name1));
    name2 =  document.getElementById("player2").value;
    localStorage.setItem("player2", String(name2));
    if (x==3){ 
        name3 =  document.getElementById("player3").value;
        localStorage.setItem("player3", String(name3));
    }
    if (x==4){ 
        name3 =  document.getElementById("player3").value;
        localStorage.setItem("player3", String(name3));
        name4 =  document.getElementById("player4").value;
        localStorage.setItem("player4", String(name4));
    }
    if (x==5){ 
        name3 =  document.getElementById("player3").value;
        localStorage.setItem("player3", String(name3));
        name4 =  document.getElementById("player4").value;
        localStorage.setItem("player4", String(name4));
        name5 =  document.getElementById("player5").value;
        localStorage.setItem("player5", String(name5));
    }
    if (x==6){ 
        name3 =  document.getElementById("player3").value;
        localStorage.setItem("player3", String(name3));
        name4 =  document.getElementById("player4").value;
        localStorage.setItem("player4", String(name4));
        name5 =  document.getElementById("player5").value;
        localStorage.setItem("player5", String(name5));
        name6 =  document.getElementById("player6").value;
        localStorage.setItem("player6", String(name6));
    }
    console.log("a test")
    redirect();
};

function redirect(){
    window.location.href="Play.html";
    console.log("redirect");
}
