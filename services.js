let begginerCourse= document.getElementById("beg-course");
let interCourse= document.getElementById("mid-course");
let advancedCourse= document.getElementById("adv-course");

let firstPriceBegginer= document.getElementById("price-before-beg");
let firstPriceIntermidium= document.getElementById("price-before-int");
let firstPriceAdvance= document.getElementById("price-before-adv");

let finalBegPrice=document.getElementById("beg-price");
let finalIntPrice=document.getElementById("int-price");
let finalAdvPrice=document.getElementById("adv-price");


let surfButton=document.getElementById("surf-btn");
let climbingButton=document.getElementById("climb-btn");

surfButton.addEventListener('click', () =>{
    begginerCourse.textContent= "SURF BEGGINER COURSE";
    interCourse.textContent= "SURF INTERMEDIUM COURSE";
    advancedCourse.textContent= "SURF ADVANCED COURSE";

    firstPriceBegginer.textContent= "225€";
    firstPriceIntermidium.textContent= "370€";
    firstPriceAdvance.textContent="550€";

    finalBegPrice.textContent="200"
    finalIntPrice.textContent="315"
    finalAdvPrice.textContent="440"
    
})
climbingButton.addEventListener('click', () =>{
    begginerCourse.textContent= "CLIMBING BEGGINER COURSE";
    interCourse.textContent= "CLIMBING INTERMEDIUM COURSE";
    advancedCourse.textContent= "CLIMBING ADVANCED COURSE"
    
    firstPriceBegginer.textContent= "200€";
    firstPriceIntermidium.textContent= "275€";
    firstPriceAdvance.textContent="350€";

    finalBegPrice.textContent="180";
    finalIntPrice.textContent="238";
    finalAdvPrice.textContent="280";
})