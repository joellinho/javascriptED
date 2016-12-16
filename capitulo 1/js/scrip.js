//alert("estoy programando");
// el ; se pone despues d eun objeto literal  o de una variable de funcion



// si definimos una variable sin la palabra reservada var 
//dicha variable se escapa de su scope (alcance) la vuelve global
// no es una buena práctica crear variables globales
(function saludar(){
	var saludo = "saludo dentro de una funcion";
	alert(saludo);
}());
// encerrar una funcion entre (function{})(); la vuelve autoejecutable


//tipos de datos Primitivos {
//	primarios(number ,String,Boolean ) 
//el number no diferencia de int y double
//para poder escapar caracteres como ' o " se intercalan os e agrega \
//
//	especiales(null,undefined,NAN)
//   }


/*
en los tipos booleanos (true |false)
existe balores (truthy values ={ NaN,0,"",null,undefinded} )
				(falsy values ={ todo los demas que tengan algo })


*/


//tipos de datos Especiales {
// Array 
// Object	
//}
 
 //javascript intenta acomodar los tipos de datos para 
 //relizar operaciones con cadenas y enteros



/**
-en las variables y operadores funcionan al igual que todo lenguaje
excepto por el operador === (indica igualdad de valor y de tipo)
-el operador + an caso de 2 varaibles String e number ,si se suman se puede 
interpretar como una suma de String en caso de operadores numericos
los interpreta como numeros a excepcion de la +

/











var miObjeto = { 
	nombre :"telefono" 
};


var despedirse = function(){
	var saludo = "buenos dias";
	console.log(saludo);
};


var nombre ="joel enciso";

//alert(nombre);
