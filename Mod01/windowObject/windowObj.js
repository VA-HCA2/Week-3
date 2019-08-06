//Window Object script

"use strict";
window.onload = function () {
    let googleBtn = document.getElementById("google");
    googleBtn.onclick = function () {

        window.open("https://google.com/");
    }

    let hartfordBtn = document.getElementById("hartford");
    hartfordBtn.onclick = function () {


        window.open("https://www.thehartford.com/");
    }

    let w3schoolsBtn = document.getElementById("w3Schools");
    w3schoolsBtn.onclick = function () {


        window.open("https://www.w3schools.com/default.asp");
    }
}