const students = []
 
students.push({nom :"Jean",note : 10})
students.push({nom :"Pierre",note : 11})
students.push({nom :"Claude",note : 20})


console.log(students.filter ((elt) => elt.note>15 ))

console.log(students.reduce ((acc,elt) => acc + elt.note ,0) / students.length)