//função "arrow function" com return implícito

const func = () => 2+2;


//função com retorno

function comRetorno(num1, num2 ){
    return (`${num1} + ${num2} = ${num1+num2}`);
}


//função sem retorno

function semRetorno(num1, num2 ){
    `${num1} + ${num2} = ${num1+num2}`;
}


console.log(func());
console.log(comRetorno(2,3));
console.log(semRetorno(2,3));