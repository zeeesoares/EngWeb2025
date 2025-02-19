export function genLandingPage(data) {
    var pageHTML = `
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" href="w3.css"></link>
        </head>
        <body>
            <div class="w3-card-4 w3-center">
                <header class="w3-container w3-teal w3-margin-bottom">
                    <h1>Consultas</h1>
                </header>
                <div class="w3-container">
                    <ul class="w3-ul">
                        <li>
                            <a href="/alunos">Lista de Alunos</a>
                        </li>
                        <li>
                            <a href="/cursos">Lista de Cursos</a>
                        </li>
                        <li>
                            <a href="/instrumentos">Lista de Instrumentos</a>
                        </li>
                    </ul>
                </div>
                <footer class="w3-container w3-teal w3-margin-top">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>

        </body>
    </html>
    `
    return pageHTML
}

export function genAlunosPage(alunos,date) {
    var pageHTML = `
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" href="w3.css"></link>
        </head>
        <body>
            <div class="w3-card-4 w3-center">
                <header class="w3-container w3-teal w3-margin-bottom">
                    <h1>Lista de Alunos</h1>
                </header>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Data Nascimento</th>
                        </tr>
            `

    alunos.forEach(a => {
        var i = 0
        pageHTML += `
                            <tr>
                                <td> <a href="/alunos/${a.id}" class="w3-text-teal">${a.id}</a>
                                <td> ${a.nome}
                                <td> ${a.dataNasc}
                            </tr>
                            `
        i+=1
    })

    pageHTML += `                    
                    </table>
                </div>
                <footer class="w3-container w3-teal w3-margin-top">
                    <h5>Generated in EngWeb2025 ${date}</h5>
                </footer>
            </div>

        </body>
    </html>
    `

    return pageHTML
}

export function genAlunoPage(aluno,date) {
    var pageHTML = `
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" href="w3.css"></link>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-teal w3-margin-bottom w3-center">
                    <h1>${aluno.nome}</h1>
                </header>
                <div class="w3-container">
                    <div class="w3-card-6">
            `

    
        pageHTML += `
                            <ul>
                                <li> Nome -> ${aluno.nome}
                                <li> Data Nascimento -> ${aluno.dataNasc}
                                <li> Curso -> ${aluno.curso}
                                <li> Ano de Curso -> ${aluno.anoCurso}
                                <li> Instrumento -> ${aluno.instrumento}
                            </ul>
                            `
    

    pageHTML += `                    
                    </table>
                </div>
                <footer class="w3-container w3-teal w3-margin-top w3-center">
                    <h5>Generated in EngWeb2025 ${date}</h5>
                </footer>
            </div>

        </body>
    </html>
    `

    return pageHTML
}

export function genCursosPage(cursos,date) {
    var pageHTML = `
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" href="w3.css"></link>
        </head>
        <body>
            <div class="w3-card-4 w3-center">
                <header class="w3-container w3-teal w3-margin-bottom">
                    <h1>Lista de Cursos</h1>
                </header>
                <div class="w3-container w3-centered">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Designação</th>
                        </tr>
            `

    cursos.forEach(c => {
        var i = 0
        pageHTML += `
                        <tr>
                            <td> <a href="/cursos/${c.id}" class="w3-text-teal">${c.id}</a>
                            <td> ${c.designacao}
                        </tr>
                        `
        i+=1
    })

    pageHTML += `                    
                    </table>
                </div>
                <footer class="w3-container w3-teal w3-margin-top">
                    <h5>Generated in EngWeb2025 ${date}</h5>
                </footer>
            </div>

        </body>
    </html>
    `

    return pageHTML
}

export function genInstrumentosPage(instrumentos,date) {
    var pageHTML = `
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" href="w3.css"></link>
        </head>
        <body>
            <div class="w3-card-4 w3-center">
                <header class="w3-container w3-teal w3-margin-bottom">
                    <h1>Lista de Instrumentos</h1>
                </header>
                <div class="w3-container w3-centered">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>
            `

    instrumentos.forEach(ins => {
        var i = 0
        pageHTML += `
                        <tr>
                            <td> ${ins.id}</a>
                            <td><a href="/instrumentos/${ins["#text"]}" class="w3-text-teal"> ${ins["#text"]}</a>
                        </tr>
                        `
        i+=1
    })

    pageHTML += `                    
                    </table>
                </div>
                <footer class="w3-container w3-teal w3-margin-top">
                    <h5>Generated in EngWeb2025 ${date}</h5>
                </footer>
            </div>

        </body>
    </html>
    `

    return pageHTML
}