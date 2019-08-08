"use strict";
let tours = [
    { category: "Museum Tours", title: "A Touch Tour at the Smithsonian Air And Space Museum", price: 45.00 },
    { category: "Museum Tours", title: "A Tour of TV Sets at the American History Museum", price: 15.00 },
    { category: "Museum Tours", title: "Dinosaurs are Alive at the Natural History Museum", price: 65.00 },
    { category: "Food Tours", title: "Squeezing Things at the Farmers Market", price: 12.00 },
    { category: "Food Tours", title: "Murder Mystery at the Vineyard", price: 32.00 },
    { category: "Food Tours", title: "101 Ways to Server Brussel Sprouts", price: 8.00 },
    { category: "Adventure Tours", title: "Ziplining the Poconos", price: 115.00 },
    { category: "Adventure Tours", title: "Water Skiing the Amazon", price: 4015.00 },
    { category: "Adventure Tours", title: "Parasailing Iceland", price: 3215.00 },
    { category: "Adventure Tours", title: "Kayaking to Antarctica", price: 3910.00 },
    { category: "Adventure Tours", title: "National Zoo: How to Grab a Skunk by the Neck", price: 80.00 }
];

function getToursbyCategory() {
    let showBtn = document.getElementById("showBtn");
    //When the user clicks the add button run this code
    showBtn.onclick = function () {
        // Finds the dropdown field    
        let ddl = document.getElementById("tourddl")
        let dropdownOptions = ddl.selectedIndex;
        // This gets the value property from the option in the dropdown that the user selcted   
        let options = ddl.options[dropdownOptions].value
        // Clear everytime they select another tour
        document.getElementById("tours").innerHTML = "";
        // ---------- Create Header ---------- 
        var table = document.getElementById("tours");
        var header = table.createTHead();
        // Lenght of the table so we can put our header 
        var row = header.insertRow(table.rows.length);
        // Two cell since we have Title and Price
        var cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        //  Put the titles 
        cell1.innerHTML = "<b>Title</b>"
        cell2.innerHTML = "<b>Price</b>"
        //---------Look for the tours --------------- 
        // Loop thru the array  
        for (let i = 0; i < tours.length; i++) {
            // Loop tru the array and get category because we just want to show title and price.    
            if (options == tours[i].category) {
                // Get the array        
                let table = document.getElementById("tours");
                let row = table.insertRow(table.rows.length);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                // Title        
                cell1.innerHTML = tours[i].title;
                //Price       
                cell2.innerHTML = tours[i].price;

            }
        }

    }
}

function getToursbyPrice() {

    let priceBtn = document.getElementById("priceBtn");
    //When the user clicks the add button run this code
    priceBtn.onclick = function () {
        // Finds the input value  
        let priceIn = document.getElementById("priceInput").value
        // Clear everytime they select another tour
        document.getElementById("tours").innerHTML = "";
        // ---------- Create Header ---------- 
        var table = document.getElementById("tours");
        var header = table.createTHead();
        // Lenght of the table so we can put our header 
        var row = header.insertRow(table.rows.length);
        // Two cell since we have Title and Price
        var cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        //  Put the titles 
        cell1.innerHTML = "<b>Title</b>"
        cell2.innerHTML = "<b>Price</b>"
        //---------Look for the tours --------------- 
        // Loop thru the array  
        for (let i = 0; i < tours.length; i++) {
            // Loop tru the array we are just getting info by price    
            if (tours[i].price <= priceIn) {
                // Get the table info       
                let table = document.getElementById("tours");
                let row = table.insertRow(table.rows.length);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                // Title        
                cell1.innerHTML = tours[i].title;
                //Price       
                cell2.innerHTML = tours[i].price;

            }
        }

    }
}


window.onload = function () {

    document.getElementById("showTours").style.display="none";
    const checkboxes = document.querySelectorAll("input");
    for (let i = 0; i < radioBox.length; i++) {
        radioBox[i].onclick = function ()
         {
                if (radioBox[i].checked) {
                    selectedImages[j].parentNode.style.display = "block";
                }
                else {
                    selectedImages[j].parentNode.style.display = "none";
                }
            }
        }
    }
    


