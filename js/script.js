function showSuccessMessage(){
    alert("Message on its way!")
    return true;
}


const modebtn = document.getElementById("toggleModeBtn");
const modeIcon = document.getElementById("modeIcon");

modebtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeIcon.classList.remove("bi-moon");
    modeIcon.classList.add("bi-sun");

    modebtn.classList.remove("btn-dark");
    modebtn.classList.add("btn-light");

  } 
  
  else {
    modeIcon.classList.remove("bi-sun");
    modeIcon.classList.add("bi-moon");

    modebtn.classList.remove("btn-light");
    modebtn.classList.add("btn-dark");
  }
});

