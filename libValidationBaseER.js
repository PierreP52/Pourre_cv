/* 	Nom du script: libValidationBaseER.js
	But: Librairie de fonctions pour des validations de base 
*/

// Retourne true si la donnée vaut null
// sinon retourne false
function estNull(donnee) {
    return (donnee == null);
}

// Retourne true si la donnée est un nombre (de type number ou de type object)
// sinon retourne false
function estUnNombre(fltDonnee) {
    return (!estNull(fltDonnee) && (typeof fltDonnee == 'number') ||
        (typeof fltDonnee == 'object' && fltDonnee instanceof Number));
}

// Retourne true si la donnée est une chaîne (de type string ou de type object)
// sinon retourne false
function estUneChaine(strDonnee) {
    return (!estNull(strDonnee) && (typeof strDonnee == 'string') ||
        (typeof strDonnee == 'object' && strDonnee instanceof String));
}

// Retourne true si la donnée est un tableau
// sinon retourne false
function estUnTableau(tabDonnee) {
    return (!estNull(tabDonnee) && (typeof tabDonnee == 'object' && tabDonnee instanceof Array));
}

// Retourne true si les deux données sont de même type
// sinon retourne false
function sontDeMemeType(donnee1, donnee2) {
    return (!estNull(donnee1) && !estNull(donnee2) && (typeof donnee1 == typeof donnee2));
}

// Retourne true si une donnée est située entre une valeur et une autre valeur
// sinon retourne false
function estDansIntervalle(donnee, valeur1, valeur2) {
    return (sontDeMemeType(donnee, valeur1) && sontDeMemeType(valeur1, valeur2) && donnee >= valeur1 && donnee <= valeur2);
}

// Retourne true si une chaîne de caractères contient seulement un nombre
// sinon retourne false
function contientSeulementUnNombre(strDonnee) {
    const exprReg = /^[-+]?\d+(\.\d+)?$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une chaîne de caractères contient seulement un nombre entier
// sinon retourne false
function contientSeulementUnNombreEntier(strDonnee) {
    const exprReg = /^[-+]?\d+$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une chaîne de caractères contient seulement un nombre hexadécimal
// sinon retourne false
function contientSeulementUnNombreHexa(strDonnee) {
    const exprReg = /^[0-9A-Fa-f]+$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une chaîne de caractères est vide
// sinon retourne false
function estUneChaineVide(strDonnee) {
    const exprReg = /^$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une chaîne de caractères ne contient que des caractères blancs
// sinon retourne false
function estUneChaineBlanche(strDonnee) {
    const exprReg = /^\s*$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une chaîne de caractères contient un seul chiffre
// sinon retourne false
function estUnCaractereNumerique(strDonnee) {
    const exprReg = /^\d$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une chaîne de caractères contient une seule lettre
// sinon retourne false
function estUnCaractereAlpha(strDonnee) {
    const exprReg = /^[A-Z]$/i;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une chaîne de caractères contient un seul chiffre ou une seule lettre
// sinon retourne false

function estUnCaractereAlphaNumerique(strDonnee) {
    const exprReg = /^[A-Z0-9]$/i;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si un caractère est présent parmi les choix
// sinon retourne false
function estUnCaractereValide(strCaractere, strChoixCaracteres) {
    return (estUneChaine(strCaractere) && estUneChaine(strChoixCaracteres) && strCaractere.length == 1 && strChoixCaracteres.indexOf(strCaractere) != -1);
}

// Retourne true si une donnée est dans un format valide
// sinon retourne false
// Dans le format, # représente un chiffre, @ représente une lettre
// tout autre caractère est le caractère lui-même 
function estDansUnFormatValide(strDonnee, strFormat) {
    let binValide = estUneChaine(strDonnee) && estUneChaine(strFormat) && strFormat.length == strDonnee.length;

    if (binValide)
        for (let i = 0; (i < strDonnee.length) && binValide; i++)
            switch (strFormat.charAt(i)) {
                case '@':
                    binValide = estUnCaractereAlpha(strDonnee.charAt(i));
                    break;

                case '#':
                    binValide = estUnCaractereNumerique(strDonnee.charAt(i));
                    break;

                default:
                    binValide = strFormat.charAt(i) == strDonnee.charAt(i);
            }

    return binValide;
}

// Retourne true si une donnée est un code postal
// sinon retourne false
function estUnCodePostal(strDonnee) {
    const exprReg = /^[A-Z]\d[A-Z] \d[A-Z]\d$/i;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une donnée est un numéro d'assurance sociale
// sinon retourne false
function estUnNAS(strDonnee) {
    const exprReg = /^\d{3} \d{3} \d{3}$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une donnée est un matricule
// sinon retourne false
function estUnMatricule(strDonnee) {
    const exprReg = /^\d{7}$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une donnée est un code permanent
// sinon retourne false
function estUnCodePermanent(strDonnee) {
    const exprReg = /^[A-Z]{4}\d{8}$/i;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si une donnée est un numéro de téléphone
// sinon retourne false
function estUnNoDeTelephone(strDonnee) {
    const exprReg = /(^\(\d{3}\) \d{3}\-\d{4}$)|(^\d{3}\-\d{3}\-\d{4}$)/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

// Retourne true si les données représentent une date valide
// sinon retourne false
function estUneDateValide(strJour, strMois, strAnnee) {
    let binValide = contientUnNombreEntier(strJour) && contientUnNombreEntier(strMois) &&
        contientUnNombreEntier(strAnnee);
    if (binValide) {
        const intMois = parseInt(strMois);
        const intJour = parseInt(strJour);
        const intAnnee = parseInt(strAnnee);
        binValide = estDansIntervalle(intMois, 1, 12);
        if (binValide) {
            let intMaxJours = 31;
            switch (intMois) {
                case 4:
                case 6:
                case 9:
                case 11:
                    intMaxJours = 30;
                    break;

                case 2:
                    intMaxJours = ((intAnnee % 400 == 0) || (intAnnee % 4 == 0 && intAnnee % 100 != 0)) ? 29 : 28;
            } // fin du switch

            binValide = estDansIntervalle(intJour, 1, intMaxJours);
        }
    }

    return binValide;
}

function contientseulementdeslettres(strDonnee){
    const exprReg = /^[A-Za-z]+$/;
    return (estUneChaine(strDonnee) && exprReg.test(strDonnee));
}

function estUnEmail(strDonnee) {
    const exprReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return estUneChaine(strDonnee) && exprReg.test(strDonnee);
    }

function main() {

}