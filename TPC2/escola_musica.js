const http = require('http');
const fs = require('fs');
const pages = require('./pages');
const utils = require('./utils');

http.createServer((req, res) => {
    var date = new Date().toISOString().substring(0,16);
    console.log(`Method: ${req.method}, URL: ${req.url}, Date: ${date}`);

    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            res.end(pages.genLandingPage(date));
        } 
        else if (req.url.match(/w3\.css$/)) {
            fs.readFile("w3.css", (erro, dados) => {
                if (erro) {
                    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                    res.end(`<p>Operação não suportada: ${req.url}</p>`);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/css;charset=utf-8' });
                    res.end(dados);
                }
            });
        } 
        else if (req.url === '/alunos') {
            utils.fetchData('/alunos', res, data => pages.genAlunosPage(data, date));
        } 
        else if (req.url.match(/alunos\/.+/)) {
            const id = req.url.split("/")[2];
            utils.fetchData(`/alunos/${id}`, res, data => pages.genAlunoPage(data, date));
        } 
        else if (req.url === '/cursos') {
            utils.fetchData('/cursos', res, data => pages.genCursosPage(data, date));
        } 
        else if (req.url.match(/cursos\/.+/)) {
            const id = req.url.split("/")[2];
            utils.fetchData(`/alunos?curso=${id}`, res, data => pages.genAlunosPage(data, date));
        } 
        else if (req.url === '/instrumentos') {
            utils.fetchData('/instrumentos', res, data => pages.genInstrumentosPage(data, date));
        } 
        else if (req.url.match(/instrumentos\/.+/)) {
            const id = req.url.split("/")[2];
            utils.fetchData(`/alunos?instrumento=${id}`, res, data => pages.genAlunosPage(data, date));
        } 
        else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
            res.end('<p>Página não encontrada</p>');
        }
    }
}).listen(1234);

console.log('Servidor à escuta na porta 1234');
