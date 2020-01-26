function mostraInfo(usuario) {
     return `${usuario.nome} tem ${usuario.idade} anos.`;
    }
    mostraInfo({ nome: 'Diego', idade: 23 })

    function mostraInfos({nome,idade}){
         console.log( nome+' tem '+idade+' anos.');
    }
    mostraInfos({ nome: 'Diego', idade: 23 });