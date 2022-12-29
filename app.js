const pointer = document.querySelector(".cur");
const soundBar = document.querySelector(".sound-bar");
const ball = document.querySelector(".ball");
const backgrounds = [
    'img/are-you-bored-yet.jpg',
    'img/go-fck-yourself.jpeg',
    'img/make-you-mine.jpg',
    'img/falling-for-you.jpg'
];
const bckgrndmsc = new Audio('audio/bckgrnd.mp3');
const typeJsText = document.querySelector(".type");
let textArray = typeJsText.dataset.typetext.split("");
let counter = -1;
let current = 0;
const { log: myLove } = console;

setTimeout(function(){
    myLove(`%c 
    porque sigo convencido de que eres el amor de mi vida`, "font-family:monospace; color: red;");
}, 15000);

if (screen.width <= 700) {
  document.location = "mobile.html";
}

typeJsText.innerHTML = "";

document.addEventListener("mousemove", e => {
  pointer.style.left = e.clientX + "px";
  pointer.style.top = e.clientY + "px";
});

// Recorriendo un laberinto sin sentido,
// me encuentro desde hace tiempo perdido.

// He intentado encontrarte
// Y aunque no dejare de amarte
// La realidad más contundente
// Es que nunca más podré tenerte.
// En mi vida, en mis días ni mi futuro
// En mi mente estás, eso es seguro
// Mi amor por ti si fue puro y sin reservas
// Y por mucho que no lo creas
// Tu impacto en mi ser se conserva

soundBar.addEventListener("click", () => {
    ball.classList.toggle("off");
});

setTimeout(function(){
    myLove(`%c 
    Te has preguntado por que sigo intentandolo contigo aun despues 
    de todo lo que hemos pasado?...`, "font-family:monospace; color: red;");
}, 13000);

document.addEventListener("click", () => {
    currentback = "url(" + backgrounds[current] + ")";
    document.body.style.backgroundImage = currentback;
    current = (current++ < backgrounds.length - 1) ? current : 0 ;
});


document.addEventListener("click", () => {
    if (ball.classList.contains("off")) {
        bckgrndmsc.pause();
        console.log()
    } else{
        bckgrndmsc.play();
        bckgrndmsc.volume = 0.3;
        bckgrndmsc.loop = true;
    }
});

setTimeout(function(){
    myLove(`%c 
    y eso no ha cambiado en absoluto, ni va a cambiar`, "font-family:monospace; color: red;");
}, 18000);

// Tu duelo ya lo has pasado, eso esta claro
// Mi jornada a penas empieza
// Después de recoger cada pieza
// De mi corazón, éste sigue enfrascado
// Varios días ya me ha tomado
// hacer que acepte el fracaso
// Y de esta relación el ocaso...

window.onload=function(){
    bckgrndmsc.play();
    bckgrndmsc.volume = 0.3;
    bckgrndmsc.loop = true;
}

function typeJs() {
  if (counter < typeJsText.dataset.typetext.length) {
    counter++;
    typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
    textArray = typeJsText.dataset.typetext.split("");
  } else {
    typeJsText.innerHTML = textArray.join("");
    if (textArray.length == 0) {
      counter = -1;
     }
  }
}

// Pero rencor no guarda mi corazón
// Pues muy feliz fui a tu lado
// Nuestro futuro juntos nublado
// No pudo convencer a tu razón
// Aunque efímero fue intenso
// Todo el amor que sentí que me expresabas
// Es difícil para mí creer, que ya no quede nada de eso.
// Siempre te amaré Daniela, y mi corazón te pertenece, aunque mi presencia sea la que anheles...
// Pdta, pwedona que no estén añ nivel de Umaña o de Arciniegas...

setInterval(() => {
  typeJs();
}, 50);

setTimeout(function(){
    myLove(`%c                                                
  d8888b.  .d8b.  d8b   db d888888b d88888b db       .d8b.       
  88  '8D d8' '8b 888o  88   '88'   88'     88      d8' '8b      
  88   88 8888888 88V8o 88    88    8888888 88      8888888            
  88  .8D 88   88 88  V888   .88.   88.     88      88   88      
  Y8888D' YP   YP VP   V8P Y888888P Y88888P Y88888P YP   YP      `,"font-family:monospace; color: red;");
}, 1000);

// Por mucha rabia que tenga, te amo y te he amado siempre, no importa cuanto peelemos siempre vas a aser la mujer que amo




