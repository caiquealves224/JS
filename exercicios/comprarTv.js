let trabalho1;
let trabalho2;
let saudavel = true;

if (trabalho1 && trabalho2) {
    console.log("Comprar TV de 52'");
    saudavel = false;
} else if (trabalho1 || trabalho2) {
    console.log("Comprar TV de 38'");
    saudavel = false
} else {
    console.log("Ficar em casa");
}

console.log(saudavel);

function fazerCompras(trabalho1, trabalho2) {
    const serSaudavel = trabalho1 || trabalho2;
    const comprarTv52 = trabalho1 && trabalho2;
    const comprarTv30 = trabalho1 != trabalho2;
    const manterSaudavel = !serSaudavel;

    console.log(serSaudavel);
}
