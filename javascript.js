
document.getElementById("gacoan").selectedIndex = "-1"

/*let gantiKiri = "";
let gantiKanan= "";
let pathImageP2 = "";
let gacoan = '';*/


pathImageP1 = ["images/kertas-kiri.png","images/gunting-kiri.png","images/batu-kiri.png"];
pathImageP2 = ["images/kertas-kanan.png","images/gunting-kanan.png","images/batu-kanan.png"];

function pilihGacoan() {
    gantiKiri = document.getElementById("gacoan").selectedIndex;
    document.querySelector("#player1").setAttribute("src",pathImageP1[gantiKiri]);
    
  }

function mainkan() {
    gantiKanan= Math.floor(Math.random()*3);
    // script ganti Player Kanan

document.querySelector("#player2").setAttribute("src",pathImageP2[gantiKanan]);


//script untuk seri

if (gantiKiri==gantiKanan) {
    document.querySelector("#pesan").textContent="Seri neh Bro !";
}

//script untuk Player 1 menang

if ((gantiKiri==0 && gantiKanan==2) || (gantiKiri==1 && gantiKanan==0) || (gantiKiri==2 && gantiKanan==1) ) {
    document.querySelector("#pesan").textContent="Yeaayyy...Kamu Menang !";

}

//script untuk Player 2 menang

if ((gantiKanan==0 && gantiKiri==2) || (gantiKanan==1 && gantiKiri==0) || (gantiKanan==2 && gantiKiri==1) ) {
    document.querySelector("#pesan").textContent="Yaahh...kalah";

}

}

