// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector("#favchap");
const button = document.querySelector("#add");
const list = document.querySelector("#list");

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.
button.addEventListener('click', function () {
    function required() {
        const input = document.querySelector("#favchap").value;
        if (input == "") {
            alert("Please input a Value");
            return false;
        }
        else {
            alert('Code has accepted : you can try another');
            return true;
        }
    }
});