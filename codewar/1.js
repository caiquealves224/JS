function divisors(integer) {
    let divisores = [];

    for(let i = 2; i<integer ; i++){

        if (integer%i == 0){
            divisores.push(i)
        } 
    }
    return divisores.length ? divisores : `${integer} is prime` ;
};