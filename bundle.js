"use strict";

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
});

function mostraInfos(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome + ' tem ' + idade + ' anos.');
}

mostraInfos({
  nome: 'Diego',
  idade: 23
});
