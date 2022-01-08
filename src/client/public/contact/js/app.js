setTimeout(() =>{
  document.querySelector("body").style.opacity = '1';
},300);



  document.querySelector(".arrow-link").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#hero").scrollIntoView({
          block: 'start',
        behavior: 'smooth',});
      });
  
