import express from "express";
import ClientModel from "../models/client.models.js";

const app = express();

app.use(express.json());

app.get("/clients", async (req, res) => {
  // Buscar todos os clientes
  try {
    const clients = await ClientModel.find({});
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).send(`Error when searching for clients: \n ${error.message}`);
  }
});

app.get("/clients/:id", async (req, res) => {
  // Buscar um cliente pelo id
  try {
    const id = req.params.id;
    const client = await ClientModel.findById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).send(`Error when searching for client: \n ${error.message}`);
  }
});

app.get("/clients/email/:email", async (req, res) => {
  // Buscar um cliente pelo email
  try {
    const email = req.params.email;
    const client = await ClientModel.find({ email });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).send(`Error when searching for client: \n ${error.message}`);
  }
});

app.get("/clients/name/:name", async (req, res) => {
  // Buscar um cliente pelo nome
  try {
    const name = req.params.name;
    const client = await ClientModel.find({ name });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).send(`Error when searching for client: \n ${error.message}`);
  }
});

app.post("/clients", async (req, res) => {
  // Cadastrar um novo cliente
  try {
    const client = await ClientModel.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send(`Error when creating client: \n ${error.message}`);
  }
});

app.delete("/clients/:id", async (req, res) => {
  // Deletar um cliente
  try {
    const id = req.params.id;
    const client = await ClientModel.findByIdAndDelete(id);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send(`Error when deleting client: \n ${error.message}`);
  }
});

app.patch("/clients/:id", async (req, res) => {
  // Atualizar parte de um cliente
  try {
    const id = req.params.id;
    const client = await ClientModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send(`Error when updating client: \n ${error.message}`);
  }
});

app.put("/clients/:id", async (req, res) => {
  // Atualizar um cliente completo
  try {
    const id = req.params.id;
    const client = await ClientModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send(`Error when updating client: \n ${error.message}`);
  }
})

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
