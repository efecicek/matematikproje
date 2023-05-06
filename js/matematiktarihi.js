let div1 = document.getElementById("harezmi");
let div2 = document.getElementById("omerhayyam");
let div3 = document.getElementById("cahitarf");
let div4 = document.getElementById("alikuscu");

function btnharezmi() {
    if(div1.style.display === "none") {
        div1.style.display = "block";
    }   else if(div2.style.display === "block" || div3.style.display === "block" || div4.style.display === "block") {
        div1.style.display = "none";
    }   else {
        div1.style.display = "none";
    }
}

function btnomerhayyam() {
    if(div2.style.display === "none") {
        div2.style.display = "block";
    }   else if(div1.style.display === "block" || div3.style.display === "block" || div4.style.display === "block") {
        div2.style.display = "none";
    }   else {
        div2.style.display = "none";
    }
}

function btncahitarf() {
    if(div3.style.display === "none") {
        div3.style.display = "block";
    }   else if(div2.style.display === "block" || div1.style.display === "block" || div4.style.display === "block") {
        div3.style.display = "none";
    }   else {
        div3.style.display = "none";
    }
}

function btnalikuscu() {
    if(div4.style.display === "none") {
        div4.style.display = "block";
    }   else if(div1.style.display === "block" || div2.style.display === "block" || div3.style.display === "block") {
        div4.style.display = "none";
    }   else {
        div4.style.display = "none";
    }
}