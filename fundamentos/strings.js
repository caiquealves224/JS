const escola = "Cod3rr";

console.log(escola.charAt(1));
// "o"

console.log(escola.charCodeAt(1));
// 111

console.log(escola.indexOf("C"));
// 3

console.log(escola.substring(2));
// d3rr

console.log(escola.replace(3,'e'));
// coderr

console.log("Escola " + escola + "!");
console.log("Escola ".concat(escola).concat("!"));
// Escola Coderr!

console.log("Ana,Maria,Pedro".split(","));
// [ 'Ana', 'Maria', 'Pedro' ]

