const { error } = require("console");
const fs = require("fs");
const path = require("path");

// criar uma pasta
fs.mkdir(path.join(__dirname, "./test"), (error) => {
  if (error) {
    console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

// criar um arquivo (se ele já existir e houver outro writeFile, por padrão o conteúdo do arquivo é substituido)
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso");
  },

  // adicionar conteúdo a um arquivo
  fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    "Hello World",
    (error) => {
      if (error) {
        return console.log("Erro: ", error);
      }
      console.log("Arquivo modificado com sucesso!");
    }
  ),

  // ler arquivo
  fs.readFile(
    path.join(__dirname, "/test", "test.txt"),
    "utf8",
    (error, data) => {
      if (error) {
        return console.log("Erro: ", error);
      }
      console.log(data);
    }
  )
);
