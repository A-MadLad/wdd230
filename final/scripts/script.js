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

document.querySelector("#year").textContent = year;

// Navigation Small Screen Button

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;