function buscador() {
	var buscar = document.getElementById('buscar').value;
	var buscarfull = "https://es.wikipedia.org/wiki/".concat("",buscar);
	window.open(buscarfull)
}

function login() {
	var contraseña=document.getElementById("contraseña").value;
	if (contraseña=="Inventos0"){
		window.location.href="./asignaturas.html"
	}
}

function lengua(){
	window.location.href="./lengua.html"
}
function matematicas(){
	window.location.href="./matematicas.html"
}
function inglés(){
	window.location.href="./inglés.html"
}
function fyq(){
	window.location.href="./fyq.html"
}
function byg(){
	window.location.href="./byg.html"
}

function gyh(){
	window.location.href="./gyh.html"
}
function educacionfisica(){
	window.location.href="./educacionfisica.html"
}
function arts(){
	window.location.href="./arts.html"
}
function dibujotecnico(){
	window.location.href="./dibujotecnico.html"
}
function religion(){
	window.location.href="./religion.html"
}
function dual(){
	window.location.href="./dual.html"
}
function mas(){
	window.location.href="./mas.html"
}
function asignaturas(){
	window.location.href="./asignaturas.html"
}
function myFunction() {
  var x = document.getElementById("contraseña");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}