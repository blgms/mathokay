/*CONFIGURATION MATHJAX*/
MathJax = {
  options: {
    renderActions: {
      assistiveMml: [],
    }
  },
};

var slon = 1;
var test;

function slider(sl) {
	if (sl!=slon) {
		let el=document.getElementById("slide"+slon);
		el.hidden=true;
		slon = sl;
		el=document.getElementById("slide"+slon);
		el.hidden=false;
	}
	corps.classList.remove("flou");
	centerScreen.hidden = true;
	defilHaut();
}

/*DÉFILEMENT VERS LE HAUT*/
function defilHaut() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mainMenu() {
	corps.classList.toggle("flou");
	centerScreen.hidden=!centerScreen.hidden;
}

function lanceExp(exp) {
	eval(exp+"()");
	slider(2);
	clearTimeout(test);
}

//REFLEXES
function reflexes() {
	document.getElementById("artExpHead").innerHTML = "Test de réflexes";
	document.getElementById("expConsigne").innerHTML = "<p>Appuyer sur le bouton, puis rappuyer dessus le plus vite possible lorsqu'il redevient actif.</p><p>Noter le temps indiqué, puis répéter l'expérience autant de fois que nécessaire.</p>";
	document.getElementById("expMilieu").innerHTML = "<button id='reflexBtn' onclick='reflexBtn()'><span id='reflex'>Je suis prêt !</span></button><div id='reflexChr'>&nbsp;</div><div id='ti' hidden></div>";
}
function reflexBtn() {
	if (document.getElementById("reflex").innerHTML=="Je suis prêt !") {
		let t = Math.round(Math.random()*4000)+1000;
		document.getElementById("reflex").innerHTML = "Attention...";
		document.getElementById("reflexBtn").disabled = true;
		test = setTimeout(function() {
			document.getElementById("reflexBtn").disabled = false;
			document.getElementById("reflex").innerHTML = "CLIC !";
			document.getElementById("ti").innerHTML = (new Date()).getTime();
		},t);
	} else {
		let ti = document.getElementById("ti").innerHTML;
		let tf = (new Date()).getTime();
		let dt = (tf - ti)/1000;
		document.getElementById("reflexChr").innerHTML = "Il s'est écoulé <b>"+dt+"</b> secondes.";
		document.getElementById("reflex").innerHTML = "Je suis prêt !";
	}
}


//EQUATIONS
function equations() {
	document.getElementById("artExpHead").innerHTML = "Équations";
	document.getElementById("expConsigne").innerHTML = "Sélectionner un type d'équation puis la résoudre.";
	/*document.getElementById("expMilieu").innerHTML = "<div id='btnEquations'><button onclick='equaGen(1)'>ax=b</button><button onclick='equaGen(2)'>ax+b=c</button><button onclick='equaGen(3)'>ax+b=cx+d</button></div><div id='aResoudre'></div><div id='affEquation'>&nbsp;</div><div id='message'>&nbsp;</div><div id='btnsOp'></div>";*/
	document.getElementById("expMilieu").innerHTML = "<div class='grid'><select id='equaType' name='equaType' style='margin: auto;'><option value='1'>ax = b</option><option value='2'>ax + b = c</option><option value='3'>ax + b = cx + d</option></select><button onclick='equaGen(equaType.value)'>Nouvelle équation</button></div><div id='aResoudre'></div><div id='affEquation'>&nbsp;</div><div id='message'>&nbsp;</div><div id='btnsOp'></div>";
}
function equaGen(type) {
	window.nbs = [0,0,0,0];
	let nbs = window.nbs;
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
	document.getElementById("aResoudre").innerHTML = equation;
	document.getElementById("message").innerHTML = "\\( \\, \\)";
	document.getElementById("affEquation").innerHTML = "\\( \\, \\)";
	document.getElementById("btnsOp").innerHTML = "Entrer l'opération à effectuer de chaque côté de l'égalité :<div class='grid'><input type='text' id='operation' name='operation' style='margin-top: 1rem;'></input><button id='btnOp' onclick='equaOp(operation.value)'>Go</button></div>";
	document.getElementById("btnsOp").hidden = false;
	MathJax.startup.defaultReady();
}
function equaOp(op) {
	console.log(nbs);
	let nbsNew = nbs;
	let valid = 1;
	let ops = ["+","-","*","/"];
	if (ops.includes(op[0]) == false) { valid = 0; console.log("pas d'opération"); }
	for (let i in ops) { if (op.slice(1).includes(ops[i]) == true) { valid = 0; console.log("plusieurs opérations"); } }
	if (op.includes(ops[2]) == true || op.includes(ops[3]) == true) {
		if (op.includes("x") == true ) { valid = 0; console.log("opération non valide"); }
		else { valid = 2; }		
	}
	if (op.includes("x") == true && op.endsWith("x") == false) { valid = 0; console.log("opération non valide"); }
	if (valid == 1) {
		if (op.endsWith("x")==true) {op=op.replace("x",""); eval("nbsNew[0]=nbs[0]"+op+"; nbsNew[2]=nbs[2]"+op+";"); }
		else {eval("nbsNew[1]=nbs[1]"+op+"; nbsNew[3]=nbs[3]"+op+";"); }
	} else if (valid ==2) {
		eval("nbsNew=nbs.map(x => x"+op+")");
	} else {
		document.getElementById("message").innerHTML = "Opération non valide.";
	}
	if (valid > 0) {
		document.getElementById("message").innerHTML = "&nbsp;";
		console.log(nbsNew);
		if (nbsNew[0]==1 && nbsNew[1]==0 && nbsNew[2]==0) {
			document.getElementById("message").innerHTML = "Équation résolue !";
			let x = nbs[3]/nbs[0];
			if (!Number.isInteger(x)) {x=chainefrac(simpl(nbs[3],nbs[0]));}
			document.getElementById("affEquation").innerHTML = "<div class='nombres reponse'>\\(x="+x+"\\)</div>";
			document.getElementById("btnsOp").hidden = true;
		} else if (nbsNew[0]==0 && nbsNew[2]==1 && nbsNew[3]==0) {
			document.getElementById("message").innerHTML = "Équation résolue !";
			let x = nbs[1]/nbs[2];
			if (!Number.isInteger(x)) {x=chainefrac(simpl(nbs[1],nbs[2]));}
			document.getElementById("affEquation").innerHTML = "<div class='nombres reponse'>\\(x="+x+"\\)</div>";
			document.getElementById("btnsOp").hidden = true;
		} else {
			nbs = nbsNew;
			document.getElementById("affEquation").innerHTML = equaStr(nbs);
		}
		MathJax.startup.defaultReady();
	}
	document.getElementById("operation").value = "";
}
