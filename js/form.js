
var form = document.getElementById('form');
form.style.marginLeft ="20px"

form[0].value = 'primer nombre' 


var nombre = document.getElementById('fname')
nombre.addEventListener("change", funcionClick)

function funcionClick (){
    console.log("ingresando datos")
}
document.getElementById("nombre").addEventListener("oninput", mostrarAlert);

function mostrarAlert(){
	console.log('Escribiste algo');
}


// document.getElementById("nombre").addEventListener("change", mostrarAlert);

// function mostrarAlert(){
// 	alert('Escribiste algo');
// }
