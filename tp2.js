const prompt = require("prompt-sync")({sigint : true})


const age = prompt("Age de l'utilisateur :")

if (age <0 || age >125) {
    console.log("Age saisi non valide")
} else if (age <18) {
    console.log("Vous êtes mineur")
 } else {
    console.log("Vous êtes majeur")
 } 
 

