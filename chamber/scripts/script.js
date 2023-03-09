function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

let d = new Date();
let year = d.getFullYear();

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.querySelector(".date").textContent = fulldate;
document.querySelector("#year").textContent = year;

let monthNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
];

let d_mod = new Date(document.lastModified);
let monthNum = monthNumbers[d_mod.getMonth()];
let d_mod_format = `${monthNum}/${d_mod.getDate()}/${d_mod.getFullYear()} ${d_mod.getHours()}:${d_mod.getMinutes()}:${d_mod.getSeconds()}`;
document.querySelector("#last").textContent = d_mod_format;

let banner = document.getElementById("banner");

function show_banner() {
    if (dayName != "Tuesday") {
        banner.remove()
    }
};

show_banner();

// Directory Cards

const url = "json/data.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.business);
}

getData();

const displayData = (business) => {
    const cards = document.querySelector('div.cards');

    business.forEach((place) => {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let web = document.createElement('a');

        web.title = "Visit Website";
        web.href = place.url;

        image.setAttribute('src', place.image);
        image.setAttribute('alt', `Picture of a business`);

        h2.textContent = `${place.name}`;
        address.textContent = `Address: ${place.address}`;
        phone.textContent = `Phone Number: ${place.phone}`;
        web.textContent = web.title;

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);

        cards.appendChild(card);
    }) 
  };