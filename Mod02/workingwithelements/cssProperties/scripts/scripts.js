"use stricit";
window.onload = function () 
{
  let imagesFiles=["images/atv.jpg","images/horse.jpg","images/travel.jpg"];
  let imageDescriptions=["Driving an Atv at the beach","Riding a Horse","Travel"];

  let images = document.querySelectorAll("img");
  let imgs = document.querySelectorAll("alt");
  images.forEach(getPictures);

  function getPictures()
  {
    for (let i = 0; i < images.length; i++) 
    {
      images[i].src=imagesFiles[i]; 
      images[i].alt=imageDescriptions[i]; 
     }  
  }
}