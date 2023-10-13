const readline = require("readline-sync");

let puissance4 = [];
const nbColonne = 7;
const nbLigne = 6;
const joueur1car = "x";
const joueur2car = "o"

puissance4 = initialiserTableauVide(nbLigne, nbColonne, 0);
afficherPuissance4(puissance4, joueur1car, joueur2car);
// puissance4[3][3] = 1
// puissance4[4][4]= 2 
// afficherPuissance4(puissance4, joueur1car, joueur2car);

while (true) {
    if (jouerCase(1)) {
        pasTermine = true;
        console.log("Joueur 1 à gagné");
        break;
    }
    if (jouerCase(2)) {
        pasTermine = true;
        console.log("Joueur 2 à gagné");
        break;
    }
}

/**
 * Fonction permettant un jour de jouer un case
 * Retourne true quand la saisie est bonne
 * @param {number} joueur 
 * @returns 
 */

function jouerCase (joueur) {
    let ligneVide = -1;
    let colonne = -1;
    while (ligneVide === -1 || colonne <= 0 || colonne > 7) {
        console.log("Choisir une colonne à un emplacement vide");
        let colonne = saisirColonne();
        let ligneVide = retournerLigneCaseVideColonne(colonne);
    }
    puissance4[ligneVide][colonne-1] = joueur;
    afficherPuissance4(puissance4, joueur1car, joueur2car);
    return verificationFinJeu();
}
/**
 * Fonction permettant de saisir une colonne
 */

function saisirColonne () {
    return parseInt(readline.question("Quelle colonne ?"));
}

function retournerLigneCaseVideColonne (colonne) {
    return 5;
}

function verificationFinJeu () {
    return true;
}

/* *
 * permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en paramètre
 * @param {number} nbLigne 
 * @param {number} nbColonne 
 * @param {*} car 
 * @returns 
 */
function initialiserTableauVide (nbLigne, nbColonne, car="") {
    let tab = [];
    for (let i = 0; i < nbLigne; i++) {
        let ligne = [];
        for (let j = 0; j < nbColonne; j++) {
            ligne.push(car);
        }
        tab.push(ligne); 
    }
    return tab;
}

/**
 * Permet d'afficher un tableau de puissance 4
 * @param {Array<String} tab tableau car 
 * @param {String} j1car
 * @param {String} j2car
 * @
 */
function afficherPuissance4 (tab, j1car, j2car) {
    for (let i = 0; i < tab.length; i++) {
        let ligne = "";
        for (let j = 0; j < tab[i].length; j++){
                ligne += "| "
            if (tab[i][j] === 0) {
                ligne += "_";
            } else if (tab[i][j] === 1) {
                ligne += j1car;
            } else if (tab[i][j] === 2) {
                ligne += j2car;
            }
            ligne += " |";
        }
        console.log(ligne);
    }
}

