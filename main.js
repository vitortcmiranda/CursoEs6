const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
   const UtilizandoMap = usuarios.map(usuarios => usuarios.idade);

   const filter = usuarios.filter(usuarios => usuarios.idade > 18);
   
   const find = usuarios.find(usuarios => usuarios.empresa ==='Google');

   const multiplincando = usuarios.map(usuarios => usuarios.idade *2);
   const filterm = multiplincando.filter(multiplincando => multiplincando < 50);


   console.log('Utilizando Map',UtilizandoMap); 
   console.log('Utilizando filter',filter);
   console.log('Utilizando find',find);
   console.log('Utilizando mu',multiplincando);
   console.log('Utilizando mu',filterm);