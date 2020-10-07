// OPEN/CLOSE SIDE MENU ON RESIZE
let sideMenu = document.querySelector(".side-menu");
let sideMenuTrigger = document.querySelector(".toggle-side-menu");

function closeSideMenuOnResize() {
  if (sideMenu) {
    if (window.innerWidth < 991) {
      sideMenu.classList.add("side-menu-close");
      sideMenuTrigger.classList.add("rotate");
    } else {
      sideMenu.classList.remove("side-menu-close");
      sideMenuTrigger.classList.remove("rotate");
    }
  }
}

window.addEventListener("resize", closeSideMenuOnResize);

closeSideMenuOnResize();

//TOGGLE SIDE MENU
document
  .querySelector(".toggle-side-menu")
  .addEventListener("click", function () {
    document.querySelector(".side-menu").classList.toggle("side-menu-close");
    if (
      document.querySelector(".side-menu").classList.contains("side-menu-close")
    ) {
      this.classList.add("rotate");
      document.documentElement.style.setProperty("--side-menu-width", "3em");
    } else {
      this.classList.remove("rotate");
      document.documentElement.style.setProperty("--side-menu-width", "24em");
    }
  });

// TOP NAV TRIGGER
document.querySelectorAll(".top-nav-trigger").forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelector(".main").classList.add("top-nav");
    document.querySelector(".main").classList.remove("side-nav");
    document.querySelector(".main").classList.remove("side-nav-toggle");
  });
});

// SIDE NAV TRIGGER
document.querySelectorAll(".side-nav-trigger").forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelector(".main").classList.add("side-nav");
    document.querySelector(".main").classList.remove("top-nav");
    document.querySelector(".main").classList.remove("side-nav-toggle");
  });
});

// SIDE NAV TOGGLE TRIGGER
document.querySelectorAll(".side-nav-toggle-trigger").forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelector(".main").classList.add("side-nav-toggle");
    document.querySelector(".main").classList.remove("side-nav");
    document.querySelector(".main").classList.remove("top-nav");
  });
});

//MODAL
let modalTriggers = document.querySelectorAll(".modal-trigger");
let modalCloseBtns = document.querySelectorAll("[close-modal]");
console.log(modalCloseBtns);

modalTriggers.forEach((e) => {
  e.addEventListener("click", function () {
    let modal = document.getElementById(`${e.getAttribute("target-modal")}`);
    modal.classList.add("open");
  });
});

modalCloseBtns.forEach((e) => {
  e.addEventListener("click", function () {
    let modal = document.getElementById(`${e.getAttribute("close-modal")}`);
    modal.classList.remove("open");
  });
});

//SIDE MENU SLIDER
let sideMenuSlides = document.querySelectorAll(".side-menu-slide");

let sideMenuTriggers = document.querySelectorAll(".test-text");

sideMenuTriggers.forEach((e) => {
  e.addEventListener("click", function () {
    let currentIndex;
    let targetIndex;

    let currentClass = e.getAttribute("current-slide");
    let targetClass = e.getAttribute("target-slide");

    let currentSlide = document.querySelector(`.${currentClass}`);
    let targetSlide = document.querySelector(`.${targetClass}`);

    let mainSlide = e.getAttribute("main-slide");

    // Check if menu-slide or sub-menu-slide
    if (mainSlide) {
      currentIndex = parseInt(currentClass.split("-")[1]);
      targetIndex = parseInt(targetClass.split("-")[1]);
    } else {
      currentIndex = parseInt(currentClass.split("-")[2]);
      targetIndex = parseInt(targetClass.split("-")[2]);
    }

    // Remove active from current & add to target
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active");

    // Check for direction of animation. left or right
    if (currentIndex < targetIndex) {
      currentSlide.style.animation = "slide-out-left .5s ease-in-out";
      targetSlide.style.animation = "slide-in-left .5s ease-in-out";
    } else {
      currentSlide.style.animation = "slide-out-right .5s ease-in-out";
      targetSlide.style.animation = "slide-in-right .5s ease-in-out";
    }
  });
});

//FULL SCREEN MODE
let fullScreenToggle = document.querySelectorAll(".fullscreen-toggle");

let enterFs = document.fullscreenElement ? "requestFullscreen" : null;

console.log(enterFs);

function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement
  );
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen =
      document.exitFullscreen ||
      document.mozExitFullscreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;

    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen =
      document.documentElement.requestFullscreen ||
      document.documentElement.mozRequestFullScreen ||
      document.documentElement.webkitRequestFullscreen ||
      document.documentElement.msRequestFullscreen;

    document.documentElement.requestFullscreen();
  }
}

fullScreenToggle.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    toggleFullscreen();
  });
});

//COLOR THEME SETTINGS
let colorTriggers = document.querySelectorAll(
  ".custom-dropdown-menu-color-set-item"
);

colorTriggers.forEach((e) => {
  e.addEventListener("click", function () {
    colorTriggers.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
    if (this.classList.contains("primary")) {
      document.documentElement.style.setProperty("--color-primary", "#086cf9");

      document.documentElement.style.setProperty(
        "--gradient-primary",
        "linear-gradient(#1d7bff, #0066f8)"
      );
    } else if (this.classList.contains("info")) {
      document.documentElement.style.setProperty("--color-primary", "#0997fa");

      document.documentElement.style.setProperty(
        "--gradient-primary",
        "linear-gradient(#009dff, #0a8eff)"
      );
    } else if (this.classList.contains("warning")) {
      document.documentElement.style.setProperty("--color-primary", "#ffa82b");

      document.documentElement.style.setProperty(
        "--gradient-primary",
        "linear-gradient(#ff9d00, #ffb40a)"
      );
    } else if (this.classList.contains("dark")) {
      document.documentElement.style.setProperty("--color-primary", "#565656");

      document.documentElement.style.setProperty(
        "--gradient-primary",
        "linear-gradient(#646464, #4a4a4a)"
      );
    }
  });
});

//BURGER CLOSE
let burgerCloseBtn = document.querySelector(".burger-dropdown .close");

burgerCloseBtn.addEventListener("click", function () {
  this.parentElement.style.display = "none";
});

//NOT PRODUCTION LINKING TO PEOPLE FEEDBACK RECEIVED
let peopleFeedgackReceivedLinks = document.querySelectorAll(
  ".slide-body-02 .side-menu-slide-body-section-item"
);

peopleFeedgackReceivedLinks.forEach((e) => {
  e.addEventListener("click", function () {
    location.href = "../people-feedback-received";
  });
});

// TOGGLE INPUT ROW
let inputRowToggle = document.querySelector(".toggle-input-row");
let inputRow = document.querySelector(".custom-table-input-row");

if (inputRow) {
  inputRowToggle.addEventListener("click", function () {
    inputRow.classList.toggle("open");
  });
}

//ACCORDION
let accordionTriggers = document.querySelectorAll(".accordion-card-trigger");

accordionTriggers.forEach((e) => {
  e.addEventListener("click", function () {
    document
      .querySelectorAll(`.${e.getAttribute("accordion-trigger-target")}`)
      .forEach((e) => {
        e.classList.toggle("open");
      });
  });
});

//READ MORE
let commentItems = document.querySelectorAll(".feedback-main-item");

commentItems.forEach((e) => {
  let commentText = e.querySelector(".feedback-main-item-text");
  let textHeigh = commentText.clientHeight;

  if (0 > textHeigh - commentText.scrollHeight) {
    let readMore = e.querySelector(".read-more");
    let close = e.parentElement.querySelector(".close");
    readMore.style.display = "block";

    readMore.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.add("open");
      this.parentElement.parentElement
        .querySelectorAll(".read-more")
        .forEach((x) => {
          x.style.display = "none";
        });
      this.parentElement.parentElement.parentElement
        .querySelectorAll(".feedback-main-item")
        .forEach((y) => {
          y.classList.remove("trunc");
        });
    });

    close.addEventListener("click", function () {
      this.parentElement.parentElement.classList.remove("open");

      this.parentElement
        .querySelectorAll(".feedback-main-item")
        .forEach((z) => {
          if (0 > textHeigh - z.scrollHeight) {
            z.querySelector(".read-more").style.display = "block";
          }
        });
      console.log(this.parentElement);
      this.parentElement.parentElement.parentElement
        .querySelectorAll(".feedback-main-item")
        .forEach((y) => {
          y.classList.add("trunc");
        });
    });
  }
});
