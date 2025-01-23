const express = require('express');
const { v4: uuidv4 } = require('uuid'); // essa versão v4 do uuid gera uuid randômico

const app = express();

app.use(express.json());

const customers = [];

// Middlewares

// Verifica se já existe uma conta com o cpf passado
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf == cpf);

  // Se não existir um extrato (Customer) então retorna um erro 400
  if (!customer) {
    return response.status(400).json({ error: 'Customer not found!' });
  }

  request.customer = customer;

  // Se existir um extrato (Customer) então retorna um next pra prosseguir com a requisição
  return next();
}

// Cria uma nova conta
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: 'Customer already exists!' });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return response.status(201).send();
});

// app.use(verifyIfExistsAccountCPF); // usa o middleware criado

// Busca o extrato bancário
app.get('/statement/', verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  //   return response.json(customer.statement);
  return response.json(customer.statement);
});

app.listen(3333);
