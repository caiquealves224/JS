//console.log(typeof Object);// classe/Objeto é uma função no javascript 


class Produto{

}

Prod = new Produto;

//console.log(typeof Prod);


function Obj(nome){
    this.nome = nome;
    function somar(){
        return 1 + 1;
    }
}

class Movel{
    constructor(nome){
        this.nome = nome;
    }

    
}

const objeto = new Obj("mesa");
const objeto1 = new Movel("cadeira");

console.log(objeto.nome)
console.log(objeto1.nome)