

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
  duration:800,
  once: false,
  easing: 'ease-in-out-back',
  mirror: false,
  anchorPlacement: 'top-bottom',
});



//CUENTA REGRESIVA


let numero1 = document.querySelector(".numero1");
         let contador1 = 0;
         setInterval(()=>{
         if(contador1==85){
         clearInterval();
         }else
         contador1+=1;
         numero1.textContent = contador1 + "%";
         }, 85);


let numero2 = document.querySelector(".numero2");
         let contador2 = 0;
         setInterval(()=>{
         if(contador2==88){
         clearInterval();
         }else
         contador2+=2;
         numero2.textContent = contador2 + "%";
         }, 88);



let numero3 = document.querySelector(".numero3");
         let contador3 = 0;
         setInterval(()=>{
         if(contador3==90){
         clearInterval();
         }else
         contador3+=2;
         numero3.textContent = contador3 + "%";
         }, 90);


let numero4 = document.querySelector(".numero4");
         let contador4 = 0;
         setInterval(()=>{
         if(contador4==90){
         clearInterval();
         }else
         contador4+=2;
         numero4.textContent = contador4 + "%";
         }, 90);

let numero5 = document.querySelector(".numero5");
         let contador5 = 0;
         setInterval(()=>{
         if(contador5==70){
         clearInterval();
         }else
         contador5+=2;
         numero5.textContent = contador5 + "%";
         }, 70);


let numero6 = document.querySelector(".numero6");
         let contador6 = 0;
         setInterval(()=>{
         if(contador6==80){
         clearInterval();
         }else
         contador6+=2;
         numero6.textContent = contador6 + "%";
         }, 80);


let numero7 = document.querySelector(".numero7");
         let contador7 = 0;
         setInterval(()=>{
         if(contador7==85){
         clearInterval();
         }else
         contador7+=1;
         numero7.textContent = contador7 + "%";
         }, 85);

         
let numero8 = document.querySelector(".numero8");
         let contador8 = 0;
         setInterval(()=>{
         if(contador8==90){
         clearInterval();
         }else
         contador8+=2;
         numero8.textContent = contador8 + "%";
         }, 90);

         
         
let numero9 = document.querySelector(".numero9");
         let contador9 = 0;
         setInterval(()=>{
         if(contador9==88){
         clearInterval();
         }else
         contador9+=2;
         numero9.textContent = contador9 + "%";
         }, 88);


let numero10 = document.querySelector(".numero10");
         let contador10 = 0;
         setInterval(()=>{
         if(contador10==85){
         clearInterval();
         }else
         contador10+=1;
         numero10.textContent = contador10 + "%";
         }, 85);



let numero11 = document.querySelector(".numero11");
         let contador11 = 0;
         setInterval(()=>{
         if(contador11==90){
         clearInterval();
         }else
         contador11+=2;
         numero11.textContent = contador11 + "%";
         }, 90);



let numero12 = document.querySelector(".numero12");
         let contador12 = 0;
         setInterval(()=>{
         if(contador12==90){
         clearInterval();
         }else
         contador12+=2;
         numero12.textContent = contador12 + "%";
         }, 90);



let numero13 = document.querySelector(".numero13");
         let contador13 = 0;
         setInterval(()=>{
         if(contador13==90){
         clearInterval();
         }else
         contador13+=2;
         numero13.textContent = contador13 + "%";
         }, 90);



let numero14 = document.querySelector(".numero14");
         let contador14 = 0;
         setInterval(()=>{
         if(contador14==50){
         clearInterval();
         }else
         contador14+=2;
         numero14.textContent = contador14 + "%";
         }, 50);



let numero15 = document.querySelector(".numero15");
         let contador15 = 0;
         setInterval(()=>{
         if(contador15==88){
         clearInterval();
         }else
         contador15+=2;
         numero15.textContent = contador15 + "%";
         }, 88);



let numero16 = document.querySelector(".numero16");
         let contador16 = 0;
         setInterval(()=>{
         if(contador16==85){
         clearInterval();
         }else
         contador16+=1;
         numero16.textContent = contador16 + "%";
         }, 85);



//LOADING

window.addEventListener('load', () =>{
  const contenedor_loader = document.querySelector('.contenedor_loader')
  contenedor_loader.style.opacity = 0
  contenedor_loader.style.visibility = 'hidden'
})
