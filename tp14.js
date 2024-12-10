

const startTimer = (nb) => {
    let i = 0
    const timer = setInterval( () => {
        console.log("Chronomètre :"+ i)
        i++

        if(i > nb) {
            console.log("Temps écoulé !" )
            clearInterval(timer)
        }
    }
    ) 
}

startTimer(10)



