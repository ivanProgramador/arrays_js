//find 
//usando o find() para bsucar um objeto em uam lista de objetos 

const fruits = [

    {name: "jaca", quantity: 2},
    {name:"banana", quantity: 0},
    {name:"cereja", quantity: 5}

]

const encontraFruta = fruits.find( fruit => fruit.name === "cereja");

console.log(encontraFruta); // no caso aqui ele vai retonat todo o objeto
