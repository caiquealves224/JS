const axios = require("axios");
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

axios.get(url).then((response)=>{
    const obj = response.data;

    const novo = obj.filter((data)=>{
       return data.genero == "F";
    }).filter((data)=>{
        return data.pais =="China";
    }).reduce((passado,atual)=>{
        
        return passado.salario < atual.salario? passado : atual;
    })

 console.log(novo)
});