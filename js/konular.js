let div1 = document.getElementById("mantik");
let div2 = document.getElementById("kumeler");
let div3 = document.getElementById("denklemler");
let div4 = document.getElementById("ucgenler");
let div5 = document.getElementById("veri");

function btnmantik() {
    if(div1.style.display === "none") {
        div1.style.display = "block";
    }   else if(div2.style.display === "block" || div3.style.display === "block" || div4.style.display === "block" || div5.style.display === "block") {
        div1.style.display = "none";
    }   else {
        div1.style.display = "none";
    }
}

function btnkumeler() {
    if(div2.style.display === "none") {
        div2.style.display = "block";
    }   else if(div1.style.display === "block" || div3.style.display === "block" || div4.style.display === "block" || div5.style.display === "block") {
        div2.style.display = "none";
    }   else {
        div2.style.display = "none";
    }
}

function btndenklemler() {
    if(div3.style.display === "none") {
        div3.style.display = "block";
    }   else if(div2.style.display === "block" || div1.style.display === "block" || div4.style.display === "block" || div5.style.display === "block") {
        div3.style.display = "none";
    }   else {
        div3.style.display = "none";
    }
}

function btnucgenler() {
    if(div4.style.display === "none") {
        div4.style.display = "block";
    }   else if(div1.style.display === "block" || div2.style.display === "block" || div3.style.display === "block" || div5.style.display === "block") {
        div4.style.display = "none";
    }   else {
        div4.style.display = "none";
    }
}

function btnveri() {
    if(div5.style.display === "none") {
        div5.style.display = "block";
    }   else if(div1.style.display === "block" || div2.style.display === "block" || div3.style.display === "block" || div4.style.display === "block") {
        div5.style.display = "none";
    }   else {
        div5.style.display = "none";
    }
}