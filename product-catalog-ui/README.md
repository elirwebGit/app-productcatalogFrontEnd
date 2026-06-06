# ProductCatalog

Aplicação de catálogo de produtos desenvolvida em .NET e React com foco em boas práticas de arquitetura, Clean Architecture, SOLID, CQRS, DDD e TDD.

## Objetivo

O projeto foi desenvolvido para demonstrar conhecimentos em:
Clean Architecture
Domain-Driven Design (DDD)
SOLID
CQRS
Dependency Injection
Entity Framework Core
Testes Unitários
React + TypeScript
Integração Frontend e Backend

### Arquitetura

A solução foi organizada seguindo os princípios da Clean Architecture.

### Camadas

## Domain

Contém as regras de negócio centrais da aplicação:

Entidades
Interfaces de Repositório
Exceções de Domínio


### Application

Responsável pelos casos de uso da aplicação:

Commands
Queries
Handlers
DTOs
Responses
Infrastructure

Responsável pelos detalhes de implementação:

Entity Framework Core
DbContext
Repositórios
Configuração de Banco de Dados
API (Presenter)

Camada responsável por expor os endpoints REST.

Controllers
Middlewares
Configuração da aplicação
Frontend

Aplicação React responsável pelo consumo da API.

Tecnologias Utilizadas
Backend
.NET 8
ASP.NET Core Web API
Entity Framework Core
SQL Server
Dependency Injection
Swagger

### Frontend
React
TypeScript
Axios
Testes
xUnit
Moq
Padrões e Conceitos Aplicados
Clean Architecture

Separação clara das responsabilidades entre domínio, aplicação, infraestrutura e apresentação.

### SOLID

Aplicação dos princípios SOLID para redução de acoplamento e aumento da manutenibilidade.

### CQRS

Separação entre operações de escrita (Commands) e leitura (Queries).

Exemplos:

Commands:

CreateProductCommand
UpdateProductCommand
DeleteProductCommand

Queries:

GetProductsQuery
GetProductByIdQuery
Dependency Injection

Utilização do container nativo do .NET para gerenciamento das dependências.

### Repository Pattern

Abstração do acesso a dados através de interfaces no domínio.

Funcionalidades
Produtos
Criar produto
Listar produtos
Atualizar produto
Excluir produto
Estrutura da Solução
src

├── ProductCatalog.Domain
├── ProductCatalog.Application
├── ProductCatalog.Infrastructure
├── ProductCatalog.Presenter
└── ProductCatalog.Tests
Estrutura Frontend
src

├── features
│   └── products
│       ├── models
│       ├── pages
│       └── services
│
└── shared
    └── services
Como Executar o Projeto

### Backend
Configurar a string de conexão no appsettings.json
Executar as migrations
dotnet ef database update
Executar a API
dotnet run
Acessar o Swagger
https://localhost:{porta}/swagger
Frontend

### Instalar dependências:

npm install

Executar aplicação:

npm start

A aplicação estará disponível em:

http://localhost:3000
Melhorias Futuras
Paginação
Filtros de pesquisa
FluentValidation
Testes de integração
Docker Compose
Autenticação JWT
Logging estruturado com Serilog

### Autor

Elir Ribeiro

Desenvolvedor Backend .NET com foco em arquitetura de software, APIs REST e boas práticas de desenvolvimento.