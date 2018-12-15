function pessoa(){
    this.idade = 1;

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    },1000);
}

function pessoa2(){
    this.idade = 1;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    },1000);
}

new pessoa;
new pessoa2;