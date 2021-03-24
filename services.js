let begginerCourse= document.getElementById("beg-course");
let interCourse= document.getElementById("mid-course");
let advancedCourse= document.getElementById("adv-course");

let firstPriceBegginer= document.getElementById("price-before-beg");
let firstPriceIntermidium= document.getElementById("price-before-int");
let firstPriceAdvance= document.getElementById("price-before-adv");

let finalBegPrice=document.getElementById("beg-price");
let finalIntPrice=document.getElementById("int-price");
let finalAdvPrice=document.getElementById("adv-price");

let finalPriceContainerBeg=document.getElementById("final-price-beg-container");
let finalPriceContainerInt=document.getElementById("final-price-int-container");
let finalPriceContainerAdv=document.getElementById("final-price-adv-container");


let surfButton=document.getElementById("surf-btn");
let climbingButton=document.getElementById("climb-btn");



surfButton.addEventListener('click', () =>{
    begginerCourse.textContent= "SURF BEGGINER COURSE";
    interCourse.textContent= "SURF INTERMEDIUM COURSE";
    advancedCourse.textContent= "SURF ADVANCED COURSE";

    firstPriceBegginer.textContent= "225€";
    firstPriceIntermidium.textContent= "370€";
    firstPriceAdvance.textContent="550€";

    
    finalPriceContainerBeg.innerHTML = `
    <h3 id="beg-price" class="euros-course">200</h3>
    <span class="logo-act"><i class="fas fa-euro-sign"></i></span>`
    
    finalPriceContainerInt.innerHTML = `
    <h3 id="int-price" class="euros-course">315</h3>
    <span class="logo-act"><i class="fas fa-euro-sign"></i></span>`
  

    finalPriceContainerAdv.innerHTML = `
    <h3 id="adv-price" class="euros-course">440</h3>
    <span class="logo-act"><i class="fas fa-euro-sign"></i></span>`
    
})
climbingButton.addEventListener('click', () =>{
    begginerCourse.textContent= "CLIMBING BEGGINER COURSE";
    interCourse.textContent= "CLIMBING INTERMEDIUM COURSE";
    advancedCourse.textContent= "CLIMBING ADVANCED COURSE"
    
    firstPriceBegginer.textContent= "200€";
    firstPriceIntermidium.textContent= "275€";
    firstPriceAdvance.textContent="350€";

  

    finalPriceContainerBeg.innerHTML = `
    <h3 id="beg-price" class="euros-course">180</h3>
    <span class="logo-act"><i class="fas fa-euro-sign"></i></span>`
    
    finalPriceContainerInt.innerHTML = `
    <h3 id="int-price" class="euros-course">238</h3>
    <span class="logo-act"><i class="fas fa-euro-sign"></i></span>`
  

    finalPriceContainerAdv.innerHTML = `
    <h3 id="adv-price" class="euros-course">280</h3>
    <span class="logo-act"><i class="fas fa-euro-sign"></i></span>`
})