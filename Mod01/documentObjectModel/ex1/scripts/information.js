
window.onload = function () {
    let infoBtn = document.getElementById("infoBtn");
    infoBtn.onclick = function () {

        const infoField = document.querySelectorAll(".info")

        let msg=" ";
        for (let i = 0; i < infoField.length; i++) {
         msg=msg+infoField[i].value+"\n"
        }
        alert(msg)
    }

}