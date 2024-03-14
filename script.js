function animarElementos() {
	var destacadas = document.getElementById("destacadas");
	var explorar = document.getElementById("explorar");
	var unirse = document.getElementById("unirse");

	if (elementoEnPantalla(destacadas)) {
		destacadas.classList.add("mostrar");
	}
	if (elementoEnPantalla(explorar)) {
		explorar.classList.add("mostrar");
	}
	if (elementoEnPantalla(unirse)) {
		unirse.classList.add("mostrar");
	}
}

// Ejecutar la función de animación al cargar la página y al hacer scroll
window.addEventListener("load", animarElementos);
window.addEventListener("scroll", animarElementos);
