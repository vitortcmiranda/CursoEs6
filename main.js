// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

const map = arr.map(item => item  +10);
console.log(map);
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const showidade = (usuario) =>{console.log(usuario.idade)}
showidade(usuario);
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => { console.log(nome,idade)};
mostraUsuario(nome, idade);
mostraUsuario(nome);
// 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
