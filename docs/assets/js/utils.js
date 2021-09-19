//FONCTIONS ANNEXES
//GENERER UN ENTIER SUR [a;b]
function genEnt(a,b) {
	return (Math.floor(Math.random()*(b+1-a))+a);
}

//GENERER UN ENTIER RELATIF NON NUL SUR [-b;-a]U[a;b]
function genZ(a,b) {
	return (Math.round(Math.random()*(b-a))+a)*(-1)**Math.round(Math.random());
}

//SIMPLIFIER UNE FRACTION
function simpl(a,b) {
	if (Number.isInteger(a/b)) {
		return [a/b,1,b];
	} else {
		let s = pgcd(a,b);
		return [a/s,b/s,s];
	}
}

//TRANSFORMER DEUX NOMBRES EN UNE CHAINE FRACTION
function chainefrac(array) {
	if (array.length==1 || array[1]==1) { return array[0]; }
	let fraction = "";
	array.map(function(n) {return Number(n);});
	if (array[0]*array[1]<0) {
		fraction += "-";
	}
	fraction += "\\dfrac{"+Math.abs(array[0])+"}{"+Math.abs(array[1])+"}";
	return fraction;
}

//CALCUL DE PGCD
function pgcd(a,b) {
	if (!b) {
		return a;
	}
	return pgcd(b,a%b);
}

//CALCUL DE PPCM
function ppcm(a,b) {
	let p = pgcd(a,b);
	return a*b/p;
}

//VALEUR EXACTE D'UNE RACINE CARREE (NOMBRES < 10000)
function exaSqrt(n) {
	let a=1;
	for (i=99;i>1;i--) {
		if (Number.isInteger(n/(i*i))) {
			a*=i;
			n/=i*i;
		}
	}
	return [a,n];
}

//RECHERCHE DES TRIPLETS a, b, c NON NULS TELS QUE b²-4ac SOIT UN CARRE D'ENTIER
function tripletsD(inf,sup) {
	let liste=[];
	for (let a=inf;a<=sup;a++) {
		for (let b=inf;b<=sup;b++) {
			for (let c=inf;c<=sup;c++) {
				if (Number.isInteger(Math.sqrt(b*b-4*a*c)) && a!=0 && b!=0 && c!=0) {
					liste.push([a,b,c]);
				}
			}
		}
	}
	return liste;
}

//RENDU KATEX D'UNE CHAÎNE
function renderKatex(chaine) {
	if (typeof chaine != 'string') {
		chaine = chaine.toString();
	}
	chaine = pointVirg(chaine);
	return katex.renderToString(chaine,{throwOnError:false});
}

//REMPLACEMENT DES POINTS PAR DES VIRGULES
function pointVirg(str) {
	str = str.replaceAll(".","{,}");
	return str;
}
