setTimeout(() =>{
  document.querySelector("body").style.opacity = '1';
},300);



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

