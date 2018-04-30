const container = document.querySelector(".row");

const build = (card) => {
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div = document.createElement("div");
    div.classList = "col-4";
    div3.classList = "row"
    div.textContent = "look at me! I'm a div!";
    div2.textContent = card;
    div.appendChild(div3)
    div3.appendChild(div2)
    container.appendChild(div)
    // container.appendChild(div2)
}

build("fake");
build("extra fake");
build("fake ass bitch");

// document.querySelector(".col-4 .doing").push(object card)