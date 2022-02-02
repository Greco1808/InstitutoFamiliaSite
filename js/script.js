var slides =document.getElementsByClassName("Slides")
var button = document.querySelector('.next')
var chamada = document.getElementsByClassName("borda_chamada")


var index = 0
controlaSlide()
avancaChamada()

function avancaSlide(){
  controlaSlide(index += 1)
  
}

function avancaTexto(){
  avancaChamada(index += 1)

}



      

setInterval(avancaSlide,5000)
setInterval(avancaChamada,5500)

function controlaSlide(){
  
  if(index >= slides.length){
    index = 0;
  }
  
  if(index < 0){
    index = slides.length - 1;
  }
  
  for(i = 0 ;i < slides.length ; i++){
  
  slides[i].style.display = "none"
  
}

slides[index].style.display = "block"
  
  console.log(index)
  
}


function avancaChamada(){
  
  if(index >= chamada.length){
    index = 0;
  }
  
  if(index < 0){
    index = chamada.length - 1;
  }
  
  for(i = 0 ;i < chamada.length ; i++){
  
  chamada[i].style.display = "none"
  
}

chamada[index].style.display = "block"
  
  console.log(index)
  
}
