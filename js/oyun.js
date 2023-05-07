let soru = 1

function soruYukle(){
    document.getElementById('v1').value = 4
    document.getElementById('v2').value = 2
    document.getElementById('v3').value = 26
    document.getElementById('v4').value = 8
    document.getElementById('v5').value = 1
    document.getElementById('v6').value = 79
    document.getElementById('v7').value = 6
    document.getElementById('v8').value = 5
    document.getElementById('v9').value = 111
    document.getElementById('v10').value = 7
    document.getElementById('v11').value = 3
    document.getElementById('v12').value = "?"
}

function matematikOyunu() {
    var answer = document.getElementById('answer').value;



if(soru === 1) {
    document.getElementById('v1').value = 4
    document.getElementById('v2').value = 2
    document.getElementById('v3').value = 26
    document.getElementById('v4').value = 8
    document.getElementById('v5').value = 1
    document.getElementById('v6').value = 79
    document.getElementById('v7').value = 6
    document.getElementById('v8').value = 5
    document.getElementById('v9').value = 111
    document.getElementById('v10').value = 7
    document.getElementById('v11').value = 3
    document.getElementById('v12').value = "?"
    let answer1 = 440
    if(answer1 == answer) {
        alert("Aferin! Cevabın doğru.")
        soru += 1
        answer = 0
    }   else {
        alert("Cevabın yanlış. Tekrar dene.")
    }
}

if(soru === 2) {
    document.getElementById('v1').value = 1
    document.getElementById('v2').value = 4
    document.getElementById('v3').value = 5
    document.getElementById('v4').value = 2
    document.getElementById('v5').value = 5
    document.getElementById('v6').value = 12
    document.getElementById('v7').value = 3
    document.getElementById('v8').value = 6
    document.getElementById('v9').value = 21
    document.getElementById('v10').value = 5
    document.getElementById('v11').value = 8
    document.getElementById('v12').value = "?"
    let answer1 = 45
    if(answer1 == answer) {
        alert("Aferin! Cevabın doğru.")
        soru += 1
        answer = 0
    }   else if(answer != 0){
        alert("Cevabın yanlış. Tekrar dene.")
    }
}

if(soru === 3) {
    document.getElementById('v1').value = 4
    document.getElementById('v2').value = 5
    document.getElementById('v3').value = 8
    document.getElementById('v4').value = 7
    document.getElementById('v5').value = 3
    document.getElementById('v6').value = 6
    document.getElementById('v7').value = 5
    document.getElementById('v8').value = 8
    document.getElementById('v9').value = 10
    document.getElementById('v10').value = 9
    document.getElementById('v11').value = 2
    document.getElementById('v12').value = "?"
    let answer1 = 4
    if(answer1 == answer) {
        alert("Aferin! Cevabın doğru.")
        soru += 1
        answer = 0
    }   else if(answer != 0){
        alert("Cevabın yanlış. Tekrar dene.")
    }
}

if(soru === 4) {
    document.getElementById('v1').value = 40
    document.getElementById('v2').value = 4
    document.getElementById('v3').value = 6
    document.getElementById('v4').value = 45
    document.getElementById('v5').value = 5
    document.getElementById('v6').value = 4
    document.getElementById('v7').value = 54
    document.getElementById('v8').value = 6
    document.getElementById('v9').value = 3
    document.getElementById('v10').value = 63
    document.getElementById('v11').value = 7
    document.getElementById('v12').value = "?"
    let answer1 = 2
    if(answer1 == answer) {
        alert("Aferin! Cevabın doğru.")
        soru += 1
        alert("Test bitti.")
    }   else if(answer != 0){
        alert("Cevabın yanlış. Tekrar dene.")
    }
}
}

