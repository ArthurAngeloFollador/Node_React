import express from "express";

const app = express();

app.get("/users", (req, res) => {
  // request, response
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
}); // porta que o servidor roda
