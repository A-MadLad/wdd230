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

document.querySelector("#date").textContent = fulldate;
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