const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");
const today = new Date();

yearSpan.innerHTML = today.getFullYear();
lastModifiedParagraph.innerHTML = document.lastModified;



const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const chillElement = document.getElementById("chill");
const calculateWindChill = (t, v) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);

if (temp <= 10 && wind > 4.8) {
    chillElement.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
    chillElement.textContent = "N/A";
}