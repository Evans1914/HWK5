const inputBox = document.getElementById("input-task")
const ListContainer = document.getElementById("list-container")
 
function addTask(){
    if (inputBox.value === ''){
        alert ("Task Bar can't be empty!");
}
else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span);
}
inputBox.value ="";
}


