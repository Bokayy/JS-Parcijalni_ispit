"use strict";

////////////////////////////////
//OVAJ PRIMJER MOŽETE POGLEDATI KOMPLETNO NA UDEMYU
////////////////////////////////
//VARIJABLE
let tajniBroj = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//RADIMO FUNCTION DECLARATION KAKO BI GA SAMO REUSALI GDJE NAM TREBA
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//FUNKCIJA PROVJERE BROJA
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //KADA NEMA BROJA
  if (!guess) {
    displayMessage("💥 Nema broja");

    //KADA SMO POGODILI BROJ
  } else if (guess === tajniBroj) {
    displayMessage("🎉 Pogodili ste broj");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = tajniBroj;
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //TURNARY OPERATOR ZA PROVJERU VEĆI/MANJI
  } else if (guess !== tajniBroj) {
    if (score > 1) {
      displayMessage(
        guess > tajniBroj ? "Broj je manji od vašeg" : "Broj je veći od vašeg"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Izgubili ste");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//RESET GUMB A DA NAM OSTANE HIGHSCORE

document.querySelector(".again").addEventListener("click", function () {
  tajniBroj = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Igra pogađanja";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
