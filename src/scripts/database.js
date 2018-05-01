const taskDatabase = {}

taskDatabase.cards = []


// Add cards to the task database
taskDatabase.cards.push({
            name: "Jacob Smith",
            description:"Yellow",
            Start:"",
            End:"",
            Category:[],
            Status:"",
            Archive:false
        })

localStorage.setItem(
    taskDatabase,JSON.stringify(taskDatabase))