let products = ["tot","rir","tit"]

const add = (st,tab) => tab.push(st)  
const del = (st, tab) => tab.filter((elt) => elt !== st)

console.log (products)
add("banane",products)
console.log (products)
products = del("tit",products)
console.log (products)

console.log (products.includes("tot"))
console.log (products.includes("toto"))

