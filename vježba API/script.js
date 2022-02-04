"Use-strict";

//idemo na https://reqres.in/

//NEMOJTE KAO JA ZABORAVITI POZVATI FUNKCIJU fetchData. Inače vam ovi console logovi neće ništa napraviti :D
function fetchData() {
  //console.log("Dohvati podatke, pogledaj u Network (Na inspect elementu od Chromea) jel radi");
  //console.log(fetch("https://reqres.in/api/users?page=2"));

  //Rješavamo prvo ovaj dio
  /* Idemo sada napraviti fetch metodu unutar ove funkcije. Njom ćemo pozvati adresu API-a, i iz nje sa .then
  metodom rješavamo asinkrone zadatke za API poziv. To je dio tzv. Promise API-a. .Then metoda može onda iz 
  povratnih informacija koristiti response objekte. Imamo ih više, pogledajte ih na using fetch na MDN-u.
  Nakon što smo sa response.json povukli podatke, onda ih možemo i pogledati sa .then data. Na kraju trebamo 
  uzeti slučaj greške sa .catch*/

  /*   fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData(); */

  //Drugi dio
  /*Ajmo dodati sada nekakvu glupost na kraj api adrese na prvoj liniji fetcha. Console log na kraju koda nam
  za ovo neće baciti error jer se kod neće ni odvriti do njega. Tome doskočimo tako da na početku napravimo
  provjeru sa if petljom response.ok*/
  /* fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      //console.log(response); //ovo ubaci kada pokazuješ error i onda makni
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData(); */

  //Treći dio
  /* idemo sada ovo stvarno i ispisati u HTML*/
  /*   fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      const html = data.data.map((user) => {
        return `<p>Zovem se ${user.first_name}</p>`;
      });
      //.join(""); //Kada dodamo ovo, onda nam imena više neće prikazati kao listu nego pojedinačne stringove
      document.querySelector("#api").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData(); */

  //četvrti dio

  /* Sada možemo u novostvorenom HTML dijelu svašta napraviti. Idemo se igrati*/

  fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      const html = data.data
        .map((user) => {
          return `
          <div class="user">
          <p><img src="${user.avatar}" alt="${user.first_name}"></p>
          <p>Zovem se ${user.first_name}</p>
          <p>Moj mail je ${user.email}</p>
          </div>`;
        })
        .join("");
      document.querySelector("#api").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
