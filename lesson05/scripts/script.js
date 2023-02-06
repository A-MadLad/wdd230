// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector("#favchap");
const button = document.querySelector("#add");
const list = document.querySelector("#list");

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.
button.addEventListener('click', function() {
    const li = document.createElement('li');
    const del_button = document.createElement('button');
    li.textContent = input;
    del_button.textContent = 'X';
    li.append(del_button);
    list.append(li);
    del_button.addEventListener('click', li.remove);
})