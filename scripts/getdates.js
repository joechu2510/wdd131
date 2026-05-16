const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");
const today = new Date();

yearSpan.innerHTML = today.getFullYear();
lastModifiedParagraph.innerHTML = document.lastModified;
// test4