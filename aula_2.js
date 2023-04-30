

//FILTER
//REFERENCIA: https://blog.betrybe.com/javascript/javascript-filter/ 


// filter() serve para manipular indices especificos com base em condições 
// no caso abaixo eu vou usar o filter para eliminar todos os indices que tiverem 
//o valor repetido 

//const ArrayNormal = [2,3,3,6,4,12,19,7,2,5];

//filtrando e passanos os valores filtrados pra outro array 

//const arrayFiltrado = ArrayNormal.filter((elen,index,arr)=> arr.indexOf(elen) != index);

// afunção filter recebe 3 parametros

//console.log(arrayFiltrado);

//aplicando o filter em um grupo de produtos sendo cada produto e um objeto


var produtos = 
    [
        {id: 1, descricao: 'Smartphone', categoria: 'Eletronico'},
        {id: 2, descricao: 'Notebook', categoria: 'Eletronico'},
        {id: 3, descricao: 'Geladeira', categoria: 'Eletrodomestico'},
        {id: 4, descricao: 'Liquidificador', categoria: 'Eletrodomestico'},
        {id: 5, descricao: 'Fogão', categoria: 'Eletrodomestico'}
    ]

// função que filtra os eletronicos e retorna o valor 

function retornaEletronico(value){
       if(value.categoria == 'Eletronico'){
         return value;
       }

}

//com o variavel produtos por si so ja um array ela tem o metodo filter nela
//porem o filter tem que saber qoue ele tem que executar pra poder retornar 
//e ai que entra a função de call back que eu usei pra filtrar os indices e retornar o resultado
//se eu uso o filter ele executa ela nos indices que o array que esta chamando ela 
// então o filter joga os insices dele como parametro pra função que eu chamei 
//depois disso o resultado e colocado na variavel pordutoEletronicos    

var produtosEletronicos = produtos.filter(retornaEletronico);

//por tambem ser um array ele tem acesso a função forEach que joga os indices como parametros 
//na arrow function que por fim moestra o resultado no console 

produtosEletronicos.forEach(produtoEletro=>{

    console.log(produtoEletro);
});






