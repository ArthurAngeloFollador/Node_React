type Usuarios = {
  //cria o tipo usuario
  id: number;
  nome: string;
  idade: number;
};

let usuarios: Usuarios[] = []; //onde vao ficar guardado os usuarios (sem banco de dados no momento)

let ultimoID: number = 0; //para incrementar o id automaticamente

//variaveis para testar o codigo
const nomeInput: string = "Bruno";
const nomeInputAdd: string = "Cleber";

const idadeInput: number = 30;
const idadeInputAdd: number = 17;

const usuarioInputBusca: string = "Bruno";

const adicionarUsuarios = (nome: string, idade: number): void => {
  //funcao que e chamada ao adicionar um novo usuario
  
  novoUsuario(ultimoID, nome, idade);

  console.log("Usuario adicionado");
  console.log(usuarios[ultimoID]);
  ultimoID++;
};

const novoUsuario = (id: number, nome: string, idade: number) => {
  usuarios[id] = {
    id: id,
    nome: nome,
    idade: idade,
  };
};
  
const buscarPorNome = (Busca: string): void => {
  const usuarioBuscaNome = usuarios.find((u) => u.nome === Busca); //retorna apenas o primeiro usuario que bate com a busca

  if (usuarioBuscaNome) {
    console.log(`Usuario encontrado na posição ${usuarioBuscaNome.id}`); //retorna o id do usuarioBuscaNome procurado
    console.log(`Informacoes completas: \n ${JSON.stringify(usuarioBuscaNome)}`); //retorna o objeto inteiro procurado serializado, em string
  } else {
    console.log(`Usuario nao encontrado`);
  }
};

const buscarMaiores = () => {
  const usuarioBuscaMaior: Usuarios[] = usuarios.filter((u) => u.idade >= 18);

  if (usuarioBuscaMaior) {
    console.log(`Usuarios maiores de idade: `);
    for (let i = 0; i > usuarioBuscaMaior.length; i++) {
      console.log(usuarioBuscaMaior[i]);
    }
  } else {
    console.log(`Nao ha usuarios maiores de idade cadastrados`);
  }
};

const executa = () => {
  adicionarUsuarios(nomeInput, idadeInput);
  adicionarUsuarios(nomeInputAdd, idadeInputAdd);


  console.log(usuarios);
  

  buscarPorNome(usuarioInputBusca)
  buscarMaiores()
};

executa()
