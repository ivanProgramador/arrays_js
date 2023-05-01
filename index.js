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

