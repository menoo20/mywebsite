setTimeout(() =>{
  document.querySelector("body").style.opacity = '1';
},300);

    
    
    let english = document.querySelector(".flags.english");
    let arabic  = document.querySelector(".flags.arabic");


    english.addEventListener("click", (e) =>{
      if(e.target.classList.contains("en")){
            
      }else if(e.target.classList.contains("ar")){
        english.parentElement.style.display="none";
        arabic.parentElement.style.display="block";
      setTimeout(function(){arabic.parentElement.style.opacity="1";},300);  
      setTimeout(function(){english.parentElement.style.opacity="0";},300);  
      }
    });

    arabic.addEventListener("click", (e) =>{
      if(e.target.classList.contains("ar")){
            
      }else if(e.target.classList.contains("en")){
        arabic.parentElement.style.display="none";
        english.parentElement.style.display="block";
        setTimeout(function(){english.parentElement.style.opacity="1";},300);  
        setTimeout(function(){arabic.parentElement.style.opacity="0";},300);  

      }
    });

    