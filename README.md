# Backend para To-Do List - Node.js com TypeORM e Express

Este é o backend para o aplicativo "To-Do List", desenvolvido com Node.js, Express, TypeORM e outras bibliotecas. Este backend fornece rotas para gerenciar tarefas e autenticação de usuários.

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Rotas da API](#rotas-da-api)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração e Execução](#configuração-e-execução)
- [Estrutura do Projeto](#estrutura-do-projeto)

## 🛠️ Sobre o Projeto

Este backend fornece uma API para gerenciar tarefas e autenticação de usuários para um aplicativo de lista de tarefas. Utiliza o Express para gerenciar rotas, TypeORM para interagir com o banco de dados e várias outras bibliotecas para suporte ao desenvolvimento.

## 🛠️ Rotas da API

## API Rodando atualmente em: https://mytodolistnodejs.onrender.com

### `GET /tasks`

- **Descrição**: Obtém a lista de tarefas.
- **Resposta**: Um array de tarefas com os seguintes campos: `id`, `title`, `checked` (boolean).

### `POST /tasks`

- **Descrição**: Adiciona uma nova tarefa.
- **Corpo da Requisição**: `title` (string) e `checked` (false)
- **Resposta**: Código de status `201` e a tarefa criada.

### `DELETE /tasks/:id`

- **Descrição**: Remove uma tarefa pelo ID.
- **Resposta**: Código de status `204`.

### `PATCH /tasks/:id/toggle`

- **Descrição**: Alterna o estado de conclusão de uma tarefa pelo ID.
- **Resposta**: A tarefa alterada.

### `POST /login`

- **Descrição**: Autentica um usuário pelo CPF.
- **Corpo da Requisição**: `cpf` (string)
- **Resposta**: 
  - Se sucesso, retorna um JSON com `userId` do usuário e a lista de tarefas associadas.
  - Se o CPF não for fornecido, retorna um erro `400` com a mensagem "CPF is required".

## 🧩 Tecnologias Utilizadas

- **[TypeORM](https://typeorm.io/)**: Biblioteca para mapeamento objeto-relacional (ORM) para TypeScript e JavaScript.
- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript do lado do servidor.
- **[Express](https://expressjs.com/)**: Framework web para Node.js.
- **[Nodemon](https://nodemon.io/)**: Ferramenta que ajuda no desenvolvimento ao reiniciar automaticamente o servidor quando arquivos são modificados.
- **[Reflect-Metadata](https://www.npmjs.com/package/reflect-metadata)**: Biblioteca necessária para usar o TypeORM com decoradores.
- **[ts-node](https://typestrong.org/ts-node/)**: Ferramenta para executar código TypeScript diretamente no Node.js.

## ⚙️ Configuração e Execução

O projeto utiliza um arquivo `.env` para armazenar variáveis de ambiente importantes, como configurações do banco de dados e credenciais. O arquivo `.env` não está incluído no repositório por motivos de segurança. 

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/LailsonGabriel/myTodoListNodeJS
  ``

2. Copie o arquivo `.env.example` para criar um arquivo `.env`:

```cp .env.example .env```

3. Abra o arquivo `.env` e configure as variáveis de ambiente de acordo com suas necessidades. Exemplos de variáveis incluem:

```bash
  DB_TYPE=mysql
  DB_HOST=localhost
  DB_PORT=3306
  DB_USER=root
  DB_PASSWORD=yourpassword
  DB_NAME=todolist
```

4. Execute os comandos para criar as tabelas no banco e após isso o comando para rodar o projeto:
   ```bash
   yarn build ou npm run build
   yarn dev ou npm run dev
  ``


## 📁 Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

```bash

  src/
│
├── controllers/            # Controladores para gerenciar as requisições
│   ├── taskController.ts   # Controlador para tarefas
│   └── authController.ts   # Controlador para autenticação
│
├── services/               # Serviços para lógica de negócios
│   ├── taskService.ts      # Serviço para tarefas
│   └── authService.ts      # Serviço para autenticação
│
├── entities/               # Entidades do TypeORM
│   ├── Task.ts             # Entidade tarefa
│   └── User.ts             # Entidade usuário
│
├── migrations/             # Migrações do banco de dados
│
├── index.ts                # Ponto de entrada do aplicativo
├── data-source.ts          # Configuração do TypeORM
└── tsconfig.json           # Configuração do TypeScript

```
