class Carro {
    constructor(){
        this.marca ="dasd";
    }
    
}

uno = new Carro;

function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto : preco/2 ,
        falar : oq =>  {
            console.log('falando ' + oq);
        }
    }
}

function criarProduto2(nome, preco){
    this.nome = nome
    this.preco = preco

    this.falar = falar=> {
        console.log('falando ' + falar);
    }
}

produto1 = criarProduto("Carro",27.000);

produto2 = new criarProduto2("Lamborga","um milão")

produto1.falar("oi")
produto2.falar("tchau")