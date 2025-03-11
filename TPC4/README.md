# Turma EngWeb (+ espress.js & pug 🐶)

## Autor
- **Nome:** José António Costa Soares  
- **Número de Aluno:** A103995  
- **Foto:**  

  ![José Soares](../images/josesoares.jpg)  

---

## Resumo
Este repositório contém a resolução do **TP4** proposto na aula teórica realizada no dia 10/03/2025.  

O objetivo deste trabalho foi construir um serviço em **Node.js** que consome uma API de dados servida pelo **json-server** da **Turma de EngWeb** e gera páginas web com as informações.  

Para isso, realizei os seguintes passos:
- **Criação e configuração do servidor** através da framework **```express.js```**
- **Construção dinâmica das páginas HTML com  ```PUG```** para apresentação das informações


### Implementação
A solução foi implementada com **JavaScript**.


#### 1. Construção da API e Servidor Web
O **servidor web** em **express.js** é responsável por:
- Consumir os dados da API (`json-server`)
- Processar e organizar as informações através dos routers
- Gerar **páginas HTML** para exibição no browser com a utilização de templates **pug**

A API expõe os seguintes endpoints principais:
- `/` → Página inicial  
- `/filmes` → Lista de alunos registados  
- `/filmes/:id` → Aluno registado


Tem também suporte aos metodos REST:
- `/filmes/edit/:id` 
- `/filmes/delete/:id` 

---

## Resultados

**Ficheiros:**  
- [`cinema.json`](./cinema.json) → Contém o dataset utilizado pelo `json-server`  
- [`app.js`](./app.js) → Servidor principal que interage com o `json-server`  
