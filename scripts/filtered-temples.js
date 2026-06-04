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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Taipei Taiwan",
    location: "Taipei, Taiwan",
    dedicated: "1984, November, 17-18",
    area: 9945,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg"
  },
  {
    templeName: "Orem Utah",
    location: "Orem, Utah, United States",
    dedicated: "2024, January, 21",
    area: 71998,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-69929-main.jpg"
  },
];

const gallery = document.querySelector(".gallery");
const mainHeading = document.querySelector("main h1");

function displayTemples(filteredTemples) {
    gallery.innerHTML = "";
    
    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");
        
        card.innerHTML = `
            <figcaption>${temple.templeName}</figcaption>
            <div class="card-details" style="padding: 0 1rem 1rem 1rem; width: 100%; font-size: 0.9rem;">
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        `;
        
        gallery.appendChild(card);
    });
}

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.getAttribute("href").substring(1);
        mainHeading.textContent = filter;
        
        let filteredList = [];
        
        switch(filter) {
            case "Old":
                filteredList = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]);
                    return year < 1900;
                });
                break;
            case "New":
                filteredList = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]);
                    return year > 2000;
                });
                break;
            case "Large":
                filteredList = temples.filter(temple => temple.area > 90000);
                break;
            case "Small":
                filteredList = temples.filter(temple => temple.area < 10000);
                break;
            case "Home":
            default:
                filteredList = temples;
                break;
        }
        
        displayTemples(filteredList);
        
        if (navigation.classList.contains("open")) {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
        }
    });
});

displayTemples(temples);