let cardCounter = Math.floor(Math.random()*20);
function randomNumber () {
    return Math.random
}
const cards=[]

// Function factory
function createCard (Name, Description, Start, End ) {
    cardCounter++
    const newCard = {
        Name,
        Description,
        Category,
        Start,
        End,
        inProgress:false

    }


    cards.push(newCard)
}
console.log(createCard);



const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)



    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(cards , "createCards");
