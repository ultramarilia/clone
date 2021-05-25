function somar (a,b) {
    return a+b
};

function subtrair (a,b) {
    return a-b
};


function calculadora(operacao, a,b){
    console.log(operacao(a,b))
};

calculadora(somar, 2, 9)