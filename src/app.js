require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Olá Mundo</h1>');
});

app.get('/login', (req, res) => {
  res.send('<h1>Olá Mundo 2</h1>');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))