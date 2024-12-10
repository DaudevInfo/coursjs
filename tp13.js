const calculerAvance = (a,b,ope) => ope(a,b)

const puissance = (a,b) => Math.pow(a,b)

const reste = (a,b) => a%b

console.log(calculerAvance(2,3,puissance))
console.log(calculerAvance(10,4,reste))
