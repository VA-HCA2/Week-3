//Window Object script

"use strict";
window.onload = function () {
  
    let popupWin;
    const openBtn = document.getElementById("openBtn");
    openBtn.onclick = function () {

        popupWin= window.open("popup.html", "myPopup","height=500,width=300");
        popupWin.focus();
    };
    
    popupWin.onload= function()
    {
    const msgDiv= popupWind.document.getElementById("msgDiv");
    msgDiv.innerHTML="<p>Hello World!</p>";
};
   
};