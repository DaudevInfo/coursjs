class Vehicule {
    constructor (position) {
        this.position = position
    }
    deplacer (km){
        this.position += km
    }
}

class Voiture extends Vehicule {
    klaxonner () {
        console.log("bip")
    }
}


maVoiture = new Voiture(100)
console.log(maVoiture)
maVoiture.deplacer(100)
console.log(maVoiture)
maVoiture.klaxonner()