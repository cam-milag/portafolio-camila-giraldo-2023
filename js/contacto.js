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


//ANIMACIONES

AOS.init({
  duration:1500,
  once: false,
  easing: 'ease-in-out-back',
  mirror: false,
  anchorPlacement: 'top-bottom',
});


