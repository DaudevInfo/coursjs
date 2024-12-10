const calculateTotal = (price,taxRate=.2) => price * (1- taxRate)

 console.log(calculateTotal(10,.4))
 console.log(calculateTotal(10))
 