# Escola de Música

## Autor
- **Nome:** José António Costa Soares  
- **Número de Aluno:** A103995  
- **Foto:**  

  ![José Soares](../images/josesoares.jpg)  

---

## Resumo
Este repositório contém a resolução do **TPC2** proposto na aula teórica realizada no dia 17/02/2025.  

O objetivo deste trabalho foi construir um serviço em **Node.js** que consome uma API de dados servida pelo **json-server** da **Escola de Música** e gera páginas web com as informações.  

Para isso, realizei os seguintes passos:
- **Criação e configuração do servidor** em Node.js para interligação com a API
- **Construção dinâmica das páginas HTML** para apresentação das informações


### Implementação
A solução foi implementada com **JavaScript (Node.js)** e **Python**, uma vez que o problema está dividido em duas grandes partes:


#### 1. Construção da API e Servidor Web
O **servidor web** em **Node.js** é responsável por:
- Consumir os dados da API (`json-server`)
- Processar e organizar as informações
- Gerar **páginas HTML** para exibição no browser  

A API expõe os seguintes endpoints principais:
- `/` → Página inicial  
- `/alunos` → Lista de reparações registadas  
- `/cursos` → Lista de intervenções realizadas  
- `/instrumentos` → Lista de todas as viaturas  

---

## Resultados

**Ficheiros:**  
- [`db.json`](./db.json) → Contém o dataset utilizado pelo `json-server`  
- [`escola_musica.js`](./escola_musica.js) → Servidor principal que interage com o `json-server`  
- [`pages.js`](./pages.js) → Manipulação dinâmica do HTML 