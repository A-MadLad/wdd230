let d = new Date(document.lastModified);
let year = d.getFullYear();

document.querySelector("#currentyear").textContent = year

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
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

document.querySelector("#date_modified").textContent = fulldate
