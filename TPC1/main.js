const http = require('http')
const axios = require('axios')

function genReparacaoHTML(reparacao) {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
            <a href="/reparacoes/${reparacao.id}">
                <h2 class="font-bold text-lg">${reparacao.nome}</h2> 
                <p class="text-gray-700"><strong>ID:</strong> ${reparacao.id}</p>
                <p class="text-gray-700"><strong>Data:</strong> ${reparacao.data}</p>
                <p class="text-gray-700"><strong>NIF:</strong> ${reparacao.nif}</p>
                <p class="text-gray-700"><strong>Marca:</strong> ${reparacao.viatura.marca}</p>
                <p class="text-gray-700"><strong>Modelo:</strong> ${reparacao.viatura.modelo}</p>
                <p class="text-gray-700"><strong>Nº Intervenções:</strong> ${reparacao.nr_intervencoes}</p>
            </a>
        </div>
    `
}

function genIntervencaoHTML(intervencao) {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
            <h2 class="font-bold text-lg">${intervencao.nome}</h2> 
            <p class="text-gray-700"><strong>ID:</strong> ${intervencao.id}</p>
            <p class="text-gray-700"><strong>Descrição:</strong> ${intervencao.descricao}</p>
        </div>
    `
}

function genViaturaHTML(viatura) {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
            <h2 class="font-bold text-lg">ID: ${viatura.id}</h2> 
            <p class="text-gray-700"><strong>Modelo:</strong> ${viatura.marca}</p>
            <p class="text-gray-700"><strong>Modelo:</strong> ${viatura.modelo}</p>
        </div>
    `
}

function genIntervencoesList(intervencao) {
    return `
        <li class="ml-4 mt-2 text-gray-700"> <b>${intervencao.codigo}</b> -> ${intervencao.nome}</li>
    `
}

function genReparacaoPageHTML(reparacao) {
    return `
        <html>
            <head>
                <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">
                <title>${reparacao.nome}</title>
                <meta charset="UTF-8">
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body class="bg-gray-100">
                <div class="bg-teal-500 w-full mb-3">
                    <header class="text-white p-8 flex justify-between items-center">
                        <a href="/reparacoes" class="text-left text-lg hover:underline">
                            <h3 class="font-bold">Voltar</h3>
                        </a>
                        <h1 class="text-3xl font-bold text-center flex-1">${reparacao.nome}</h1>
                    </header>
                </div>
                <div class="bg-white m-3 shadow-md rounded-lg p-4 border border-gray-300 text-teal-500 hover:shadow-lg">
                    <p class="text-gray-700"><strong>Nome:</strong> ${reparacao.nome}</p>
                    <p class="text-gray-700"><strong>ID:</strong> ${reparacao.id}</p>
                    <p class="text-gray-700"><strong>Data:</strong> ${reparacao.data}</p>
                    <p class="text-gray-700"><strong>NIF:</strong> ${reparacao.nif}</p>
                    <p class="text-gray-700"><strong>Marca:</strong> ${reparacao.viatura.marca}</p>
                    <p class="text-gray-700"><strong>Modelo:</strong> ${reparacao.viatura.modelo}</p>
                    <p class="text-gray-700"><strong>Matricula:</strong> ${reparacao.viatura.matricula}</p>
                    <p class="text-gray-700"><strong>Nº Intervenções:</strong> ${reparacao.nr_intervencoes}</p>
                    <p class="text-gray-700"><strong>Intervenções:</strong>\n</p>

                    <ul>
                        ${reparacao.intervencoes.map(r => genIntervencoesList(r)).join('\n')}
                    </ul>
                </div>
                <footer class="w-full text-white bg-teal-500 border-t shadow-sm text-center p-4">
                    <p>&copy; 2025 José Soares. All rights reserved.</p>
                </footer>
            </body>
        </html>
    `
}


function genReparacoesHTML(reparacoes) {
    return `
    <html>
        <head>
            <title>Lista de Reparações</title>
            <meta charset="UTF-8">
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">

        </head>
        <body class="bg-gray-100">
            <div class="bg-teal-500 w-full mb-6">
                <header class="text-white p-8 flex justify-between items-center">
                    <a href="/" class="text-left text-lg hover:underline">
                        <h3 class="font-bold">Voltar</h3>
                    </a>
                    <h1 class="text-3xl font-bold text-center flex-1">Lista de Reparações</h1>
                </header>
            </div>
            <div class="grid grid-cols-3 gap-4 mx-6">
                ${reparacoes.map(r => genReparacaoHTML(r)).join('\n')}
            </div>
            <footer class="w-full text-white bg-teal-500 border-t shadow-sm text-center p-4">
                <p>&copy; 2025 José Soares. All rights reserved.</p>
            </footer>
        </body>
    </html>
    `
}

function genIntervencoesHTML(intervencoes) {
    return `
    <html>
        <head>
            <title>Lista de Intervenções</title>
            <meta charset="UTF-8">
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">

        </head>
        <body class="bg-gray-100">
            <div class="bg-teal-500 w-full mb-6">
                <header class="text-white p-8 flex justify-between items-center">
                    <a href="/" class="text-left text-lg hover:underline">
                        <h3 class="font-bold">Voltar</h3>
                    </a>
                    <h1 class="text-3xl font-bold text-center flex-1">Lista de Intervenções</h1>
                </header>
            </div>
            <div class="grid grid-cols-5 gap-4 mx-6">
                ${intervencoes.map(r => genIntervencaoHTML(r)).join('\n')}
            </div>
            <footer class="w-full text-white bg-teal-500 border-t shadow-sm text-center p-6 mt-6">
                <p>&copy; 2025 José Soares. All rights reserved.</p>
            </footer>
        </body>
    </html>
    `
}

function genViaturasHTML(viaturas) {
    return `
    <html>
        <head>
            <title>Lista de Intervenções</title>
            <meta charset="UTF-8">
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">

        </head>
        <body class="bg-gray-100">
            <div class="bg-teal-500 w-full mb-6">
                <header class="text-white p-8 flex justify-between items-center">
                    <a href="/" class="text-left text-lg hover:underline">
                        <h3 class="font-bold">Voltar</h3>
                    </a>
                    <h1 class="text-3xl font-bold text-center flex-1">Lista de Viaturas</h1>
                </header>
            </div>
            <div class="grid grid-cols-5 gap-4 mx-6">
                ${viaturas.map(r => genViaturaHTML(r)).join('\n')}
            </div>
            <footer class="w-full text-white bg-teal-500 border-t shadow-sm text-center p-6 mt-6">
                <p>&copy; 2025 José Soares. All rights reserved.</p>
            </footer>
        </body>
    </html>
    `
}


function genLandingPageHTML() {
    return `
    <html>
        <head>
            <title>Oficina de Reparações</title>
            <meta charset="UTF-8">
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">

        </head>
        <body class="bg-gray-100">
            <div class="bg-teal-500 w-full mb-6">
                <header class="text-white text-center py-8">
                    <h1 class="text-3xl font-bold">Oficina de Reparações</h1>
                </header>
            </div>
            <div class="grid grid-cols-3 gap-4 mx-6">
                <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
                    <h2 class="font-bold text-lg">Lista de Reparações</h2> 
                    <p class="text-black p-8"> Lista de todas as reparações presente na oficina, pode consultar clique <a href="/reparacoes" class="text-teal-500 hover:underline"> aqui</a>.</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
                    <h2 class="font-bold text-lg">Lista de Intervenções</h2> 
                    <p class="text-black p-8"> Lista de todas as intervenções efetuadas na oficina, para consultar clique <a href="/intervencoes" class="text-teal-500 hover:underline"> aqui</a>.</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
                    <h2 class="font-bold text-lg">Lista de Viaturas</h2> 
                    <p class="text-black p-8"> Lista de todas as intervenções efetuadas na viaturas, para consultar clique <a href="/viaturas" class="text-teal-500 hover:underline"> aqui</a>.</p>
                </div>
            </div>
            <footer class="w-full text-white bg-teal-500 border-t shadow-sm text-center p-6 mt-6">
                <p>&copy; 2025 José Soares. All rights reserved.</p>
            </footer>
        </body>
    </html>
    `
}

http.createServer((req, res) => {
    console.log("METHOD: " + req.method);
    console.log("URL: " + req.url);

    if (req.method === 'GET') {
        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            axios.get('http://localhost:3000/reparacoes')
                .then(() => {
                    res.write(genLandingPageHTML())
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
                    res.write(genReparacoesHTML(reparacoes))
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
                    res.write(genReparacaoPageHTML(reparacao))
                    res.end()
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' })
                    res.end()
                    console.log(err)
                })
        }
        if (req.url == '/intervencoes') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            axios.get('http://localhost:3000/intervencoes')
                .then(resp => {
                    var intervencoes = resp.data
                    res.write(genIntervencoesHTML(intervencoes))
                    res.end()
                })
                .catch(err => {
                    console.log("Erro: " + err)
                    res.write("<p>" + err + "</p>")
                    res.end()
                })
        }
        if (req.url == '/viaturas') {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            axios.get('http://localhost:3000/viaturas')
                .then(resp => {
                    var viaturas = resp.data
                    res.write(genViaturasHTML(viaturas))
                    res.end()
                })
                .catch(err => {
                    console.log("Erro: " + err)
                    res.write("<p>" + err + "</p>")
                    res.end()
                })
        }
    }

}).listen(1234)

console.log('Servidor à escuta na porta 1234');
