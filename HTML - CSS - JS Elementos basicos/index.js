/* JAVASCRIPT 
    es el lenguage mas usado del mundo, con mas 
    de un 1.4 millones de librerias en 2021 no cabe
    duda que JS a moldeado la forma en la interactuamos con la web.
*/


//DATA TYPES

/* las data types permiten permiten a javascript el entender entender 
   como debe interactuar con los elementos que vamos colocando en
   nuestras variables */


var string = "string";   //string
var numero = 5;          //Number 
var booleano = true;     //boolean
var nulo = null;         //null
var indefinido;          //undefined   
var objecto = {};         //object    
console.log(typeof(string));
console.log(typeof(numero));
console.log(typeof(booleano));
console.log(typeof(nulo));
console.log(typeof(indefinido));
console.log(typeof(objecto));

// javascript evalua las condiciones de izquierda a derecha
console.log(string + numero);
console.log(numero + numero + numero + string);
console.log(numero + numero  + string + numero); 



//OPERATORS

/* 
Aritmetica

+ operador de suma
- operador de resta
* operador de multiplicacion
/ operador de division

Agrupamiento

() operador de agrupamiento, ejecuta primero lo que este ebtre los parentesis

Concatenacion

+ operador de concatenacion, es el mismo elemento de operador de suma, pero usado con el data type string


*/

//VARIABLES

/* en javascript una varible almacena informacion que puede ser cambiada 
   y usada posteriormente, esta usa la palabra reservada
   var, let, const
   https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/ <--INGLES

  - las variables VAR son de scope Global o de funcion, pueden ser actualizadas, re-declaradas dentro del scope y puede ser declarada sin ser Inicializada.
  - las variables LET estan bloqueadas al scope de donde son declaradas, no pueden re-declaradas y pueden ser declaradas sin ser inicializada.
  - las variables CONST estan bloqueadas al scope donde son declararas, no pueden ser re-declaradas ni actualizadas.  
*/

//CONDICIONALES

/* Los condicionales nos permiten 
   controlar el comportamiento de nuestro codigo y
   poder decidir ejecutar solo partes de nuestro codigo
   cuando ciertas condiciones se cumplan. */

   //if
   /* if evalua una condicion entre sus parentesis, el resultado de esa evaluacion
      siempre devuelve un resultado true o false, si el resultado en true if ejecutara
      el codigo entre los {}   */

   if (condition) //condicion a evaluar
   {
       //codigo que se ejecuta si el resultado de la evaluacion es true
   }

   //else
   /* si el resultado de la evaluacion realizada por if es false, 
      podemos pedirle que ejecute un bloque de codigo usando la palabra else */
    
   if (condition) //condicion a evaluar
   { 
     //codigo que se ejecuta si el resultado de la evaluacion es true  
   } else {
     //codigo que se ejecuta si el resultado de la evaluacion es false
   }
   
   //if else
   /* si el resultado de la evaluacion realizada por if es false, 
      y necesitamos que hacer una nueva evaluacion podemos usar else if */
    
   if (condition) //condicion a evaluar
   { 
     //codigo que se ejecuta si el resultado de la evaluacion es true  
   } else if (condition){ //si la primera evaluacion es false podemos realizar una nueva evaluacion
     //codigo que se ejecuta si el resultado de la evaluacion es false
   } 
   
   







