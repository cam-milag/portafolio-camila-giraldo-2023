
//NAVBAR FIJO Y CAMBIO DE COLOR

var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
  
  // comprobamos si la página está en la parte superior
  if (window.pageYOffset === 0) {
    navbar.classList.remove('sticky');
  }
});

// comprobamos si la página ya se ha desplazado al cargar
if (window.pageYOffset > 0) {
  navbar.classList.add('sticky');
}

//PARALLAX

let header = document.getElementById('header')
let luna = document.getElementById('luna')
let estrellas = document.getElementById('estrellas')
let btnInicio = document.getElementById('btnInicio')
let montaña2 = document.getElementById('montaña2')
let arboles = document.getElementById('arboles')
let montaña3 = document.getElementById('montaña3')
let montañas1 = document.getElementById('montañas1')

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    luna.style.top = value * 0.5+ 'px'
    btnInicio.style.margintop = value * -0.5 + 'px';
    estrellas.style.left = value * 0.5 + 'px'
    arboles.style.top = value * 0.5 + 'px';
    montaña3.style.bottom = value * 0.5 + 'px';
    montañas1.style.top = value * 0.5 + 'px';
})


//MODAL

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click",function(){
    modal.classList.add("open-modal");
});
closeBtn.addEventListener("click",function(){
    modal.classList.remove("open-modal");
});


//ANIMACIONES

AOS.init({
  duration:1500,
  once: false,
  easing: 'ease-in-out-back',
  mirror: false,
  anchorPlacement: 'top-bottom',
});


