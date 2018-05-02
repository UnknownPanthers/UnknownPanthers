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
}

const divTop = document.createElement("div");
divTop.classList = "row"
const build = (card, id) => {
    const divCard = document.createElement("div");
    const div = document.createElement("div");
    div.classList = "col-4";
    div.textContent = "look at me! I'm a div!";
    divCard.textContent = card;
    divCard.ondragstart = function () {
        drag(event);
    }
    divCard.draggable = true;
    div.ondrop = function () {
        drop(event);
    }
    div.ondragover = function () {
        allowDrop(event);
    }
    divCard.classList = "default"
    divCard.id = id;
    div.appendChild(divCard)
    divTop.appendChild(div)
    container.appendChild(divTop)
}

$("#ModalTarget").on("hidden.bs.modal", function (e) {
    $(this)
      .find("input,textarea,select")
         .val("")
         .end()
      .find("input[type=checkbox], input[type=radio]")
         .prop("checked", "")
         .end();
  })

build("fake", "fake");
build("extra fake", "extra fake");
build("fake ass bitch", "fake ass bitch");



 // document.querySelector(".col-4 .doing").push(object card)