const container = document.querySelector("#addTask");

// const addButton = document.createElement("button");
// addButton.classList = "btn btn-primary btn-lg";
// addButton.textContent = "Add New Task";
// addButton.setAttribute("type", "button");
// addButton.setAttribute("data-toggle", "modal");
// addButton.setAttribute("data-target", "#ModalTarget");
// container.appendChild(addButton);



const ModalButton = document.querySelector(".modal-body")





// Form making and submition

// Div that holds a form
const containerDivForForm = document.createElement("div");
containerDivForForm.classList = "container";

// Form tag made
const formTag = document.createElement("form")
formTag.classList = "modal-content";

containerDivForForm.appendChild(formTag)

// Form group made inside of form
const divForFormGroup = document.createElement("div");
divForFormGroup.classList = "form-group row has-success";
formTag.appendChild(divForFormGroup)

// Factory funtion for input fields
const form = (labelName, IdName, placeholderText, elementType) => {
const labelForTaskName = document.createElement("label");
labelForTaskName.setAttribute("for", IdName);
labelForTaskName.textContent = labelName;
labelForTaskName.classList = "col-sm-2 col-form-label";

divForFormGroup.appendChild(labelForTaskName)

const divForInput = document.createElement("div");
divForInput.classList = "col-sm"

labelForTaskName.appendChild(divForInput)

const inputField = document.createElement(elementType)
inputField.setAttribute("type", "text")
inputField.setAttribute("id", IdName)
inputField.setAttribute("placeholder", placeholderText)
inputField.setAttribute("class", "form-control form-control-success");


divForInput.appendChild(inputField);
}
 // Form Submit button created
const formButtonSubmit = document.createElement("button")
formButtonSubmit.classList = "btn btn-primary";
formButtonSubmit.textContent = "Submit a New Task";
formButtonSubmit.setAttribute("type", "submit");
containerDivForForm.appendChild(formButtonSubmit)

// Factory funnction called to make certain inputFields
form("Task Name :", "TaskForm", "Add Task Name Here","input")
form("Due Date : ", "DueDateForm", "Insert Due Date", "input")
form("Category :", "CategoryForm", "Add a Category Label", "input")
form("Description :", "DescriptionBox", "Type a Task Description", "textarea")
container.appendChild(containerDivForForm)

// Basic bootstrap format for form

/* <div class="container">
    <form>
        <div class="form-group row has-success">
            <label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control form-control-success" id="inputHorizontalSuccess" placeholder="name@example.com">
           </div>
        </div>
    </form>
</div> */

// Submit button

ModalButton.appendChild(containerDivForForm)
