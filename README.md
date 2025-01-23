# Repositório do primeiro projeto da trilha de nodejs da Rocketseat

## FinAPI - API Financeira

### Configurando o projeto

- Iniciando o projeto criando o package.json: `$ yarn init -y`
- Instalando o express: `$ yarn add express`
- Instalação do nodemon como dependência de desenvolvimento: `$ yarn add nodemon -D`
- Instalação da biblioteca UUID para geração de id: `$ yarn add uuid`

### Requisitos do projeto

- [] Deve ser possível criar uma conta
- [] Deve ser possível buscar o extrato bancário do cliente
- [] Deve ser possível realizar um depósito
- [] Deve ser possível realizar um saque
- [] Deve ser possível buscar o extrato bancário do cliente por data
- [] Deve ser possível atualizar dados da conta do cliente
- [] Deve ser possível obter dados da conta do cliente
- [] Deve ser possível deletar uma conta

## Regras de negócio do projeto

- [] Não deve ser possível cadastrar uma conta com CPF já existente
- [] Não deve ser possível fazer depósito em uma conta não existente
- [] Não deve ser possível buscar extrato em uma conta não existente
- [] Não deve ser possível fazer saque em uma conta não existente
- [] Não deve ser possível excluir uma conta não existente
- [] Não deve ser possível fazer saque quando o saldo for insuficiente
