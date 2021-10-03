function download(filename,text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

async function exportHtml() {
	let jsExp = "<script type='text/javascript'>var slon = 2;function slider(sl) {if (sl!=slon) {document.getElementById('slide'+slon).hidden=true;document.getElementById('btn'+slon).hidden=true;slon = sl;document.getElementById('slide'+slon).hidden=false;document.getElementById('btn'+slon).hidden=false;}}</script>";
	jsExp += "<script src='https://polyfill.io/v3/polyfill.min.js?features=es6'></script><script id='MathJax-script' async src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'></script>";
	let date = [new Date()];
	date.push(date[0].getDate(), date[0].getMonth()+1, date[0].getFullYear());
	let tempDiv = document.createElement('div');
	tempDiv.setAttribute('id','tempDiv');
	tempDiv.style.display = 'none';
	tempDiv.innerHTML = document.getElementById("corps").innerHTML;
	let elSupp = tempDiv.getElementsByClassName("katex-html");
	while(elSupp[0]) {
		elSupp[0].remove();
	}
	document.body.appendChild(tempDiv);
	let css = "";
	await fetch("https://blgms.github.io/mathokay/docs/assets/css/pico.min.css")
	.then(function(response) {
		return response.text();
	})
	.then(function(data) {
		css += data;
	});
	await fetch("https://blgms.github.io/mathokay/docs/assets/css/custom.css")
	.then(function(response) {
		return response.text();
	})
	.then(function(data) {
		css += data;
	});
	let html = "<!doctype html><html lang='fr'><head>"+jsExp+"<style>"+css+"</style></head><body><header><nav class='container-fluid'><ul><li id='liLogo'><div id='divLogo'><hgroup><h4>Math'Okay</h4><h5>Séance du "+date[1]+"/"+date[2]+"/"+date[3]+"</h5></hgroup></div></li></ul><ul><li id='btn3' hidden><button style='width:7rem;' onclick='slider(2)'>Questions</button></li><li id='btn2'><button style='width:7rem;' onclick='slider(3)'>Réponses</button></li></ul></nav></header><main class='container pad6'>"+tempDiv.innerHTML+"</main></body></html>";
	download("Automatismes-"+date[1]+"-"+date[2]+"-"+date[3]+".html",html);
	document.body.removeChild(tempDiv);
}
