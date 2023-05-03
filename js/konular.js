let div1 = document.getElementById("mantik");
let div2 = document.getElementById("kumeler");

function btnmantik() {
    if(div1.style.display === "none") {
        div1.style.display = "block";
    }   else if(div2.style.display === "block") {
        div1.style.display = "none";
    }   else {
        div1.style.display = "none";
    }
    
}

function btnkumeler() {
    if(div2.style.display === "none") {
        div2.style.display = "block";
    }   else if(div1.style.display === "block") {
        div2.style.display = "none";
    }   else {
        div2.style.display = "none";
    }
    
}