//Sperad
const usuario = {
     nome: 'Diego',
     idade: 23,
     endereco: {
     cidade: 'Rio do Sul',
     uf: 'SC',
     pais: 'Brasil',
     }
    };
    
    const usuario2 = {...usuario,nome:'Gabriel'};
    const usuario3 = {...usuario,cidade:'Lontras'};
    console.log(usuario2);
    console.log(usuario3);