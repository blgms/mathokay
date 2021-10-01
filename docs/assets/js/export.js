function download(filename,text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function getCss() {
	let css = "";
	fetch("docs/assets/css/custom.css")
	.then(function(response) {
		return response.text();
	})
	.then(function(data) {
		await css = data;
	});
	return css;
}

function exportHtml() {
	let headers = document.getElementsByTagName("header");
	let mains = document.getElementsByTagName("main");
	let html = "<!doctype html><html lang='fr'><head><style>";
	let css = getCss();
	console.log(css);
	html += css+"</style></head><body><header>"+headers[0].innerHTML+"</header><main class='container pad6'>"+mains[0].innerHTML+"</main></body></html>";
	download("hello.html",html);
}
