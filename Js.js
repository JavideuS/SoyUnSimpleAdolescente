document.addEventListener("DOMContentLoaded", function () {
  const hidElements = document.querySelectorAll(".hidden");
  const hidElements2 = document.querySelectorAll(".hidden2");
  const hidElements3 = document.querySelectorAll(".hidden3");
  const hidElements4 = document.querySelectorAll(".hidden4");

  let options = {
    threshold:0.5,
    rootMargin: "200px"
  }

  let options2 = {
    threshold:0.4,
  }

  let options3 = {
    rootMargin: "150px" 
   }


  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }

    });
  },options);
  
  hidElements.forEach( Element => observer.observe(Element));


  const observer2 = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
      else{
        entry.target.classList.remove("show");
  
      }
    });
  },options2);

  hidElements2.forEach( Element => observer2.observe(Element));

  const observer3 = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    
    });
  },options);

  hidElements3.forEach( Element => observer3.observe(Element));

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },options3);
  
  hidElements4.forEach( Element => observer4.observe(Element));



  });


//Colorchanger
document.addEventListener("DOMContentLoaded", function () {
let changeColorIndicator = false;
let changeColorIndicator1 = false;
let changeColorIndicator2 = false;
const Colorchanger = document.querySelector(".MainText") 
if(Colorchanger){
Colorchanger.addEventListener("click", function(event) {

let h1Selector = document.querySelector(".MainText .span11");
let spanSelector = document.querySelectorAll(".MainText .span2");
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
  h2Selector.style.color = "#e60000";
  spanSelector1.style.color = "#b30000";
  
  changeColorIndicator1 = true;
  }
  else {
  h2Selector.style.color = "#b30000";
  spanSelector1.style.color = "#e60000";
  
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
  h2Selector.style.color = "#e60000";
  
  for(let i=0; i < arrayLength; i++)
  spanSelector2[i].style.color = "#b30000";
  
  changeColorIndicator2 = true;    
  }
  else  {
  h2Selector.style.color = "#b30000";
  
  for(let i=0; i < arrayLength; i++)
  spanSelector2[i].style.color = "#e60000";
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
  let img = document.querySelectorAll(".flex"),i;
  let img2 = document.querySelectorAll(".flex2"),m;
  let img3 = document.querySelectorAll(".flex3"),mad;
  let img4 = document.querySelectorAll(".flex4"),alex;
window.addEventListener("load" , function () {
  if (window.innerWidth < 850 ){
  for(i = 0; i < img.length; i++) {
    img[i].style.display = "block";
  }
  for(m = 0; m < img.length; m++) {
    img2[m].style.display = "block";
  }
  for(mad = 0; mad < img.length; mad++) {
    img3[mad].style.display = "block";
  }
  for(alex = 0; alex < img.length; alex++) {
    img3[alex].style.display = "block";
  }
}
  else{
    for(i = 0; i < img.length; i++) {
      img[i].style.display = "flex";
    }
    for(m = 0; m < img.length; m++) {
      img2[m].style.display = "flex";
    }
    for(mad = 0; mad < img.length; mad++) {
      img3[mad].style.display = "flex";
    }
    for(alex = 0; alex < img.length; alex++) {
      img3[alex].style.display = "flex";
    }
  }
  }
 
)
window.addEventListener("resize" , function () {
  if (window.innerWidth < 850 ){
  for(i = 0; i < img.length; i++) {
    img[i].style.display = "block";
  }
  for(m = 0; m < img.length; m++) {
    img2[m].style.display = "block";
  }
  for(mad = 0; mad < img.length; mad++) {
    img3[mad].style.display = "block";
  }
  for(alex = 0; alex < img.length; alex++) {
    img3[alex].style.display = "block";
  }
}
  else{
    for(i = 0; i < img.length; i++) {
      img[i].style.display = "flex";
    }
    for(m = 0; m < img.length; m++) {
      img2[m].style.display = "flex";
    }
    for(mad = 0; mad < img.length; mad++) {
      img3[mad].style.display = "flex";
    }
    for(alex = 0; alex < img.length; alex++) {
      img3[alex].style.display = "flex";
    }
  }
  }
)

let iframe = document.querySelectorAll(".iframe"),z;
let pdfGrid = document.querySelectorAll(".pdf-grid"),alexandrita;
window.addEventListener("load" , function () {
  if (window.innerWidth < 850 ){
  for(z = 0; z < iframe.length; z++) {
    iframe[z].style.display = "block";
  }
  for(alexandrita = 0; alexandrita < pdfGrid.length; alexandrita++) {
    pdfGrid[alexandrita].style.display = "block";
  }
}
  else {
    for(z = 0; z < iframe.length; z++) {
      iframe[z].style.display = "flex";
    }
    for(alexandrita = 0; alexandrita < pdfGrid.length; alexandrita++) {
      pdfGrid[alexandrita].style.display = "grid";
    }
  }
  }
)
window.addEventListener("resize" , function () {
  if (window.innerWidth < 850 ){
  for(z = 0; z < iframe.length; z++) {
    iframe[z].style.display = "block";
  }
  for(alexandrita = 0; alexandrita < pdfGrid.length; alexandrita++) {
    pdfGrid[alexandrita].style.display = "block";
  }
}
  else{
    for(z = 0; z < iframe.length; z++) {
      iframe[z].style.display = "flex";
    }
    for(alexandrita = 0; alexandrita < pdfGrid.length; alexandrita++) {
      pdfGrid[alexandrita].style.display = "grid";
    }
  } 
}
)

let multicalc = document.querySelectorAll(".multicalc"),lalisa;
window.addEventListener("load" , function () {
  if (window.innerWidth < 850 ){
  for(lalisa = 0; lalisa < multicalc.length; lalisa++) {
    multicalc[lalisa].style.display = "block";
  }}
  else
  for(lalisa = 0; lalisa < multicalc.length; lalisa++) {
    multicalc[lalisa].style.display = "grid";
  }}
)
window.addEventListener("resize" , function () {
  if (window.innerWidth < 850 ){
  for(lalisa = 0; lalisa < multicalc.length; lalisa++) {
    multicalc[lalisa].style.display = "block";
  }}
  else
  for(lalisa = 0; lalisa < multicalc.length; lalisa++) {
    multicalc[lalisa].style.display = "grid";
    
  }}
)

});

//Scroll to top button
document.addEventListener("DOMContentLoaded", function ( ){
  let scrollConfirmation = document.querySelector("#progress")
  if(scrollConfirmation !== null){
let calcScrollValue = function() {
  let scrollProgress = document.querySelector("#progress");
  let progressValue = document.querySelector("#progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos*100) / calcHeight);
  if (pos > 100) 
    scrollProgress.style.display = "flex";
  else
    scrollProgress.style.display = "none";
  
  scrollProgress.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
  })   
 
  scrollProgress.style.background = `conic-gradient(#666A86 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
  }
})


//Funcionamiento calculadora
document.addEventListener("DOMContentLoaded", function ( ){
let gravedad = 9.8 ;
let vLuz = 299792458;
let calculate = document.querySelectorAll(".Calculate"),z;
for(z = 0; z < calculate.length; z++) {
calculate[z].addEventListener("click", function () {
  let tiempo = document.querySelector(".tiempo").value;

  //Caida Libre
  let distVer =  document.querySelector("#distanciaVertical");
  let distanciaVertical = (gravedad * Math.pow(tiempo,2)) / 2;
  let velocidad = gravedad * tiempo;
  let velocidadInput = document.querySelector("#Velocidad");
  distVer.value = distanciaVertical.toFixed(2);
  velocidadInput.value = velocidad.toFixed(2);

  //Lanzamiento Vertical
  let velocidadInicial = document.querySelector(".VelocidadI").value;
  let TmaxInput = document.querySelector("#Tmax");
  let Ymax = Math.pow(velocidadInicial,2) / (2 * gravedad);  
  let YmaxInput = document.querySelector("#Ymax");
  YmaxInput.value = Ymax.toFixed(2);
  let Tmax = velocidadInicial / gravedad;
  let TvueloInput = document.querySelector("#Tvuelo");
  let Tvuelo = (Tmax * 2);
  TvueloInput.value = Tvuelo.toFixed(2);
  TmaxInput.value = Tmax.toFixed(2);  

  let velocidadInicial1 = document.querySelector(".VelocidadI1").value;
  velocidadInicial1 = parseFloat(velocidadInicial1);
  let tiempoLanzVertical = document.querySelector(".tiempo1").value;
  let VelocidadFinalInput = document.querySelector("#Vfinal");
  let VelocidadFinal = (velocidadInicial1 + (gravedad * tiempoLanzVertical));
  VelocidadFinalInput.value = VelocidadFinal;
  let alturaInicial = document.querySelector(".AlturaI").value;
  alturaInicial = parseFloat(alturaInicial);
  if (alturaInicial !== 0)
    alturaInicial = 0;

  let alturaFinalInput = document.querySelector(".Alturaf");
  let alturaFinal = alturaInicial + (velocidadInicial1*tiempoLanzVertical) - ((gravedad * Math.pow(tiempoLanzVertical,2))/2);
  alturaFinalInput.value = alturaFinal.toFixed(2);
  
  //Lanzamiento Horizontal
  let alturaLanzHorizontal = document.querySelector("#distanciaHorizontalTiempo .calculadora-grid .AlturaInicial").value;
  alturaLanzHorizontal = parseFloat(alturaLanzHorizontal);
  let tiempoLanzHorizontalInput = document.querySelector("#distanciaHorizontalTiempo .calculadora-grid .tiempodishoriz");
  let tiempoLanzHorizontal = Math.sqrt((2*alturaLanzHorizontal)/gravedad);
  tiempoLanzHorizontalInput.value = tiempoLanzHorizontal.toFixed(2);

  let velocidadX = document.querySelector("#distanciaHorizontalTiempo .calculadora-grid .VelocidadInicialx").value;
  velocidadX = parseFloat(velocidadX);
  let distanciaX = document.querySelector("#distanciaHorizontalTiempo .calculadora-grid .DistanciaX").value;
  distanciaX = parseFloat(distanciaX);
  let tiempoLanzHorizontalInput2 = document.querySelector("#distanciaHorizontalTiempo .calculadora-grid .tiempodishoriz2");
  let tiempoLanzHorizontal2 = distanciaX/velocidadX;
  tiempoLanzHorizontalInput2.value = tiempoLanzHorizontal2.toFixed(2);

  let tiempoLanzHorizontal3 = document.querySelector("#distanciaHorizontalVelocidad .calculadora-grid .tiempodishoriz").value;
  tiempoLanzHorizontal3 = parseFloat(tiempoLanzHorizontal3);
  let distanciaX2 = document.querySelector("#distanciaHorizontalVelocidad .calculadora-grid .distanciaX").value;
  distanciaX2 = parseFloat(distanciaX2);
  let velocidadInicialInput2 = document.querySelector("#distanciaHorizontalVelocidad .calculadora-grid .velocidadX");
  let velocidadInicial2 = distanciaX2/tiempoLanzHorizontal3;
  velocidadInicialInput2.value = velocidadInicial2.toFixed(2);

  let tiempoLanzHorizontal4 = document.querySelector("#distanciaHorizontalX .calculadora-grid .tiempodishoriz").value;
  tiempoLanzHorizontal4 = parseFloat(tiempoLanzHorizontal4);
  let velocidadX2 = document.querySelector("#distanciaHorizontalX .calculadora-grid .velocidadX").value;
  velocidadX2 = parseFloat(velocidadX2);
  let distanciaXInput = document.querySelector("#distanciaHorizontalX .calculadora-grid .distanciaX");
  let distanciaX3 = tiempoLanzHorizontal4 * velocidadX2;
  distanciaXInput.value = distanciaX3.toFixed(2);

  //Movimiento Parabólico
  let velocidadInicialParabolico = document.querySelector("#VelocidadXYParabolico .vInicialParabolico").value;
  let anguloParabolico1 = document.querySelector("#VelocidadXYParabolico .angulo").value;
  velocidadInicialParabolico = parseFloat(velocidadInicialParabolico);
  anguloParabolico1 = parseFloat(anguloParabolico1);
  let velocidadInicialParabolicoXInput = document.querySelector("#VelocidadXYParabolico .velocidadX");
  let velocidadInicialParabolicoYInput = document.querySelector("#VelocidadXYParabolico .velocidadY");
  let velocidadInicialParabolicoX = velocidadInicialParabolico * Math.cos((anguloParabolico1 * Math.PI)/180);
  let velocidadInicialParabolicoY = velocidadInicialParabolico * Math.sin((anguloParabolico1 * Math.PI)/180);
  velocidadInicialParabolicoXInput.value = velocidadInicialParabolicoX.toFixed(2);
  velocidadInicialParabolicoYInput.value = velocidadInicialParabolicoY.toFixed(2);

  let velocidadXParabolico1 = document.querySelector("#distanciaXParabolico .velocidadX").value;
  let tiempoVueloParabolico = document.querySelector("#distanciaXParabolico .tiempoVuelo").value;
  velocidadXParabolico1 = parseFloat(velocidadXParabolico1);
  tiempoVueloParabolico = parseFloat(tiempoVueloParabolico);
  let distanciaX1ParabolicoInput = document.querySelector("#distanciaXParabolico .distanciaX");
  let distanciaX1Parabolico = velocidadXParabolico1 * tiempoVueloParabolico;
  distanciaX1ParabolicoInput.value = distanciaX1Parabolico.toFixed(2);

  let velocidadXParabolico2 = document.querySelector("#distanciaXParabolico .velocidadX2").value;
  let anguloParabolico2 = document.querySelector("#distanciaXParabolico .angulo").value;
  velocidadXParabolico2 = parseFloat(velocidadXParabolico2);
  anguloParabolico2 = parseFloat(anguloParabolico2);
  let sen2aParabolico = (2 * (Math.sin((anguloParabolico2 * Math.PI)/180) * Math.cos((anguloParabolico2 * Math.PI)/180)));
  let distanciaX2ParabolicoInput = document.querySelector("#distanciaXParabolico .distanciaX2");
  let distanciaX2Parabolico = (Math.pow(velocidadXParabolico2,2)  * sen2aParabolico) / gravedad;
  distanciaX2ParabolicoInput.value = distanciaX2Parabolico.toFixed(2);
 

  let vInicialYParabolico = document.querySelector("#VfinalY .velocidadY").value;
  let tiempoParabolico = document.querySelector("#VfinalY .tiempo").value;
  vInicialYParabolico = parseFloat(vInicialYParabolico);
  tiempoParabolico = parseFloat(tiempoParabolico);
  let vFinalYparabolicoInput = document.querySelector("#VfinalY .VfinalY");
  let vFinalYparabolico = vInicialYParabolico - (gravedad * tiempoParabolico) ;
  vFinalYparabolicoInput.value = vFinalYparabolico.toFixed(2);

  let vInicialYParabolico2 = document.querySelector("#VfinalY .velocidadY2").value;
  let YinicialParabolico = document.querySelector("#VfinalY .Yinicial").value;
  let YfinalParabolico = document.querySelector("#VfinalY .Yfinal").value;
  YinicialParabolico = parseFloat(YinicialParabolico);
  YfinalParabolico = parseFloat(YfinalParabolico);
  vInicialYParabolico2 = parseFloat(vInicialYParabolico2);
  let vFinalYparabolicoInput2 = document.querySelector("#VfinalY .VfinalY2");
  let vFinalYparabolico2 = Math.sqrt(Math.pow(vInicialYParabolico2,2) - (2*gravedad * (YfinalParabolico - YinicialParabolico)));
  vFinalYparabolicoInput2.value = vFinalYparabolico2.toFixed(2);
  
  let vXParabolico = document.querySelector("#anguloParabolico .vXParabolico").value;
  let vYParabolico = document.querySelector("#anguloParabolico .vYParabolico").value;
  vXParabolico = parseFloat(vXParabolico);
  vYParabolico = parseFloat(vYParabolico);
  let anguloParabolicoInput = document.querySelector("#anguloParabolico .angulo");
  let anguloParabolico = Math.atan2(vYParabolico,vXParabolico) * (180 / Math.PI  );
  anguloParabolicoInput.value = anguloParabolico.toFixed(2);

  //Óptica
  let vOndaOptica1 = document.querySelector("#indiceRefraccionOptica .vOnda").value;
  vOndaOptica1 = parseFloat(vOndaOptica1);
  let indiceRefraccionOpticaInput = document.querySelector("#indiceRefraccionOptica .indiceRefraccion");
  let indiceRefraccionOptica = vLuz/vOndaOptica1;
  indiceRefraccionOpticaInput.value = indiceRefraccionOptica.toFixed(2);
  
  let periodoOptica = document.querySelector("#frecuenciaOptica .periodoOptica").value;
  periodoOptica = parseFloat(periodoOptica);
  let frecuenciaOpticaInput = document.querySelector("#frecuenciaOptica .frecuenciaOnda");
  let frecuenciaOnda = 1/periodoOptica;
  frecuenciaOpticaInput.value = frecuenciaOnda.toFixed(2);
  
  let frecuenciaOnda2 = document.querySelector("#periodoOptica .frecuenciaOnda").value;
  frecuenciaOnda2 = parseFloat(frecuenciaOnda2);
  let periodoOpticaInput1 = document.querySelector("#periodoOptica .periodoOnda");
  let periodoOptica1 = 1 / frecuenciaOnda2;
  periodoOpticaInput1.value = periodoOptica1.toFixed(2);

  let longitudOnda = document.querySelector("#periodoOptica .longitudOnda").value;
  let vOnda = document.querySelector("#periodoOptica .vOnda").value;
  longitudOnda = parseFloat(longitudOnda);
  vOnda = parseFloat(vOnda);
  let periodoOpticaInput2 = document.querySelector("#periodoOptica .periodoOnda2");
  let periodoOptica2 = longitudOnda/vOnda;
  periodoOpticaInput2.value = periodoOptica2.toFixed(2);

  let indiceRefraccion1 = document.querySelector("#velocidadOptica .indiceRefraccion").value;
  indiceRefraccion1 = parseFloat(indiceRefraccion1);
  let vOndaInput1 = document.querySelector("#velocidadOptica .vOnda");
  let vOnda1 = vLuz/indiceRefraccion1;
  vOndaInput1.value = vOnda1.toFixed(2);

  let longitudOnda2 = document.querySelector("#velocidadOptica .longitudOnda").value;
  let periodoOnda2 = document.querySelector("#velocidadOptica .periodoOnda").value;
  longitudOnda2 = parseFloat(longitudOnda2);
  periodoOnda2 = parseFloat(periodoOnda2);
  let vOndaInput2 = document.querySelector("#velocidadOptica .vOnda2");
  let vOnda2 = longitudOnda2/periodoOnda2;
  vOndaInput2.value = vOnda2.toFixed(2);
})
}
});

//Diseño calculadora
document.addEventListener("DOMContentLoaded", function () {
  let calcConfirm = document.querySelector("#Calculadora");
  if(calcConfirm !== null){

  let calc = document.querySelector("#calcupdater");
  let calcCaidaLibre = document.querySelector("#CaidaLibreCalc .calculadora-grid");
  let calcLanzamientoVertical = document.querySelectorAll("#LanzVerticalCalc .calculadora-grid"),z;
  let calcLanzamientoHorizontalInput = document.querySelector("#LanzHorizontalCalc .calculadora");
  let distanciaHorizontalTiempo = document.querySelectorAll("#distanciaHorizontalTiempo .calculadora-grid"),w;
  let distanciaHorizontalVelocidad = document.querySelector("#distanciaHorizontalVelocidad .calculadora-grid");
  let distanciaHorizontalX = document.querySelector("#distanciaHorizontalX .calculadora-grid");
  let calc2 = document.querySelector("#LanzHorizontalCalc .select");
  let container = document.querySelector("#LanzHorizontalCalc .container");
  let container2 = document.querySelector("#MovimientoParabolicoCalc .container");
  let calcLanzamientoParabolicoInput = document.querySelector("#MovimientoParabolicoCalc .calculadora");
  let calc3 = document.querySelector("#MovimientoParabolicoCalc .select");
  let movParabolicoXmax = document.querySelectorAll("#distanciaXParabolico .calculadora-grid"),y;
  let velocidadFinalYParabolico = document.querySelectorAll("#VfinalY .calculadora-grid"),u;
  let movParabolicoVelocidadXY = document.querySelector("#VelocidadXYParabolico .calculadora-grid");
  let anguloParabolicoCalc = document.querySelector("#anguloParabolico .calculadora-grid");
  let container3 = document.querySelector("#OpticaCalc .container");
  let calc4 = document.querySelector("#OpticaCalc .select");
  let calcOpticaInput = document.querySelector("#OpticaCalc .calculadora");
  let indiceRefraccionOptica = document.querySelector("#indiceRefraccionOptica .calculadora-grid");
  let frecuenciaOptica = document.querySelector("#frecuenciaOptica .calculadora-grid");
  let periodoOptica = document.querySelectorAll("#periodoOptica .calculadora-grid"),v;
  let velocidadOptica = document.querySelectorAll("#velocidadOptica .calculadora-grid"),r;

  calc.addEventListener("change", function () {
  if (calc.value === "CaidaLibre"){
    calcCaidaLibre.style.display = "grid";
  }
  else
  calcCaidaLibre.style.display = "none";
 for(z=0; z < calcLanzamientoVertical.length; z++)
 {
  if(calc.value === "LanzamientoVertical"){
    calcLanzamientoVertical[z].style.display = "grid";
  }
  else
    calcLanzamientoVertical[z].style.display = "none";
  }
  if(calc.value === "LanzamientoHorizontal")
  {
    calcLanzamientoHorizontalInput.style.display = "flex";
    container.style.display = "grid";
    calc2.addEventListener("change", function () { 
      for(w=0; w < distanciaHorizontalTiempo.length; w++){
        if(calc2.value ==="Tiempo")
          distanciaHorizontalTiempo[w].style.display = "grid";

        else
          distanciaHorizontalTiempo[w].style.display = "none";
      }
  
      if(calc2.value === "VinicialX")
        distanciaHorizontalVelocidad.style.display = "grid";

      else
        distanciaHorizontalVelocidad.style.display = "none";
  
      if(calc2.value === "DistanciaHorizontal")
        distanciaHorizontalX.style.display = "grid";
      else
        distanciaHorizontalX.style.display = "none";
      
      })
      

  }
  else{
    calcLanzamientoHorizontalInput.style.display = "none";
    container.style.display = "none";
  }
    
  if (calc.value === "MovimientoParabolico"){
    calcLanzamientoParabolicoInput.style.display = "flex";
    container2.style.display  = "grid";
    calc3.addEventListener("change", function (){
      for(y=0; y < movParabolicoXmax.length; y++){
        if(calc3.value ==="distanciaX"){
          movParabolicoXmax[y].style.display = "grid";
        }
        else
          movParabolicoXmax[y].style.display = "none";
      }
      if(calc3.value === "VelocidadXY"){
        movParabolicoVelocidadXY.style.display = "grid";
      }
      else  
        movParabolicoVelocidadXY.style.display = "none";

      for(u=0; u < velocidadFinalYParabolico.length; u++){
        if(calc3.value === "VfinalY"){
          velocidadFinalYParabolico[u].style.display = "grid";
        }
        else
          velocidadFinalYParabolico[u].style.display = "none";
        }
      if(calc3.value === "angulo")
        anguloParabolicoCalc.style.display = "grid";
      else
        anguloParabolicoCalc.style.display = "none";

    })
  
  }
  else{
    calcLanzamientoParabolicoInput.style.display = "none";
    container2.style.display = "none";
  }

  if(calc.value === "Optica"){
    calcOpticaInput.style.display = "flex";
    container3.style.display = "grid";
    calc4.addEventListener("change", function (){
      if(calc4.value === "indiceRefraccion")
        indiceRefraccionOptica.style.display = "grid";
      else
        indiceRefraccionOptica.style.display = "none";

      if(calc4.value === "Frecuencia")
        frecuenciaOptica.style.display = "grid";
      else
        frecuenciaOptica.style.display = "none"

      for(v=0; v < periodoOptica.length ; v++){
        if(calc4.value === "Periodo")
          periodoOptica[v].style.display = "grid";
        else
          periodoOptica[v].style.display = "none";
      }
      for(r=0; r < velocidadOptica.length ; r++){
        if(calc4.value === "Velocidad")
          velocidadOptica[r].style.display = "grid";
        else
          velocidadOptica[r].style.display = "none";
      }

    })
  }
  else{
    calcOpticaInput.style.display = "none";
    container3.style.display = "none";
  }
 
}
)
};
});


var sections = [];
  var colors = ["#d4483f", "#0074D9", "#2ECC40", "#FFDC00", "#B10DC9", "#FF851B"];

  function addSection() {
    var sectionName = document.getElementById("sectionName").value;
    if (sectionName !== "") {
      sections.push(sectionName);
      drawWheel();
    }
  }

  function drawWheel() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = Math.min(x, y) - 10;
    var angle = (2 * Math.PI) / sections.length;

 

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < sections.length; i++) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, i * angle, (i + 1) * angle);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(i * angle + angle / 2);
      ctx.fillStyle = "white";
      ctx.font = "bold 20px Arial";
 
      ctx.fillText(sections[i], (radius / 2), 0);
      ctx.restore();
    }
  }

  drawWheel();

var sections = []; 
var colors = ["#FF4136", "#0074D9", "#2ECC40", "#FFDC00", "#B10DC9", "#FF851B"]; 
var spinning = false;

function addSection() { var sectionName = document.getElementById("sectionName").value; if (sectionName !== "") { sections.push(sectionName); drawWheel(); } }

function drawWheel() { var canvas = document.getElementById("canvas"); var ctx = canvas.getContext("2d"); var x = canvas.width / 2; var y = canvas.height / 2; var radius = Math.min(x, y) - 10; var angle = (2 * Math.PI) / sections.length;

ctx.clearRect(0, 0, canvas.width, canvas.height);

for (var i = 0; i < sections.length; i++) { ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, radius, i * angle, (i + 1) * angle); ctx.closePath(); ctx.fillStyle = colors[i % colors.length]; ctx.fill();

ctx.save();
ctx.translate(x, y);
ctx.rotate(i * angle + angle / 2);
var textWidth = ctx.measureText(sections[i]).width;
ctx.fillStyle = "white";
ctx.font = "bold 20px Arial";
      ctx.fillText(sections[i], (radius / 2) - textWidth, 0);
ctx.restore();
} }

function winNotification_Close () {
  let notification = document.querySelector(".winNotification");
  notification.style.opacity = "0";
  notification.style.pointerEvents = "none";
}
function winNotification_Open () {
  let notification = document.querySelector(".winNotification");
  notification.style.opacity = "1";
  notification.style.pointerEvents = "all";
}

function spinWheel() {
  if (!spinning) {
    spinning = true;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = Math.min(x, y) - 10;
    var angle = (2 * Math.PI) / sections.length;
    var speed = Math.random() / 25;
    var duration = 5000;
    var start = null;
    var text = document.querySelector(".text");

    function spin(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var angleDelta = speed * progress;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(angleDelta);
      for (var i = 0; i < sections.length; i++) {
        ctx.save();
        ctx.rotate(i * angle + angle / 2);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, -angle / 2, angle / 2);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        var textWidth = ctx.measureText(sections[i]).width;
        
  

        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "bold 20px Arial";
        ctx.textBaseline = "bottom";
        ctx.fillText(sections[i], (radius / 2) -textWidth  ,  0);
        ctx.restore();

    }
      
  
      ctx.restore();
      
      if (progress < duration) {
        requestAnimationFrame(spin);
      } else {
        spinning = false;
        var winningIndex = Math.floor((angleDelta % (2 * Math.PI)) / angle);

        winNotification_Open()
        while (text.firstChild) {
          text.removeChild(text.firstChild);
      }
      text.appendChild(document.createTextNode("Ganó: " + sections[winningIndex]));
      }
    }

    requestAnimationFrame(spin);
  }
}

document.addEventListener("DOMContentLoaded", function(){
let sidebarButtonIndex = document.querySelectorAll(".sidebarButton "),alele;

let sidebar = document.querySelector(".sidebar");
let sidebarIndicator = false;

for(alele = 0; alele < sidebarButtonIndex.length; alele++){
sidebarButtonIndex[alele].addEventListener("click",function(){
if(sidebarIndicator === false){
 
  sidebar.style.opacity = "1";
  sidebar.style.pointerEvents = "all"; 
  sidebarIndicator = true;

}
else{
  sidebar.style.opacity = "0";
  sidebar.style.pointerEvents = "none"; 
  sidebarIndicator = false;

}
})
}
})

function closeContact () {
  let contacto = document.querySelector(".contacto");
  contacto.style.display = "none";
}

function displayContact (){
  let contacto = document.querySelector(".contacto");
  if(contacto.style.display == "none"){
    contacto.style.display = "inline";
  }
  else {
    contacto.style.display = "none";
  }
}

