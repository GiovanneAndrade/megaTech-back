# E-commerce com carrinho de compras, login, cadastro, página de favoritos e do usuário

Este é um aplicativo full-stack de comércio eletrônico com recursos de carrinho de compras, login, cadastro, página de favoritos e do usuário. O backend foi construído com Node.js e TypeScript, e usa o Prisma como ORM para gerenciar o banco de dados.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Para usar o aplicativo, é necessário ter o Node.js instalado. Clone o repositório e instale as dependências com o seguinte comando
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Diga como essa etapa será:

```
npm install

```

Em seguida, crie um arquivo .env com as informações de configuração do banco de dados e inicie o servidor com o seguinte comando:

```
npm run dev
```

## ⚙️ Alguns Exemplos de Ultilização.

## post `/address`

- deve enviar um exemplo abaixo:

```json
  {
    "cep": "number",
    "address": "string",
    "name_recipient": "string",
    "number": "number",
    "district": "string",
    "city": "string",
    "uf": "string",
    "complement": "string | any",
    "userId": "number",
  }

```
## get `/address`

- deve retornar um exemplo abaixo:

```json
 [
  {
    "id": "number",
    "address": "string",
    "cep": "number",
    "city": "string",
    "complement": "string",
    "district": "string",
    "name_recipient": "string",
    "number": "number",
    "primary": "null | boolean",
    "uf": "string",
    "user": {
      "id": "number",
      "name": "string",
      "phone": "string"
    }
  },
 ]

```

## delete `/address/:id`
- deve enviar o id do endereço a ser deletado
- deve retornar um exemplo abaixo:
```
 status 200 OK
```

## put `/address/:currentAddress/:previousAddress`
- deve ser enviado o id do endereço a ser selecionado 
- deve ser enviado o id do endereço favorito atual 
- deve retornar um exemplo abaixo:

```json
  {
    "id": "number",
    "cep": "number",
    "address": "rua x casa y",
    "name_recipient": "string",
    "number": "number",
    "district": "string",
    "city": "string",
    "uf": "string",
    "complement": "string",
    "userId": "number",
    "primary": true
}

```

## ⚙️ Executando os testes

Para executar os testes, use o seguinte comando:

```
npm run test
```

## 🛠️ O aplicativo foi construído usando as seguintes tecnologias:

- Node.js
- express
- TypeScript
- Prisma
- Jest
- supertest
- Git

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

- **Um desenvolvedor** - _Trabalho Inicial_ - [umdesenvolvedor](https://github.com/linkParaPerfil)
- **Fulano De Tal** - _Documentação_ - [fulanodetal](https://github.com/linkParaPerfil)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## 🎁 Expressões de gratidão

- Conte a outras pessoas sobre este projeto 📢;
- Convide alguém da equipe para uma cerveja 🍺;
- Um agradecimento publicamente 🫂;
- etc.
