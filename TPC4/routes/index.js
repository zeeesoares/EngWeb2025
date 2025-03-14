var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res) {
  res.render('index', { 
    title: 'EngWeb2025' ,
    docente: 'jcr',
    instituicao: 'uminho',
    curso: 'LEI'
  });
});

router.get('/filmes', function(req, res) {
  axios.get('http://localhost:3000/filmes')
    .then(resp => {
      res.render('filmes', { 
        title: 'Filmes' ,
        lista: resp.data
      });
    })
    .catch(erro => {
      console.log(erro)
      res.render('error', {error: erro})
    });
});

router.get('/filmes/:id', function(req, res) {
  axios.get('http://localhost:3000/filmes/' + req.params.id)
    .then(resp => {
      res.render('filme', { 
        title: 'Filme' ,
        filme: resp.data
      });
    })
    .catch(erro => {
      console.log(erro)
      res.render('error', {error: erro})
    });
});

router.get('/filmes/edit/:id', function(req, res) {
  axios.get('http://localhost:3000/filmes/' + req.params.id)
    .then(resp => {
      res.render('edit', { 
        title: 'Editar Filme' ,
        filme: resp.data
      });
    })
    .catch(erro => {
      console.log(erro)
      res.render('error', {error: erro})
    });
});

router.get('/autor/:nome', function(req, res) {
  axios.get('http://localhost:3000/filmes')
    .then(resp => {
      const filmesEncontrados = [];

      for (let filme of resp.data) {
        for (let person of filme.cast) {
          if (person === req.params.nome) {
            filmesEncontrados.push(filme);
            break;
          }
        }
      }
      
      res.render('autor', { 
        title: req.params.nome,
        filmes: filmesEncontrados
      });
    })
    .catch(erro => {
      console.log(erro);
      res.render('error', { error: erro });
    });
});


router.get('/filmes/delete/:id', function(req, res) {
  axios.delete('http://localhost:3000/filmes/' + req.params.id)
    .then(resp => {
      res.redirect('/filmes')
    })
    .catch(erro => {
      console.log(erro)
      res.render('error', {error: erro})
    });
});


router.post('/filmes/edit/:id', function(req, res) {
  const updatedFilme = {
    titple: req.body.title,
    year: req.body.year,
    cast: req.body.cast.split(',').map(item => item.trim()),
    genres: req.body.genres.split(',').map(item => item.trim())
  };

  axios.put('http://localhost:3000/filmes/' + req.params.id, updatedFilme)
    .then(resp => {
      res.redirect('/filmes/' + req.params.id);
    })
    .catch(erro => {
      console.log(erro);
      res.render('error', {error: erro});
    });
});

module.exports = router;
