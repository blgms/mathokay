/*VARIABLES*/
var groupes = ["Nombres", "Calcul Mental", "Unités", "Proportionnalité", "Fractions", "Équations du 1er degré"];

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
	{"act": false, "Gpe": 4, "Diff": 1,  "fonc": "fracsimp(3)", "nom": "Simplification"},
	{"act": false, "Gpe": 4, "Diff": 2,  "fonc": "fraccalc(3)", "nom": "Calculs"},
	{"act": false, "Gpe": 5, "Diff": 1,  "fonc": "equa1d(1)", "nom": "Type <i>ax = d</i>"},
	{"act": false, "Gpe": 5, "Diff": 2,  "fonc": "equa1d(2)", "nom": "Type <i>ax + b = d</i>"},
	{"act": false, "Gpe": 5, "Diff": 2,  "fonc": "equa1d(3)", "nom": "Type <i>ax + b = cx + d</i>"},
];

/*VARIABLES*/
var chainex = "<span style='font-size:6vmin;font-family:Times'><i>x</i></span>";

/*NOMBRES*/
/*ARRONDIS DE DECIMAUX*/
function arrondis() {
	let arr = ["à l'unité","au dixième","au centième","au millième"];
	let narr = Math.floor(Math.random()*4);
	let question = "Arrondir <b>"+arr[narr]+"</b>.<div class='nombres grid'>";
	let reponse = "<div class='nombres grid'>";
	for (let j=1;j<4;j++) {
		let num = Math.floor(Math.random()*100000);
		let rep = (Math.round(num/(10**(4-narr))))/(10**narr);
		num = (num/10000);
		question += "<div>"+j+")&nbsp;"+num+"</div>";
		reponse += "<div>"+j+")&nbsp;"+num+"&nbsp;&#8771;&nbsp;"+rep+"</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [question,reponse];
}

/* PASSER EN ECRITURE SCIENTIFIQUE*/
function scienti() {
	let question = "Convertir en écriture scientifique :<div class='grid nombres'>";
	let reponse = "<div class='grid nombres'>";
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
		question += "<div>"+j+")&nbsp;"+numch+"</div>";
		reponse += "<div>"+j+")&nbsp;"+numch+"&nbsp;=&nbsp;"+nb+"×10<sup>"+puis+"</sup></div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [question,reponse];
}

/* PASSER EN ECRITURE DECIMALE*/
function scientideci() {
	let question = "Convertir en écriture décimale :<div class='grid nombres'>";
	let reponse = "<div class='grid nombres'>";
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
		question += "<div>"+j+")&nbsp;"+nb+"×10<sup>"+puis+"</sup></div>";
		reponse += "<div>"+j+")&nbsp;"+nb+"×10<sup>" + puis + "</sup>&nbsp;=&nbsp;" + numch + "</div>";
	}
	question += "</div>";
	return [question,reponse];
}

/*CALCUL MENTAL*/
/*TABLES DE MULTIPLICATION*/
function tablesmulti() {
	let question = "Calculer de tête : <div class='grid nombres'>";
	let reponse = "<div class='grid nombres'";
	for (let j=1;j<4;j++) {
		let n1 = Math.ceil(Math.random()*10);
		let n2 = Math.ceil(Math.random()*10);
		let quest = n1 + " × " + n2;
		let rep = n1*n2;
		question += "<div>"+j+")&nbsp;"+quest+"</div>";
		reponse += "<div>"+j+")&nbsp;"+quest+"</td><td>&nbsp;=&nbsp;"+rep+"</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [question,reponse];
}

/*PUISSANCES DE 10 - UTILISE DES FRACTIONS*/
function puiss10() {
	let question = "Calculer de tête : <div class='grid nombres'>";
	let reponse = "<div class='grid nombres'>";
	for (let j=1;j<4;j++) {
		let num = Math.floor(Math.random()*1000);
		let coeff = 10**Math.ceil(Math.random()*3);
		let op = Math.round(Math.random());
		let quest,rep;
		if (op==0) {
			quest = chainefrac([num,coeff]);
			rep = num/coeff;
		} else {
			quest = num+" × "+coeff;
			rep = num*coeff;
		}
		question += "<div>"+j+")&nbsp;"+quest+"</div>";
		reponse += "<div>"+j+")&nbsp;"+quest+"&nbsp;=&nbsp;"+rep+"</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [question,reponse];
}

/*UNITES*/
/*CONVERSION UNITES*/
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
			{ "grandeur":"m²", "div":["k","h","da","","d","c","m"], "facteur":2 },
			{ "grandeur":"m³", "div":["","d","c","m"], "facteur":3 }
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
	let question = "<div>Convertir "+nbdep+" "+udep+" en "+uarr+".</div>", reponse = "<div>"+nbdep+" "+udep+" = "+rep+" "+uarr+"</div>";
	return [question,reponse];
}

/*CONVERSION UNITES DE DUREE*/
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
	let question = "<div>Convertir en utilisant les unités standard de durée : " + temps + " " + grand.unites[nudep] + ".</div>";
	let reponse = "<div>"+temps + " " + grand.unites[nudep] + " = " + tempsrep.toString().replace(/,/g, " ")+"</div>";
	return [question,reponse];
}

/*PROPORTIONNALITE*/
/*TABLEAUX DE PROPORTIONNALITE*/
function tabprop() {
	let prop = ["C'est un tableau de proportionnalité.","Ce n'est <b>pas</b> un tableau de proportionnalité."];
	let on = Math.floor(Math.random()*2);
	let ouinon = "<div>"+prop[on]+"</div>";
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
		nbs[i] = nbs[i].toString();
	}
	let tableau = "<table role='grid'><tr><th>Grandeur A</th><td>"+nbs[0]+"</td><td>"+nbs[1]+"</td><td>"+nbs[2]+"</td></tr><tr><th>Grandeur B</th><td>"+nbs[3]+"</td><td>"+nbs[4]+"</td><td>"+nbs[5]+"</td></tr></table>"
	let reponse = tableau+ouinon;
	let question = "<div>Indiquer si le tableau suivant est un tableau de proportionnalité.</div>"+tableau;
	return [question,reponse];
}

/*QUATRIEME PROPORTIONNELLE*/
function quatprop() {
	let quellevaleur = Math.floor(Math.random()*4);
	let nba = Math.floor(Math.random()*90+1);
	let nbb = Math.floor(Math.random()*100+1);
	let coeff = (Math.floor(Math.random()*9+2));
	let nbc = nba*coeff;
	let nbd = nbb*coeff;
	let nbs = [nba.toString(), nbb.toString(), nbc.toString(), nbd.toString()];
	let reponse = chainex+"<span> = "+nbs[quellevaleur]+"</span>";
	nbs[quellevaleur] = chainex;
	let question = "<div>Retrouver la valeur manquante dans le tableau de proportionnalité suivant.</div><table role='grid'><tr><th>Grandeur A</th><td>"+nbs[0]+"</td><td>"+nbs[1]+"</td></tr><tr><th>Grandeur B</th><td>"+nbs[2]+"</td><td>"+nbs[3]+"</td></tr></table>";
	return [question,reponse];
}

/*FRACTIONS - A CORRIGER (défaut affichage)*/
/*SIMPLIFICATION FRACTIONS*/
function fracsimp() {
	let question = "<p>Si c'est possible, simplifier :<div class='grid nombres'>";
	let reponse = "<div class='grid nombres'>";
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
		question += "<div>"+frac+"</div>";
		reponse += "<div>"+frac+"&nbsp;=&nbsp;"+resultat+"</div>";
	}
	question += "</div>";
	reponse += "</div>";
	return [question,reponse];
}

/*CALCULS FRACTIONS*/
function fraccalc(n) {
	let question = "Calculer :<div class='grid'>";
	let reponse = "<table><tr>";
	for (let j=0;j<n;j++) {
		let nbs = [];
		for (let i=0;i<4;i++) {
			nbs[i]=Math.ceil(Math.random()*10);
		}
		/*choix aléatoire de l'opération*/
		let ops = ["+","-","×","÷"];
		let nbop = Math.floor(Math.random()*4);
		let op = ops[nbop];
		/*calcul du dénominateur du résultat*/
		let den = [ppcm(nbs[1],nbs[3]) , ppcm(nbs[1],nbs[3]) , nbs[1]*nbs[3], nbs[1]*nbs[2]];
		/*calcul du numérateur du résultat*/
		let num = [nbs[0]*den[nbop]/nbs[1]+nbs[2]*den[nbop]/nbs[3] , nbs[0]*den[nbop]/nbs[1]-nbs[2]*den[nbop]/nbs[3] , nbs[0]*nbs[2] , nbs[0]*nbs[3]];
		/*simplification de la fraction résultat*/
		let fracres = simpl(num[nbop],den[nbop]);
		/*création des chaînes*/
		let calcul = "<table><tr><td>"+chainefrac([nbs[0],nbs[1]])+"</td><td>&nbsp;"+op+"&nbsp;</td><td>"+chainefrac([nbs[2],nbs[3]])+"</td></tr></table>";
		let resultat = chainefrac(fracres);
		question += "<td>"+calcul+"</td>";
		reponse += "<td><table><tr><td>"+resultat+"</td></tr></table></td>";
		if (j<n-1) {
			question += "<td>;</td>";
			reponse += "<td>;</td>";
		}
	}
	question += "</tr></table>";
	reponse += "</tr></table>";
	return [question,reponse];
}

/*EQUATIONS DU 1ER DEGRE*/
function equa1d(type) {
	let consigne = "<p>Résoudre l'équation suivante :</p><p>";
	let equation;
	let bonnerep;
	let nbs = [0,0,0,0];
	while (nbs[0] == nbs[2] || nbs[1] == nbs[3] || nbs[0] == 0 || nbs[0] == 1) {
		nbs[0] = Math.floor(Math.random()*20-9);
		nbs[3] = Math.floor(Math.random()*20-9);
		if (nbs[0] == 1) {
			equation = consigne+chainex;
		} else if (nbs[0] == -1) {
			equation = consigne+"-"+chainex;
		} else {
			equation = consigne+nbs[0]+chainex;
		}
		if (type > 1) {
			while (nbs[1] == 0) {
				nbs[1] = Math.floor(Math.random()*20-9);
				if (nbs[1] < 0) {
					var signeb = "&nbsp;-";
				} else {
					var signeb = "&nbsp;+";
				}
				var absb = Math.abs(nbs[1]);
			}
			equation += signeb+"&nbsp;"+absb;
		}
		equation += "&nbsp;=&nbsp;";
		if (type > 2) {
			while (nbs[2] == 0) {
				nbs[2] = Math.floor(Math.random()*20-9);
			}
			if (nbs[2] == 1) {
				equation += chainex;
			} else if (nbs[2] == -1) {
				equation += "-"+chainex;
			} else {
				equation += nbs[2]+chainex;
			}
		}
		if (nbs[2] != 0) {
			if (nbs[3] < 0) {
				var absd = Math.abs(nbs[3]);
				equation += "&nbsp;-&nbsp;"+absd;
			} else if (nbs[3] > 0) {
				equation += "&nbsp;+&nbsp;"+nbs[3];
			}
		}
		if (nbs[2] == 0) {
			equation += nbs[3];
		}
	}
	bonnerep = (nbs[3]-nbs[1])/(nbs[0]-nbs[2]);
	if (!Number.isInteger(bonnerep)) {
		let frac = [nbs[3]-nbs[1],nbs[0]-nbs[2]];
		frac = simpl(Math.abs(nbs[3]-nbs[1]),Math.abs(nbs[0]-nbs[2]));
		bonnerep = chainefrac(frac);
	}
	let reponse = chainex+"&nbsp;=&nbsp;"+bonnerep;
	equation += "</p>";
	return [equation,reponse];
}





/*FONCTIONS ANNEXES*/
/*SIMPLIFIER UNE FRACTION*/
function simpl(a,b) {
	let s = pgcd(a,b);
	return [a/s,b/s];
}

/*TRANSFORMER DEUX NOMBRES EN UNE CHAINE FRACTION*/
/*function chainefrac(array) {
	let chaine = "<table><tr>";
	if (array[0]/array[1] < 0) {
		chaine += "<td>-&nbsp;</td>";
	}
	let absnum = Math.abs(array[0]);
	let absden = Math.abs(array[1]);
	chaine += "<td><table><tr><td>"+absnum+"</td></tr>";
	if (absden!=1) {
		chaine += "<tr><td>"+absden+"</td></tr>";
	}
	chaine += "</table></td></tr></table>";
	return chaine;
}*/
function chainefrac(array) {
	let absnum = Math.abs(array[0]);
	let absden = Math.abs(array[1]);
	let chaine = "<span class='fraction'><span class='numerateur'>";
	if (array[0]/array[1] < 0) {
		chaine += "-&nbsp;";
	}
	chaine += absnum+"</span><span class='denominateur'>"+absden+"</span></span>";
	return chaine;
}

/*CALCUL DE PGCD*/
function pgcd(a,b) {
	if (!b) {
		return a;
	}
	return pgcd(b,a%b);
}

/*CALCUL DE PPCM*/
function ppcm(a,b) {
	let p = pgcd(a,b);
	return a*b/p;
}

/*CONVERTIR NOMBRE EN NOMBRE TABLEAU*/
function nbarray(nb,long) {
	let nbstr = nb.toString();
	let nbchiffres = nbstr.length;
	let array = nbstr.split("");
	for (let i=0;i<=long-nbchiffres;i++) {
		array.unshift("0");
	}
	return array;
}

/*CONVERTIR NOMBRE TABLEAU EN NOMBRE CHAINE AVEC dec DECIMALES*/
function arraynb(array,dec) {
	let long = array.length;
	for (let i=0;i<long;i++) {
		if (array[i]==0) {
			array.splice(i,1);
		} else {
			break;
		}
	}
	long = array.length;
	let nb = "";
	for (let i=0;i<long-dec;i++) {
		nb += array[i];
	}
	nb += ",";
	for (let i=long-dec;i<long;i++) {
		nb += array[i];
	}
	return nb;		
}
