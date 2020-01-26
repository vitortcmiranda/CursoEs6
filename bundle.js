"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var UtilizandoMap = usuarios.map(function (usuarios) {
  return usuarios.idade;
});
var filter = usuarios.filter(function (usuarios) {
  return usuarios.idade > 18;
});
var find = usuarios.find(function (usuarios) {
  return usuarios.empresa === 'Google';
});
var multiplincando = usuarios.map(function (usuarios) {
  return usuarios.idade * 2;
});
var filterm = multiplincando.filter(function (multiplincando) {
  return multiplincando < 50;
});
console.log('Utilizando Map', UtilizandoMap);
console.log('Utilizando filter', filter);
console.log('Utilizando find', find);
console.log('Utilizando mu', multiplincando);
console.log('Utilizando mu', filterm);
