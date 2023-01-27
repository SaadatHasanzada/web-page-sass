const button=document.querySelector('.navbar-toggle');
const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.nav-menu');
const main=document.querySelector('.main');
const footer=document.querySelector('footer');
const headingOne=document.querySelector('.industry_heading-one');
const headingTwo=document.querySelector('.industry_heading-two');
const headingThree=document.querySelector('.industry_heading-three');
button.addEventListener('click',function(){
menu.classList.toggle('open');
hamburger.classList.toggle('rotate');
main.classList.toggle('lower');
footer.classList.toggle('lower');

})

// Resize func



function myFunction(x) {
  if (x.matches) { 
    headingOne.innerText='Business & Finance';
    headingTwo.innerText='Travel & Aviation ';
    headingThree.innerText='Financial Services ';
  } 
}

var x = window.matchMedia("(min-width: 800px)")
myFunction(x) ;
x.addListener(myFunction);