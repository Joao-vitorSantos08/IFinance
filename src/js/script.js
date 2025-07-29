let menu = document.getElementById("menu-toggle")
let nav_menu_mobile = document.getElementById("nav-menu-mobile")
let main = document.getElementById("main")

menu.addEventListener("click", function(){
    nav_menu_mobile.classList.toggle("show")
    menu.classList.toggle("active")
    if (nav_menu_mobile.classList.contains("show")) {
        main.style.marginTop = "270px"
    } else {
        main.style.marginTop = "0px"

    }
})