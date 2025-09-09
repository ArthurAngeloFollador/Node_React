interface Nome {
  //interface que tipa os dados
  id: number;
  nome: string;
  produto: string;
}

const nomes: Nome[] = [
  //"arquivo" com os nomes de modelo
  { id: 1, nome: "Victor Moura", produto: "Notebook" },
  { id: 2, nome: "Camila Torres", produto: "Smartphone" },
  { id: 3, nome: "Paulo Gomes", produto: "Fone de Ouvido" },
  { id: 4, nome: "Ximena Pires", produto: "Monitor" },
  { id: 5, nome: "Otávio Reis", produto: "Teclado Mecânico" },
  { id: 6, nome: "Mariana Ribeiro", produto: "Cadeira Gamer" },
  { id: 7, nome: "Willian Barros", produto: "Mouse sem Fio" },
  { id: 8, nome: "Elaine Monteiro", produto: "Caixa de Som" },
  { id: 9, nome: "Karen Nogueira", produto: "Tablet" },
  { id: 10, nome: "Lucas Teixeira", produto: "Pendrive" },
  { id: 11, nome: "Yasmin Castro", produto: "SSD 1TB" },
  { id: 12, nome: "Gabriela Rocha", produto: "Smartwatch" },
  { id: 13, nome: "Ingrid Freitas", produto: "Impressora" },
  { id: 14, nome: "Nicolas Pinto", produto: "Drone" },
  { id: 15, nome: "Daniel Araújo", produto: "Microfone" },
  { id: 16, nome: "Ursula Farias", produto: "HD Externo" },
  { id: 17, nome: "Henrique Alves", produto: "Controle de Videogame" },
  { id: 18, nome: "João Mendes", produto: "Câmera Digital" },
  { id: 19, nome: "Álvaro Queiroz", produto: "Projetor" },
  { id: 20, nome: "Sofia Moreira", produto: "Console PlayStation" },
  { id: 21, nome: "Felipe Martins", produto: "Console Xbox" },
  { id: 22, nome: "Rafael Batista", produto: "Placa de Vídeo" },
  { id: 23, nome: "Alice Ramos", produto: "Carregador Portátil" },
  { id: 24, nome: "Simone Araújo", produto: "Webcam" },
  { id: 25, nome: "Ana Silva", produto: "Ventilador" },
  { id: 26, nome: "Zilda Neves", produto: "Smart TV" },
  { id: 27, nome: "Diego Santos", produto: "Geladeira" },
  { id: 28, nome: "Patrícia Lopes", produto: "Micro-ondas" },
  { id: 29, nome: "Carla Oliveira", produto: "Fogão Elétrico" },
  { id: 30, nome: "Mateus Cunha", produto: "Ar-condicionado" },
  { id: 31, nome: "Olivia Barros", produto: "Máquina de Lavar" },
  { id: 32, nome: "Renato Barcellos", produto: "Cafeteira" },
  { id: 33, nome: "Júlio César", produto: "Liquidificador" },
  { id: 34, nome: "Eduarda Lima", produto: "Air Fryer" },
  { id: 35, nome: "Bernardo Silveira", produto: "Batedeira" },
  { id: 36, nome: "Bruno Souza", produto: "Aspirador de Pó" },
  { id: 37, nome: "Zé Augusto", produto: "Panela Elétrica" },
  { id: 38, nome: "Larissa Matos", produto: "Ventilador de Mesa" },
  { id: 39, nome: "Hugo Andrade", produto: "Relógio de Parede" },
  { id: 40, nome: "Natália Prado", produto: "Luminária LED" },
  { id: 41, nome: "Thiago Lemos", produto: "Quadro Decorativo" },
  { id: 42, nome: "Giovana Peixoto", produto: "Tapete" },
  { id: 43, nome: "Fábio Correia", produto: "Mochila" },
  { id: 44, nome: "Wesley Costa", produto: "Tênis Esportivo" },
  { id: 45, nome: "Yuri Santos", produto: "Camisa de Time" },
  { id: 46, nome: "Vanessa Carvalho", produto: "Bola de Futebol" },
  { id: 47, nome: "Isabela Ferreira", produto: "Patins" },
  { id: 48, nome: "Quésia Duarte", produto: "Bicicleta" },
  { id: 49, nome: "Xavier Tavares", produto: "Skate" },
  { id: 50, nome: "Tiago Cardoso", produto: "Violão" },
];

//variaveis de input
const input: any = "Smart TV";
const key: any = "produto";

//funcao que busca os nomes com uma tipagem generica <T> para aceitar qualquer tipagem em "Nomes"
const FindBy = <T, K extends keyof T>(
  nomes: T[],
  key: K,
  value: T[K]
): string | T[] | undefined => {
  //checa qualquer propriedade em 'nomes[]'
  const busca: T[] = nomes.filter((u) => u[key] === value); // procura pela key referente na interface 'Nome'

  return busca.length > 0
    ? `Usuario encontrado: \n${JSON.stringify(busca, null, 2)}`
    : "Nenhum usuario encontrado";
};

const executar = (): void => {
  console.log(FindBy(nomes, key, input));
};

executar();
