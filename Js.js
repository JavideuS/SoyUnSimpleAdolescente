//Colorchanger
document.addEventListener("DOMContentLoaded", function () {
let changeColorIndicator = false;
let changeColorIndicator1 = false;
let changeColorIndicator2 = false;
const Colorchanger = document.querySelector(".titulo") 
if(Colorchanger){
Colorchanger.addEventListener("click", function(event) {

let h1Selector = document.querySelector(".titulo h1");
let spanSelector = document.querySelectorAll(".titulo .span2");
let arrayLength = spanSelector.length;
if(changeColorIndicator === false){
h1Selector.style.color = "#e8630a";

for(let i=0; i < arrayLength; i++)
spanSelector[i].style.color = "#ff6f3c";

changeColorIndicator = true;    
}
else  {
h1Selector.style.color = "#ff6f3c";

for(let i=0; i < arrayLength; i++)
spanSelector[i].style.color = "#e8630a";

changeColorIndicator = false;
}
})};

const Colorchanger2 = document.querySelector(".subtitulos")
if(Colorchanger2) {
Colorchanger2.addEventListener("click", function(event) {
  let h2Selector = document.querySelector(".About-us h2");
  let spanSelector1 = document.querySelector(".About-us span");
  
  if(changeColorIndicator1 === false){
  h2Selector.style.color = "#0055ff";
  spanSelector1.style.color = "#1a66ff";
  
  changeColorIndicator1 = true;
  }
  else {
  h2Selector.style.color = "#1a66ff";
  spanSelector1.style.color = "#0055ff";
  
  changeColorIndicator1 = false;
  }
})};

const Colorchanger3 = document.querySelector(".subtitulos2")
if(Colorchanger3){
Colorchanger3.addEventListener("click",function () {
  let h2Selector = document.querySelector(".idea h2");
  let spanSelector2 = document.querySelectorAll(".idea span");
  let arrayLength = spanSelector2.length;
  
  if(changeColorIndicator2 === false){
  h2Selector.style.color = "#009999";
  
  for(let i=0; i < arrayLength; i++)
  spanSelector2[i].style.color = "#1a66ff";
  
  changeColorIndicator2 = true;    
  }
  else  {
  h2Selector.style.color = "#1a66ff";
  
  for(let i=0; i < arrayLength; i++)
  spanSelector2[i].style.color = "#009999";
  changeColorIndicator2 = false;
  }
})}
});

//Buscador
$(document).ready(function() {
  $("[list='searcher']").on("keypress", function(event) {
    if (event.key === "Enter")
    window.location = $("#searcher option[value='"+$("[list='searcher']").val()+"']").find("a").attr("href")
  });
});

//Responsive screen

document.addEventListener("DOMContentLoaded", function () {
  let img = document.querySelector(".flex");
  let img2 = document.querySelectorAll(".about1");
  let fakerShowmaker = document.querySelector(".faker")  
window.addEventListener("load" , function () {
  if (window.innerWidth < 700 ){
  //Matematicas.html
  img.style.display = "block";
 
  //SoyUnSimpleAdolescente.html
  img2.style.display = "block";
  fakerShowmaker.style.height = "200";
  fakerShowmaker.style.width = "400";
  }
});
window.addEventListener("resize" , function () {
 
  if (window.innerWidth < 700 ){
    //Matematicas.html
    img.style.display = "block";
    
    //SoyUnSimpleAdolescente.html
    img2.style.display = "block";}
  else{
      //Matematicas.html
    img.style.display = "flex";

     //SoyUnSimpleAdolescente.html
    img2.style.display = "flex";
  }
});
});



