/* 

let estado = 1


function siguiente (){

    if(estaddo == 1){
        //-----
        estado = 2
    }else if(estado == 2){
        //---
        estado = 3
    }
}
 */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Containers");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var comt = document.querySelector('#cometa');
var juanchos = document.querySelector('.img2-5');
var maceta = document.querySelector('.img2-6');
var cometaEsc2 = document.querySelector('.img2-3');
var nb1 = document.querySelector('.img2-7');
var audio1 = document.querySelector('.audio1');
var audio2 = document.querySelector('.audio2');
var audio22 = document.querySelector('.audio22');
var audio3 = document.querySelector('.audio3');
var audio5 = document.querySelector('.audio5');
var audio4 = document.querySelector('.audio4');
var audio42 = document.querySelector('.audio42');
var audio43 = document.querySelector('.audio43');
var audio51 = document.querySelector('.audio51');
var audio6 = document.querySelector('.audio6');
var audio7 = document.querySelector('.audio7');
var audio71 = document.querySelector('.audio71');
var audio81 = document.querySelector('.audio81');
var audio82 = document.querySelector('.audio82');
var audio83 = document.querySelector('.audio83');
var audio9 = document.querySelector('.audio9');
var audio92 = document.querySelector('.audio92');
var audio10 = document.querySelector('.audio10');
var audio101 = document.querySelector('.audio101');
var walk1 = document.querySelector('.wlk1');
var walk22 = document.querySelector('.wlk22');
var character = document.querySelector('.character');
var character22 = document.querySelector('.character22');
var txt = document.querySelector('.txt-1');
var cmta = document.querySelector('.img1-4')
var gusanos = document.querySelector('.img4-7');
var gusanosDos = document.querySelector('.img4-6');
var golpeado = document.querySelector('.img7-4');
var humo = document.querySelector('.img7-5');
var token2 = document.querySelector('.img7-6');
var chiko2 = document.querySelector('.img7-7');
var token = document.querySelector('.img7-2');
var chiko = document.querySelector('.img7-3');
var tokenn = document.querySelector('.img8-3');
var dengo = document.querySelector('.img8-4');
var zikar = document.querySelector('.img8-5');
var cebo = document.querySelector('.img8-8');
var ataka = document.querySelector('.img8-9');
var toke = document.querySelector('.img9-4');
var profe9 = document.querySelector('.img9-3');
var curaos = document.querySelector('.img10-15');
var japitoken = document.querySelector('.img10-16');
var profe10 = document.querySelector('.img10-17');
var atrapada = document.querySelector('.img8-10');
var atrapado = document.querySelector('.img8-11');
var circulo1 = document.querySelector('.circulo1');
var circulo2 = document.querySelector('.circulo2');
var circulo3 = document.querySelector('.circulo3');
var circulo4 = document.querySelector('.circulo4');
var circulo5 = document.querySelector('.circulo5');
var circulo7 = document.querySelector('.circulo7');
var circulo8 = document.querySelector('.circulo8');
var circulo9 = document.querySelector('.circulo9');
var circulo10 = document.querySelector('.circulo10');
var profe1 = document.querySelector('.img5-4');
var txt5 = document.querySelector('.txt5');
var txt7 = document.querySelector('.txt7');
var txt8 = document.querySelector('.txt8');
var txt9 = document.querySelector('.txt9');
var txt10 = document.querySelector('.txt10');
var txt3 = document.querySelector('.txt3');
var wat2 = document.querySelector('.wat2');
circulo1.addEventListener('click', activar);
circulo2.addEventListener('click', start);
gusanos.addEventListener('animationend', function () {
  gusanos.classList.add('hidden');
  gusanosDos.addEventListener('animationend', function () {
    gusanosDos.classList.add('hidden');
  });
});
character.addEventListener('animationend', function () {
  character.classList.add('hidden');
});
function activar() {
  circulo1.style.display = 'none';
  cmta.classList.remove('oculto');
  console.log('ejecutando.....')
  comt.style.animationPlayState = "running";
  setTimeout(function () {
    comt.setAttribute('src', 'escenarioscodigo/escenario1/cometa-choque.png');
  }, 3000);
  setTimeout(function () {
    comt.style.display = 'none';
  }, 5000);
  setTimeout(function () {
    txt.classList.remove('oculto');
  }, 3000);
  setTimeout(function () {
    audio1.play()
  }, 3);
}

const stopButton1 = document.getElementById("stop-button1");
const stopButton12 = document.getElementById("stop-button12");
const stopButton13 = document.getElementById("stop-button13");
const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const playButton2 = document.getElementById("play-button2");
const stopButton2 = document.getElementById("stop-button2");
const playButton3 = document.getElementById("play-button3");
const stopButton3 = document.getElementById("stop-button3");
const playButton4 = document.getElementById("play-button4");
const stopButton4 = document.getElementById("stop-button4");
const playButton5 = document.getElementById("play-button5");
const stopButton5 = document.getElementById("stop-button5");
const playButton6 = document.getElementById("play-button6");
const stopButton6 = document.getElementById("stop-button6");
const playButton7 = document.getElementById("play-button7");
const stopButton7 = document.getElementById("stop-button7");
// Function to stop the audio
function stopAudio1() {
  audio1.pause();
  audio1.currentTime = 0;
}
// Function to stop the audio
function stopAudio12() {
  audio2.pause();
  audio2.currentTime = 0;
  audio22.pause();
  audio22.currentTime = 0;
}
// Function to stop the audio
function stopAudio13() {
  audio3.pause();
  audio3.currentTime = 0;
}
function playAudio3() {
  audio6.play();
  audio6.volume = 0.7
}

// Function to stop the audio
function stopAudio3() {
  audio6.pause();
  audio6.currentTime = 0;
}
function playAudio2() {
  audio51.play();
  audio51.volume = 0.05
}
function stopAudio2() {
  audio51.pause();
  audio51.currentTime = 0;
}
function stopAudio5() {
  audio83.pause();
  audio83.currentTime = 0;
}
function playAudio5() {
  audio83.play();
  audio83.volume = 0.6;
}

// Function to play the audio
function playAudio6() {
  audio9.play();
  audio9.volume = 0.6
}
function stopAudio6() {
  audio9.pause();
  audio9.currentTime = 0;
}
function playAudio4() {
  audio7.play();
  audio7.volume = 0.6
}
function playAudio() {
  audio4.play();
  audio4.volume = 0.3
}
// Function to stop the audio
function stopAudio() {
  audio4.pause();
  audio4.currentTime = 0;
}


// Function to stop the audio
function stopAudio4() {
  audio7.pause();
  audio7.currentTime = 0;
}

function playAudio7() {
  setTimeout(function () {
    audio10.play();
    audio10.volume = 0.6
  }, 2900);
}

// Function to stop the audio
function stopAudio7() {
  audio10.pause();
  audio10.currentTime = 0;
}
// Attach event listeners to the buttons
stopButton1.addEventListener("click", stopAudio1);
stopButton12.addEventListener("click", stopAudio12);
stopButton13.addEventListener("click", stopAudio13);
playButton.addEventListener("click", playAudio);
stopButton.addEventListener("click", stopAudio);
playButton2.addEventListener("click", playAudio2);
stopButton2.addEventListener("click", stopAudio2);
playButton3.addEventListener("click", playAudio3);
stopButton3.addEventListener("click", stopAudio3);
playButton4.addEventListener("click", playAudio4);
stopButton4.addEventListener("click", stopAudio4);
playButton5.addEventListener("click", playAudio5);
stopButton5.addEventListener("click", stopAudio5);
playButton6.addEventListener("click", playAudio6);
stopButton6.addEventListener("click", stopAudio6);
playButton7.addEventListener("click", playAudio7);
stopButton7.addEventListener("click", stopAudio7);
function start() {
  circulo2.style.display = 'none';
  juanchos.style.animationPlayState = "running";
  maceta.style.animationPlayState = "paused";
  juanchos.classList.remove('oculto');
  setTimeout(function () {
    cometaEsc2.classList.add('cometa-sce2')
  }, 1);

  audio22.play()

  audio22.volume = 0.1

  setTimeout(function () {
    audio2.play()
  }, 2);
  audio5.volume = 0.2;
}
circulo3.addEventListener('click', start3)
function start3() {
  circulo3.style.display = 'none';
  walk1.classList.remove('oculto');
  walk1.style.animationPlayState = "running";
  audio3.play()
  audio3.volume = 0.9
  setTimeout(function () {
    txt3.classList.remove('oculto');
  }, 500);
};
circulo4.addEventListener('click', start4)
function start4() {
  audio43.play();
  audio43.volume = 0.5
  audio42.play();
  audio42.volume = 0.5
  setTimeout(function () {
    character22.classList.remove('oculto');
    walk22.style.animationPlayState = "running";
  }, 3500);
  circulo4.style.display = 'none';
  circulo4.classList.remove('oculto');
}
circulo5.addEventListener('click', start2)
function start2() {
  profe1.classList.remove('oculto');
  circulo5.style.display = 'none';
  circulo5.classList.remove('oculto');
  setTimeout(function () {
    txt5.classList.remove('oculto');
  }, 3000);
  setTimeout(function () {
    audio5.play()
  }, 10);
  audio5.volume = 0.3;
}
circulo7.addEventListener('click', start5)
function start5() {
  circulo7.style.display = 'none';
  circulo7.classList.remove('oculto');
  setTimeout(function () {
    golpeado.style.display = 'none';
  }, 2000);
  setTimeout(function () {
    txt7.classList.remove('oculto');
    txt7.style.animationPlayState = "running";
  }, 10);
  token.style.animationPlayState = "running";
  setTimeout(function () {
    chiko.style.animationPlayState = "running";
  }, 1000);
  setTimeout(function () {
    chiko2.classList.remove('oculto');
  }, 8000);
  setTimeout(function () {
    token2.classList.remove('oculto');
    token2.style.animationPlayState = "running";
  }, 5000);
  setTimeout(function () {
    humo.classList.remove('oculto');
    humo.style.animationPlayState = "running";
  }, 1100);
  setTimeout(function () {
    audio71.play()
  }, 6000);
  audio71.volume = 0.5;
}
circulo8.addEventListener('click', start6)
function start6() {
  circulo8.style.display = 'none';
  circulo8.classList.remove('oculto');
  tokenn.style.display = 'none';
  zikar.style.display = 'none';
  cebo.style.display = 'none';
  setTimeout(function () {
    txt8.classList.remove('oculto');
    txt8.style.animationPlayState = "running";
  }, 7500);
  setTimeout(function () {
    dengo.style.display = 'none';
  }, 7000);
  setTimeout(function () {
    wat2.style.display = 'none';
  }, 2900);
  setTimeout(function () {
    atrapada.classList.remove('oculto');
    wat2.classList.remove('oculto');
  }, 2000);
  setTimeout(function () {
    atrapado.classList.remove('oculto');
  }, 7000);
  ataka.classList.remove('oculto');
  ataka.style.animationPlayState = "running";
  setTimeout(function () {
    audio81.play()
  }, 1000);
  audio81.volume = 0.5;
  setTimeout(function () {
    audio81.play()
  }, 7000);
  audio81.volume = 0.5;
  setTimeout(function () {
    audio82.play()
  }, 7600);
  audio82.volume = 0.5;
}
circulo9.addEventListener('click', start7)
function start7(){
  profe9.classList.remove('oculto');
  toke.classList.remove('oculto');
  txt9.classList.remove('oculto');
  txt9.style.animationPlayState = "running";
  circulo9.style.display = 'none';
  setTimeout(function () {
    audio92.play()
  }, 4200);
  audio92.volume = 0.6;
}
circulo10.addEventListener('click', start8)
function start8(){
  profe10.classList.remove('oculto');
  curaos.classList.remove('oculto');
  japitoken.classList.remove('oculto');
  profe10.style.animationPlayState = "running";
  japitoken.style.animationPlayState = "running";
  curaos.style.animationPlayState = "running";
  circulo10.style.display = 'none';
  audio101.play()
  audio101.volume = 0.6;
  setTimeout(function () {
    txt10.classList.remove('oculto');
  }, 1000);
}



// Función para cambiar la imagen

/*  document.addEventListener("DOMContentLoaded", function () {
   var elemento = document.querySelector(".img4-12");
   var uno = document.querySelector(".img4-9");
   var dos = document.querySelector(".img4-10");
   var tres = document.querySelector(".img4-11");

   // Espera 2 segundos antes de mostrar el elemento
   setTimeout(function () {
     elemento.classList.remove("invisible");
     elemento.classList.add("visible");

     // Espera 4 segundos antes de ocultar el elemento nuevamente
     setTimeout(function () {
       elemento.classList.remove("visible");
       elemento.classList.add("invisible");
     }, 8000);
   }, 2000);
   setTimeout(function () {
     uno.classList.remove("invisible");
     uno.classList.add("visible");

     // Espera 4 segundos antes de ocultar el elemento nuevamente
     setTimeout(function () {
       uno.classList.remove("visible");
       uno.classList.add("invisible");
     }, 6000);
   }, 1000);
   setTimeout(function () {
     dos.classList.remove("invisible");
     dos.classList.add("visible");

     // Espera 4 segundos antes de ocultar el elemento nuevamente
     setTimeout(function () {
       tres.classList.remove("visible");
       tres.classList.add("invisible");
     }, 6000);
   }, 1000);
   setTimeout(function () {
     elemento.classList.remove("invisible");
     elemento.classList.add("visible");

     // Espera 4 segundos antes de ocultar el elemento nuevamente
     setTimeout(function () {
       elemento.classList.remove("visible");
       elemento.classList.add("invisible");
     }, 2000);
   }, 3000);
 });
*/