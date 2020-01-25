const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
   const UtilizandoMap = usuarios.map(function(item,index){
        return usuarios[index].idade;
   });

   const filter = usuarios.filter(function(item,index){
        return usuarios[index].idade > 18;
   });
   
   const find = usuarios.find(function(item,index){
    return usuarios[index].empresa === 'Google';
   });

   const multiplincando =
   console.log('Utilizando Map',UtilizandoMap); 
   console.log('Utilizando filter',filter);
   console.log('Utilizando find',find);