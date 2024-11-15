//forma de criar objetos
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silva'
}

console.log(pessoa['sobrenome'])

//2 - forma de criar objetos
const funcionario = new Object();
funcionario.nome = 'Karen'
funcionario.sobrenome = 'Joana'

console.log(funcionario.nome)

//3 - forma de cirar objetos utilizando a função
function criarPessoa(nome, sobrenome, i){
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoa1 = criarPessoa('Arthur','Silva',20)
const pessoa2 = criarPessoa('João','Silva',34)

console.log(pessoa1.nomeCompleto)
console.log(pessoa2.nomeCompleto)