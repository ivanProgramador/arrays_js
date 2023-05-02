//includes() serve pra testar a existencia de um elemento dentro de um array que corresponde a uma codição especi
//console.log([1,2,3,5,7].includes(3)); 

//nesse caso retona true porque porque o numero 3 existe, ele tambem testa tipo, nomes dpenednedo 
//da condição que for estabelecida  

// fazendo uma busca por letras espeficas com base nos nomes do objetos 

const people =
 [
    {id: 11, name:"Adamastor", age:23, group:"editor"},
    {id: 47, name:"Joana", age:28, group:"user"},
    {id: 85, name:"Mauricio", age:34, group:"editor"},
    {id: 97, name:"Lalau", age:74, group:"admin"}

 ]

 // aqui ele pesquisa por um trecho do nome do usuario unido doi metodos 
 // filter pra pegaros indices includes pra pegar as letras 
 
 const filtrandoUsuarios = people.filter(p => p.name.includes("au"));


 console.log(filtrandoUsuarios);





