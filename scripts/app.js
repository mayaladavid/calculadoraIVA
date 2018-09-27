/*var titulos=document.getElementsByTagName('h1');
console.log(titulos);*/
/*function cambiar_mensaje() {
	var textos_rojos=document.getElementsByClassName('rojo');
	//console.log(textos_rojos[1].textContent);
	textos_rojos[1].textContent="Grupo 175";
}*/


/*var fecha=document.getElementById("fecha");
console.log(fecha);*/
function calcular_iva(){
	var precio=parseInt(document.getElementById("precio").value);
	var resultado=precio*0.19;
	var span_resultado=document.getElementById("resultado");
	span_resultado.textContent=resultado;
}