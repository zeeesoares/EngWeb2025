# Contratos (+ espress.js & pug 🐶 & mongoDB (docker))

## Autor
- **Nome:** José António Costa Soares  
- **Número de Aluno:** A103995  
- **Foto:**  

  ![José Soares](../images/josesoares.jpg)  

---

## Resumo
Este repositório contém a resolução do **TP6** proposto na aula teórica realizada no dia 24/03/2025.  

O objetivo deste trabalho foi consolidar a implementação de uma API de dados usando o MongoDB
para persistir os dados e a implementação de uma interface que se sirva da camada de dados.

O dataset corresponde a uma lista de contratos registados no Portal dos Contratos Públicos para o projeto Portal da Transparência

Para isso, realizei os seguintes passos:
- **Criação e configuração da Base dadados em MongoDB** através do Docker em conjunto com MongoDB.
- **Construção da API de dados de suporte** para o chamamento dos métodos necessários.


### Implementação
A solução foi implementada com **JavaScript**.

#### Queries MongoDB
- Query 1
```
db.contratos.find().count()
```

- Query 2
```
db.contratos.find({tipoprocedimento : "Ajuste Direto Regime Geral"})
```

- Query 3
```
db.contratos.distinct("entidade_comunicante").sort()
```

- Query 4
```
db.contratos.aggregate([
  { $group: { _id: "$tipoprocedimento", count: { $sum: 1 } } }, 
  { $sort: { count: -1 } }
]).forEach(function(doc) { 
  print("Tipo: " + doc._id + " , Contagem: " + doc.count); 
});
```

#### 1. Construção da API de Dados
A **api** em **express.js** é responsável por:
- Consumir os dados da base de dados instalada num container Docker.
- Processar os métodos para as informações através dos routers
- Fornecer resposta aos pedidos da camada de negócio e de construção de páginas.

A API de dados expõe os seguintes médodos:
- ```GET /contratos```: devolve uma lista com todos os registos;
- ```GET /contratos/:id```: devolve o registo com identificador id (corresponde ao idcontrato);
- ```GET /contratos?entidade=EEEE```: devolve a lista dos contratos correspondentes à entidade EEEE;
- ```GET /contratos?tipo=AAA```: devolve a lista dos contratos com tipo de procedimento igual a AAA;
- ```GET /contratos/entidades```: devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições;
- ```GET /contratos/tipos```: devolve a lista dos tipos de procedimento ordenada alfabeticamente e sem repetições;
- ```POST /contratos```: acrescenta um registo novo à BD;
- ```DELETE /contratos/:id```: elimina da BD o registo com o identificador id;
- ```PUT /contratos/:id```: altera o registo com o identificador id


#### 2. Construção da Interface

- No browser, o endereço  http://localhost:16001 deverá conter a página principal constituída por:
  - Um cabeçalho com metainformação à tua escolha;
  - Uma tabela contendo a lista de registos, um por linha, com os campos: idcontrato,objectoContrato, dataCelebracaoContrato, precoContratual,NIPC_entidade_comunicante, entidade_comunicante;
  - O campo idcontrato deverá ser um link para a página do contrato com esse identificador;
  - O campo NIPC_entidade_comunicante deverá ser um link para a página dessa entidade.

- No browser, o endereço http://localhost:16001/:id deverá conter a página do contrato cujo identificador foi passado na rota:
  - Esta página deverá conter todos os campos do contrato e um link para voltar à página principal.

- No browser, o endereço http://localhost:16001/entidades/:nipc deverá conter a página da entidade cujo NIPC_entidade_comunicante corresponde ao parâmetro passado na rota :
  - Na página de cada entidade deverá constar este identificador e o respetivo nome da entidade;
  - Uma tabela com a lista de contratos dessa entidade (tabela com estrutura semelhante à da página principal);
  - O somatório do valor dos contratos;
  - E um link para voltar à página principal.
  
---

## Resultados

**Ficheiros:**  
- [`contratos.js`](apiContratos/routes/contratos.js) → Contém os métodos que a api de dados fornece. 
- [`index.js`](interface/routes/index.js) → Contém os métodos que a Interface implementa. 
