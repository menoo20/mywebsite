setTimeout(() =>{
  document.querySelector("body").style.opacity = '1';
},300);



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




    $(function($){
        let arrowUp = document.querySelector(".arrow-up");
        let arrowDown = document.querySelector(".arrow-down");
        let car = document.querySelector(".carousel-images");
        let cerImg = document.querySelectorAll(".cert-img img");
        let cerImagesDiv = document.querySelector(".cert-images");
        let bigImg = document.querySelector(".big-img");

        


        $(".cert-images").on("click",function (e) {
           let image =  e.target;
           let mainImgSrc = $(image).attr("src");
          $(".cert-img img").each(function(i){
              $(this).removeClass("active");
          });
          $(image).addClass("active");
          $(bigImg).addClass("active");

          $(bigImg).hide(200, function(){
            $(bigImg).attr("src", mainImgSrc );
            $(bigImg).show(10);
        });
         
          
        });


});