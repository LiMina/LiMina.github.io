var workHeaderElements = document.getElementsByClassName("work-header");
var projectHeaderElements = document.getElementsByClassName("project-header");
var descriptionElements = document.getElementsByClassName("description");
var chevronElements = document.getElementsByClassName("chevron");

var headerFunction = function () {
    console.log(descriptionElements);
    console.log(chevronElements);
    let description = this.parentElement.children[
        this.parentElement.children.length - 1
    ];
    let chevron = this.parentElement.children[0].children[1];
    console.log(chevron);

    let previouslyOpen = description.classList.contains("description-open");
    let previouslyFlipped = chevron.classList.contains("chevron-flip");

    for (let i = 0; i < descriptionElements.length; i++) {
        descriptionElements[i].classList.remove("description-open");
        chevronElements[i].classList.remove("chevron-flip");
    }

    if (!previouslyOpen) {
        description.classList.add("description-open");
        chevron.classList.add("chevron-flip")
    }
};

for (let i = 0; i < workHeaderElements.length; i++) {
    workHeaderElements[i].addEventListener("click", headerFunction, false);
}
for (let i = 0; i < projectHeaderElements.length; i++) {
    projectHeaderElements[i].addEventListener("click", headerFunction, false);
}
