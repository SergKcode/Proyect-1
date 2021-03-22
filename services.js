const begginerCourse= document.getElementById("beg-course"),
const interCourse= document.getElementById("mid-course"),
const advancedCourse= document.getElementById("adv-course"),

const surfButton=document.getElementById("surf-btn");
const climbingButton=document.getElementById("climb-btn");

surfButton.addEventListener('click', () =>{
    document.querySelector('#beg-course-container').innerHTML= "<h2>SURF BEGGINER COURSE</h2>";
    
})