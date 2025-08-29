"use strict";
let usuarios = []; //onde vao ficar guardado os usuarios (sem banco de dados no momento)
let ultimoID = 0; //para incrementar o id automaticamente
//variaveis para testar o codigo
const nomeInput = "Bruno";
const nomeInputAdd = "Cleber";
const idadeInput = 30;
const idadeInputAdd = 17;
const usuarioInputBusca = "Bruno";
const adicionarUsuarios = (nome, idade) => {
    //funcao que e chamada ao adicionar um novo usuario
    novoUsuario(ultimoID, nome, idade);
    console.log("Usuario adicionado");
    console.log(usuarios[ultimoID]);
    ultimoID++;
};
const novoUsuario = (id, nome, idade) => {
    usuarios[id] = {
        id: id,
        nome: nome,
        idade: idade,
    };
};
const buscarPorNome = (Busca) => {
    const usuarioBuscaNome = usuarios.find((u) => u.nome === Busca); //retorna apenas o primeiro usuario que bate com a busca
    if (usuarioBuscaNome) {
        console.log(`Usuario encontrado na posição ${usuarioBuscaNome.id}`); //retorna o id do usuarioBuscaNome procurado
        console.log(`Informacoes completas: \n ${JSON.stringify(usuarioBuscaNome)}`); //retorna o objeto inteiro procurado serializado, em string
    }
    else {
        console.log(`Usuario nao encontrado`);
    }
};
const buscarMaiores = () => {
    const usuariosBuscaMaior = usuarios.filter((u) => u.idade >= 18);
    if (usuariosBuscaMaior.length > 0) {
        console.log("Usuários maiores de idade:");
        for (let i = 0; i < usuariosBuscaMaior.length; i++) {
            console.log(JSON.stringify(usuariosBuscaMaior[i], null, 2)); //'null, 2' deixa o JSON identado
        }
    }
    else {
        console.log("Não há usuários maiores de idade cadastrados");
    }
};
const executa = () => {
    adicionarUsuarios(nomeInput, idadeInput);
    adicionarUsuarios(nomeInputAdd, idadeInputAdd);
    console.log(usuarios);
    buscarPorNome(usuarioInputBusca);
    buscarMaiores();
};
executa();
