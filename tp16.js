


let analyserPhrase =  (phrase) => {
    const tabPhrase = phrase.split(' ')
    const compoPhrase = {}

    compoPhrase.nbWord = tabPhrase.length
    
    // vairante en commentaire
     compoPhrase.longestWord = tabPhrase.reduce ((acc,word) => {
        if (acc < word.length ) { acc = word.length}
        return acc} ,0)
    
    compoPhrase.nbOccurs = tabPhrase.reduce( (acc,word) => {
        acc[word] = (acc[word]||0)+1
        return acc 
    },{})
        
       
    return compoPhrase
    }



 console.log(analyserPhrase("un un un est un est testaaaaaaaa"))  
