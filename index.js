var pessoas = 
[
  {id: 1, nome:"Camila",numero: 2, sorteado: false },
  {id: 2, nome:"José",numero:   4, sorteado: true  },
  {id: 3, nome:"Maria",numero:  6, sorteado: false },
  {id: 4, nome:"daniel",numero: 8, sorteado: true  },
  {id: 5, nome:"lucio",numero: 10, sorteado: true  },
  {id: 6, nome:"Camila",numero: 13, sorteado: true  }

]

pessoas.forEach(pessoa =>{
  numeroPessoas = pessoa.numero;

  numeroAleatorio = Math.round(Math.random() * pessoa.numero);

  if(numeroAleatorio === numeroPessoas){
     numeroPessoas + 1;
  }
  
  console.log('numero jogador 1 : '+ numeroAleatorio+' vs  numero do jogador 2 : '+ numeroPessoas );

});




