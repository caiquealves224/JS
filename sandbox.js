Array.prototype.map2 = function(callback){
    let novo = [];
    for(i = 0; i< this.length ;i++){

        novo[i] = callback(this[i],i,this);
        
    }
    return novo;
}

const carrinho = [
    {"nome": "borracha" , "preco": 553.45 , "fragil":true},
    {"nome": "caderno" , "preco": 1113.90, "fragil":"true"},
    {"nome": "kit de lapis" , "preco": 41.22, "fragil":"true"},
    {"nome": "Caneta" , "preco": 7.50},
]

// const precos = carrinho.map(
//     function(e){
//         json = JSON.parse(e);
//         return json.preco;
//     }
// );
// precos2 = carrinho.map2(e=>JSON.parse(e)).map2(e=>e.preco);

Array.prototype.filter2 = function (callback){
    const novo = [];
    for(i = 0; i < this.length ; i++){
        
        callback(this[i],i,this)? novo.push(this[i]) : false ;
    }
    return novo
};

let teste = carrinho.filter2(e=>e.preco > 10).filter2(e=>e.fragil);

console.log(teste)