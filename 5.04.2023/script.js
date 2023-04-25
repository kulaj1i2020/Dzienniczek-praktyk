const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const klasa = document.querySelector("#klasa");
const rok = document.querySelector("#rok");
const firma = document.querySelector("#firma");

const display = document.querySelector(".display");
const btn = document.querySelector('[type="submit"]');
btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(imie.value);
  display.innerHTML = "imie: " + imie.value;
  display.innerHTML += "<br>" + "nazwisko: " + nazwisko.value;
  display.innerHTML += "<br>" + "klasa: " + klasa.value;
  display.innerHTML += "<br>" + "Rok Szkolny: " + rok.value;
  display.innerHTML += "<br>" + "Odbytej w: " + firma.value;
});
