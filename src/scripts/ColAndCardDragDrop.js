const archive = require("./archive")
const container = document.querySelector(".container");

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if ((ev.target === document.getElementById("Doing") || ev.target.parentNode === document.getElementById("Doing")) && document.getElementById(data).classList.contains("done")) {
        if (ev.target.parentNode === document.getElementById("Doing")) {
            ev.target.parentNode.appendChild(document.getElementById(data))
        }
        else {
            ev.target.appendChild(document.getElementById(data));
        }
        document.getElementById(data).classList = "card rework"
    }
    else if (ev.target === document.getElementById("Doing") || ev.target.parentNode === document.getElementById("Doing")) {
        if (ev.target.parentNode === document.getElementById("Doing")) {
            ev.target.parentNode.appendChild(document.getElementById(data))
        }
        else {
            ev.target.appendChild(document.getElementById(data));
        }
        document.getElementById(data).classList = "card working"
    }
    else if (ev.target === document.getElementById("Done") || ev.target.parentNode === document.getElementById("Done")) {
        if (ev.target.parentNode === document.getElementById("Done")) {
            ev.target.parentNode.appendChild(document.getElementById(data))
        }
        else {
            ev.target.appendChild(document.getElementById(data));
        }
        document.getElementById(data).classList = "card done"
        archive()
    }
}

const divTop = document.createElement("div");
divTop.classList = "row"

const buildColumn = (NameOfColumn, ColumnId) => {
    const div = document.createElement("div");
    div.classList = "col-4";
    div.textContent = NameOfColumn;
    div.id = ColumnId;
    if (ColumnId === "Doing" || ColumnId === "Done") {
        div.ondrop = function () {
            drop(event);
        }
        div.ondragover = function () {
            allowDrop(event);
        }
    }
    else {
        div.ondrop = function () {
            alert("Hello, My name is Inigo Montoya, You tries to drop me in the wrong place, prepare to die. (Much like my father)")
        }
        div.ondragover = function () {
            allowDrop(event);
        }
    }
    divTop.appendChild(div)
    container.appendChild(divTop)
}

buildColumn("To Do", "ToDo")
buildColumn("Doing", "Doing")
buildColumn("Done", "Done")

const buildCard = (card, id) => {
    const findColumn = document.querySelector("#ToDo")
    const divCard = document.createElement("div");
    divCard.textContent = card;
    divCard.ondragstart = function () {
        drag(event);
    }
    divCard.draggable = true;
    divCard.classList = "card default"
    divCard.id = id;

    // Querry selector To Do Div
    findColumn.appendChild(divCard)
}

buildCard("fake", "fake");
buildCard("extra fake", "extra fake");
buildCard("fake ass bitch", "fake ass bitch");
+$("#ModalTarget").on("hidden.bs.modal", function (e) {
       $(this)
        .find("input,textarea,select")
           .val("")
           .end()
            .find("input[type=checkbox], input[type=radio]")
             .prop("checked", "")
              .end();
      })
// document.querySelector(".col-4 .doing").push(object card)