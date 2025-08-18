const express = require("express");
const path = require("path");

// Projeto 1
const app1 = express();
const PORT1 = 3001;
app1.use(express.static(path.join(__dirname, "tournamenter-obr")));

app1.listen(PORT1, () => {
  console.log(`Projeto 1 rodando em http://localhost:${PORT1}`);
});

// Projeto 2
const app2 = express();
const PORT2 = 3002;

app2.use(express.static(path.join(__dirname, "build"))); // <-- adicione isso!

app2.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app2.listen(PORT2, "0.0.0.0", () => {
  console.log("Projeto 2 rodando na porta 3002");
});