// alunos_server.js
// EW2024 : 04/03/2024
// by jcr

var http = require('http')
var axios = require('axios')
const { parse } = require('querystring');

var templates = require('./templates')          // Necessario criar e colocar na mesma pasta
var static = require('./static.js')             // Colocar na mesma pasta

// Aux functions
function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}


// Server creation

var alunosServer = http.createServer((req, res) => {
    // Logger: what was requested and when it was requested
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    // Handling request
    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET": 
                // GET /alunos --------------------------------------------------------------------
                if (req.url == "/alunos" || req.url == "/") {
                    axios.get('http://localhost:3000/alunos')
                            .then(resp => {
                                data = resp.data
                                res.writeHead(200,{'content-Type' : 'text/html, charset=utf-8'})
                                res.write(templates.studentsListPage(data,d))
                                res.end()
                            })
                            .catch( err => {
                                console.log(err)
                                res.writeHead(501,{'content-Type' : 'text/html, charset=utf-8'})
                                res.end()
                            })
                }
                // GET /alunos/:id --------------------------------------------------------------------
                else if (req.url.match(/\/alunos\/A[0-9]+/)) {
                    id = req.url.split('/')[2]
                    axios.get('http://localhost:3000/alunos/' + id)
                    .then( resp => {
                        aluno = resp.data
                        res.writeHead(200,{'content-Type' : 'text/html, charset=utf-8'})
                        res.write(templates.studentPage(aluno,d))
                        res.end()
                    })
                    .catch(err => {
                        console.log(err)
                        res.writeHead(500,{'content-Type' : 'text/html, charset=utf-8'})
                        res.end()
                    })
                }
                
                // GET /alunos/registo --------------------------------------------------------------------
                else if (req.url == ('/alunos\/registo')) {
                    res.writeHead(200,{'content-Type' : 'text/html, charset=utf-8'})
                    res.write(templates.studentFormPage(d))
                    res.end()
                }

                // GET /alunos/edit/:id --------------------------------------------------------------------

                else if (req.url.match(/\/alunos\/edit\/A[0-9]+/)) {
                    id = req.url.split('/')[3]
                    axios.get('http://localhost:3000/alunos/' + id)
                    .then( resp => {
                        aluno = resp.data
                        res.writeHead(200,{'content-Type' : 'text/html, charset=utf-8'})
                        res.write(templates.studentFormEditPage(aluno,d))
                        res.end()
                    })
                    .catch(err => {
                        console.log(err)
                        res.writeHead(500,{'content-Type' : 'text/html, charset=utf-8'})
                        res.end()
                    })
                }

                // GET /alunos/delete/:id --------------------------------------------------------------------
                
                else if (req.url.match(/\/alunos\/delete\/A[0-9]+/)) {
                    id = req.url.split('/')[3]
                    axios.delete('http://localhost:3000/alunos/' + id)
                    .then(resp => {
                        res.writeHead(200,{'content-Type' : 'text/html, charset=utf-8'})
                        res.write(templates.redirectDeletePage(id))
                        res.end()
                    })
                    .catch( err => {
                        console.log(err)
                        res.writeHead(501,{'content-Type' : 'text/html, charset=utf-8'})
                        res.end()
                    })
                }

                // GET ? -> Lancar um erro
                break
            case "POST":
                // POST /alunos/registo --------------------------------------------------------------------
                if (req.url === "/alunos/registo") {
                    collectRequestBodyData(req,result => {
                        if (result) {
                            axios.post('http://localhost:3000/alunos', result)
                            .then(resp => {
                                res.writeHead(201,{'content-Type' : 'text/html, charset=utf-8'})
                                res.write(templates.studentPage(resp.data,d))
                                res.end()
                            })
                            .catch( err => {
                                console.log(err)
                                res.writeHead(501,{'content-Type' : 'text/html, charset=utf-8'})
                                res.end()
                            })
                        } else {
                            //Anotar erro
                            console.log('No Body Data')
                            res.writeHead(500,{'content-Type' : 'text/html, charset=utf-8'})
                            res.end()
                        }
                    })
                }
                else if (req.url.match(/\/alunos\/edit\/A[0-9]+/)) {
                    collectRequestBodyData(req,result => {
                        if (result) {
                            axios.put('http://localhost:3000/alunos/' + result.id, result)
                            .then(resp => {
                                res.writeHead(201,{'content-Type' : 'text/html, charset=utf-8'})
                                res.write(templates.studentPage(resp.data,d))
                                res.end()
                            })
                            .catch( err => {
                                console.log(err)
                                res.writeHead(501,{'content-Type' : 'text/html, charset=utf-8'})
                                res.end()
                            })
                        } else {
                            //Anotar erro
                            console.log('No Body Data')
                            res.writeHead(500,{'content-Type' : 'text/html, charset=utf-8'})
                            res.end()
                        }
                    })
                    
                }
                break


                // POST /alunos/edit/:id --------------------------------------------------------------------
            case "PUT":
                if (req.url.match(/\/alunos\/edit\/A[0-9]+/)) {
                    collectRequestBodyData(req,result => {
                        if (result) {
                            axios.put('http://localhost:3000/alunos/' + result.id, result)
                            .then(resp => {
                                res.writeHead(201,{'content-Type' : 'text/html, charset=utf-8'})
                                res.write(`<pre>Edição efetuada!${JSON.stringify(resp.data)}</pre>`)
                                res.end()
                            })
                            .catch( err => {
                                console.log(err)
                                res.writeHead(501,{'content-Type' : 'text/html, charset=utf-8'})
                                res.end()
                            })
                        } else {
                            //Anotar erro
                            console.log('No Body Data')
                            res.writeHead(500,{'content-Type' : 'text/html, charset=utf-8'})
                            res.end()
                        }
                    })
                    
                }
                break;
                
            default: 
                // Outros metodos nao sao suportados
                res.writeHead(500,{'content-Type' : 'text/html, charset=utf-8'})
                res.write('<pre> Método não suportado!</pre>')
                res.end()
                break;
        }
    }
})

alunosServer.listen(7777, ()=>{
    console.log(`Servidor à escuta na porta http://localhost:7777...`)
})



