const express = require('express');
const { v4: uuidv4 } = require('uuid'); // essa versão v4 do uuid gera uuid randômico

const app = express();

app.use(express.json());

const customers = [];

// Cria uma nova conta
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();

  customers.push({
    cpf,
    name,
    id,
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333);
