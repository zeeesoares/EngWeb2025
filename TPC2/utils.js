const axios = require('axios');

async function fetchData(url, res, renderPage) {
    try {
        const response = await axios.get(`http://localhost:3000${url}`);
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(renderPage(response.data));
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(`<p>Erro: ${error}</p>`);
    }
}

function genTablePage(title, items, headers, rowCallback) {
    return `
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>${title}</title>
            <link rel="stylesheet" href="w3.css"></link>
        </head>
        <body>
            <div class="w3-card-4 w3-center">
                <header class="w3-container w3-teal w3-margin-bottom">
                    <h1>${title}</h1>
                </header>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
                        ${items.map(rowCallback).join('')}
                    </table>
                </div>
                <footer class="w3-container w3-teal w3-margin-top">
                    <h5>Generated in EngWeb2025 ${new Date().toISOString().substring(0,16)}</h5>
                </footer>
            </div>
        </body>
    </html>`;
}

function genListPage(title, items) {
    return `
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>${title}</title>
            <link rel="stylesheet" href="w3.css"></link>
        </head>
        <body>
            <div class="w3-card-4 w3-center">
                <header class="w3-container w3-teal w3-margin-bottom">
                    <h1>${title}</h1>
                </header>
                <div class="w3-container">
                    <ul class="w3-ul w3-border">
                        ${items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <footer class="w3-container w3-teal w3-margin-top">
                    <h5>Generated in EngWeb2025 ${new Date().toISOString().substring(0,16)}</h5>
                </footer>
            </div>
        </body>
    </html>`;
}

module.exports = { fetchData, genTablePage, genListPage };