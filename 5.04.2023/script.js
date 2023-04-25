const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const klasa = document.querySelector("#klasa");
const rok = document.querySelector("#rok");
const firma = document.querySelector("#firma");
const dater = document.querySelector("#dater");
const datez = document.querySelector("#datez");

// const data = document.querySelector("#data");
// const dzial = document.querySelectorAll("#dzial");


const indexdisplay = document.querySelector(".indexdisplay");
const indexbtn = document.querySelector("#indexbtn");
indexbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  //  console.log(imie.value);
  //  console.log("aaaaaa");
  indexdisplay.innerHTML = "imie: " + imie.value;
  indexdisplay.innerHTML += "<br>" + "nazwisko: " + nazwisko.value;
  indexdisplay.innerHTML += "<br>" + "klasa: " + klasa.value;
  indexdisplay.innerHTML += "<br>" + "Rok Szkolny: " + rok.value;
  indexdisplay.innerHTML += "<br>" + "Odbytej w: " + firma.value;
  indexdisplay.innerHTML += "<br>" + "Data rozpoczencia " + datar.value;
  indexdisplay.innerHTML += "<br>" + "Data zakończenia " + dataz.value;
  
});

// const index2display = document.querySelector(".index2display");
// const index2btn = document.querySelector("#index2btn");
// index2btn.addEventListener("click", function(evt2){
//    evt2.preventDefault();
//   console.log(data.value);
//    console.log("aaa");
//   index2display.innerHTML = "data: " + data.value;
//   index2display.innerHTML += "<br>" + "dzial: " + dzial.value;
  
// })

