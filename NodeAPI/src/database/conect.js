const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const uri = env.DATABASE_URL;
    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Database connection error: \n ${error.message}`);
  }
}

module.exports = connectToDatabase; // <- correto
