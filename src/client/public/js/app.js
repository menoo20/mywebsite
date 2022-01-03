
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

const cogButton = document.querySelectorAll(".menu-toggler");
const cogIcon = document.querySelectorAll(".fa-cog");
const offCanvas = document.querySelector(".offcanvas");





for(var i=0; i<cogButton.length; i++) {
 cogButton[i].addEventListener("mouseover", (e) => {
    e.preventDefault();
    for(var i=0; i<cogIcon.length; i++) {
        cogIcon[i].classList.add("fa-spin");
    }
});
}
for(var i=0; i<cogButton.length; i++) {
    cogButton[i].addEventListener("mouseout", (e) => {
       e.preventDefault();
       for(var i=0; i<cogIcon.length; i++) {
           cogIcon[i].classList.remove("fa-spin");
       }
   });
}

const checkbox = document.querySelectorAll("input[type=checkbox]");

checkbox.forEach(box => {
    box.addEventListener('change', function(e) {
      const lambImage = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".lamb .lamb-img");
      const progIcon  = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".prog-icon");

        if (e.target.checked) {
          lambImage.classList.add("active");
          progIcon.classList.add("active");
        } else {
            lambImage.classList.remove("active");
            progIcon.classList.remove("active");
        }
      });
});

const lambs = document.querySelectorAll(".lamb .lamb-img");
const icons = document.querySelectorAll(".prog-icon");
const allLambs = document.querySelector(".allLambs");

allLambs.addEventListener("change", (e) => {
  if(e.target.checked){
    checkbox.forEach(box => {box.checked = true;});
    lambs.forEach(lamb => {lamb.classList.add("active");});
    icons.forEach(icon => {icon.classList.add("active");});
  }else{
    checkbox.forEach(box => {box.checked = false;});
    lambs.forEach(lamb => {lamb.classList.remove("active");});
    icons.forEach(icon => {icon.classList.remove("active");});
  }
});




let arrowUp = document.querySelector(".arrow-up");
let arrowDown = document.querySelector(".arrow-down");
let car = document.querySelector(".carousel-images");
let cerImg = document.querySelectorAll(".cert-img img");
let cerImagesDiv = document.querySelector(".cert-images");
let bigImg = document.querySelector(".big-img");
let myInterval;


arrowUp.addEventListener("mousedown", (e) => {
   car.style.scrollBehavior = "smooth";
   myInterval = setInterval(function(){car.scrollBy(0,-80);},200);
});

arrowDown.addEventListener("mousedown", (e) => {
    car.style.scrollBehavior = "smooth";
    myInterval = setInterval(function(){car.scrollBy(0,80);},200);

  });

  arrowUp.addEventListener("mouseup", (e) => {
    // e.preventDefault();
    car.style.scrollBehavior = "auto";
    clearInterval(myInterval);
    
  });
  
  arrowDown.addEventListener("mouseup", (e) => {
    //   e.preventDefault();
    car.style.scrollBehavior = "auto";
      clearInterval(myInterval);
    });


    const togglerOne = document.querySelector(".toggler-one");
    const togglerTwo = document.querySelector(".toggler-two");
 
    
   
    togglerOne.addEventListener("click", ()=>{
      if(offCanvas.classList.contains("show")){
        togglerOne.style.visibility="hidden";
      }
    });

    togglerTwo.addEventListener("click", ()=>{
       
        setTimeout(() => {
          togglerOne.style.visibility="visible";
        }, 300);
        
     
    });

    document.body.addEventListener("click", (e)=>{
      if(e.target.classList.contains("fa-cog") || e.target.classList.contains("menu-toggler")){

      }else{
      setTimeout(() => {
        togglerOne.style.visibility="visible";
      }, 200);
    }
    });


    let english = document.querySelector(".flags.english");
    let arabic  = document.querySelector(".flags.arabic");


    english.addEventListener("click", (e) =>{
      if(e.target.classList.contains("en")){
            
      }else if(e.target.classList.contains("ar")){
        english.parentElement.style.display="none";
        arabic.parentElement.style.display="block";
      }
    });

    arabic.addEventListener("click", (e) =>{
      if(e.target.classList.contains("ar")){
            
      }else if(e.target.classList.contains("en")){
        arabic.parentElement.style.display="none";
        english.parentElement.style.display="block";
      }
    });


    document.querySelector(".arrow-link").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#hero").scrollIntoView({
        block: 'start',
      behavior: 'smooth',});
    });


