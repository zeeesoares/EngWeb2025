# Turma EngWeb :/

## Autor
- **Nome:** José António Costa Soares  
- **Número de Aluno:** A103995  
- **Foto:**  

  ![José Soares](../images/josesoares.jpg)  

---

## Resumo
Este repositório contém a resolução do **TP3** proposto na aula teórica realizada no dia 25/02/2025.  

O objetivo deste trabalho foi construir um serviço em **Node.js** que consome uma API de dados servida pelo **json-server** da **Turma de EngWeb** e gera páginas web com as informações.  

Para isso, realizei os seguintes passos:
- **Criação e configuração do servidor** em Node.js para interligação com a API
- **Construção dinâmica das páginas HTML** para apresentação das informações


### Implementação
A solução foi implementada com **JavaScript (Node.js)** e **Python**.


#### 1. Construção da API e Servidor Web
O **servidor web** em **Node.js** é responsável por:
- Consumir os dados da API (`json-server`)
- Processar e organizar as informações
- Gerar **páginas HTML** para exibição no browser  

A API expõe os seguintes endpoints principais:
- `/` → Página inicial  
- `/alunos` → Lista de alunos registados  
- `/alunos/:id` → Aluno registado


Tem também suporte aos metodos REST:
- `/alunos/edit/:id` 
- `/alunos/registo` 
- `/alunos/delete/:id` 

---

## Resultados

**Ficheiros:**  
- [`db.json`](./db.json) → Contém o dataset utilizado pelo `json-server`  
- [`alunos_server_skeleton.js`](./alunos_server_skeleton.js) → Servidor principal que interage com o `json-server`  
- [`templates.js`](./templates.js) → Manipulação dinâmica do HTML 
- [`static.js`](./static.js) → Serviço responsável pelos componentes web estáticos (favicon,w3css, etc.)