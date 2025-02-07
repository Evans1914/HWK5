const inputBox = document.getElementById("input-task");
const ListContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Task Bar can't be empty!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for "×" (delete symbol)
        span.classList.add("delete-btn");
        li.appendChild(span);
    }
    inputBox.value = "";
}

// Event listener for deleting a task
ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Removes the clicked task
    }
});
