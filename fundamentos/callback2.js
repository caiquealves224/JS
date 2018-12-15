let notas = [2.5,4,5,6.7,8.0,7.0,7];

//Sem callback
let reprovados = [];
for (const nota in notas) {
    if (notas[nota] <= 7) {
        reprovados.push(notas[nota]);
        
    }
}

console.log(reprovados);

//Com callback
reprovados= notas.filter(function(nota){
    return nota<=7;
})

console.log(reprovados);