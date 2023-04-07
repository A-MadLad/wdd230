const drinks = document.querySelector("#drinks");

let drink_num = Number(localStorage.getItem("drink"));

drinks.innerHTML = drink_num;