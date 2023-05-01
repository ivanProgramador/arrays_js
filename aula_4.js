//every()
// O every serve para retornar um valor bolleando com base em testes especificos 
//usando um exemplo eu vou usar ele pra testar se todos os indices dos me array são maiores que  10 

var numero = [1 ,5 ,4 ,10 ,11 ,7 ,200];

//no caso o every esta recebendo uma arrow function que vai jogar todos os valores dos indices dentro da variavel elementos 
// depois ele vai executar ela para cada indice do elementos pra testar se todos atendem a condição de ter um valor maior que 10 
// se todos tiverem então ele retorna true , se não elçe retorna false e esses são os tipos de retorno dele defierente do filter que retorna um objeto

console.log(numero.every(elementos => elementos > 10 )); // resposta false 

var numero_t = [100 ,500 ,400 ,100 ,110 ,70 ,200];

console.log(numero_t.every(elementos => elementos > 10 )); //resposta true 




//usando o every com objetos

const turma = 
[
    { id: 12, name: 'Frederico', age: 8 },
    { id: 47, name: 'Francisca', age: 7 },
    { id: 77, name: 'Ramon', age: 48 },
    { id: 85, name: 'Zenon', age: 52 },
]
// no caso o parametro p vai receber todos os objetos dio array 
// sendo assim eu pego p.age que a caracteristica que eu quero testar
//e verificao se todos são maiores que 18  

console.log(turma.every(p => p.age > 18)); // falsa 

//um grupo de pessoas onde o teste retornasria verdadeiro 

const turma_t = 
[
    { id: 12, name: 'Frederico', age: 28 },
    { id: 47, name: 'Francisca', age: 27 },
    { id: 77, name: 'Ramon', age: 48 },
    { id: 85, name: 'Zenon', age: 52 },
]

console.log(turma_t.every(p => p.age > 18)); // true 




