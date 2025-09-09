// const mongoose = require("mongoose");

// const connectToDatabase = async () => {
//   await mongoose.connect(
//     `mongosh "mongodb+srv://cluster0.uc3ra6q.mongodb.net/" --apiVersion 1 --username ${process.env.MONGODB_USERNAME}`,
//     (error) => {
//       if (error) {
//         return console.log(
//           "Ocorreu um erro ao se conectar ao banco de dados ",
//           error
//         );
//       }
//       return console.log("Conecção ao banco de dados realizada com sucesso");
//     }
//   );
// };

// module.exports = connectToDatabase;

// src/database/connect.js
const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const uri = `mongodb+srv://${
      process.env.MONGODB_USERNAME
    }:${encodeURIComponent(
      process.env.MONGODB_PASSWORD
    )}@cluster0.uc3ra6q.mongodb.net/meu_banco?retryWrites=true&w=majority`;
    await mongoose.connect(uri);
    console.log("Conexão com MongoDB estabelecida");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  }
}

module.exports = connectToDatabase; // <- correto
