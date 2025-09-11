const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    // forma do Schema para os clientes
    name: {
      String,
      required: true,
    },
    email: {
      String,
      required: true,
    },
    password: {
      String,
      required: true,
    },
    age: {
      Number,
      required: true,
    },
});

const ClientModel = mongoose.model("User", userSchema);

module.exports = ClientModel;
