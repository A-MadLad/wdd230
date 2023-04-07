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

// Navigation Small and Medium Screen Button

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// Fetch Fruits API

let fruit_list = [];
let select1 = document.getElementById('#first_fruits');
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayData(data);
};

getData();

function displayData(data) {

    fruit_list = data;

    const select1 = document.querySelector("#first_fruit");
    const select2 = document.querySelector("#second_fruit");
    const select3 = document.querySelector("#third_fruit");

    fruit_list.forEach(fruits => {
        let option = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');

        option.value = fruits.name;
        option.innerHTML = fruits.name;
        option2.value = fruits.name;
        option2.innerHTML = fruits.name;
        option3.value = fruits.name;
        option3.innerHTML = fruits.name;

        select1.appendChild(option);
        select2.appendChild(option2);
        select3.appendChild(option3);
    })
};

displayData();

// Display Ordered Drinks

function orderDrink() {
    let fname = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let phoneNum = document.querySelector("#phoneNum").value;
    let fruit1 = document.querySelector("#first_fruit").value;
    let fruit2 = document.querySelector("#second_fruit").value;
    let fruit3 = document.querySelector("#third_fruit").value;
    let instructions = document.querySelector("#special_instructions").value;

    let fruit1_name = fruit_list.find(name => name.name === fruit1);
    let fruit2_name = fruit_list.find(name => name.name === fruit2);
    let fruit3_name = fruit_list.find(name => name.name === fruit3);

    let add_carbs = fruit1_name.nutritions.carbohydrates + fruit2_name.nutritions.carbohydrates + fruit3_name.nutritions.carbohydrates;
    let add_protein = fruit1_name.nutritions.protein + fruit2_name.nutritions.protein + fruit3_name.nutritions.protein;
    let add_fat = fruit1_name.nutritions.fat + fruit2_name.nutritions.fat + fruit3_name.nutritions.fat;
    let add_sugar = fruit1_name.nutritions.sugar + fruit2_name.nutritions.sugar + fruit3_name.nutritions.sugar;
    let add_cal = fruit1_name.nutritions.calories + fruit2_name.nutritions.calories + fruit3_name.nutritions.calories;
    

    document.querySelector("#first_name").innerHTML = `Name: ${fname}`;
    document.querySelector("#email2").innerHTML = `Email: ${email}`;
    document.querySelector("#phone").innerHTML = `Phone Number: ${phoneNum}`;
    document.querySelector("#fruit1").innerHTML = `First Fruit: ${fruit1}`;
    document.querySelector("#fruit2").innerHTML = `Second Fruit: ${fruit2}`;
    document.querySelector("#fruit3").innerHTML = `Last Fruit: ${fruit3}`;
    document.querySelector("#instructions").innerHTML = `Instructions: ${instructions}`;

    document.querySelector("#total_carb").innerHTML = `Total Carbs: ${add_carbs}`;
    document.querySelector("#total_protein").innerHTML = `Total Protein: ${add_protein}`;
    document.querySelector("#total_fat").innerHTML = `Total Fat: ${add_fat}`;
    document.querySelector("#total_sugar").innerHTML = `Total Sugar: ${add_sugar}`;
    document.querySelector("#total_cal").innerHTML = `Total Calories: ${add_cal}`;

    let new_date = new Date();

    document.querySelector("#order_date").innerHTML = `Order Date: ${new_date}`;
    

    let drink_num = Number(localStorage.getItem("drink"));

    drink_num++;
    
    localStorage.setItem("drink", drink_num);
};