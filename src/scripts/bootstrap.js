const container = document.querySelector(".container");

const divTop = document.createElement("div");
divTop.classList = "row"
const build = (card) => {
    const divCard = document.createElement("div");
    const div = document.createElement("div");
    div.classList = "col-4";
    div.textContent = "look at me! I'm a div!";
    divCard.textContent = card;
    divCard.classList = "default"
    div.appendChild(divCard)
    divTop.appendChild(div)
    container.appendChild(divTop)
}

build("fake");
build("extra fake");
build("fake ass bitch");

// document.querySelector(".col-4 .doing").push(object card)