// finding elements
document.querySelector(".Navbar_Link_toggle").addEventListener("click", () => {
    const navs = document.querySelectorAll(".Navbar-Items");
    navs.forEach((nav) => nav.classList.toggle("Navbar_ToggleShow"));
})