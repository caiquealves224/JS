const casos = [];
const numero = document.querySelector("#numero");
const cidades = document.querySelector("#cidades");
const tabela = document.querySelector("table");

document.querySelector("#butao").onclick = function(){
    const linha = document.createElement("tr");
    const coluna1 = document.createElement("td");
    const coluna2 = document.createElement("td");
    

    coluna1.append(document.createTextNode(cidades.value));
    coluna2.append(document.createTextNode(numero.value));

    
    linha.appendChild(coluna1);
    linha.appendChild(coluna2);

    tabela.appendChild(linha);
}