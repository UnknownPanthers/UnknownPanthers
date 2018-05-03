const archiveAction = () => {

// Create button for archiving
const archiveButton = document.createElement("button")

// FormButtonSubmit.classList = "btn btn-primary";
archiveButton.textContent = "Archive Task";
archiveButton.setAttribute("type", "button");


// Target cards with done class to append the archive button
const doneClass = document.querySelectorAll(".done")
for (i=0; i<doneClass.length; i++){
    doneClass.item(i).appendChild(archiveButton)
}
}

module.exports=archiveAction