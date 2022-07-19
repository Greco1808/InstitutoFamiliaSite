var slides =document.getElementsByClassName("Slides")
var button = document.querySelector('.next')
let alturaTela = window.innerHeight;


//var chamada = document.getElementsByClassName("borda_chamada")

function scroll(x){
  
  var alturaCalculada = alturaTela - x
  
  window.scrollBy(0, alturaCalculada)
  
}

var index = 0

controlaSlide()
//avancaChamada()

function avancaSlide(){
  controlaSlide(index += 1)
  
}

//function avancaTexto(){
 // avancaChamada(index += 1)

//}



      

//setInterval(avancaSlide,5000)
//setInterval(avancaChamada,5500)

function controlaSlide(){
  
  if(index >= slides.length){
    index = 0;
  }
  
  if(index < 0){
    index = slides.length -1;
  }
  
  
  for(i = 0 ;i < slides.length ; i++){
  
  slides[i].style.display = "none"
  
}

slides[index].style.display = "block"
  
  console.log(index)
  
}

var collapse = document.getElementsByClassName("collapsible");
var i = 0

  for(i =0 ; i < collapse.length ; i++){
  
    collapse[i].addEventListener("click", function(){ 
    var content = this.nextElementSibling
    console.log(content)
    //this.classList.toggle("active")
    if(content.style.display === "block"){
    content.style.display="none"
    }else{
      content.style.display="block"
 }
      })
 
  }
  

//script para girar o carrossel do snap align

var indice =0
var y;
var classe;


function avancaSnap(y,classe){
 
  controlaSnap(indice += y,classe)
    //controlaSlide(classe)
    console.log(classe)
    console.log(y)
  
  
  
}




function controlaSnap(y,classe){
    


  var slides = document.getElementsByClassName(classe)
  
  
  
  
  if(indice >= slides.length){
    indice = 0;
  }
  
  if(indice < 0){
    indice = slides.length - 1;
  }
  
 var count = slides[indice]
 console.log(slides)
   
 
 count.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  console.log(slides)
}
  


//function avancaChamada(){
  
  //if(index >= chamada.length){
   // index = 0;
 // }
  //
  
  //for(i = 0 ;i < chamada.length ; i++){
  
  //chamada[i].style.display = "none"
  
//}

//chamada[index].style.display = "block"
  
  //console.log(index)
  
//}
