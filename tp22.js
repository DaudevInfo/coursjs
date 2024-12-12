class Livre {
    constructor (titre, auteur) {
        this.auteur = auteur
        this.titre = titre
    }

}

class Bibliotheque {
   
    constructor (liste) {
        this.listeLivre = liste
    }
    ajoutLivre (livre) {
        this.listeLivre.push (livre)    
    }
    rechercheLivreParNom(titre) {
        return this.listeLivre.filter((livre) => livre.titre === titre)
    }

}

maBibli = new Bibliotheque ([])
maBibli.ajoutLivre (new Livre ("Princesse de Clèves","Madame Lafayette"))
maBibli.ajoutLivre (new Livre ("Clèves","Madame Lafayette"))
maBibli.ajoutLivre (new Livre ("Princesse ","Madame Lafayette"))
maBibli.ajoutLivre (new Livre ("Zaide","Madame Lafayette"))


console.log(maBibli)

console.log(maBibli.rechercheLivreParNom("Zaide"))
console.log(maBibli.rechercheLivreParNom("toto"))
