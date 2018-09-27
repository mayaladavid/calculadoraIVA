console.log("Hola Mundo");/*imprime informacion por consola*/

var Numero1=52.5;/*flotantes para definir una variable debo usar la palabra reservda var*/
var Numero2=50;/*numerico*/
console.log(Numero1);
console.log(Numero1+Numero2);

var nombre='Manuel'; /*cadena de texto con comilla sencilla*/
var apellido="Ayala";/*cadena de texto  con comilla doble*/

console.log(nombre);
console.log(apellido);

var tiene_mascota=true;
	tiene_mascota=false;

var frutas=['manzana','pera','lulo',25,true];/*arreglos inician en 0 cero*/
console.log(frutas[3]);

var persona={ /*objetos: coleccion de datos que se identifican por proopiedades y no por numeros*/
	nombre:"Juan",
	edad:26,
	tiene_mascota:true,
	mascota:{raza:'Dalmata',
			 nombre:'Bigotes'
			}
};
console.log(persona['nombre']);
console.log(persona.nombre);
console.log(persona.mascota.raza);

var fecha=new Date();/*Wed Sep 26 2018 19:00:29 GMT-0500 (hora estándar de Colombia)*/
console.log(fecha);

/*operadores logicos y, o , negacion*/
console.log(true && false);/*and*/
console.log(true && true);
console.log(true || false);/*or*/
console.log(false || false);
console.log(!false);/*negacion de falso*/
console.log(!true);/*negacion de verdadero*/

console.log(5%4);/*modulo o residuo de una division*/

console.log(6<3);//menor que (respuesta true o false)
console.log(6>3);//mayor que
console.log(6>=6);//mayor o igual
console.log(6==6);//igualdad
console.log(6!=6);//diferencia

var edad=17;
console.log('edad '+edad);
if (edad>=18) {
	console.log('Eres mayor de edad');
}
else{
	console.log('Eres menor de edad');
}
var dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
for (var i = 0;i<7; i++) {
	console.log(dias[i]);
	if (i==4) {
		break;//rompe el ciclo cuando llega al sabado
	}
}

/*funcion: bloque de codigo que uso muchas veces*/
function suma (n1,n2){
 var res=n1+n2;
 return res;
}

alert(suma(5,4));//invoca la funcion y le paso los parametros

function iva (valor){
 var res=valor*0.19;
 return res;
}
console.log(iva(10000));
alert('iva '+iva(5000));


