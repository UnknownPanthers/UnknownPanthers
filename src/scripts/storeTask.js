
// Bring in the data factory
const taskFactory=require("./taskFactory")

// Target the save task button
saveTaskButton = document.querySelector("#submitTask")

// Event listener for the save task button - upon click
saveTaskButton.addEventListener("click", storeTask, false)
ParsedTaskDatabase = JSON.parse(localStorage.getItem("taskDatabase"))

// Target each form element and save them each to a variable
function storeTask() {
    let saveTaskName=document.getElementById("TaskForm").value
    let saveDescription=document.getElementById("DescriptionBox").value
    let saveDuedate=document.getElementById("DueDateForm").value
    let saveCategory=document.getElementById("CategoryForm").value
    // Invoke data factory and store in db variable
    let taskDatabase = taskFactory(saveTaskName,saveDescription, saveDuedate,saveCategory)

    // Save db to local storage
    localStorage.setItem("taskFactory",JSON.stringify(taskDatabase))
}






