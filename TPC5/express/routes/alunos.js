var express = require('express');
var router = express.Router();
var axios = require('axios')

var date = new Date().toISOString().substring(0,10)

router.get('/', function(req, res, next) {
  axios.get('http://localhost:3000/alunos')
  .then(resp => {
      data = resp.data
      res.render('studentsListPage', {
        title: 'Alunos',
        students: data,
        d: date
    });
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});


router.get('/registo', function(req,res) {
  res.render('studentFormPage', {
    title: 'Registo de Aluno'
  });
});

router.post('/registo', function(req, res) {
  axios.post('http://localhost:3000/alunos', req.body)
  .then( resp => {
      res.redirect('/alunos')
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});

router.get('/edit/:id', function(req,res) {
  axios.get('http://localhost:3000/alunos/' + req.params.id)
  .then(resp => {
      data = resp.data
      res.render('studentFormEditPage', {
        title: 'Edição de Aluno',
        student: data
      });
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })

})

router.post('/edit/:id', function(req,res) {
  axios.put('http://localhost:3000/alunos/'+ req.params.id , req.body)
  .then( resp => {
      res.redirect('/alunos')
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});

router.get('/delete/:id' , function(req, res) {
  axios.delete('http://localhost:3000/alunos/' + req.params.id)
  .then( resp => {
      res.redirect('/alunos')
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:3000/alunos/' + req.params.id)
  .then(resp => {
      data = resp.data
      res.render('studentPage', {
        title: req.params.id,
        student: data,
        d: date
      });
  })
  .catch( err => {
      console.log(err)
      res.status(err.status || 500);
      res.render('error',  {
        error: err
      });
  })
});

module.exports = router;
