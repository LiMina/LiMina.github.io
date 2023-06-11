let navOpen = false;
let navButton = document.getElementById("nav-button");
let navButtonBarTop = navButton.children[0];
let navButtonBarMid = navButton.children[1];
let navButtonBarBot = navButton.children[2];
let navSections = document.getElementById("nav-sections");
let navDarken = document.getElementById("nav-darken");

function navButtonClicked() {
    if (navOpen) {
        navButtonBarTop.id = "";
        navButtonBarMid.id = "";
        navButtonBarBot.id = "";
        navSections.classList.remove("nav-sections-open");
        navDarken.classList.remove("nav-darken-open");
    } else {
        navButtonBarTop.id = "nav-button-top";
        navButtonBarMid.id = "nav-button-middle";
        navButtonBarBot.id = "nav-button-bottom";
        navSections.classList.add("nav-sections-open");
        navDarken.classList.add("nav-darken-open");
    }

    navOpen = !navOpen;
}

// var lastActiveSectionElement;

// scroll to element with id of destination
function navTo(destination) {
    navButtonClicked();
    var elmnt = document.getElementById(destination);
    elmnt.scrollIntoView({ behavior: "smooth" });
}