const express = require("express");
const UserModel = require("../src/models/user.models");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

// middleware => funcoes que sao executadas antes do express
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

// app.get("/users", (req, res) => {
//   const users = [
//     {
//       name: "John Doe",
//       email: "john@doe.com",
//     },
//     {
//       name: "Jane Doe",
//       email: "Jane@doe.com",
//     },
//   ];

//   res.status(200).json(users);
// });

// buscar usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// buscar usuarios pelo id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// adidionar usuarios
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// atualizar usuarios
app.patch("/users/:id", async (req, res) => {
  //PATCH atualiza um registro parcialmente, para atualizar completamente é utilizado PUT
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deletar usuario
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => {
  console.log(`Rodando com Express na porta ${port}!`);
});
