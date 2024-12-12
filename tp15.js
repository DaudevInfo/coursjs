let products = ["tot","rir","tit"]

const add = (st,tab) => tab.push(st)  
const del = (st, tab) => tab.filter((elt) => elt !== st)
const inc = (st, tab) => tab.includes(st)
console.log (products)
add("banane",products)
console.log (products)
products = del("tit",products)
console.log (products)

console.log (inc("tot",products))
console.log (inc("toto",products))

