//MAP()
//serve para mapear cada indice de um array

const numbers = [1,2,3,4,5,6,7];

//no caso abaixo eu vou usar o map para multiplicar o valor de todos os indices por 2 
// abaixo eu pego o array com os numeros quando eu uso o map ele manda os indices desse array
//para dentro de qualquer variavel que eu colocar como parametro da função 
// no caso eu fiz uma arrow function que recebe a varivel num como páratro e multiplica por dois 
// todos os valores dentro dela e depois eu mando tudo pra dentro da varivel multiplicados 


var multiplicados = numbers.map(num => num * 2);

console.log(multiplicados);


//-----------------------------------------------------------------


//usando map para convereter temperatura 
//o primeiro array vai receber as temperaturas em fahrenheit 

var fahrenheit = [0,32,45,50,75,80,120];


//a formula de conversão de fahrenheit para celsius  
// (valor - 32) * 5/9)

//convertendo


// para fazer isso em js alem do map eu precisei usar a função Mat round pra 
//arreedeondar os valores e deixar so os inteiros  e depois apliquei a formula na 
//em cada indice da variavel f
//executando a formula no valor de cada indice dela   

var celsius = fahrenheit.map(f => Math.round((f - 32) * 5/9 ));

console.log(celsius);



