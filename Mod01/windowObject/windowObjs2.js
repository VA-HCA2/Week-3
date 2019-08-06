//Window Object script

"use strict";
window.onload = function () {
  
    let googleBtn = document.getElementById("google");
    googleBtn.onclick = function () {
        let params= "height=600,width=400,left=30,top=30";
        window.open("https://google.com/","google",params);
    }

    let hartfordBtn = document.getElementById("hartford");
    hartfordBtn.onclick = function () {

        let params= "height=600,width=400,left=30,top=30";
        window.open("https://www.thehartford.com/","hartford",params);
    }

    let w3schoolsBtn = document.getElementById("w3Schools");
    w3schoolsBtn.onclick = function () {

        let params= "height=600,width=400,left=30,top=30";
        window.open("https://www.w3schools.com/default.asp","w3",params);
    }
}