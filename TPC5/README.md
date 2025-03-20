# Turma EngWeb (+ espress.js & pug 🐶 & mongoDB (docker))

## Autor
- **Nome:** José António Costa Soares  
- **Número de Aluno:** A103995  
- **Foto:**  

  ![José Soares](../images/josesoares.jpg)  

---

## Resumo
Este repositório contém a resolução do **TP5** proposto na aula teórica realizada no dia 17/03/2025.  

O objetivo deste trabalho foi reutilzar um serviço em **Node.js** que consome uma API de dados servida pelo agora pela API de dados criada para a **Turma de EngWeb** através do **MongoDB** com recurso do modulo Mongoose.  

Para isso, realizei os seguintes passos:
- **Criação e configuração da Base dadados em MongoDB** através do Docker em conjunto com MOngoDB.
- **Construção da API de dados de suporte** para o chamamento dos métodos necessários.


### Implementação
A solução foi implementada com **JavaScript**.


#### 1. Construção da API de Dados
A **api** em **express.js** é responsável por:
- Consumir os dados da base de dados instalada num container Docker.
- Processar os métodos para as informações através dos routers
- Fornecer resposta aos pedidos da camada de negócio e de construção de páginas.

A API de dados expõe os seguintes médodos:
- GET alunos
- GET aluno
- POST Aluno
- PUT :id
- DELETE :id
---

## Resultados

**Ficheiros:**  
- [`alunos.js`](apiAlunos/routes/alunos.js) → Contém os métodos que a api de dados fornece 
