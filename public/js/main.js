let sideMenu = document.querySelector(".side-menu");
let sideMenuTrigger = document.querySelector(".toggle-side-menu");

function closeSideMenuOnResize() {
  if (sideMenu) {
    if (window.innerWidth < 991) {
      sideMenu.classList.add("side-menu-close");
      sideMenuTrigger.classList.add("rotate");
      //document.documentElement.style.setProperty("--side-menu-width", "3em");
    } else {
      sideMenu.classList.remove("side-menu-close");
      sideMenuTrigger.classList.remove("rotate");
      //document.documentElement.style.setProperty("--side-menu-width", "24em");
    }
  }
}

window.addEventListener("resize", closeSideMenuOnResize);

closeSideMenuOnResize();
