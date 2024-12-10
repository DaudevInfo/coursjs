const prompt = require("prompt-sync")({sigint : true})


const age = parseInt(prompt("Age de l'utilisateur :"))


// test est un entier ?
if (age <0 || age >125 || isNaN(age) ) {
    console.log("Age saisi non valide")
} else if (age <18) {
    console.log("Vous êtes mineur")
 } else {
    console.log("Vous êtes majeur")
 } 
 

