const container = document.querySelector(".container");

const build = (card) => {
    const divTop = document.createElement("div");
    const div = document.createElement("div");
    const divCard = document.createElement("div");
    divTop.classList = "row"
    div.classList = "col-4";
    div.textContent = "look at me! I'm a div!";
    divCard.textContent = card;
    div.appendChild(divCard)
    divTop.appendChild(div)
    container.appendChild(divTop)
    // container.appendChild(div2)
}

build("fake");
build("extra fake");
build("fake ass bitch");

// document.querySelector(".col-4 .doing").push(object card)