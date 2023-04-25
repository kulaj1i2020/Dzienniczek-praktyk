const data = document.querySelector("#data");
const dzial = document.querySelector("#dzial");
const index2display = document.querySelector(".index2display");
const opiekun = document.querySelector('[name="opiekun"]:checked');
const sprawozdanie = document.querySelector("#sprawozdanie");
// const zrealizowano = document.querySelector('[name="zrealizowano"]:checked');

const index2btn = document.querySelector("#index2btn");
index2btn.addEventListener("click", function(evt2){
   evt2.preventDefault();
   const element=document.createElement('h1')
//   console.log(data.value);
  console.log("aaa");
  element.innerHTML = "data: " + data.value;
  element.innerHTML += "<br>" + "dzial: " + dzial.value;
  element.innerHTML += "<br>" + "opiekun: " + opiekun;
  element.innerHTML += "<br>" + "sprawozdanie: " + sprawozdanie.value;
//   element.innerHTML += "<br>" + "zrealizowano: " + zrealizowano.value;
  index2display.appendChild(element)
})