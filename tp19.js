//const mystery = ["toto", "titi", ]

const isAnagram = (st1,st2) => {

console.log(st1,st2) 

if (st1.lenght ===0) {
     return st2.lenght ===0 
}

if (st2.includes(st1.charAt(0))) {
    console.log("index of "+st2.indexOf(st1.charAt(0)))
    st2 = st2.substring(st2.indexOf(st1.charAt(0)))

} else return false

return isAnagram(st1.slice(1), st2)

}
console.log(isAnagram("listen","silent"))


// la solution est de passer en tableau split + puis de trier sort() puis de comparer