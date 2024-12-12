const prompt = require("prompt-sync")({sigint : true})
const randomwords = ["edezdz", "toto", "titi", "Election", "premeier"]

const mysteryWords = () => {
   const index = Math.floor(Math.random()* randomwords.length)
   console.log(randomwords+ " "+ index)
   return randomwords[index]
}



let i= 10
let wordInit = mysteryWords().split('')
let wordResult = new Array (wordInit.length)
console.log (wordResult)
nbFind =0

while( i> 0) {
   if (wordInit.length === nbFind) return console.log("win") 
   let car = prompt("entrez un caractère : ")
   let result = wordInit.findIndex((elt) => elt ===car)
   if (result > -1) { 
        wordResult[result]=car
        wordInit[result]=""
        nbFind++
    }
   console.log (wordResult )
   console.log ("Reste "+--i+ " tentatives")
   
}
if (i===0)  return console.log("lose") 


