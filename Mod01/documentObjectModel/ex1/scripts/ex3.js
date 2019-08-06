"use strict";

window.onload = function () {

        const imgs=document.querySelectorAll("img:not([alt])")

        for (let i=0; i< imgs.length;i++)
        {
          
            imgs[i].alt="graffiti image";
        }

        let img=document.querySelectorAll("img")
        for (let i=0; i< img.length;i++)
        {
            let paraId="para"+img[i].id.substr(5);
            let para=document.getElementById(paraId);
            para.innerHTML=img[i].alt
        }
        
}
