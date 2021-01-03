var workHeaderElements = document.getElementsByClassName("work-header");
var projectHeaderElements = document.getElementsByClassName("project-header");
var descriptionElements = document.getElementsByClassName("description");

var headerFunction = function () {
    let description = this.parentElement.children[
        this.parentElement.children.length - 1
    ];

    let previouslyOpen = description.classList.contains("description-open");

    for (let i = 0; i < descriptionElements.length; i++) {
        descriptionElements[i].classList.remove("description-open");
    }

    if (!previouslyOpen) {
        description.classList.add("description-open");
    }
};

for (let i = 0; i < workHeaderElements.length; i++) {
    workHeaderElements[i].addEventListener("click", headerFunction, false);
}
for (let i = 0; i < projectHeaderElements.length; i++) {
    projectHeaderElements[i].addEventListener("click", headerFunction, false);
}
