// Suponha a interface:

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
}


// 1- Use Partial para criar uma função atualizarProduto que permita passar só alguns campos para atualizar.

const p1: Partial<Produto> = { nome: "Boneco de Ação" } //Permite modificar um atributo e deixar os outros opcionais
const p2: Partial<Produto> = { nome: "Action Figure", preco: 699.99 } //estrutura para modificar mais de um atributo

// 2- Use Pick para criar um tipo ProdutoResumo que tenha apenas nome e preco.

type ProdutoResumo = Pick<Produto, "nome" | "preco"> //cria um 'produto resumido', com apenas uma parte dos atributos do objeto

const r: ProdutoResumo = {
    nome: "Action Figure Star Wars",
    preco: 1289.99                      //tem só dois dos 4 atributos
}

// 3- Use Omit para criar um tipo ProdutoSemDescricao.

type ProdutoSemDescricao = Omit<Produto, "descricao">

const p: ProdutoSemDescricao = {
    id: 1,
    nome: "CD Chaves",                  //Não existe descrição nesse produto
    preco: 39.99
}

// 4- Use Record para mapear categorias de produto ("eletronico" | "roupa" | "alimento") para uma lista de produtos.

type Categorias = "eletronico" | "roupa" | "alimento"

const lista: Record<Categorias, number> = {
    eletronico: 80,                     //estrutura basica
    roupa: 20,
    alimento: 88
}

//fazendo com a interface produto
const catalogo: Record<Categorias, Produto[]> = {
  eletronico: [
    { id: 1, nome: "TV 4K", preco: 1999, descricao: "Smart TV" }
  ],
  roupa: [
    { id: 2, nome: "Camiseta", preco: 59, descricao: "Camiseta preta básica" }
  ],
  alimento: [
    { id: 3, nome: "Maçã", preco: 3.5, descricao: "Maçã orgânica" }
  ]
}
