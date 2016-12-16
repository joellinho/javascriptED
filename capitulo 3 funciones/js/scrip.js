(function mifunction(){
	console.log("yo son una funcion autoejecutable");

})();

function saludar(nombre){
	console.log('hola '+nombre);
	console.log(arguments); //objeto  que encapsula todos los argumentos 
}

saludar("javier");

//el objeto argument permite poder definir n argumentos y los guarda en una matriz

function sumar(){
	var suma=0;
    var  l= arguments.length;
    var i = 0;
	while(i<l){
		suma += arguments[i]; //recorremos el array de arguments
		i++;
	}
	return suma;//no puede ir nada despues del return (culmina la funcion como java)
}

var misuma =sumar(2,3);
console.log(misuma);

/*
 funciones:
 por nombre:
 	nombradas
 	anonimas
 por construccion:
 	por declaracion   (elevadas)
 	por expresion (no son elevadas)



*/


function restar(a,b){//nombrada
	return a-b;
}

var sumar =function(a,b){ //funcion anonima ..le asiganomos a una variable 

	return a+b;
}
//aun no puedo pasarle parametro
//console.log(sumar);//

var sumar2 =(function(a,b){ //con los paraentecis ()(); la hacemos autoejecutables

	return a+b;
})(4,5);// aqui mismo podemos pasarle parametros


//por construccion

// declaracion
function mifunctions(a,b){
	return a-b;
}

//por expresion
var mostrar =function(){ //funcion anonima ..le asiganomos a una variable 

	console.log('test');
}

mostrar();//llamamis a la variable funcion

/*

existen 2 tiempos en la interpretacion del archivo javascript
primer tiempo se cargan todas las variables menos su valor
el segundo es la ejecucion 
en el caso de las funciones por declaracion si existe una llamada a una funcion que
se definio despues la puede ejecutar creando conflicto eje:

saludar();    -----> ejecuta la funcion que tdavia no se a definido en esta linea
function saludar(){
	console.log('test');
}


se recomienda usar las funciones por expresion
saludar();    ---> no hay hositing por que se carga la variable saludar pero no su valor
var saludar = function(){
	console.log('test');
}

*/


