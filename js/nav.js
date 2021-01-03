let navOpen = false;
let navButton = document.getElementById("nav-button");
let navButtonBarTop = navButton.children[0];
let navButtonBarMid = navButton.children[1];
let navButtonBarBot = navButton.children[2];

function navButtonClicked() {
    console.log(navButton);
    console.log(navButtonBarTop.id);
    if (navOpen) {
        navButtonBarTop.id = "";
        navButtonBarMid.id = "";
        navButtonBarBot.id = "";
    } else {
        navButtonBarTop.id = "nav-button-top";
        navButtonBarMid.id = "nav-button-middle";
        navButtonBarBot.id = "nav-button-bottom";
    }

    navOpen = !navOpen;
}

// var lastActiveSectionElement;

// // scroll to element with id of destination
// function navTo(destination) {
//     var elmnt = document.getElementById(destination);
//     elmnt.scrollIntoView({ behavior: "smooth" });
// }

// var sections = ["banner", "contact", "work", "life", "misc"];

// document.addEventListener("scroll", () => {
//     let closest = 30000;
//     let visibleElement;
//     for (let i = 0; i < sections.length; i++) {
//         let current = document.getElementById(sections[i]);
//         let top = current.getBoundingClientRect().top;

//         if (Math.abs(top) < closest) {
//             closest = Math.abs(top);
//             visibleElement = current;
//         }
//     }

//     if (visibleElement.id === "banner") {
//         if (lastActiveSectionElement) {
//             lastActiveSectionElement.classList.remove("active-section");
//         }
//         return;
//     }

//     if (visibleElement) {
//         // console.log(visibleElement.id);

//         if (lastActiveSectionElement) {
//             lastActiveSectionElement.classList.remove("active-section");
//         }

//         var current = document.getElementById(
//             visibleElement.id + "-nav-button"
//         );
//         current.classList.add("active-section");
//         lastActiveSectionElement = current;
//     }
// });
