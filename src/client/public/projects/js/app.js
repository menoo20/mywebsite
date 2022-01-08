setTimeout(() =>{
    document.querySelector("body").style.opacity = '1';
  },300);


  document.querySelector(".neo-button").addEventListener("click",(e) =>{
          e.preventDefault();
          if(document.querySelector(".neo-button button h5").innerHTML == "show"){
            document.querySelector(".neo-button button h5").innerHTML="hide";
          }else{
            document.querySelector(".neo-button button h5").innerHTML="show";
          }
          
          document.querySelectorAll(".project-details").forEach((project)=>{
            project.classList.toggle("active");
          });
  });