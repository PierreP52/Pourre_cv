// Cette fonction récupère et retourne 
// la valeur d'une donnée transmise à une page Web.
// Si la donnée n'est pas récupérable, cette fonction
// retourne null. 
function recupereDonnee(strNomDonnee) {
	// Va chercher les données transmises
	const strDonnees = location.search.substring(1);		
	const tabStrDonnees = strDonnees.split('&');
	let strValeurDonnee = null;
	let binTrouve=false;
	for (let i = 0; i < tabStrDonnees.length && !binTrouve; i++) {
		const tabStrUneDonnee = tabStrDonnees[i].split('=');
		if (tabStrUneDonnee[0] == strNomDonnee) {
			strValeurDonnee = decodeURIComponent(tabStrUneDonnee[1]);
			// Remplacer les + par des espaces
			while (strValeurDonnee.indexOf('+') != -1)
			    strValeurDonnee = strValeurDonnee.replace('+', ' ');
		    // Remplacer les %2F par /
			while (strValeurDonnee.indexOf('%2F') != -1)
			    strValeurDonnee = strValeurDonnee.replace('%2F', '/');
		    // Remplacer les %27 par l'apostropphe (')
			while (strValeurDonnee.indexOf('%27') != -1)
				strValeurDonnee = strValeurDonnee.replace('%27', '\'');
			// Remplacer les %40 par @
			while (strValeurDonnee.indexOf('%40') != -1)
				strValeurDonnee = strValeurDonnee.replace('%40', '@');
				
			binTrouve = true;
		}
	}
    return strValeurDonnee;
}



