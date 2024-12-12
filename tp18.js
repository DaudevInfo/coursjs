let products = [
    {name :"banane", number: 2},
    {name :"pomme", number: 2},
    {name :"citron", number: 1}
    
]

const addProduct = (productName) => {
    let a = false
    let prod = products.filter ((elt) => {
        if (elt.name === productName) {
                elt.number ++
                a =true
            } 
       }
    ) 
    if (!a) 
    {
        console.log("Vide "+ prod)
        products.push({name : productName, number: 1 })
    }
    return products.length
}

console.log(addProduct("banane"))
console.log(addProduct("poire"))
console.log(addProduct("banane"))
console.log(products)


