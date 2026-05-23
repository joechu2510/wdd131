const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");
const today = new Date();

yearSpan.innerHTML = today.getFullYear();
lastModifiedParagraph.innerHTML = document.lastModified;

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
    } 
    else {
        menuButton.textContent = "☰";
    }
});