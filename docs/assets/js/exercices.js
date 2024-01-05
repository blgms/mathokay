/*VARIABLES*/
var groupes = [
	/*0*/{"nom": "Nombres"},
	/*1*/{"nom": "Calcul Mental"},
	/*2*/{"nom": "Unités"},
	/*3*/{"nom": "Proportionnalité"},
	/*4*/{"nom": "Fractions"},
	/*5*/{"nom": "Équations"},
	/*6*/{"nom": "Statistiques"},
	/*7*/{"nom": "Fonctions"},
	/*8*/{"nom": "Géométrie"},
	/*9*/{"nom": "Suites"},
	/*10*/{"nom": "Repérage"}
];

var diffs = [
	{"nom": "Très facile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconblue' />"},
	{"nom": "Facile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 icongreen' />"},
	{"nom": "Moyen", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconyellow' />"},
	{"nom": "Difficile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconorange' />"},
	{"nom": "Très difficile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconred' />"}
];

var exos = [
	{"act": false, "Gpe": 0, "Diff": 0, "fonc": "arrondis(", "nom": "Arrondir des nombres"},
	{"act": false, "Gpe": 0, "Diff": 0, "fonc": "compNombres(", "nom": "Comparer des nombres"},
	{"act": false, "Gpe": 0, "Diff": 1, "fonc": "scienti(", "nom": "Passer en écriture scientifique"},
	{"act": false, "Gpe": 0, "Diff": 1, "fonc": "scientideci(", "nom": "Passer en écriture décimale"},
	{"act": false, "Gpe": 1, "Diff": 0, "fonc": "tablesmulti(", "nom": "Tables de multiplication"},
	{"act": false, "Gpe": 1, "Diff": 0, "fonc": "puiss10(", "nom": "Multiplier/diviser par des puissances de 10"},
	{"act": false, "Gpe": 2, "Diff": 0, "fonc": "unites(1", "nom": "Longueurs, masses, volumes (L)..."},
	{"act": false, "Gpe": 2, "Diff": 2, "fonc": "unites(2", "nom": "Aires, volumes (m³)"},
	{"act": false, "Gpe": 2, "Diff": 1, "fonc": "durees(1", "nom": "Durées (facile)"},
	{"act": false, "Gpe": 2, "Diff": 2, "fonc": "durees(2", "nom": "Durées (moyen)"},
	{"act": false, "Gpe": 2, "Diff": 3, "fonc": "durees(3", "nom": "Durées (difficile)"},
	{"act": false, "Gpe": 3, "Diff": 1, "fonc": "tabprop(", "nom": "Vérification"},
	{"act": false, "Gpe": 3, "Diff": 1, "fonc": "tabPropCoeff(", "nom": "Coefficient de proportionnalité"},
	{"act": false, "Gpe": 3, "Diff": 1, "fonc": "quatprop(", "nom": "Calcul de 4e proportionnelle"},
	{"act": false, "Gpe": 3, "Diff": 1, "fonc": "echelle(", "nom": "Échelles"},
	{"act": false, "Gpe": 3, "Diff": 1, "fonc": "calcPourcent(", "nom": "Calculs de pourcentages"},
	{"act": false, "Gpe": 3, "Diff": 1, "fonc": "tauxPourcent(", "nom": "Taux de variation"},
	/*{"act": false, "Gpe": 4, "Diff": 0, "fonc": "compFrac(", "nom": "Comparer des fractions"},*/
	{"act": false, "Gpe": 4, "Diff": 1, "fonc": "fracdec(", "nom": "Fraction vers nombre décimal"},
	{"act": false, "Gpe": 4, "Diff": 1, "fonc": "decfrac(", "nom": "Nombre décimal vers fraction"},
	{"act": false, "Gpe": 4, "Diff": 1, "fonc": "fraccomp(", "nom": "Comparaison de fractions"},
	{"act": false, "Gpe": 4, "Diff": 1, "fonc": "fracsimp(", "nom": "Simplification"},
	{"act": false, "Gpe": 4, "Diff": 2, "fonc": "fraccalc(", "nom": "Calculs avec des fractions"},
	{"act": false, "Gpe": 5, "Diff": 1, "fonc": "equa1d(1", "nom": "Forme \\(ax=d\\)"},
	{"act": false, "Gpe": 5, "Diff": 2, "fonc": "equa1d(2", "nom": "Forme \\(ax+b=d\\)"},
	{"act": false, "Gpe": 5, "Diff": 2, "fonc": "equa1d(3", "nom": "Forme \\(ax+b=cx+d\\)"},
	{"act": false, "Gpe": 5, "Diff": 3, "fonc": "equa2d(", "nom": "Second degré"},
	{"act": false, "Gpe": 6, "Diff": 1, "fonc": "statFreq(", "nom": "Calculs de fréquences/pourcentages"},
	{"act": false, "Gpe": 6, "Diff": 1, "fonc": "statMoy(", "nom": "Calcul de moyenne"},
	{"act": false, "Gpe": 6, "Diff": 2, "fonc": "statMoyP(", "nom": "Calcul de moyenne pondérée"},
	{"act": false, "Gpe": 6, "Diff": 1, "fonc": "statMed(", "nom": "Détermination de médiane"},
	{"act": false, "Gpe": 7, "Diff": 1, "fonc": "foncAffTabl(", "nom": "Tableau de valeurs : fonction affine ou linéaire"},
	{"act": false, "Gpe": 7, "Diff": 2, "fonc": "foncCarTabl(", "nom": "Tableau de valeurs : fonction carré"},
	{"act": false, "Gpe": 7, "Diff": 2, "fonc": "foncRacTabl(", "nom": "Tableau de valeurs : fonction racine carrée"},
	/*{"act": false, "Gpe": 7, "Diff": 1,  "fonc": "foncVar(", "nom": "Compléter un tableau de variations"},*/
	/*{"act": false, "Gpe": 8, "Diff": 1,  "fonc": "geoAire(", "nom": "Calculer une aire"},*/
	/*{"act": false, "Gpe": 8, "Diff": 2,  "fonc": "geoVol(", "nom": "Calculer un volume"},*/
	/*{"act": false, "Gpe": 8, "Diff": 2,  "fonc": "geoThal(", "nom": "Théorème de Thalès"},*/
	{"act": false, "Gpe": 8, "Diff": 1,  "fonc": "pythagore(1", "nom": "Relation de Pythagore (1)"},
	{"act": false, "Gpe": 8, "Diff": 2,  "fonc": "pythagore(2", "nom": "Relation de Pythagore (2)"},
	{"act": false, "Gpe": 8, "Diff": 2,  "fonc": "pythagore(3", "nom": "Calcul avec Pythagore"},
	{"act": false, "Gpe": 9, "Diff": 1,  "fonc": "suitAriR(", "nom": "Arithmétique : Calculer la raison"},
	{"act": false, "Gpe": 9, "Diff": 2,  "fonc": "suitAriVerif(", "nom": "Arithmétique : Vérification"},
	{"act": false, "Gpe": 9, "Diff": 2,  "fonc": "suitAriTermesR(", "nom": "Arithmétique : \\(n\\)-ième terme (raison connue)"},
	{"act": false, "Gpe": 9, "Diff": 3,  "fonc": "suitAriTermes(", "nom": "Arithmétique : \\(n\\)-ième terme (raison inconnue)"},
	{"act": false, "Gpe": 9, "Diff": 3,  "fonc": "suitAriSommeUn(", "nom": "Arithmétique : Somme des \\(n\\) premiers termes (\\(u_n\\) connu)"},
	{"act": false, "Gpe": 9, "Diff": 4,  "fonc": "suitAriSomme(", "nom": "Arithmétique : \\(n\\)-ième terme et somme des \\(n\\) premiers termes"},
	{"act": false, "Gpe": 9, "Diff": 2,  "fonc": "suitGeoQ(", "nom": "Géométrique : Calculer la raison"},
	{"act": false, "Gpe": 9, "Diff": 3,  "fonc": "suitGeoVerif(", "nom": "Géométrique : Vérification"},
	{"act": false, "Gpe": 9, "Diff": 4,  "fonc": "suitGeoTermesR(", "nom": "Géométrique : \\(n\\)-ième terme (raison connue)"},
	{"act": false, "Gpe": 9, "Diff": 4,  "fonc": "suitGeoTermes(", "nom": "Géométrique : \\(n\\)-ième terme (raison inconnue)"},
	{"act": false, "Gpe": 9, "Diff": 3,  "fonc": "suitGeoSommeUn(", "nom": "Géométrique : Somme des \\(n\\) premiers termes (raison connue)"},
	{"act": false, "Gpe": 9, "Diff": 4,  "fonc": "suitGeoSomme(", "nom": "Géométrique : raison et somme des \\(n\\) premiers termes"},
	{"act": false, "Gpe": 10, "Diff": 1,  "fonc": "lectPts(", "nom": "Lecture de coordonnées de points"},
	{"act": false, "Gpe": 10, "Diff": 2,  "fonc": "coeffDir(", "nom": "Coefficient directeur d'une droite"},
	{"act": false, "Gpe": 10, "Diff": 2,  "fonc": "lectVec(", "nom": "Lecture de coordonnée d'un vecteur du plan"}
];

//NOMBRES
//ARRONDIS DE DECIMAUX
function arrondis() {
	let ordre = ["à l'unité","au dixième","au centième","au millième"];
	let nOrdre = Math.floor(Math.random()*ordre.length);
	let consigne = "Arrondir <b>"+ordre[nOrdre]+"</b>.";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let a = Math.floor(Math.random()*100000);
		let x = (Math.round(a/(10**(4-nOrdre))))/(10**nOrdre);
		a = (a/10000);
		question += "<div>\\("+pointVirg(a.toString())+"\\)</div>";
		reponse += "<div>\\("+pointVirg(a.toString())+"\\simeq"+pointVirg(x.toString())+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//COMPARAISON DE NOMBRES
function compNombres() {
	let consigne = "Compléter avec les symboles \\(<\\) ou \\(>\\) :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let a = genZ(0,1000);
		let b = a + genZ(1,1)*10**randint(0,2);
		let c = 10**randint(0,3);
		let s = genZ(1,1);
		a = s*a/c; b = s*b/c;
		let r = "";
		if (a-b<0) {
			r = "<";
		} else {
			r = ">";
		}
		question += "<div>\\("+pointVirg(a.toString())+"\\,\\,\\text{...}\\,\\,"+pointVirg(b.toString())+"\\)</div>";
		reponse += "<div>\\("+pointVirg(a.toString())+"\\,\\,"+r+"\\,\\,"+pointVirg(b.toString())+"\\)</div>";
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
	for (let j=0;j<3;j++) {
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
		question += "<div>\\("+pointVirg(numch.toString())+"\\)</div>";
		reponse += "<div>\\("+pointVirg(numch.toString())+"="+pointVirg(nb.toString())+"\\times 10^{"+puis+"}"+"\\)</div>";
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
	for (let j=0;j<3;j++) {
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
		question += "<div>\\("+pointVirg(nb.toString())+"\\times 10^{"+puis+"}"+"\\)</div>";
		reponse += "<div>\\("+pointVirg(nb.toString())+"\\times 10^{"+puis+"}="+pointVirg(numch.toString())+"\\)</div>";
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
	for (let j=0;j<3;j++) {
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

//PUISSANCES DE 10
function puiss10() {
	let consigne = "Calculer <b>de tête</b> :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let num = randint(1,1000);
		let cf1 = 10**randint(0,2);
		let a = num/cf1;
		let puiss = randint(1,3);
		let cf2 = 10**puiss
		let signPuiss = randoppose();
		let b = 10**(puiss*signPuiss);				
		let quest,rep;
		let op = randint(0,1);
		if (op==0) {
			quest = chainefrac([a,b]);
			rep = (signPuiss===1)? (num/b*cf2)/(cf1*cf2) : (num*cf2)/cf1;
		} else {
			quest = a+"\\times"+b;
			rep = (signPuiss===1)? (num*b)/cf1 : num/(cf1*cf2);
		}
		question += "<div>\\("+pointVirg(quest)+"\\)</div>";
		reponse += "<div>\\("+pointVirg(rep.toString())+"\\)</div>";
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
			{ "grandeur":"V", "div":["k","","m"], "facteur":3 },
			{ "grandeur":"s", "div":["","m"], "facteur":3 }
		];
	}
	if (exo==2) {
		base = 10;
		unites = [
			{ "grandeur":"m$^2$", "div":["","d","c","m"], "facteur":2 },
			{ "grandeur":"m$^3$", "div":["","d","c","m"], "facteur":3 }
		];
	}
	/*choix de l'unité de départ et de l'unité d'arrivée*/
	let grand = unites[randint(0,unites.length-1)];
	let a = grand.div.length-1;
	let nudep = randint(0,a);
	let nuarr = randint(0,a);
	while (nuarr==nudep) {
		nuarr = randint(0,a);
	}
	let udep = grand.div[nudep]+grand.grandeur;
	let uarr = grand.div[nuarr]+grand.grandeur;
	let nbm = randint(1,999)*100;
	let nbdep = nbm/(10**((a-nudep)*grand.facteur));
	let rep = nbm/(10**((a-nuarr)*grand.facteur));
	let consigne = "<div>Convertir...</div>";
	let question = "<div class='nombres'>\\("+pointVirg(nbdep.toString())+"\\,\\text{"+udep+"}\\) en \\(\\text{"+uarr+"}\\).</div>";
	let reponse = "<div class='nombres reponse'>\\("+pointVirg(nbdep.toString())+"\\,\\text{"+udep+"}="+pointVirg(rep.toString())+"\\,\\text{"+uarr+"}\\)</div>";
	return [consigne,question,reponse];
}

//CONVERSION UNITES DE DUREE
function durees(exo) {
	let consigne = "<div>Convertir au format jours, heures, minutes, secondes :</div>";
	let question = "", reponse = "";
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
	question += "<div class='nombres'>\\("+pointVirg(temps.toString())+"\\,\\text{"+grand.unites[nudep]+"}\\)</div>";
	reponse += "<div class='nombres reponse'>\\("+pointVirg(temps.toString())+"\\,\\text{"+grand.unites[nudep]+"}=\\text{"+tempsrep.toString().replace(/,/g, "\\,")+"}\\)</div>";
	return [consigne,question,reponse];
}

//PROPORTIONNALITE
//TABLEAUX DE PROPORTIONNALITE
function tabprop() {
	let consigne = "<div>Indiquer si les grandeurs ci-dessous sont proportionnelles.</div>";
	let question = "", reponse = "";
	let prop = ["C'est","Ce n'est <b>pas</b>"];
	let on = randint(0,1);
	let nbs = [];
	let coeff = randint(1,10);
	for (let i=0;i<3;i++) {
		nbs[i] = randint(1,100);
		if (on == 1 && i > 0) {
			coeff = coeff+(i-1)+randint(0,1);
		}
		nbs[3+i] = nbs[i]*coeff;
	}
	for (let i=0;i<6;i++) {
		nbs[i] = "\\("+nbs[i]+"\\)";
	}
	let tabl = "<table class='proportion'><tr><th>Grandeur A</th><td>"+nbs[0]+"</td><td>"+nbs[1]+"</td><td>"+nbs[2]+"</td></tr><tr><th>Grandeur B</th><td>"+nbs[3]+"</td><td>"+nbs[4]+"</td><td>"+nbs[5]+"</td></tr></table>";
	question += tabl;
	reponse += tabl+"<div class='reponse'>"+prop[on]+" un tableau de proportionnalité.</div>";
	return [consigne,question,reponse];
}

//QUATRIEME PROPORTIONNELLE
function quatprop() {
	let consigne = "<div>Retrouver la valeur manquante en utilisant la proportionnalité.</div>";
	let question="", reponse="";
	let quellevaleur = randint(0,3);
	let nba = randint(1,90);
	let nbb = randint(1,100);
	let coeff = randint(2,10);
	let nbc = nba*coeff;
	let nbd = nbb*coeff;
	let nbs = [nba, nbb, nbc, nbd];
	let rep = nbs[quellevaleur];
	nbs[quellevaleur] = "x";
	let tabl = "<table class='proportion'><tr><th>Grandeur A</th><td>\\("+nbs[0]+"\\)</td><td>\\("+nbs[1]+"\\)</td></tr><tr><th>Grandeur B</th><td>\\("+nbs[2]+"\\)</td><td>\\("+nbs[3]+"\\)</td></tr></table>";
	question += tabl;
	reponse += tabl+"<div class='reponse nombres'>\\(x="+rep+"\\)</div>";
	return [consigne,question,reponse];
}

//COEFFICIENT DE PROPORTIONNALITE
function tabPropCoeff() {
	let consigne = "<div>Donner le coefficient de proportionnalité du tableau suivant.</div>";
	let question = "", reponse = "";
	let on = randint(0,1);
	let nbs = [];
	let coeff = randint(1,10);
	for (let i=0;i<3;i++) {
		nbs[i] = randint(1,100);
		nbs[3+i] = nbs[i]*coeff;
	}
	for (let i=0;i<6;i++) {
		nbs[i] = "\\("+nbs[i]+"\\)";
	}
	let tabl = "<table class='proportion'><tr><th>A</th><td>"+nbs[0]+"</td><td>"+nbs[1]+"</td><td>"+nbs[2]+"</td></tr><tr><th>B</th><td>"+nbs[3]+"</td><td>"+nbs[4]+"</td><td>"+nbs[5]+"</td></tr></table>";
	question += tabl;
	reponse += "<div class='nombres reponse'>Le coefficient de proportionnalité est égal à \\("+coeff+"\\).</div>";
	return [consigne,question,reponse];
}

//ECHELLES
function echelle() {
	let consigne = "";
	let question="", reponse="";
	let echList = [2, 3, 10, 20, 25, 50, 100];
	let ech = echList[randint(0,echList.length-1)];
	if (ech > 10) { var unit = "", fact = 1000; } else { var unit = "c", fact = 10; }
	question += "<div>Sur un plan à l'échelle <b>1:"+ech+"</b>, on relève les cotes suivantes :</div><div class='grid nombres'>";
	reponse += "<div>Sur un plan à l'échelle <b>1:"+ech+"</b> :</div><div class='grid nombres'>";
	let mesures = "", reelles="";
	for (let j=0;j<3;j++) {
		let quest = randint(40,250);
		let rep = quest*ech/fact;
		mesures += "<div>\\("+quest+"\\,\\text{mm}\\)</div>";
		reelles += "<div>\\("+pointVirg(rep.toString())+"\\,\\text{"+unit+"m}\\)</div>";
	}
	reponse += mesures+"</div><div class='grid nombres reponse'>"+reelles+"</div>";
	question += mesures+"</div><div>Déterminer les cotes réelles en \\(\\text{"+unit+"m}\\).</div>";	
	return [consigne,question,reponse];
}

//POURCENTAGES
//Calcul de 10%, 20%...
function calcPourcent() {
	let L = [15, 20, 25, 30, 35, 40, 45];
	let p = [10, 5, L[randint(0,L.length-1)]];
	let consigne = "Effectuer les calculs suivants :";
	let a = randint(0,100)*10;
	let q = "", r = "";
	for (i in p) {
		q += "<div>"+p[i].toString()+"% de "+a.toString()+"</div>";
		r += "<div>\\("+pointVirg((p[i]*a/100).toString())+"\\)</div>";
	}
	let question = "<div class='nombres'>"+q+"</div>"
	let reponse = "<div class='reponse nombres'>"+pointVirg(r.toString())+"</div>";
	return [consigne,question,reponse];
}

//Taux d'augmentation
function tauxPourcent() {
	let consigne = "<div>Retrouver le coefficient multiplicateur associé à une</div>";
	let a = randoppose();
	let p = randint(0,90);
	let question = (a===1) ? "<div class='nombres'>augmentation de \\("+p+" \\%\\).</div>" : "<div class='nombres'>diminution de \\("+p+" \\%\\).</div>"
	let reponse = "<div class='reponse nombres'>\\("+pointVirg(((100+a*p)/100).toString())+"\\)</div>";
	return [consigne,question,reponse];
}

//FRACTIONS
//FRACTIONS vers DECIMAL
function fracdec() {
	let consigne = "<div>Donner la forme décimale des fractions suivantes :</div>";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	let La = [1, 2, 3, 4, 5, 10, 20, 25];
	let Lb = [2, 4, 5, 10, 20, 25, 50, 100];
	for (i=0 ; i<3 ; i++) {
		let a = La[randint(0,La.length-1)], b = Lb[randint(0,Lb.length-1)];
		let frac = chainefrac([a,b]);
		question += "<div>\\("+frac+"\\)</div>";
		reponse += "<div>\\("+frac+"="+pointVirg((a/b).toString())+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//DECIMAL vers FRACTION
function decfrac() {
	let consigne = "<div>Écrire ces nombres sous forme de fractions irréductibles :</div>";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	let La = [1, 2, 3, 4, 5, 10, 20, 25];
	let Lb = [2, 4, 5, 10, 20, 25, 50, 100];
	for (i=0 ; i<3 ; i++) {
		let a = 1, b = 1;
		while (a == b || Number.isInteger(a/b)) {
			a = La[randint(0,La.length-1)], b = Lb[randint(0,Lb.length-1)];
		}
		let nbs = simpl(a,b);		
		let frac = chainefrac(nbs);
		question += "<div>\\("+pointVirg((a/b).toString())+"\\)</div>";
		reponse += "<div>\\("+pointVirg((a/b).toString())+"="+frac+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//COMPARAISON DE FRACTIONS
function fraccomp() {
	let consigne = "Compléter avec les symboles \\(<\\) ou \\(>\\) :";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	let La = [1, 2, 3, 4, 5, 10, 20, 25];
	let Lb = [2, 4, 5, 10, 20, 25];
	for (i=0 ; i<3 ; i++) {
		let a = 1, b = 1, c = 1, d = 1;
		while (a == b || Number.isInteger(a/b)) {
			a = La[randint(0,La.length-1)], b = Lb[randint(0,Lb.length-1)];
		}
		while (c == d || Number.isInteger(c/d)) {
			c = La[randint(0,La.length-1)], d = Lb[randint(0,Lb.length-1)];
		}		
		let frac1 = chainefrac([a,b]), frac2 = chainefrac([c,d]);
		let r = (a/b < c/d)? "<" : ">";
		question += "<div>\\("+frac1+"\\,\\,\\text{...}\\,\\,"+frac2+"\\)</div>";
		reponse += "<div>\\("+frac1+"\\,\\,"+r+"\\,\\,"+frac2+"\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//SIMPLIFICATION FRACTIONS
function fracsimp() {
	let consigne = "<div>Si c'est possible, simplifier :</div>";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=0;j<3;j++) {
		let nbs = [];
		let a = randint(1,5);
		for (let i=0;i<2;i++) {
			nbs[i]=randint(1,20)*a;
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
			nbs[i]=randint(1,10);
		}
		/*choix aléatoire de l'opération*/
		let ops = ["+","-","\\times","\\div"];
		let nbop = randint(0,3);
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
	let equation = equaStr(nbs);
	let x = (nbs[3]-nbs[1])/(nbs[0]-nbs[2]);
	if (!Number.isInteger(x)) {x=chainefrac(simpl(nbs[3]-nbs[1],nbs[0]-nbs[2]));}
	let question = "<div>Résoudre l'équation.</div>";
	let consigne = "<div class='nombres'>"+equation+"</div>";	
	let reponse = "<div class='nombres reponse'>\\(x="+x+"\\)</div>";
	return [consigne,question,reponse];
}

//EQUATIONS DU 2ND DEGRE
function equa2d() {
	let n=tripletsD(-5,5)[randint(0,151)];
	let a=n[0],b=n[1],c=n[2];
	let na="",nb="",nc="";
	if (a==-1) { na +="-"; } else if (a!=1) { na += a; }
	if (b>0) { nb += "+"; }
	if (b==-1) { nb +="-"; } else if (b!=1) { nb += b; }
	if (c>0) { nc += "+"; }
	nc += c;
	let d=b*b-4*a*c;
	let sol;
	if (d<0) { sol = "Pas de solution."; }
	if (d==0) { sol = "\\(x="+chainefrac(simpl(-b,2*a))+"\\)"; }
	if (d>0) { 
		let rd,x1,x2;
		rd = Math.sqrt(d);
		x1 = chainefrac(simpl(-b-rd,2*a));
		x2 = chainefrac(simpl(-b+rd,2*a));
		sol = "<div>\\(x_{1}="+x1+"\\)</div><div>\\(x_{2}="+x2+"\\)</div>"; 
	}
	let question = "<div>Indiquer les solutions de l'équation.</div>";
	let consigne = "<div class='nombres'>\\("+na+"x^2"+nb+"x"+nc+"=0\\)</div>";	
	let reponse = "<div class='nombres reponse grid'>"+sol+"</div>";
	return [consigne,question,reponse];
}

//CALCUL DE FREQUENCE/POURCENTAGE
function statFreq() {
	let consigne = "<div>Calculer, en %, les fréquences (arrondies à l'unité) correspondant à ces effectifs.</div>";
	let question = "<div class='grid nombres'>";
	let reponse = "<div class='grid nombres reponse'>";
	for (let j=1;j<4;j++) {
		let N=randint(20,500);
		let n=randint(0,N);
		let f=n*100/N;
		let eg=(Number.isInteger(f))? "=" : "\\simeq";
		f=Math.round(f);
		let quest = "\\(n_i="+n+"\\)<br>\\(N="+N+"\\)";
		question += "<div>"+quest+"</div>";
		reponse += "<div>\\(f=\\dfrac{"+n+"}{"+N+"} \\times 100"+eg+f+"\\%\\)</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [consigne,question,reponse];
}

//CALCUL DE MOYENNE SIMPLE
function statMoy() {
	let consigne = "<div>Calculer la moyenne de ces valeurs (arrondir au dixième si nécessaire).</div>";
	let N = randint(4,8);
	let x = randint(0,50);
	let S = x;
	let question = "<div class='nombres'>\\("+x;
	for (let j=1 ; j<N ; j++) {
		x = randint(0,50);
		S += x;
		question += " ; "+x;
	}
	question += "\\)</div>";
	let moy = S/N;
	let eg=(Number.isInteger(moy*10))? "=" : "\\simeq";
	let reponse = "<div class='nombres reponse'>\\(\\bar{x}"+eg+pointVirg((Math.round((moy)*10)/10).toString())+"\\).</div>";
	return [question,consigne,reponse];
}

//CALCUL DE MOYENNE PONDÉRÉE
function statMoyP() {
	let consigne = "<div>Calculer la moyenne de ces valeurs (arrondir au dixième si nécessaire).</div>";
	let valeurs = "<tr><th>\\(x_i\\)</th>";
	let effectifs = "<tr><th>\\(n_i\\)</th>";
	let N=0, S=0;
	for (let j=0 ; j<randint(3,5) ; j++) {
		let x = randint(0,50);
		let n = randint(2,20);
		valeurs += "<td>\\("+x+"\\)</td>";
		effectifs += "<td>\\("+n+"\\)</td>";
		S += x*n;
		N += n;
	}
	let moy = S/N;
	let eg=(Number.isInteger(moy*10))? "=" : "\\simeq";
	let question = "<table class='proportion'>"+valeurs+effectifs+"</table>";
	let reponse = "<div class='nombres reponse'>\\(\\bar{x}"+eg+pointVirg((Math.round((moy)*10)/10).toString())+"\\).</div>";
	return [question,consigne,reponse];
}

//CALCUL DE MEDIANE
function statMed() {
	let consigne = "<div>Déterminer la médiane de ces valeurs.</div>";
	let N = randint(4,8);
	let nb = [];
	let med;
	let question = "<div class='nombres'>\\(";
	for (let j=0 ; j<N ; j++) {
		nb[j] = randint(0,50);
		question += nb[j];
		if (j<N-1) {
			question += " ; ";
		}
	}
	question += "\\)</div>";
	nb.sort(function(a,b) {
		return a-b;
	});
	if (N%2==1) {
		med = nb[(N+1)/2-1]
	} else {
		med = nb[N/2-1];
	}
	let reponse = "<div class='nombres reponse'>La médiane est "+med+".</div>";
	return [question,consigne,reponse];
}

//FONCTION AFFINE - TABLEAU DE VALEURS
function foncAffTabl() {
	let a = genZ(1,20);
	let b = randint(0,2);
	if (b != 0) {
		b = genZ(1,20);
	}
	let consigne = "<div>Compléter le tableau de valeurs de la fonction définie par \\(f(x)="+a+"x"+strPlus(b)+"\\) .</div>";
	let ant = [];
	let img = [];
	let antStr = "<tr><th>\\(x\\)</th>";
	let imgStr = "<tr><th>\\(f(x)\\)</th><td></td><td></td><td></td><td></td>";
	let imgRepStr = "<tr><th>\\(f(x)\\)</th>";
	for (let j=0 ; j<4 ; j++) {
		ant[j] = genZ(0,20);
		while (j>0 && ant[j]==ant[j-1]) {
			ant[j] = genZ(0,20);
		}
	}
	ant.sort(function(a,b) {
		return a-b;
	});
	for (let j=0 ; j<4 ; j++) {
		antStr += "<td>"+ant[j]+"</td>";
		img[j] = ant[j]*a+b;
		imgRepStr += "<td><span class='reponse'>"+img[j]+"</span></td>";
	}
	let question = "<table class='proportion nombres'>"+antStr+"</tr>"+imgStr+"</tr></table>";
	let reponse = "<table class='proportion nombres'>"+antStr+"</tr>"+imgRepStr+"</tr></table>";
	return [consigne,question,reponse];	
}

//FONCTION CARRE - TABLEAU DE VALEURS
function foncCarTabl() {
	let a = genZ(1,20);
	let consigne = "<div>Compléter le tableau de valeurs de la fonction définie par \\(f(x)="+a+"x^{2}\\) .</div>";
	let ant = [];
	let img = [];
	let antStr = "<tr><th>\\(x\\)</th>";
	let imgStr = "<tr><th>\\(f(x)\\)</th><td></td><td></td><td></td><td></td>";
	let imgRepStr = "<tr><th>\\(f(x)\\)</th>";
	for (let j=0 ; j<4 ; j++) {
		ant[j] = genZ(0,20);
		while (j>0 && ant[j]==ant[j-1]) {
			ant[j] = genZ(0,20);
		}
	}
	ant.sort(function(a,b) {
		return a-b;
	});
	for (let j=0 ; j<4 ; j++) {
		antStr += "<td>"+ant[j]+"</td>";
		img[j] = a*ant[j]**2;
		imgRepStr += "<td><span class='reponse'>"+img[j]+"</span></td>";
	}
	let question = "<table class='proportion nombres'>"+antStr+"</tr>"+imgStr+"</tr></table>";
	let reponse = "<table class='proportion nombres'>"+antStr+"</tr>"+imgRepStr+"</tr></table>";
	return [consigne,question,reponse];	
}

//FONCTION RACINE CARREE - TABLEAU DE VALEURS
function foncRacTabl() {
	let a = genZ(1,20);
	let consigne = "<div>Compléter le tableau de valeurs de la fonction définie par \\(f(x)="+a+"\\sqrt{x}\\) .</div>";
	let ant = [];
	let img = [];
	let antStr = "<tr><th>\\(x\\)</th>";
	let imgStr = "<tr><th>\\(f(x)\\)</th><td></td><td></td><td></td><td></td>";
	let imgRepStr = "<tr><th>\\(f(x)\\)</th>";
	for (let j=0 ; j<4 ; j++) {
		ant[j] = randint(0,20)**2;
		while (j>0 && ant[j]==ant[j-1]) {
			ant[j] = randint(0,20)**2;
		}
	}
	ant.sort(function(a,b) {
		return a-b;
	});
	for (let j=0 ; j<4 ; j++) {
		antStr += "<td>"+ant[j]+"</td>";
		img[j] = Math.sqrt(ant[j])*a;
		imgRepStr += "<td><span class='reponse'>"+img[j]+"</span></td>";
	}
	let question = "<table class='proportion nombres'>"+antStr+"</tr>"+imgStr+"</tr></table>";
	let reponse = "<table class='proportion nombres'>"+antStr+"</tr>"+imgRepStr+"</tr></table>";
	return [consigne,question,reponse];	
}


//GEOMETRIE
//Théorème de Pythagore
function pythagore(exo) {
	document.getElementById("consigne"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let taille = randint(5,20);
	let board = JXG.JSXGraph.initBoard("box"+idCarte, {boundingbox: [-taille, taille, taille, -taille], keepaspectratio:true, showCopyright:false, shownavigation:false});
	let alpha = randint(0,360)*Math.PI/180,
		beta = alpha+randint(40,140)*Math.PI/180,
		r = 4*taille/5,
		coord = [
			[r*Math.cos(alpha),r*Math.sin(alpha),"p0"],
			[r*Math.cos(Math.PI+alpha),r*Math.sin(Math.PI+alpha),"p1"],
			[r*Math.cos(beta),r*Math.sin(beta),"p2"]
		].sort(() => Math.random() - 0.5);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [coord[0][0],coord[0][1]], cerise),
		B = board.create('point', [coord[1][0],coord[1][1]], cerise),
		C = board.create('point', [coord[2][0],coord[2][1]], cerise),
		pol = board.create('polygon',[A,B,C], {
			fillColor: '#FFFF00',
			lines: {
				strokeWidth: 2,
				strokeColor: '#009256'
			}
		});
	// pts : [lettre, pX, x, y]
	let pts = [
		["A","B","C"],
		[coord[0][2],coord[1][2],coord[2][2]],
		[coord[0][0],coord[1][0],coord[2][0]],
		[coord[0][1],coord[1][1],coord[2][1]]
		];
	//[lettre, x, y]
	let M = [pts[0][pts[1].indexOf("p0")], pts[2][pts[1].indexOf("p0")], pts[3][pts[1].indexOf("p0")]],
		N = [pts[0][pts[1].indexOf("p1")], pts[2][pts[1].indexOf("p1")], pts[3][pts[1].indexOf("p1")]],
		P = [pts[0][pts[1].indexOf("p2")], pts[2][pts[1].indexOf("p2")], pts[3][pts[1].indexOf("p2")]];
	let m = sortString(N[0]+P[0]), n = sortString(M[0]+P[0]), p = sortString(M[0]+N[0]);
	//calcul des longueurs des côtés
	let cotes = [
		[m, p+"²&nbsp;-&nbsp;"+n+"²", Math.round(10*Math.sqrt((P[1]-N[1])**2+(P[2]-N[2])**2))/10 ],
		[n, p+"²&nbsp;-&nbsp;"+m+"²", Math.round(10*Math.sqrt((P[1]-M[1])**2+(P[2]-M[2])**2))/10 ],
		[p, m+"²&nbsp;+&nbsp;"+n+"²", Math.round(20*r)/10 ]
	];
	//calcul des réponses arrondies au dixième
	cotes[0].push(Math.round(10*Math.sqrt(cotes[2][2]**2-cotes[1][2]**2))/10);
	cotes[1].push(Math.round(10*Math.sqrt(cotes[2][2]**2-cotes[0][2]**2))/10);
	cotes[2].push(Math.round(10*Math.sqrt(cotes[0][2]**2+cotes[1][2]**2))/10);
	let consigne = "", question, reponse;
	if (exo == 1) {
		question = "Écrire la relation permettant de calculer la longueur \\("+cotes[2][0]+"\\) dans ce triangle rectangle.";
		reponse = "<div class='nombres reponse'>\\("+cotes[2][0]+"²&nbsp;=&nbsp;"+cotes[2][1]+"\\)</div>";
	} else if (exo == 2) {
		let n = randint(0,1);
		question = "Écrire la relation permettant de calculer la longueur \\("+cotes[n][0]+"\\) dans ce triangle rectangle.";
		reponse = "<div class='nombres reponse'>\\("+cotes[n][0]+"²&nbsp;=&nbsp;"+cotes[n][1]+"\\)</div>";
	} else if (exo == 3) {
		cotes.sort(() => Math.random() - 0.5);
		question = "\\("+cotes[1][0]+"="+pointVirg(cotes[1][3].toString())+"\\) et \\("+cotes[2][0]+"="+pointVirg(cotes[2][3].toString())+"\\). Calculer la longueur \\("+cotes[0][0]+"\\) arrondie au dixième.";
		reponse = "<div class='nombres reponse'>\\("+cotes[0][0]+"&nbsp;=&nbsp;"+pointVirg(cotes[0][3].toString())+"\\)</div>";
	}
	return [consigne,question,reponse];
}


//SUITES ARITHMETIQUES
//Raison d'une suite arithmétique
function suitAriR() {
	let r = genZ(0,100);
	let n = randint(6,20);
	let u = genSuitAri(genZ(0,200),r,n);
	let consigne = "Voici plusieurs termes consécutifs d'une suite arithmétique. Donner sa raison \\(r\\).";
	let question = "<div class='nombres'>\\(u_{"+(n-3)+"}="+u[n-3]+"\\qquad u_{"+(n-2)+"}="+u[n-2]+"\\qquad u_{"+(n-1)+"}="+u[n-1]+"\\qquad u_{"+n+"}="+u[n]+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(r="+r+"\\)</div>";
	return [consigne,question,reponse];	
}

//Vérifier si une suite est bien arithmétique.
function suitAriVerif() {
	let r = genZ(0,100);
	let u = genSuitAri(genZ(0,200),r,4);
	let dec = randint(0,1);
	for (let i=2; i<5; i++) {
		u[i]=u[i]+dec*genZ(0,3);
	}
	let consigne = "Voici les premiers termes d'une suite. Vérifier si elle est arithmétique ou non.";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\qquad u_4="+u[4]+"\\)</div>";
	let reponse = question;
	if (dec==0) {
		reponse += "<div class='nombres reponse'>La suite est arithmétique de raison \\(r="+r+"\\).</div>";
	} else {
		reponse += "<div class='nombres reponse'>La suite n'est pas arithmétique.</div>";
	}
	return [consigne,question,reponse];	
}

//n-ième terme d'une suite arithmétique (avec raison)
function suitAriTermesR() {
	let r = genZ(0,100);
	let n = randint(6,20);
	let u = genSuitAri(genZ(0,200),r,n);
	let consigne = "Voici les premiers termes d'une suite arithmétique \\((u_n)\\) de raison \\(r="+r+"\\). Déterminer la valeur de \\(u_{"+n+"}\\).";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\qquad u_4="+u[4]+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(u_{"+n+"}="+u[n]+"\\)</div>";
	return [consigne,question,reponse];	
}

//n-ième terme d'une suite arithmétique (sans raison)
function suitAriTermes() {
	let r = genZ(0,100);
	let n = randint(6,20);
	let u = genSuitAri(genZ(0,200),r,n);
	let consigne = "Voici les premiers termes d'une suite arithmétique \\((u_n)\\). Déterminer la valeur de \\(u_{"+n+"}\\).";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\qquad u_4="+u[4]+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(u_{"+n+"}="+u[n]+"\\)</div>";
	return [consigne,question,reponse];	
}

//Somme des n premiers termes d'une suite arithmétique (avec n-ième terme)
function suitAriSommeUn() {
	let r = genZ(0,100);
	let n = randint(6,20);
	let u = genSuitAri(genZ(0,200),r,n);
	let consigne = "Calculer la somme des "+n+" premiers termes de la suite arithmétique définie par :";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_{"+n+"}="+u[n]+"\\qquad r="+r+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(S_{"+n+"}="+u[0]+"\\)</div>";
	return [consigne,question,reponse];	
}

//Somme des n premiers termes d'une suite arithmétique (sans n-ième terme)
function suitAriSomme() {
	let r = genZ(0,100);
	let n = randint(6,20);
	let u = genSuitAri(genZ(0,200),r,n);
	let consigne = "Calculer le "+n+"e terme, puis la somme des "+n+" premiers termes de la suite arithmétique définie par :";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad r="+r+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(u_{"+n+"}="+u[n]+"\\qquad S_{"+n+"}="+u[0]+"\\)</div>";
	return [consigne,question,reponse];	
}


//SUITES GEOMETRIQUES
//Raison d'une suite géométrique
function suitGeoQ() {
	let decq = randint(0,1);
	let q = decq*genZ(1,19)/10+(1-decq)*genZ(2,10);
	let u = genSuitGeo(genZ(1,200),q,4);
	let consigne = "Voici les premiers termes d'une suite géométrique. Donner sa raison \\(q\\).";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\qquad u_4="+u[4]+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(q="+pointVirg(q.toString())+"\\)</div>";
	return [consigne,question,reponse];	
}

//Vérifier si une suite est bien géométrique.
function suitGeoVerif() {
	let u1 = genZ(1,99);
	let decq = randint(0,1);
	let q = decq*genZ(1,19)/10+(1-decq)*genZ(2,10);
	let dec = 10+randint(0,1)*genZ(1,2);
	let u = [u1, u1];
	for (let i=2; i<5; i++) {
		let m=1;
		if (q<1) {
			m=1000;
		}
		u.push(Math.round((u[i-1]*m)*(q*dec*m)/10)/(m*m));
		u[0]+=u[i];
	}
	for (let i=0; i<u.length; i++) {
		u[i]=pointVirg(u[i].toString());
	}
	let consigne = "Voici les premiers termes d'une suite. Vérifier si elle est géométrique ou non.";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\qquad u_4="+u[4]+"\\)</div>";
	let reponse = question;
	if (dec==10) {
		reponse += "<div class='nombres reponse'>La suite est géométrique de raison \\(q="+pointVirg(q.toString())+"\\).</div>";
	} else {
		reponse += "<div class='nombres reponse'>La suite n'est pas géométrique.</div>";
	}
	return [consigne,question,reponse];	
}

//n-ième terme d'une suite géométrique (avec raison)
function suitGeoTermesR() {
	let decq = randint(0,1);
	let q = decq*genZ(1,19)/10+(1-decq)*genZ(2,10);
	let n = randint(5,8);
	let u = genSuitGeo(genZ(1,99),q,n);
	let consigne = "Voici les premiers termes d'une suite géométrique \\((u_n)\\) de raison \\(q="+pointVirg(q.toString())+"\\). Déterminer la valeur de \\(u_{"+n+"}\\).";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(u_{"+n+"}="+u[n]+"\\)</div>";
	return [consigne,question,reponse];	
}

//n-ième terme d'une suite arithmétique (sans raison)
function suitGeoTermes() {
	let decq = randint(0,1);
	let q = decq*genZ(1,19)/10+(1-decq)*genZ(2,10);
	let n = randint(5,8);
	let u = genSuitGeo(genZ(1,99),q,n);
	let consigne = "Voici les premiers termes d'une suite géométrique \\((u_n)\\). Déterminer la valeur de \\(u_{"+n+"}\\).";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(u_{"+n+"}="+u[n]+"\\)</div>";
	return [consigne,question,reponse];	
}

//Somme des n premiers termes d'une suite arithmétique (avec n-ième terme)
function suitGeoSommeUn() {
	let decq = randint(0,1);
	let q = decq*genZ(1,19)/10+(1-decq)*genZ(2,10);
	let n = randint(5,8);
	let u = genSuitGeo(genZ(1,99),q,n);
	let consigne = "Calculer la somme des "+n+" premiers termes de la suite géométrique définie par :";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad q="+pointVirg(q.toString())+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(S_{"+n+"}="+u[0]+"\\)</div>";
	return [consigne,question,reponse];	
}

//Somme des n premiers termes d'une suite arithmétique (sans raison)
function suitGeoSomme() {
	let decq = randint(0,1);
	let q = decq*genZ(1,19)/10+(1-decq)*genZ(2,10);
	let n = randint(5,8);
	let u = genSuitGeo(genZ(1,99),q,n);
	let consigne = "Calculer la raison \\(q\\) puis la somme des "+n+" premiers termes de la suite géométrique commençant par :";
	let question = "<div class='nombres'>\\(u_1="+u[1]+"\\qquad u_2="+u[2]+"\\qquad u_3="+u[3]+"\\)</div>";
	let reponse = question+"<div class='nombres reponse'>\\(q="+q+"\\qquad S_{"+n+"}="+u[0]+"\\)</div>";
	return [consigne,question,reponse];	
}

//REPERAGE ET VECTEURS
//Coordonnées de points
function lectPts() {
	let pts = [
		[randint(-6,6)/2, randint(-6,6)/2],
		[randint(-6,6)/2, randint(-6,6)/2]
	];
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = graphique([-3.5, 3.5, 3.5, -3.5]);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [pts[0][0],pts[0][1]], cerise),
		B = board.create('point', [pts[1][0],pts[1][1]], cerise);
	let consigne = "Donner les coordonnées des points \\(A\\) et \\(B\\)."
	let reponse = "<div class='grid nombres reponse'>\\(A("+pointVirg(pts[0][0].toString())+";"+pointVirg(pts[0][1].toString())+")\\)<br>\\(B("+pointVirg(pts[1][0].toString())+";"+pointVirg(pts[1][1].toString())+")\\)";
	return [consigne,"",reponse];
}

//Coefficient directeur
function coeffDir() {
	let pts = [
		[randint(0,2), randint(-3,3)],
		[randint(3,5), randint(-3,3)]
	];
	while (pts[1][0] == pts[0][0]) { pts[1][0] = randint(-4,4); }
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = graphique([-1, 3.5, 6, -3.5]);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [pts[0][0],pts[0][1]], cerise),
		B = board.create('point', [pts[1][0],pts[1][1]], cerise),
		d = board.create('line', [A, B], cerise);
	let consigne = "Calculer la pente de la droite \\((AB)\\)."
	let reponse = "<div class='grid nombres reponse'>\\( a="+ pointVirg( (Math.round(((pts[1][1]-pts[0][1])/(pts[1][0]-pts[0][0])*100))/100).toString() ) +" \\)"
	return [consigne,"",reponse];
}

//Coordonnées de vecteurs du plan
function lectVec() {
	let pts = [
		[randint(-4,4), randint(-4,4)],
		[randint(-4,4), randint(-4,4)]
	];
	document.getElementById("question"+idCarte).innerHTML = "<div id='box"+idCarte+"' class='jxgbox'></div>";
	let board = graphique([-5, 5, 5, -5]);
	let cerise = {
			strokeColor: '#901B77',
			fillColor: '#CA147A',
			size: '1'
		},
		A = board.create('point', [pts[0][0],pts[0][1]], cerise),
		B = board.create('point', [pts[1][0],pts[1][1]], cerise);
	var vAB = board.create('line',[[pts[0][0],pts[0][1]], [pts[1][0],pts[1][1]] ],{straightFirst:false, straightLast:false, lastArrow:true});
	let consigne = "Donner les coordonnées du vecteur \\( \\vec{AB} \\).";
	let reponse = "<div class='grid nombres reponse'>\\( \\vec{AB} = \\binom{"+pointVirg((pts[1][0]-pts[0][0]).toString())+"}{"+pointVirg((pts[1][1]-pts[0][1]).toString())+"} \\)";
	return [consigne,"",reponse];
}
