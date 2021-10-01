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
	let mains = document.getElementsByTagName("main");
	let html = "<!doctype html><html lang='fr'><head><style>";
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
	console.log(css);
	html += css+"</style></head><body><header>POUET</header><main class='container pad6'>"+mains[0].innerHTML+"</main></body></html>";
	download("hello.html",html);
}
