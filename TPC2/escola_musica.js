const axios = require('axios')
const http = require('http')
const pages = require('./pages')
const fs = require('fs')


http.createServer((req,res) => {
    var date = new Date().toISOString().substring(0,16)
    console.log('Method: ' + req.method + ', URL: ' + req.url, 'Date: ' + date)

    if (req.method == 'GET') {
        if (req.url == '/') {
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
            res.write(pages.genLandingPage(date))
            res.end()
        }
        else if (req.url.match(/w3\.css$/)) {
            fs.readFile("w3.css", function(erro, dados) {
                if (erro){
                    res.writeHead(404,{ 'Content-Type': 'text/html;charset=utf-8' })
                    res.end('<p>Operação não suportada: ' + req.url + '</p>')
                } else {
                    res.writeHead(200,{ 'Content-Type': 'text/css;charset=utf-8' })
                    res.end(dados)
                }
            })
        }
        else if (req.url == '/alunos') {
            axios.get('http://localhost:3000/alunos')
            .then(resp => {
                res.writeHead(200,{ 'Content-Type': 'text/html;charset=utf-8' })
                var alunos = resp.data
                res.write(pages.genAlunosPage(alunos,date))
                res.end()
            })
            .catch(err => {
                res.writeHead(404,{ 'Content-Type': 'text/html;charset=utf-8' })
                console.log("Erro: " + err)
                res.write("<p>" + err + "</p>")
                res.end()
            })
        }
        else if (req.url.match(/alunos\/.+/)) {
            var id = req.url.split("/")[2]
            axios.get(`http://localhost:3000/alunos/${id}`)
            .then(resp => {
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8' })
                var aluno = resp.data;
                res.write(pages.genAlunoPage(aluno,date))
                res.end()
            })
            .catch(err => {
                res.writeHead(404,{ 'Content-Type': 'text/html;charset=utf-8' })
                console.log("Erro: " + err)
                res.write("<p>" + err + "</p>")
                res.end()
            })
        }
        else if (req.url == '/cursos') {
            axios.get('http://localhost:3000/cursos')
            .then(resp => {
                res.writeHead(200,{ 'Content-Type': 'text/html;charset=utf-8' })
                var cursos = resp.data
                res.write(pages.genCursosPage(cursos,date))
                res.end()
            })
            .catch(err => {
                res.writeHead(404,{ 'Content-Type': 'text/html;charset=utf-8' })
                console.log("Erro: " + err)
                res.write("<p>" + err + "</p>")
                res.end()
            })
        }
        else if (req.url == '/instrumentos') {
            axios.get('http://localhost:3000/instrumentos')
            .then(resp => {
                res.writeHead(200,{ 'Content-Type': 'text/html;charset=utf-8' })
                var instrumentos = resp.data
                res.write(pages.genInstrumentosPage(instrumentos,date))
                res.end()
            })
            .catch(err => {
                res.writeHead(404,{ 'Content-Type': 'text/html;charset=utf-8' })
                console.log("Erro: " + err)
                res.write("<p>" + err + "</p>")
                res.end()
            })
        }
    }
}).listen(1234)

console.log('Servidor à escuta na porta 1234');