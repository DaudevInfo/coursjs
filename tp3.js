const prompt = require("prompt-sync")({sigint : true})


const chaine = prompt("Entrez une phrase :")

console.log(chaine.length)
console.log(chaine.toUpperCase())
console.log(chaine.includes("JavaScript"))

