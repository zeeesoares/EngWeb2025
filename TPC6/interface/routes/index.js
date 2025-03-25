var express = require('express');
var axios = require('axios');
const contrato = require('../../apiContratos/models/contrato');
var router = express.Router();

router.get('/', function (req, res, next) {
  axios.get('http://localhost:16000/contratos')
    .then(resp => {
      data = resp.data
      res.render('indexPage', {
        title: 'Contratos',
        contratos: data,
      });
    })
    .catch(err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error', {
        error: err
      });
    })
});

router.get('/entidades/:nipc', function (req, res, next) {
  var nipc = req.params.nipc
  axios.get('http://localhost:16000/contratos/entidades/' + nipc)
    .then(resp => {
      data = resp.data
      if (data.length > 0 && data[0].hasOwnProperty('entidade_comunicante')) {
        var soma = 0;
        data.forEach(contrato => {
          soma += contrato['precoContratual'];
        });
        soma = soma.toFixed(2);


        res.render('entComPage', {
          title: nipc,
          nipc: data[0]['entidade_comunicante'],
          contratos: data,
          soma: soma
        });
      } else {
        res.status(404).render('error', {
          error: 'Entidade comunicante não encontrada ou dados inválidos.'
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error', {
        error: err
      });
    })
});

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  axios.get('http://localhost:16000/contratos/' + id)
    .then(resp => {
      data = resp.data
      res.render('contractPage', {
        title: id,
        contrato: data,
      });
    })
    .catch(err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error', {
        error: err
      });
    })
});

module.exports = router;
