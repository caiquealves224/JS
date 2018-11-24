// Booleanos são valores que só podem receber verdadeiro ou falso

let validacao = true;

console.log(validacao);

validacao = false;

console.log(validacao);

/* 
* Valores quer mesmo não sendo 'True' ou 'False'
* retornam como true 
*/

console.log("Os Verdadeiros...");
console.log(!!3);
console.log(!!-3);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(validacao =  true)+"\n");

/* 
* Valores quer mesmo não sendo 'True' ou 'False'
* retornam como false 
*/
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(validacao = false));