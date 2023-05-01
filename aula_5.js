//some()
//é usado para testar se pelo um dos indices do array passa em um teste especifico
// no caso eu vou testar se dentro do array tem algum numero primo

function isPrime(value){
    for( let i = 2; i < value; i++){
        if(value % i === 0){
            return false;
        }
    }
    return value > 1
}

const numeros = [ 6, 8, 11, 14, 42];

//no caso retorno vai ser true porque nesse array existem numero que so são divisiveis por 1,
//e por eles mesmos como 11 por exemplo 

console.log(numeros.some(isPrime));  

//nesse teste usando objetos 
// o some teste pra ver se tem algum piloto 
// nesse caso ele vai testar um jatributo boleano

const equipe =
[
  {id: 12, name:"jack", pilot: true},
  {id: 44, name:"amanda", pilot: true},
  {id: 59, name:"Laura", pilot: false},
  {id: 122, name:"Lylla", pilot: false}
];

//retorna true porque tem pessoas com o atributo pillot true
 
console.log( equipe.some(person => person.pilot));

