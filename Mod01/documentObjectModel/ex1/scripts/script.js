"use strict";

window.onload= function()
{
let pra=document.getElementsByTagName("p");
let img=document.getElementsByClassName("img1")

for (let i=0; i< pra.length;i++)
{
    pra[i].style.border="2px solid turquoise";
}

for (let i=0; i< img.length;i++)
{
    img[i].style.border="3px solid blue";
    img[i].style.padding="20px";

}
}