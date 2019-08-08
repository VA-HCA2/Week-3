"use strict";

let imagesFiles = ["images/blouse.jpg", "images/boots.jpg", "images/dress.jpg", "images/jacket.jpg",
    "images/pants.jpg", "images/shirt.jpg", "images/shoes.jpg", "images/skirt.jpg"];
let imageDescriptions = ["Blouse", "Boots", "Dress", "Jacket", "Pants", "Shirt", "Shoes", "Skirt"];

window.onload = function () {
    // Finds Id of clothes from the dropdownmenu
    var select = document.getElementById("clothes");
    //Loops thru the array to get array ImageDescriptions
    for (let i = 0; i < imageDescriptions.length; i++) {
        // Create element option for the dropdown values
        let option = document.createElement("OPTION");
        // Create text for the dropdown with values from the array
        let txt = document.createTextNode(imageDescriptions[i]);
        // Create new elemet 
        option.appendChild(txt);
        // Set attribute "value"
        option.setAttribute("value", imageDescriptions[i]);
        // Insert options from lastchild 
        select.insertBefore(option, select.lastChild);
    }
    // Finds imagesDiv
    let imageDiv = document.getElementById("imagesDiv")
    // Finds the add button
    let addBtn = document.getElementById("addBtn");
    
    //When the user clicks the add button run this code
    addBtn.onclick = function () {
        // Finds the dropdown field    
        let ddl = document.getElementById("clothes")
        //  Return the number of the selected item in the dropdown ex (if the first one is picked returns 0)
        let dropdownOptions = ddl.selectedIndex
        // This gets the value property from the option in the dropdown that the user selcted   
        let options = ddl.options[dropdownOptions].value
        // Loop thru the array called imageDescriptions
        for (let i = 0; i < imageDescriptions.length; i++) {
            // Keep looking until options(ex, Dress from the dropdown) is equal to 
            // the [i] in the imageDescriptions
            if (options == imageDescriptions[i]) {
                // When we find it ...
                // create an empty img element(<img>)
                let img = document.createElement("img");
                // Get the imageFile name from imagesFiles array and assign it to src of the image
                img.src = imagesFiles[i];
                // Get the description from my imageDescription array and assign it to the alt text. 
                img.alt = imageDescriptions[i];
                // Add the image in the browser to imageDiv 
                imageDiv.appendChild(img)

            }
        }

    }
    let resetBtn = document.getElementById("resetBtn");
    resetBtn.onclick = function () {
        document.getElementById("imagesDiv").innerHTML = "";
    }

}

