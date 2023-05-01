//REDUCE 
//O reduce é usado para somar os indices de um array afim de reduzir esse array ao valor dessa soma 
// O codigo abaixo mostra como fazer a redução de um array de forma tradicional sem usar o reduce 

var total = 0;

var numeros = [1,2,3,4,5,6];

for(var i = 0; i < numeros.length; i++ ){

    //a cada iteração alende de acrescentar 1 ao i
    //ele adiciona o valor da posição a variavel soma
    // no primeir loop total vale 1 no segundo 3 no quarto 3 
    //e assim ate somar o valor de todos os indices  


    total += numeros[i];
    
}

console.log(total);


//usando o reduce 
// nesse caso a a variavel total recebe o resultyado de toda a operação
// o reduce recebe dois para metros um função de call back anonima que recebe o total 
//e o numero e ela soma esses dois parametros 
//ou seja e afunção quam faz a soma ele so executa o codigo que esta dentro dela
// que vai somar o numeros e jogar dentro do segundo para metro da função reduce 
// depois eque ele executa ele joga os valores somados dentro do valor que esta no segundo parametros da função reduce
//sem precisar usar o for como no primeiro caso 




var total = 0;

var numeros = [1,2,3,4,5,6];

var total = numeros.reduce(function(total, numero){
    return total + numero;
}, 0);

console.log(total);

//versão udando arrow function

 var numeros = [1, 2, 3, 4, 5, 6];
 var total = numeros.reduce((total, numero) => total + numero, 0);
 console.log(total);

