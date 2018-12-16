Array.prototype.map2 = function(callback){
    let novo = [];
    for(i = 0; i< this.length ;i++){

        novo[i] = callback(this[i],i,this);
        
    }
    return novo;
}

const carrinho = [
    '{"nome": "borracha" , "preco": 3.45}',
    '{"nome": "caderno" , "preco": 13.90}',
    '{"nome": "kit de lapis" , "preco": 41.22}',
    '{"nome": "Caneta" , "preco": 7.50}',
]

const precos = carrinho.map(
    function(e){
        json = JSON.parse(e);
        return json.preco;
    }
);

console.log(precos);

precos2 = carrinho.map2(e=>JSON.parse(e)).map2(e=>e.preco);

console.log(precos2)
