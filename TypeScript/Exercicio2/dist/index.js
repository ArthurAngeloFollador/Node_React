"use strict";
// Suponha a interface:
// 1- Use Partial para criar uma função atualizarProduto que permita passar só alguns campos para atualizar.
const p1 = { nome: "Boneco de Ação" }; //Permite modificar um atributo e deixar os outros opcionais
const p2 = { nome: "Action Figure", preco: 699.99 }; //estrutura para modificar mais de um atributo
const r = {
    nome: "Action Figure Star Wars",
    preco: 1289.99 //tem só dois dos 4 atributos
};
const p = {
    id: 1,
    nome: "CD Chaves", //Não existe descrição nesse produto
    preco: 39.99
};
const lista = {
    eletronico: 80, //estrutura basica
    roupa: 20,
    alimento: 88
};
//fazendo com a interface produto
const catalogo = {
    eletronico: [
        { id: 1, nome: "TV 4K", preco: 1999, descricao: "Smart TV" }
    ],
    roupa: [
        { id: 2, nome: "Camiseta", preco: 59, descricao: "Camiseta preta básica" }
    ],
    alimento: [
        { id: 3, nome: "Maçã", preco: 3.5, descricao: "Maçã orgânica" }
    ]
};
