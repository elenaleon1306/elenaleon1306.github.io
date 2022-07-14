function entrar() {
	var nusuario=document.getElementById('uname').value;
	var contraseña=document.getElementById('psw').value;
	if (nusuario== "elenaleon" && contraseña=="Inventos0"){
	 	window.open("./index1.html");
	}
	else{
		window.alert("Tu contraseña es incorrecta");
	}
}
function myFunction() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}