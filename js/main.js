function validateForm(){
	//setear varialbes de los input para que sea mas sencillo ocuparlos despues
	var name = document.getElementById('name').value;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var password  = document.getElementById('input-password').value;

	//validacion
	if (name.length == 0) {
		alert("ERROR: El campo NOMBRE es obligatorio.");
		return false;
	} else if ( lastname.length == 0) {
		alert("ERROR: El campo APELLIDO es obligatorio.");
		return false;
	} else if ( email.length == 0) {
		alert("ERROR: El campo CORREO ELECTRÓNICO es obligatorio.");
		return false;
	} else if ( password.length == 0) {
		alert("ERROR: El campo CONTRASEÑA es obligatorio.");
		return false;
	} 
		if (!/^[a-zA-Z]+$/i.test(name.value)){
		alert("El nombre debe contener solo letras");
		return false;

	}  else if (!/^[a-z]/.test(name.value)) {
		alert("La primera letra del nombre debe ser mayuscula");
		return false;

	}	else if (!/^[a-zA-Z]+$/i.test(lastname.value)){
		alert("El apellido debe contener solo letras");
		return false;

	}  else if (!/^[a-z]/.test(lastname.value)) {
		alert("La primera letra del apellido debe ser mayuscula");
		return false;
		
	} /*else if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value){
		alert("");
		return false;

	} 
	else if (pass mayor a 6 caracteres) {
		alert("");
		return false;

	}  else if (pass sin palabras establecidas){
		alert("");
		return false;

	} else if (bicis){
		alert("");
		return false;
	}*/

	return true;
}



