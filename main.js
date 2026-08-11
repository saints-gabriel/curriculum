const but = document.querySelector(".mode")  // Fixed: Select by class instead of ID
const gridCont = document.querySelector(".grid-container")
const gridItem = document.getElementsByClassName(".grid-item")

but.addEventListener('click', () => {
    if (gridCont.style.backgroundColor != "white") {
        gridCont.style.backgroundColor = "white";
        gridCont.classList.add("light-mode");
    } else {
        gridCont.style.backgroundColor = "";
        gridCont.classList.remove("light-mode");
    }
});
