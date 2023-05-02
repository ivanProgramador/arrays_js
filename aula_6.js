///find()
//como o ne ja sugere ele faz uma busca dentro do array 
//porem ele faz essa busca baseada em um criterio especifico 
//criado pelo usuario no exemploi abaixo eu vou buscar um sabeor de pizza que começa com m

const pizzas = [

    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]

//o find usa para buscar o metodo startsWith() "começa com"
//eu não sei se esse metodo ja é do elemento ou se ele passa a existir quando o metodo find é utilizado 
// o fato é que a busca por um dos elementos que começam com a letra m funciona
//mas ele so traz op primeiro e ignora qualquer outro que atenda a esse rerquisito 

const encontraPizza = pizzas.find(p => p.startsWith('m'));

console.log(encontraPizza); //retorna mussarela

//find 
//usando o find() para bsucar um objeto em uam lista de objetos 

const fruits = [

    {name: "jaca", quantity: 2},
    {name:"banana", quantity: 0},
    {name:"cereja", quantity: 5}

]

const encontraFruta = fruits.find( fruit => fruit.name === "cereja");

console.log(encontraFruta); // no caso aqui ele vai retornar todo o objeto

//find 
//usando o find() para bsucar um objeto em uam lista de objetos 

const fruits = [

    {name: "jaca", quantity: 2},
    {name:"banana", quantity: 0},
    {name:"cereja", quantity: 5}

]

const encontraFruta = fruits.find( fruit => fruit.name === "cereja");

console.log(encontraFruta); // no caso aqui ele vai retonat todo o objeto
