const express = require("express");
const data = require("./data.json");
const app = express();

app.use(express.json());

// app.get("/clients/:id") -> pega o id do cliente
app.get("/clients", (req, res) => {
  res.json(data);
});

// RECEBER 
app.get("/clients/:id", (req, res) => {
  const { id } = req.params;

  const client = data.find((cli) => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

// ENVIAR
app.post("/clients", (req, res) => {
    const { name, email } = req.body;
    
    // salvar

    res.json({name, email})
});

// UPDATE 
app.put("/clients/:id", (req, res) => {
    const { id } = req.params;
    
    const client = data.find((cli) => cli.id == id)

    if (!client) return res.status(404).json()

    const {name} = req.body

    client.name = name

    res.json(client)
});

// DELETAR
app.delete("/clients/:id", (req, res) => {
    const { id } = req.params

    const clientFiltered = data.filter(client => client.id != id)

    res.json(clientFiltered)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
