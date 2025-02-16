# Oficina de Reparações

## Autor
- **Nome:** José António Costa Soares  
- **Número de Aluno:** A103995  
- **Foto:**  

  ![José Soares](../images/josesoares.jpg)  

---

## Resumo
Este repositório contém a resolução do **TPC1** proposto na aula teórica realizada no dia 10/02/2025.  

O objetivo deste trabalho foi construir um serviço em **Node.js** que consome uma API de dados servida pelo **json-server** da **Oficina de Reparações** e gera páginas web dinâmicas com as informações.  

Para isso, foram realizados os seguintes passos:
- **Preparação do dataset** no formato adequado para o `json-server`
- **Criação e configuração do servidor** em Node.js para interligação com a API
- **Construção dinâmica das páginas HTML** para apresentação das informações


### Implementação
A solução foi implementada utilizando **JavaScript (Node.js)** e **Python**, dividindo o problema em duas grandes partes:

#### 1. Geração do Dataset (`data.json`)
A base de dados foi criada e estruturada para ser utilizada pelo `json-server`.  
O dataset contém informações sobre:
- **Reparações**
- **Intervenções**
- **Viaturas**

#### 2. Construção da API e Servidor Web
O **servidor web** em **Node.js** é responsável por:
- Consumir os dados da API (`json-server`)
- Processar e organizar as informações
- Gerar **páginas HTML** para exibição no browser  

A API expõe os seguintes endpoints principais:
- `/` → Página inicial  
- `/reparacoes` → Lista de reparações registadas  
- `/intervencoes` → Lista de intervenções realizadas  
- `/viaturas` → Lista de todas as viaturas  
- `/viaturas/marcas` → Lista de viaturas agrupadas por marca  

---

## Resultados

**Ficheiros:**  
- [`dataset.json`](./dataset.json) → Contém o dataset utilizado pelo `json-server`  
- [`generate_data.py`](./dataset/gen_reparacoes_dataset.py) → Script Python que gera o dataset  
- [`main.js`](./main.js) → Servidor principal que interage com o `json-server`  
- [`views.js`](./views.js) → Manipulação dinâmica do HTML 