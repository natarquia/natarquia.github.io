function loadContent(id) {
	var content;
	switch(id) {
		case 0: content = "apps.html"; break;
		case 1: content = "musica.html"; break;
		case 2: content = "artegrafica.html"; break;
		case 3: content = "contato.html"; break;
	}
	document.getElementById("content").innerHTML = '<object type="text/html" data="' + content + '" class="corpo"/>';
}