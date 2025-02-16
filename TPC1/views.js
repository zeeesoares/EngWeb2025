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
                    <p class="text-black p-8">Lista de todas as reparações na oficina. <a href="/reparacoes" class="text-teal-500 hover:underline">Ver</a>.</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
                    <h2 class="font-bold text-lg">Lista de Intervenções</h2> 
                    <p class="text-black p-8">Lista de todas as intervenções na oficina. <a href="/intervencoes" class="text-teal-500 hover:underline">Ver</a>.</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all">
                    <h2 class="font-bold text-lg">Lista de Viaturas</h2> 
                    <p class="text-black p-8">Lista de todas as viaturas na oficina. <a href="/viaturas" class="text-teal-500 hover:underline">Ver</a>.</p>
                </div>
            </div>
            <footer class="w-full text-white bg-teal-500 border-t shadow-sm text-center p-6 mt-6">
                <p>&copy; 2025 José Soares. All rights reserved.</p>
            </footer>
        </body>
    </html>
    `;
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
                    <a href="/viaturas/marcas" class="text-right text-lg hover:underline">
                        <h3 class="font-bold">Por Marca</h3>
                    </a>
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

function groupViaturasByMarca(viaturas) {
    let marcas = {};
    viaturas.forEach(v => {
        if (!marcas[v.marca]) {
            marcas[v.marca] = [];
        }
        marcas[v.marca].push(v);
    });
    return marcas;
}

function genViaturasMarcasHTML(marcas) {
    return `
    <html>
        <head>
            <title>Lista de Marcas</title>
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
            <div class="grid grid-cols-5 gap-5 mx-6 mb-4">
                ${Object.keys(marcas).map(marca => `
                    <div class="bg-white shadow-md rounded-lg p-4 text-center border border-gray-300 hover:shadow-lg transition-all">
                        <a href="/viaturas/marcas/${marca}" class="text-teal-500 text-2xl font-bold hover:underline">${marca}</a>
                    </div>
                `).join('\n')}
            </div>
            <footer class="w-full text-white bg-teal-500 text-center p-4">
                <p>&copy; 2025 José Soares. All rights reserved.</p>
            </footer>
        </body>
    </html>
    `;
}

function genViaturasPorMarcaHTML(marca, modelos) {
    return `
    <html>
        <head>
            <title>Modelos de ${marca}</title>
            <meta charset="UTF-8">
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100">
            <div class="bg-teal-500 w-full mb-6">
                <header class="text-white p-8 flex justify-between items-center">
                    <a href="/viaturas/marcas" class="text-left text-lg hover:underline">
                        <h3 class="font-bold">Voltar</h3>
                    </a>
                    <h1 class="text-3xl font-bold text-center flex-1">Lista de Viaturas ${marca}</h1>
                </header>
            </div>
            <div class="grid grid-cols-4 gap-4 mx-6 mb-4">
                ${modelos.map(v => `
                    <div class="bg-white shadow-md rounded-lg p-4 text-center border border-gray-300 hover:shadow-lg">
                        <h2 class="font-bold text-lg">${v.modelo}</h2>
                        <p class="text-gray-700"><strong>ID:</strong> ${v.id}</p>
                    </div>
                `).join('\n')}
            </div>
            <footer class="w-full text-white bg-teal-500 text-center p-4">
                <p>&copy; 2025 José Soares. All rights reserved.</p>
            </footer>
        </body>
    </html>
    `;
}

function genReparacaoHTML(reparacao) {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 m-2 border border-gray-300 text-teal-500 hover:shadow-lg transition-all flex justify-between items-center">
            <a href="/reparacoes/${reparacao.id}">
                <h2 class="font-bold text-lg">${reparacao.nome}</h2> 
                <p class="text-gray-700"><strong>ID:</strong> ${reparacao.id}</p>
                <p class="text-gray-700"><strong>NIF:</strong> ${reparacao.nif}</p>
                <button class="text-white bg-teal-400 rounded-lg p-2 hover:shadow-md"> <a href="/reparacoes/${reparacao.id}">Mais Informações</a></button>
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


module.exports = { genLandingPageHTML, genIntervencoesHTML, genReparacoesHTML, genViaturasHTML, genReparacaoPageHTML, genIntervencoesList
    , genViaturaHTML, genIntervencaoHTML, genReparacaoHTML, genViaturasPorMarcaHTML, genViaturasMarcasHTML, groupViaturasByMarca
};

