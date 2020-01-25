class Usuario {
    constructor(email,senha,admin = false){
        this.usuario = {
            email :email,
            senha : senha,
            admin : admin
        }
    }
    isAdmin(){
       return this.usuario.admin ?  true :  false
    }
}

class Admin extends Usuario{
    constructor(email,senha){
        super(email,senha,true);
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true