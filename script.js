// Mobile Navigation
const mobileNavButton = $("#collapsed-navbar .hum-ico");
const mobileNavigation = $(".ul-wrapper");

function toggleMobileNavigation() {
  mobileNavButton.toggleClass("is-active");
  mobileNavigation.toggleClass("active");
}

mobileNavButton.on("click", toggleMobileNavigation);

// Login and Registration Forms
const loginButton = $("#header #nav-bar .login-register .login");
const registerButton = $("#header #nav-bar .login-register .register");
const loginForm = $(".login-form");
const registerForm = $(".register-form");
const exitButton = $(".close");
const closeButton = $(".close");
const loginLinkInRegisterForm = $(".register-form .content p a");

function showLoginForm() {
  loginForm.addClass("active");
  $(document).on("click", handleDocumentClick);
}

function hideLoginForm() {
  loginForm.removeClass("active");
  $(document).off("click", handleDocumentClick);
}

function showRegisterForm() {
  registerForm.addClass("active");
  $(document).on("click", handleDocumentClick);
}

function hideRegisterForm() {
  registerForm.removeClass("active");
  $(document).off("click", handleDocumentClick);
}

function handleDocumentClick(event) {
  if (loginForm.is(event.target) && !loginButton.is(event.target)) {
    hideLoginForm();
  } else if (
    registerForm.is(event.target) &&
    !registerButton.is(event.target)
  ) {
    hideRegisterForm();
  }
}

loginButton.on("click", showLoginForm);
registerButton.on("click", showRegisterForm);
exitButton.on("click", hideLoginForm);
closeButton.on("click", hideRegisterForm);

loginLinkInRegisterForm.on("click", function () {
  showLoginForm();
  hideRegisterForm();
});

// Footer Sections
const expand = $("#footer .title");

expand.click(function () {
  $(this).closest(".section").find(".expandable").toggleClass("expand");
  $(this).closest(".section").find(".items").toggleClass("expand");
});

const newsletterForm = $("#newsletter-form");
const thankYouMessage = $("#thank-you-message");

newsletterForm.on("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Simulate form submission and show thank you message
  setTimeout(function () {
    newsletterForm.hide();
    thankYouMessage.show();
  }, 1000); // Adjust the delay as needed
});

const contactForm = $("#contact #contact-form");
const alertMessage = $(".alert");

function thanksAlert() {
  alertMessage.addClass("active");
}

contactForm.on("submit", function (event) {
  event.preventDefault();

  const form = this;

  setTimeout(function () {
    form.reset();
    thanksAlert();
  }, 800);
});

/* animate on scroll */
const sections = $("section");

function reveal() {
  var windowHeight = $(window).innerHeight();
  var windowBottom = $(window).scrollTop() + windowHeight;
  var revealPoint = windowBottom - 100;

  sections.each(function () {
    var offset = $(this).offset().top;
    var sectionBottom = offset + $(this).outerHeight();

    if (offset <= revealPoint && sectionBottom > $(window).scrollTop()) {
      $(this).addClass("show-animate");
    } else {
      $(this).removeClass("show-animate");
    }
  });
}

$(window).on("scroll", reveal);

/* Dropdown Menu */

$(document).on("click", (e) => {
  const isMainDropdownButton = $(e.target).is("[data-mainDropdown-button]");
  const isMainDropdown = $(e.target).closest("[data-mainDropdown]").length > 0;
  const isDropdownButton = $(e.target).is("[data-dropdown-button]");

  if (!isMainDropdownButton && !isMainDropdown) {
    $("[data-mainDropdown].activeDropdown").removeClass("activeDropdown");
    $("[data-Dropdown].activeDropdown").removeClass("activeDropdown");
    return;
  }

  if (isMainDropdownButton) {
    const mainDropdown = $(e.target).closest("[data-mainDropdown]");
    mainDropdown.toggleClass("activeDropdown");
  }

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = $(e.target).closest("[data-dropdown]");
    currentDropdown.toggleClass("activeDropdown");
  }

  $("[data-dropdown].activeDropdown").each(function () {
    if ($(this).is(currentDropdown)) return;
    $(this).removeClass("activeDropdown");
  });
});

const darkModeIcon = $("#cart-search .mode-icon");
const shopBg = $("#hero .shop");

function toggleDarkMode() {
  $("body").toggleClass("dark-mode");

  const isDarkMode = $("body").hasClass("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

const storedDarkMode = localStorage.getItem("darkMode");
if (storedDarkMode === "true") {
  $("body").addClass("dark-mode");
}

darkModeIcon.on("click", function () {
  toggleDarkMode();
});

/* search-bar */
const searchOpenBtn = $("#header #cart-search button");
const searchBar = $(".search-section");
const deleteBtn = $(".search-section .delete");
const exitSearchBar = $(".search-section .close");
const searchInput = $(".search-section .search-bar input");

searchOpenBtn.on("click", () => {
  searchBar.toggleClass("easeIn");
});

searchInput.on("input", () => {
  if (searchInput.val() !== "") {
    deleteBtn.addClass("appear");
  } else {
    deleteBtn.removeClass("appear");
  }
});

exitSearchBar.on("click", () => {
  searchBar.removeClass("easeIn");
});

deleteBtn.on("click", () => {
  searchInput.val("");
  deleteBtn.removeClass("appear");
});

/* slider */

const slider = $("#land ");
const arrowLeft = $("#land .left");
const arrowRight = $("#land .right");
const author = $("#land .author");
const heading = $("#land h1");
const caption = $("#land .caption");

const images = [
  "imgs/slider/1.jpg",
  "imgs/slider/2.jpg",
  "imgs/slider/3.jpg",
  "imgs/slider/4.jpg",
  "imgs/slider/5.jpg",
  "imgs/slider/6.jpg",
  "imgs/slider/7.jpg",
  "imgs/slider/8.jpg",
  "imgs/slider/9.jpg",
  "imgs/slider/10.jpg",
  "imgs/slider/11.jpg",
];

const authors = [
  "Bill Cunningham",
  "Coco Chanel",
  "Giorgio Armani",
  "Rachel Zoe",
  "Marc Jacobs ",
  "Iris Apfel",
  "Audrey Hepburn",
  "Miuccia Prada",
  "Gore Vidal",
  "Alexander McQueen",
  "Elsa Schiaparelli",
];

const headings = [
  "Fashion is the armor to survive the reality of everyday life.",
  "Simplicity is the keynote of all true elegance.",
  "Elegance is not standing out, but being remembered.",
  "Style is a way to say who you are without having to speak.",
  "Clothes mean nothing until someone lives in them.",
  "Fashion you can buy, but style you possess.",
  "Elegance is the only beauty that never fades.",
  "Fashion is instant language.",
  "Style is knowing who you are, what you want to say, and not giving a damn.",
  "Fashion should be a form of escapism and not a form of imprisonment.",
  "In difficult times, fashion is always outrageous.",
];

let id = 0;

function slide(id) {
  slider.css("background-image", `url('${images[id]}')`);
  heading.text(headings[id]);
  author.text(authors[id]);

  slider.addClass("animation-fadeIn");
  caption.addClass("animation-fadeIn");

  setTimeout(() => {
    slider.removeClass("animation-fadeOut");
    caption.removeClass("animation-fadeIn");
  }, 550);
}

function previous() {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slide(id);
}

function next() {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
}

arrowLeft.on("click", previous);
arrowRight.on("click", next);

/* carousel cards */

// Select the carousel element with the jQuery selector
const carousel = $("#posts .container .carousel");
const arrows = $("#posts .arrow");
const firstCard = $("#posts .card").outerWidth(true);
const carouselChildren = carousel.children().toArray();

// Initialize variables to track dragging state and position
let isDragging = false,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carousel.outerWidth(true) / firstCard);

// Prepend cards at the beginning and append cards at the end of the carousel
carouselChildren
  .slice(-cardPerView)
  .reverse()
  .forEach(function (card) {
    carousel.prepend($(card).prop("outerHTML"));
  });

carouselChildren.slice(0, cardPerView).forEach(function (card) {
  carousel.append($(card).prop("outerHTML"));
});

arrows.each(function () {
  // Bind a click event handler to each arrow element
  $(this).on("click", function (e) {
    const arrow = $(this);
    const isLeftArrow = arrow.hasClass("left");
    const scrollAmount = isLeftArrow ? -firstCard : firstCard;

    // Adjust the scrollLeft property of the carousel element
    carousel.scrollLeft(carousel.scrollLeft() + scrollAmount);
  });
});

// Function to start dragging
const dragStart = function (e) {
  isDragging = true;
  carousel.addClass("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft();
};

// Function to stop dragging
const dragStop = function () {
  isDragging = false;
  carousel.removeClass("dragging");
};

// Function to handle dragging
const dragging = function (e) {
  if (!isDragging) return; // Don't proceed if not dragging
  carousel.scrollLeft(startScrollLeft - (e.pageX - startX));
};

// Function for infinite scrolling
const infiniteScroll = function () {
  const $carousel = $("#posts .container .carousel");
  const carouselScrollLeft = carousel.scrollLeft();
  const carouselScrollWidth = carousel[0].scrollWidth;
  const carouselWidth = carousel.outerWidth();

  if (carouselScrollLeft === 0) {
    carousel.addClass("no-transition");
    $carousel.scrollLeft(carouselScrollWidth - 2 * carouselWidth);
    carousel.removeClass("no-transition");
  } else if (
    Math.ceil(carouselScrollLeft) ===
    carouselScrollWidth - carouselWidth
  ) {
    carousel.addClass("no-transition");
    carousel.scrollLeft(carouselWidth);
    carousel.removeClass("no-transition");
  }

  clearTimeout(timeoutId);
  if (!carousel.is(":hover")) {
    autoSlide();
  }
};

const autoSlide = () => {
  if ($(window).innerWidth() < 800) return;
  timeoutId = setTimeout(
    () => carousel.scrollLeft(carousel.scrollLeft() + firstCard),
    3500
  );
};

autoSlide();

// Attach event handlers
carousel.on("mousemove", dragging);
$(document).on("mouseup", dragStop);
carousel.on("mousedown", dragStart);
carousel.on("scroll", infiniteScroll);
carousel.on("mouseenter", () => clearTimeout(timeoutId));
carousel.on("mouseleave", autoSlide);

const player = $("#video .player");
const video = $("#video .video");
const playerControls = $("#video .player .player_controls");
const progress = $("#video .progress");
const progressBar = $("#video .player_controls .progressDurations");
const toggle = $("#video .pause-play-skip .toggle");
const toggleIcon = $("#video .pause-play-skip .toggle i");
const toggleVideoStatus = $("#video .player .videoStatus");
const toggleVideoStatusIcon = $("#video .player .videoStatus i");
const skipButtons = $("#video [data-skip]");
const volumeControl = $("#video .volume");
const volumeButton = $("#video .volume-btn");
const volumeButtonIcon = $("#video .volume-btn i");
const volumePanel = $("#video .controls .volume-panel");
const volumeRange = $("#video .controls input");
const volumeProgress = $("#video .controls .volume-progress");
const title = $("#video .container .heading");
const paragraph = $("#video .container p");
const right = $("#video .right");
const left = $("#video .left");

const videos = [
  "videos/Bulgari Unexpected Wonders - a movie by Paolo Sorrentino.mp4",
  "videos/Pump It Up - SS23 Woman Editorial.mp4",
  "videos/‘The CHANEL Iconic’ Campaign — CHANEL Bags.mp4",
  "videos/Video Fashion Ads. _ Passa Silkwear.mp4",
  "videos/Spring-Summer 2023 Campaign starring Gigi Hadid _ BOSS.mp4",
  "videos/MAC The Moment _ MAC Cosmetics.mp4",
];

const titles = [
  "Accessorize Like a Pro: Elevate Your Outfits with the Perfect Pieces.",
  "Elevate Your Style: Must-Have Trends and Tips for Effortless Fashion.",
  "Bags of Elegance: Elevate Your Style with Luxurious Women's Handbags.",
  "Effortless Elegance: Timeless Staples for a Stylish Wardrobe.",
  "Street Style Chronicles: Master Urban Fashion with Confidence.",
  "Glamour Unveiled: Mastering the Art of Evening Makeup for a Dazzling Night Out.",
];
const paragraphs = [
  "Learn to choose accessories that enhance your look and bring an extra touch of elegance.",
  "Explore seasonal fashion trends, expert styling tips, and more to refine your style effortlessly.",
  "Explore the world of designer handbags and find the perfect statement piece for your unique style.",
  "Build a versatile wardrobe with timeless essentials that keep you chic for every occasion.",
  "Unleash your inner trendsetter with urban fashion tips that express your unique style.",
  "Learn the secrets of creating a captivating evening makeup look that will make you the star of the night.",
];
let index = 0;

let isPlaying = false;

function togglePlay() {
  if (video[0].paused) {
    isPlaying = true;
    video[0].play();
    toggleVideoStatusIcon.removeClass("fa-play").addClass("fa-pause");
    toggleIcon.removeClass("fa-play").addClass("fa-pause");
    toggle.attr("title", "Pause");
    setTimeout(function () {
      toggleVideoStatus.addClass("isPlaying");
    }, 500);
  } else {
    isPlaying = false;
    video[0].pause();
    toggleVideoStatusIcon.removeClass("fa-pause").addClass("fa-play");
    toggleIcon.removeClass("fa-pause").addClass("fa-play");
    toggle.attr("title", "Play");
    toggleVideoStatus.removeClass("isPlaying");
  }
}

function skip(e) {
  video[0].currentTime += parseFloat($(this).data("skip"));
}

function handleProgress() {
  const percent = (video[0].currentTime / video[0].duration) * 100;
  progressBar.css("width", `${percent}%`);
}

player.hover(
  function () {
    if (isPlaying) {
      playerControls.addClass("isHovering");
    }
  },
  function () {
    playerControls.removeClass("isHovering");
    volumePanel.removeClass("volume-set");
  }
);

function scrub(e) {
  const scrubTime = (e.offsetX / progress.outerWidth()) * video[0].duration;
  video[0].currentTime = scrubTime;

  console.log((e.offsetX / progress.outerWidth()) * video[0].duration);
}

function handleVolumeChange() {
  let percent = volumeRange.val();
  volumeProgress.css("height", `${percent}%`);

  video.prop("volume", volumeRange.val() / 100);

  if (video.prop("volume") > 0.5) {
    volumeButtonIcon
      .removeClass("fa-volume-low fa-volume-xmark")
      .addClass("fa-volume-high");
  } else if (video.prop("volume") <= 0.5 && video.prop("volume") > 0) {
    volumeButtonIcon
      .removeClass("fa-volume-high fa-volume-xmark")
      .addClass("fa-volume-low");
  } else if (video.prop("volume") === 0) {
    volumeButtonIcon
      .removeClass("fa-volume-high fa-volume-low")
      .addClass("fa-volume-xmark");
  }
}

handleVolumeChange();

function videoSlide(index) {
  video.attr("src", `${videos[index]}`);
  title.text(titles[index]);
  paragraph.text(paragraphs[index]);
  isPlaying = false;
  video[0].pause();
  toggleVideoStatusIcon.removeClass("fa-pause").addClass("fa-play");
  toggleIcon.removeClass("fa-pause").addClass("fa-play");
  toggle.attr("title", "Play");
  toggleVideoStatus.removeClass("isPlaying");
  progressBar.css("width", "0%");

  video.addClass("animation-fadeIn");
  title.addClass("animation-fadeIn");
  paragraph.addClass("animation-fadeIn");

  setTimeout(() => {
    video.removeClass("animation-fadeIn");
    title.removeClass("animation-fadeIn");
    paragraph.removeClass("animation-fadeIn");
  }, 550);
}

videoSlide(index);

function before() {
  index--;
  if (index < 0) {
    index = videos.length - 1;
  }
  videoSlide(index);
}

function after() {
  index++;
  if (index > videos.length - 1) {
    index = 0;
  }
  videoSlide(index);
}

video.on("click", togglePlay);
toggleVideoStatus.on("click", togglePlay);
toggleIcon.on("click", togglePlay);
video.on("timeupdate", handleProgress);
volumeRange.on("input", handleVolumeChange);
right.on("click", after);
left.on("click", before);

volumeButton.on("click", function () {
  volumePanel.toggleClass("volume-set");
});

skipButtons.each(function () {
  $(this).on("click", skip);
});

progress.on("click", scrub);

let mousedown = false;

progress.on("mousemove", (e) => {
  if (mousedown) {
    scrub(e);
  }
});

progress.on("mousedown", () => {
  mousedown = true;
});

progress.on("mouseup", () => {
  mousedown = false;
});

video.on("ended", function () {
  toggleVideoStatusIcon.removeClass("fa-pause").addClass("fa-play");
  toggleIcon.removeClass("fa-pause").addClass("fa-play");
  toggle.attr("title", "Play");
  toggleVideoStatus.removeClass("isPlaying");
  after();
});
