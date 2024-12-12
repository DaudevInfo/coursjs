class Robot {
    constructor (nom, positionX, positionY) {
        this.nom = nom
        this.positionY = positionY
        this.positionX = positionX
        this.positionsNettoyees = []
    }

    seDeplacer(positionX, positionY) {
        this.positionY += positionY
        this.positionX += positionX
    }

    nettoyer() {
        this.positionsNettoyees.push({x: this.positionX, y: this.positionY})
        console.log ("C'est propre au "+ this.positionX+ ","+this.positionY)
    }

    reinitilaiserPosition () {
        this.positionX = 0
        this.positionY = 0
    }
    historiqueNettoyage() {
        console.log (this.positionsNettoyees)
    }
    reculer () {
        if (this.positionX >1) this.positionX--
    }
}

let toto = new Robot ("Mon Robot", 10, 12)

toto.historiqueNettoyage()
toto.nettoyer()
toto.seDeplacer(2,-6)
toto.nettoyer()
toto.reculer()
toto.nettoyer()
toto.reculer()
toto.nettoyer()
toto.reculer()
toto.nettoyer()
toto.reculer()
toto.historiqueNettoyage()

