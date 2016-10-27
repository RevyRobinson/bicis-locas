function validateForm(){
	//setear varialbes de los input para que sea mas sencillo ocuparlos despues
	var name = document.getElementById('name');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password  = document.getElementById('input-password');

	//validacion
	if ( name.hasAttribute("required") == false) {
		alert("ERROR: El campo NOMBRE es obligatorio.");
		return false;
	} else if (nombre){
		alert("");
		return false;

	} else if ( lastname.hasAttribute("required") == false) {
		alert("ERROR: El campo APELLIDO es obligatorio.");
		return false;
	} else if (apellido) {
		alert("");
		return false;

	} else if ( email.hasAttribute("required") == false) {
		alert("ERROR: El campo CORREO ELECTRÓNICO es obligatorio.");
		return false;
	} else if (email){
		alert("");
		return false;

	} else if ( password.hasAttribute("required") == false) {
		alert("ERROR: El campo CONTRASEÑA es obligatorio.");
		return false;
	} else if (pass mayor a 6 caracteres) {
		alert("");
		return false;

	}  else if (pass sin palabras establecidas){
		alert("");
		return false;

	} else if (bicis){
		alert("");
		return false;
	}

	return true;
}