// finding elements
const navLinks = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".toggle");
const theme = document.getElementById("theme-logo");

// localStorage
const localData = localStorage.getItem("theme");
if(localData == "light") {
    document.body.classList.remove("dark-theme");
}else if(localData == "dark") {
    document.body.classList.add("dark-theme");
}

// add listeners
toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
    toggleBtn.classList.toggle("trans");
})

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        theme.src = "./Images/sun.png";
        localStorage.setItem("theme","dark");
    }else{
        theme.src = "./Images/moon.png";
        localStorage.setItem("theme","light");
    }
})