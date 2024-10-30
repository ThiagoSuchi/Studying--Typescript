// Exemplo 7 --> tipos de extensões(herança)
interface Pai {
    nome:string;
}
interface Mae {
    sobrenome:string;
}

// Extends -  Define a relação de herança entre duas classes.
interface Filha extends Pai, Mae {
    idade: number;
}

const filha: Filha = {
    nome: 'Lavínia',
    sobrenome: 'Barros Dávilla',
    idade: 23
}

console.log(filha);


// Exemplo 8 --> tipos de interseções
interface Cachorro {
    tipo: string
}

interface Gato {
    tipo: string
}

type Animal = Cachorro & Gato;
 

// Exemplo 9 --> Generic Object
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true
}

const usuario: Usuario = {
    nome: 'Thiago',
    email: 'thiago@gmail.com'
}
const admin: Admin = {
    nome: 'Thiago',
    email: 'thiago@gmail.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T {
    return usuario
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

