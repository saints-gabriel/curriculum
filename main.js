const but = document.querySelector(".mode")
const link = document.getElementsByTagName('a')
const gridCont = document.querySelector(".grid-container")
const gridItem = document.getElementsByClassName(".grid-item")

but.addEventListener('click', () => {
    if (gridCont.style.backgroundColor != "white") {
        gridCont.style.backgroundColor = "white";
        gridCont.classList.add("light-mode");
        but.classList.add("black");
    } else {
        gridCont.style.backgroundColor = "";
        gridCont.classList.remove("light-mode");
        but.classList.remove("black");
    }
});
