const http = require('http')
const axios = require('axios')
const views = require('./views')

http.createServer((req, res) => {
    console.log("METHOD: " + req.method);
    console.log("URL: " + req.url);

    if (req.method === 'GET') {
        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            axios.get('http://localhost:3000/reparacoes')
                .then(() => {
                    res.write(views.genLandingPageHTML())
                    res.end()
                })
                .catch(err => {
                    console.log("Erro: " + err)
                    res.write("<p>" + err + "</p>")
                    res.end()
                })
        }
        else if (req.url == '/reparacoes') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            axios.get('http://localhost:3000/reparacoes')
                .then(resp => {
                    var reparacoes = resp.data
                    res.write(views.genReparacoesHTML(reparacoes))
                    res.end()
                })
                .catch(err => {
                    console.log("Erro: " + err)
                    res.write("<p>" + err + "</p>")
                    res.end()
                })
        }
        else if (req.url.match(/\/reparacoes\/.+/)) {
            var id = req.url.split("/")[2]
            axios.get(`http://localhost:3000/reparacoes/${id}`)
                .then(resp => {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                    var reparacao = resp.data;
                    res.write(views.genReparacaoPageHTML(reparacao))
                    res.end()
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' })
                    res.end()
                    console.log(err)
                })
        }
        else if (req.url == '/intervencoes') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            axios.get('http://localhost:3000/intervencoes')
                .then(resp => {
                    var intervencoes = resp.data
                    res.write(views.genIntervencoesHTML(intervencoes))
                    res.end()
                })
                .catch(err => {
                    console.log("Erro: " + err)
                    res.write("<p>" + err + "</p>")
                    res.end()
                })
        }
        else if (req.url == '/viaturas') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            axios.get('http://localhost:3000/viaturas')
                .then(resp => {
                    res.write(views.genViaturasHTML(resp.data));
                    res.end();
                })
                .catch(err => {
                    console.log("Erro: " + err);
                    res.write("<p>Erro ao buscar as viaturas.</p>");
                    res.end();
                });
        }
        else if (req.url == '/viaturas/marcas') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            axios.get('http://localhost:3000/viaturas')
                .then(resp => {
                    let marcas = views.groupViaturasByMarca(resp.data);
                    res.write(views.genViaturasMarcasHTML(marcas));
                    res.end();
                })
                .catch(err => {
                    console.log("Erro: " + err);
                    res.write("<p>Erro ao buscar as viaturas.</p>");
                    res.end();
                });
        }
        else if (req.url.startsWith('/viaturas/marcas/')) {
            let marca = decodeURIComponent(req.url.split("/").pop());
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            axios.get('http://localhost:3000/viaturas')
                .then(resp => {
                    let marcas = views.groupViaturasByMarca(resp.data);
                    if (marcas[marca]) {
                        res.write(views.genViaturasPorMarcaHTML(marca, marcas[marca]));
                    } else {
                        res.write(`<p>Marca não encontrada.</p>`);
                    }
                    res.end();
                })
                .catch(err => {
                    console.log("Erro: " + err);
                    res.write("<p>Erro ao buscar as viaturas.</p>");
                    res.end();
                });
        }
    }

}).listen(1234)

console.log('Servidor à escuta na porta 1234');
