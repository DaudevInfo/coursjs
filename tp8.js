const prompt = require("prompt-sync")({sigint : true})


const nbToFind = Math.round(Math.random()*100)
console.log("Debug resultat à trouver :" + nbToFind)
let nb = null;
let i = 1;
while (nb != nbToFind || i >5)
{
    nb = parseInt(prompt("entrez un nombre :"))

    if (nb > nbToFind) {
        console.log("trop grand")
    } else if (nb < nbToFind) 
    {
        console.log("trop petit")
    }
    i++
}
if (i===5) {
    console.log ("Perdu")
} else 
{
    console.log ("Gagné")
}
