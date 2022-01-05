
$(function($){
        let arrowUp = document.querySelector(".arrow-up");
        let arrowDown = document.querySelector(".arrow-down");
        let car = document.querySelector(".carousel-images");
        let cerImg = document.querySelectorAll(".cert-img img");
        let cerImagesDiv = document.querySelector(".cert-images");
        let bigImg = document.querySelector(".big-img");

        
        $(window).on("load",(function(e) {
            $(".loader").delay(2000).fadeOut("slow");
          $("#overlayer").delay(2000).fadeOut("slow");
        })),

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
         
          
        })


})