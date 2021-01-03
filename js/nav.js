var lastActiveSectionElement;

// scroll to element with id of destination
function navTo(destination) {
    var elmnt = document.getElementById(destination);
    elmnt.scrollIntoView({ behavior: "smooth" });
}

var observer = new IntersectionObserver(
    function (entries) {
        let largestRatio = 0;
        let largestElement;
        console.log(entries);
        for (let i = 0; i < entries.length; i++) {
            if (entries[i]["isIntersecting"] === true) {
                if (entries[i]["intersectionRatio"] > largestRatio) {
                    largestRatio = entries[i]["intersectionRatio"];
                    largestElement = entries[i]["target"];
                }
            }
        }

        if (!largestElement) {
            return;
        }

        // remove active class from last section
        if (lastActiveSectionElement) {
            lastActiveSectionElement.classList.remove("active-section");
        }

        // add active class to current section in view
        var current = document.getElementById(
            largestElement.id + "-nav-button"
        );
        current.classList.add("active-section");
        lastActiveSectionElement = current;
    },
    {
        threshold: [0.1],
    }
);

// set targets for observer
observer.observe(document.querySelector("#contact"));
observer.observe(document.querySelector("#work"));
observer.observe(document.querySelector("#life"));
observer.observe(document.querySelector("#misc"));
