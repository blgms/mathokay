/*VARIABLES*/
var groupes = [
	/*0*/"Nombres",
	/*1*/"Calcul Mental",
	/*2*/"Unités",
	/*3*/"Proportionnalité",
	/*4*/"Fractions",
	/*5*/"Équations du 1er degré"
];

var diffs = [
	{"nom": "Très facile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconblue' />"},
	{"nom": "Facile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 icongreen' />"},
	{"nom": "Moyen", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconyellow' />"},
	{"nom": "Difficile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconorange' />"},
	{"nom": "Hardcore", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconred' />"}
];

var exos = [
	{"act": false, "Gpe": 0, "Diff": 0, "fonc": "arrondis()", "nom": "Arrondir des nombres"},
	{"act": false, "Gpe": 0, "Diff": 1, "fonc": "scienti()", "nom": "Passer en écriture scientifique"},
	{"act": false, "Gpe": 0, "Diff": 1, "fonc": "scientideci()", "nom": "Passer en écriture décimale"},
	{"act": false, "Gpe": 1, "Diff": 0,  "fonc": "tablesmulti()", "nom": "Tables de multiplication"},
	{"act": false, "Gpe": 1, "Diff": 0,  "fonc": "puiss10()", "nom": "Multiplier/diviser par 10, 100, 1000"},
	{"act": false, "Gpe": 2, "Diff": 0,  "fonc": "unites(1)", "nom": "Longueurs, masses, volumes (L)..."},
	{"act": false, "Gpe": 2, "Diff": 2,  "fonc": "unites(2)", "nom": "Aires, volumes (m³)"},
	{"act": false, "Gpe": 2, "Diff": 1,  "fonc": "durees(1)", "nom": "Durées (facile)"},
	{"act": false, "Gpe": 2, "Diff": 2,  "fonc": "durees(2)", "nom": "Durées (moyen)"},
	{"act": false, "Gpe": 2, "Diff": 3,  "fonc": "durees(3)", "nom": "Durées (difficile)"},
	{"act": false, "Gpe": 3, "Diff": 1,  "fonc": "tabprop()", "nom": "Vérification"},
	{"act": false, "Gpe": 3, "Diff": 1,  "fonc": "quatprop()", "nom": "Calcul de 4e proportionnelle"},
	{"act": false, "Gpe": 4, "Diff": 1,  "fonc": "fracsimp()", "nom": "Simplification"},
	{"act": false, "Gpe": 4, "Diff": 2,  "fonc": "fraccalc()", "nom": "Calculs"},
	{"act": false, "Gpe": 5, "Diff": 1,  "fonc": "equa1d(1)", "nom": "Type \\(ax=d\\)"},
	{"act": false, "Gpe": 5, "Diff": 2,  "fonc": "equa1d(2)", "nom": "Type \\(ax+b=d\\)"},
	{"act": false, "Gpe": 5, "Diff": 2,  "fonc": "equa1d(3)", "nom": "Type \\(ax+b=cx+d\\)"}
];

//NOMBRES
//ARRONDIS DE DECIMAUX
function arrondis() {
	let ordre = ["à l'unité","au dixième","au centième","au millième"];
	let nOrdre = Math.floor(Math.random()*ordre.length);
	let consigne = "Arrondir <b>"+ordre[nOrdre]+"</b>.";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=1;j<4;j++) {
		let a = Math.floor(Math.random()*100000);
		let x = (Math.round(a/(10**(4-nOrdre))))/(10**nOrdre);
		a = (a/10000);
		question += "<div>\\("+a+"\\)</div>";
		reponse += "<div>\\("+a+"\\simeq"+x+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//PASSER EN ECRITURE SCIENTIFIQUE
function scienti() {
	let consigne = "Convertir en écriture scientifique :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=1;j<4;j++) {
		let nb = Math.floor(Math.random()*9000+1000)/1000;
		let npuis = Math.ceil(Math.random()*6);
		let signpuis = Math.sign(Math.random()-0.5);
		let puis = npuis*signpuis;
		let num = nb*10**(puis);
		let numch;
		if (num < 1000) {
			for (let i=7;i>=-3;i--) {
				if (num < 10**(-i)) {
					numch = num.toFixed(i+4);
					break;
				}
			}
		} else {
			numch = num.toFixed(0);
		}
		question += "<div>\\("+numch+"\\)</div>";
		reponse += "<div>\\("+numch+"="+nb+"\\times 10^{"+puis+"}"+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//PASSER EN ECRITURE DECIMALE
function scientideci() {
	let consigne = "Convertir en écriture décimale :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=1;j<4;j++) {
		let nb = Math.floor(Math.random()*9000+1000)/1000;
		let npuis = Math.ceil(Math.random()*6);
		let signpuis = Math.sign(Math.random()-0.5);
		let puis = npuis*signpuis;
		let num = nb*10**(puis);
		let numch;
		if (num < 1000) {
			for (let i=7;i>=-3;i--) {
				if (num < 10**(-i)) {
					numch = num.toFixed(i+4);
					break;
				}
			}
		} else {
			numch = num.toFixed(0);
		}
		question += "<div>\\("+nb+"\\times 10^{"+puis+"}"+"\\)</div>";
		reponse += "<div>\\("+nb+"\\times 10^{"+puis+"}="+numch+"\\)</div>";
	}
	question += "</div>";
	return [consigne,question,reponse];
}

//CALCUL MENTAL
//TABLES DE MULTIPLICATION
function tablesmulti() {
	let consigne = "Calculer <b>de tête :</b>"
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=1;j<4;j++) {
		let n1 = Math.ceil(Math.random()*10);
		let n2 = Math.ceil(Math.random()*10);
		let quest = n1+"\\times"+n2;
		let rep = n1*n2;
		question += "<div>\\("+quest+"\\)</div>";
		reponse += "<div>\\("+quest+"="+rep+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//PUISSANCES DE 10 - UTILISE DES FRACTIONS
function puiss10() {
	let consigne = "Calculer <b>de tête</b> :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=1;j<4;j++) {
		let num = Math.floor(Math.random()*1000);
		let coeff = 10**Math.ceil(Math.random()*3);
		let op = Math.round(Math.random());
		let quest,rep;
		if (op==0) {
			quest = chainefrac([num,coeff]);
			rep = num/coeff;
		} else {
			quest = num+"\\times"+coeff;
			rep = num*coeff;
		}
		question += "<div>\\("+quest+"\\)</div>";
		reponse += "<div>\\("+quest+"="+rep+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//UNITES
//CONVERSION UNITES
function unites(exo) {
	let unites = [];
	let base;
	if (exo==1) {
		base = 10;
		unites = [
			{ "grandeur":"m", "div":["k","h","da","","d","c","m"], "facteur":1 },
			{ "grandeur":"g", "div":["k","h","da","","d","c","m"], "facteur":1 },
			{ "grandeur":"L", "div":["h","da","","d","c","m"], "facteur":1 },
			{ "grandeur":"V", "div":["k","","m"], "facteur":3 }
		];
	}
	if (exo==2) {
		base = 10;
		unites = [
			{ "grandeur":"m$^2$", "div":["k","h","da","","d","c","m"], "facteur":2 },
			{ "grandeur":"m$^3$", "div":["","d","c","m"], "facteur":3 }
		];
	}
	/*choix de l'unité de départ et de l'unité d'arrivée*/
	let grand = unites[Math.floor(Math.random()*unites.length)];
	let nudep = Math.floor(Math.random()*grand.div.length);
	let nuarr = Math.floor(Math.random()*grand.div.length);
	while (nuarr==nudep) {
		nuarr = Math.floor(Math.random()*grand.div.length);
	}
	let udep = grand.div[nudep]+grand.grandeur;
	let uarr = grand.div[nuarr]+grand.grandeur;
	let nb100 = Math.floor(Math.random()*20000)+1;
	let nbdep = (nb100/100).toFixed(2);
	let decale = (nuarr-nudep)*grand.facteur;
	let rep;
	if (2-decale>0) {
		rep = ((nb100*base**(decale))/100).toFixed(2-decale);
	} else {
		rep = Math.trunc((nb100*base**(decale))/100);
	}
	let consigne = "<div>Convertir...</div>";
	let question = "<div class='nombres'>\\("+nbdep+"\\,\\text{"+udep+"}\\) en \\(\\text{"+uarr+"}\\).</div>";
	let reponse = "<div class='nombres reponse'>\\("+nbdep+"\\,\\text{"+udep+"}="+rep+"\\,\\text{"+uarr+"}\\)</div>";
	return [consigne,question,reponse];
}

//CONVERSION UNITES DE DUREE
function durees(exo) {
	let grand;
	if (exo==1) {
		grand = { "unites":["s","min"], "lim":[3600, 60]};
	}
	if (exo==2) {
		grand = { "unites":["s","min","h"], "lim":[86400, 1440, 24]};
	}
	if (exo==3) {
		grand = { "unites":["s","min","h","j"], "lim":[432000, 7200, 120, 5]};
	}												
	let nudep = Math.floor(Math.random()*(grand.unites.length));
	let temps = Math.ceil(Math.random()*grand.lim[nudep]*(10**nudep))/(10**nudep);
	let t;
	if (nudep <= 2) {
		t = Math.round(temps*60**nudep);
	}
	if (nudep == 3) {
		t = Math.round(temps*60*60*24);
	}
	let ttemp, tempsrep = [];
	for (let i=0; i<4; i++) {
		let div;
		if (i>=2) {
			div = 24**(i-1);
		} else {
			div = 60;
		}
		ttemp = t%div;
		t = Math.floor(t/div);
		if (ttemp != 0) {
			tempsrep.unshift(grand.unites[i]);
			tempsrep.unshift(ttemp);
		}
	}
	let consigne = "<div>Exprimer en utilisant toutes les unités de temps nécessaires :</div>";
	let question = "<div class='nombres'>\\("+temps+"\\,\\text{"+grand.unites[nudep]+"}\\)</div>";
	let reponse = "<div class='nombres reponse'>\\("+temps+"\\,\\text{"+grand.unites[nudep]+"}=\\text{"+tempsrep.toString().replace(/,/g, "\\,")+"}\\)</div>";
	return [consigne,question,reponse];
}

//PROPORTIONNALITE
//TABLEAUX DE PROPORTIONNALITE
function tabprop() {
	let prop = ["C'est un tableau de proportionnalité.","Ce n'est <b>pas</b> un tableau de proportionnalité."];
	let on = Math.floor(Math.random()*2);
	let reponse = "<div class='reponse'>"+prop[on]+"</div>";
	let nbs = [];
	let coeff = Math.ceil(Math.random()*10);
	for (let i=0;i<3;i++) {
		nbs[i] = Math.ceil(Math.random()*100);
		if (on == 1 && i > 0) {
			coeff = coeff+(i-1)+Math.floor(Math.random()*(2));
		}
		nbs[3+i] = nbs[i]*coeff;
	}
	for (let i=0;i<6;i++) {
		nbs[i] = "\\("+nbs[i]+"\\)";
	}
	let consigne = "<table class='proportion'><tr><th>Grandeur A</th><td>"+nbs[0]+"</td><td>"+nbs[1]+"</td><td>"+nbs[2]+"</td></tr><tr><th>Grandeur B</th><td>"+nbs[3]+"</td><td>"+nbs[4]+"</td><td>"+nbs[5]+"</td></tr></table>"
	let question = "<div>Indiquer si le tableau ci-dessus est un tableau de proportionnalité.</div>"
	return [consigne,question,reponse];
}

//QUATRIEME PROPORTIONNELLE
function quatprop() {
	let quellevaleur = Math.floor(Math.random()*4);
	let nba = Math.floor(Math.random()*90+1);
	let nbb = Math.floor(Math.random()*100+1);
	let coeff = (Math.floor(Math.random()*9+2));
	let nbc = nba*coeff;
	let nbd = nbb*coeff;
	let nbs = [nba, nbb, nbc, nbd];
	let reponse = "<div class='reponse nombres'>\\(x="+nbs[quellevaleur]+"\\)</div>";
	nbs[quellevaleur] = "x";
	let consigne = "<table class='proportion'><tr><th>Grandeur A</th><td>\\("+nbs[0]+"\\)</td><td>\\("+nbs[1]+"\\)</td></tr><tr><th>Grandeur B</th><td>\\("+nbs[2]+"\\)</td><td>\\("+nbs[3]+"\\)</td></tr></table>";
	let question = "<div>Retrouver la valeur manquante dans le tableau de proportionnalité ci-dessus.</div>";
	return [consigne,question,reponse];
}

//FRACTIONS
//SIMPLIFICATION FRACTIONS
function fracsimp() {
	let consigne = "<div>Si c'est possible, simplifier :</div>";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=1;j<4;j++) {
		let nbs = [];
		let a = Math.ceil(Math.random()*5);
		for (let i=0;i<2;i++) {
			nbs[i]=Math.ceil(Math.random()*20)*a;
		}
		let fracres = simpl(nbs[0],nbs[1]);
		/*création des chaînes*/
		let frac = chainefrac(nbs);
		let resultat = chainefrac(fracres);
		question += "<div>\\("+frac+"\\)</div>";
		reponse += "<div>\\("+frac+"="+resultat+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//CALCULS FRACTIONS
function fraccalc() {
	let consigne = "<div>Calculer :</div>"
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let nbs = [];
		for (let i=0;i<4;i++) {
			nbs[i]=Math.ceil(Math.random()*10);
		}
		/*choix aléatoire de l'opération*/
		let ops = ["+","-","\\times","\\div"];
		let nbop = Math.floor(Math.random()*4);
		let op = ops[nbop];
		/*calcul du dénominateur du résultat*/
		let den = [ppcm(nbs[1],nbs[3]) , ppcm(nbs[1],nbs[3]) , nbs[1]*nbs[3], nbs[1]*nbs[2]];
		/*calcul du numérateur du résultat*/
		let num = [nbs[0]*den[nbop]/nbs[1]+nbs[2]*den[nbop]/nbs[3] , nbs[0]*den[nbop]/nbs[1]-nbs[2]*den[nbop]/nbs[3] , nbs[0]*nbs[2] , nbs[0]*nbs[3]];
		/*simplification de la fraction résultat*/
		let fracres = simpl(num[nbop],den[nbop]);
		/*création des chaînes*/
		let calcul = chainefrac([nbs[0],nbs[1]])+op+chainefrac([nbs[2],nbs[3]]);
		let resultat = chainefrac(fracres);
		question += "<div>\\("+calcul+"\\)</div>";
		reponse += "<div>\\("+calcul+"="+resultat+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//EQUATIONS DU 1ER DEGRE
function equa1d(type) {
	let nbs = [0,0,0,0];
	while (nbs[0]==nbs[2] || nbs[1]==nbs[3]) {
		nbs[0] = genZ(1,10);
		if (type>1) {
			nbs[1] = genZ(1,10);
		}
		if (type>2) {
			nbs[2] = genZ(1,10);
		}
		nbs[3] = genZ(1,10);
	}
	let equation = nbs[0]+"x";
	if (type>1) {
		if (nbs[1]<0) {equation += "-";} else {equation += "+";}
		equation += Math.abs(nbs[1]);
	}
	equation += "=";
	if (type>2) {
		equation += nbs[2]+"x";
	}
	if (nbs[3]<0) {equation += "-";} else if (type==3) {equation += "+";}
	equation += Math.abs(nbs[3]);
	let x = (nbs[3]-nbs[1])/(nbs[0]-nbs[2]);
	if (!Number.isInteger(x)) {x=chainefrac(simpl(nbs[3]-nbs[1],nbs[0]-nbs[2]));}
	let question = "<div>Résoudre l'équation.</div>";
	let consigne = "<div class='nombres'>\\("+equation+"\\)</div>";	
	let reponse = "<div class='nombres reponse'>\\(x="+x+"\\)</div>";
	return [consigne,question,reponse];
}




//FONCTIONS ANNEXES
//GENERER UN ENTIER RELATIF NON NUL SUR [-b;-a]U[a;b]
function genZ(a,b) {
	return (Math.round(Math.random()*(b-a))+a)*(-1)**Math.round(Math.random());
}

//SIMPLIFIER UNE FRACTION
function simpl(a,b) {
	let s = pgcd(a,b);
	return [a/s,b/s];
}

//TRANSFORMER DEUX NOMBRES EN UNE CHAINE FRACTION
function chainefrac(array) {
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

//RENDU KATEX D'UNE CHAÎNE
function renderKatex(chaine) {
	if (typeof chaine != 'string') {
		chaine = chaine.toString();
	}
	chaine = chaine.replaceAll(".","{,}");
	return katex.renderToString(chaine,{throwOnError:false});
}
