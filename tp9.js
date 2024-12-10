const prompt = require("prompt-sync")({sigint : true})

let name = prompt("Nom : ")
const greet = (name) => {
    console.log(name)
}


greet(name)