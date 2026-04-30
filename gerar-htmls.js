const fs = require('fs');
const path = require('path');

// Objeto com dados de todas as questões
const questoes = {
    arrays: {
        questao1: {
            enunciado: "Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]\na) Números pares\nb) Números ímpares\nc) Todos os múltiplos de 2,3 e 4\nd) Lista reversa",
            titulo: "Listas derivadas de array"
        },
        questao2: {
            enunciado: "Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta entrada de dados, faça o seguinte:\na) Mostre a quantidade de notas que foram lidas.\nb) Exiba todas as notas na ordem em que foram informadas.\nc) Exiba todas as notas na ordem inversa à que foram informadas.\nd) Calcule e mostre a soma das notas.\ne) Calcule e mostre a média das notas.\nf) Calcule e mostre a quantidade de notas acima da média calculada",
            titulo: "Estatísticas de notas"
        },
        questao3: {
            enunciado: "Gerador de Lista de Compras Personalizada. Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa adicionar itens e a quantidade de cada um. Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:\n- Permitir que o usuário adicione itens à lista(array) até que ele digite \"fim\".\n- Permitir que o usuário apresente todos os itens da lista.\n- Permitir que o usuário apresente quantos itens há na lista.\n- Permitir que o usuário remova itens da lista",
            titulo: "Lista de compras personalizada"
        },
        questao4: {
            enunciado: "Calculadora de Média do ENEM. Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais. Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento. A função deve:\n- Calcular a média das notas.\n- Arredondar a média para duas casas decimais.\n- Retornar o valor da média",
            titulo: "Média do ENEM"
        },
        questao5: {
            enunciado: "Organizador de Tarefas Diárias. Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função chamada gerenciar_tarefas() que não receba argumentos. A função deve:\na) Permitir que o usuário adicione tarefas a um vetor.\nb) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por exemplo).\nc) Permitir que o usuário exiba todas as tarefas pendentes.\nUtilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para manter o programa rodando até o usuário escolher sair",
            titulo: "Gerenciador de tarefas"
        },
        questao6: {
            enunciado: "Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);\na) Pedir os nomes das pessoas usando o Prompt e o método push();\nb) Apresentar os nomes digitados;\nc) Ordenar o vetor usando o sort();\nd) Apresentar os nomes inseridos de forma ordenada",
            titulo: "Array de nomes"
        },
        questao7: {
            enunciado: "Lista de Presença.\n1. Crie um array chamado presenca que aceite apenas strings.\n2. Adicione 5 nomes de alunos.\n3. Tente adicionar um número e observe o erro do compilador.\n4. Use um loop para imprimir cada nome em letras maiúsculas",
            titulo: "Lista de presença"
        }
    },
    condicional: {
        questao1: {
            enunciado: "Crie um programa que leia um número e informe se ele é:\n- Par ou Ímpar\n- Positivo ou Negativo",
            titulo: "Verificação de número"
        },
        questao2: {
            enunciado: "Crie um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa e classifique como:\n- Abaixo do peso: IMC < 18.5\n- Peso normal: 18.5 ≤ IMC < 25\n- Sobrepeso: 25 ≤ IMC < 30\n- Obeso: IMC ≥ 30",
            titulo: "Cálculo de IMC"
        },
        questao3: {
            enunciado: "Crie um programa que determine o maior de três números.",
            titulo: "Maior de três números"
        },
        questao4: {
            enunciado: "Crie um programa que classifique as notas de alunos em conceitos:\n- A: nota >= 90\n- B: 80 <= nota < 90\n- C: 70 <= nota < 80\n- D: 60 <= nota < 70\n- F: nota < 60",
            titulo: "Classificação de notas"
        }
    },
    função: {
        questao1: {
            enunciado: "Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4) deve retornar 10, pois 1+2+3+4 = 10).",
            titulo: "Soma até um número"
        },
        questao2: {
            enunciado: "Crie uma função que calcule o fatorial de um número.",
            titulo: "Cálculo de fatorial"
        },
        questao3: {
            enunciado: "Crie uma função que verifique se um número é primo.",
            titulo: "Verificação de número primo"
        },
        questao4: {
            enunciado: "Crie uma função que retorne o maior número entre dois números.",
            titulo: "Maior entre dois números"
        },
        questao5: {
            enunciado: "Crie uma função que converta temperatura de Celsius para Fahrenheit.",
            titulo: "Conversor de temperatura"
        },
        questao6: {
            enunciado: "Crie uma função que retorne o Fibonacci.",
            titulo: "Sequência de Fibonacci"
        },
        questao7: {
            enunciado: "Crie uma função que calcule o MDC (Máximo Divisor Comum).",
            titulo: "Máximo Divisor Comum"
        },
        questao8: {
            enunciado: "Crie uma função que verifique se uma palavra é palíndromo.",
            titulo: "Verificador de palíndromo"
        },
        questao9: {
            enunciado: "Crie uma função que inverta uma string.",
            titulo: "Inversor de string"
        },
        questao10: {
            enunciado: "Crie uma função que conte o número de vogais em uma string.",
            titulo: "Contador de vogais"
        }
    },
    repetição: {
        questao1: {
            enunciado: "Crie um programa que peça números até o usuário digitar 0 e mostre:\n- Quantidade de números digitados\n- Soma total",
            titulo: "Soma de números"
        },
        questao2: {
            enunciado: "Crie um programa que mostre a tabuada de um número.",
            titulo: "Tabuada"
        },
        questao3: {
            enunciado: "Crie um programa que mostre os números pares de 1 até 100.",
            titulo: "Números pares"
        },
        questao4: {
            enunciado: "Crie um programa que calcule a soma dos números pares de 1 até um número dado.",
            titulo: "Soma de pares"
        },
        questao5: {
            enunciado: "Crie um programa que mostre a sequência de Fibonacci.",
            titulo: "Fibonacci"
        }
    }
};

function lerArquivoTypeScript(caminhoArquivo) {
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
    const linhas = conteudo.split('\n');

    // Extrair comentários do início do arquivo (enunciado)
    let enunciado = '';
    for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i].trim();
        if (linha.startsWith('//')) {
            enunciado += linha.replace(/^\/\/\s*/, '') + '\n';
        } else if (linha !== '') {
            break;
        }
    }

    return conteudo;
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function escapeForScript(str) {
    return str
        .replace(/<\/script>/gi, '<\\/script>')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function gerarSvgDoCodigo(codigo) {
    const escaped = escapeHtml(codigo);
    const linhas = escaped.split('\n');
    const lineHeight = 22;
    const width = 1200;
    const height = Math.max(260, linhas.length * lineHeight + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <style type="text/css"><![CDATA[
    .background { fill: #282c34; }
    .code { font-family: Consolas, Monaco, 'Courier New', monospace; font-size: 14px; fill: #f8f8f2; white-space: pre-wrap; }
    .wrapper { padding: 16px; }
  ]]></style>
  <rect class="background" width="100%" height="100%" rx="20" ry="20"/>
  <foreignObject x="0" y="0" width="${width}" height="${height}">
    <body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0;">
      <div class="wrapper">
        <pre class="code">${escaped}</pre>
      </div>
    </body>
  </foreignObject>
</svg>`;
}

function gerarHTML(categoria, numeroQuestao, nomeQuestao, enunciado, titulo, codigo, jsSourceEscaped) {
    const codigoFormatado = escapeHtml(codigo);

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo} - ${categoria}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2em;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 0.9em;
            opacity: 0.9;
        }

        .categoria-badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.85em;
            margin-top: 10px;
        }

        .section {
            padding: 30px;
            border-bottom: 1px solid #eee;
        }

        .section:last-child {
            border-bottom: none;
        }

        .section h2 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 1.3em;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .section h2::before {
            display: inline-block;
            width: 4px;
            height: 24px;
            background: #667eea;
            border-radius: 2px;
        }

        .enunciado {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            line-height: 1.6;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .resultado {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #764ba2;
            font-family: 'Courier New', monospace;
            line-height: 1.5;
            max-height: 300px;
            overflow-y: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .resultado-vazio {
            color: #999;
            font-style: italic;
        }

        .codigo-section {
            margin-top: 20px;
        }

        pre {
            background: #282c34 !important;
            padding: 20px !important;
            border-radius: 8px;
            overflow-x: auto;
            max-height: 400px;
            overflow-y: auto;
        }

        code {
            font-family: 'Courier New', monospace !important;
            font-size: 0.95em !important;
        }

        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #666;
        }

        .botoes {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.9em;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-voltar {
            background: #667eea;
            color: white;
        }

        .btn-voltar:hover {
            background: #5568d3;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-executar {
            background: #764ba2;
            color: white;
        }

        .btn-executar:hover {
            background: #5f3a85;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
        }

        .codigo-img {
            width: 100%;
            border-radius: 12px;
            border: 1px solid #ddd;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.5em;
            }

            .section {
                padding: 20px;
            }

            .header {
                padding: 20px;
            }
        }

        .hljs {
            background: #282c34 !important;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 ${titulo}</h1>
            <p>Exercício ${numeroQuestao}</p>
            <div class="categoria-badge">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</div>
        </div>

        <div class="section">
            <h2>📝 Enunciado</h2>
            <div class="enunciado">${enunciado}</div>
        </div>

        <div class="section">
            <h2>📤 Resultado</h2>
            <pre id="resultado" class="resultado"><span class="resultado-vazio">Clique em Executar para ver o resultado.</span></pre>
            <div class="botoes">
                <button id="btnExecutar" class="btn btn-executar">Executar</button>
            </div>
        </div>

        <div class="section">
            <h2>💻 Código</h2>
            <div class="codigo-section">
                <pre><code class="language-typescript">${codigoFormatado}</code></pre>
            </div>
        </div>

        <div class="section">
            <h2>🖼️ Imagem do código</h2>
            <img class="codigo-img" src="${numeroQuestao === '1' && categoria === 'condicional' ? 'questao1-code.svg' : nomeQuestao + '-code.svg'}" alt="Imagem do código da questão ${numeroQuestao}">
        </div>

        <div class="footer">
            <div class="botoes">
                <a href="../../menu-${categoria}.html" class="btn btn-voltar">← Voltar</a>
            </div>
        </div>
    </div>

    <script id="codeSource" type="text/plain">${jsSourceEscaped}</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            hljs.highlightAll();
        });

        const resultadoEl = document.getElementById('resultado');
        const btnExecutar = document.getElementById('btnExecutar');
        const codeSource = document.getElementById('codeSource').textContent;

        const originalConsole = console.log;
        const originalWrite = document.write;
        const originalWriteln = document.writeln;

        function appendOutput(...args) {
            if (resultadoEl.querySelector('.resultado-vazio')) {
                resultadoEl.textContent = '';
            }
            const text = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg, null, 2)).join(' ') + '\n';
            resultadoEl.textContent += text;
        }

        console.log = (...args) => {
            appendOutput(...args);
            originalConsole.apply(console, args);
        };

        document.write = (text) => appendOutput(text);
        document.writeln = (text) => appendOutput(text + '\n');

        btnExecutar.addEventListener('click', () => {
            resultadoEl.textContent = '';
            try {
                new Function(codeSource)();
            } catch (error) {
                appendOutput('Erro:', error.message || error);
            }
        });
    </script>
</body>
</html>`;
}

// Criar diretórios se não existirem
const baseDir = 'dist/exercicios';
const categorias = ['arrays', 'condicional', 'função', 'repetição'];

categorias.forEach(categoria => {
    const dir = path.join(baseDir, categoria);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Gerar HTMLs para cada questão
for (const [categoria, questoesData] of Object.entries(questoes)) {
    for (const [nomeQuestao, dados] of Object.entries(questoesData)) {
        const numeroQuestao = nomeQuestao.replace('questao', '');
        
        // Ler arquivo TypeScript
        let nomeArquivoTS = nomeQuestao + '.ts';
        if (categoria === 'condicional' && numeroQuestao === '1') {
            nomeArquivoTS = 'Cquestao1.ts';
        }
        
        const caminhoTS = path.join('src/exercicios', categoria, nomeArquivoTS);
        
        let codigo = '';
        try {
            codigo = fs.readFileSync(caminhoTS, 'utf-8');
        } catch (err) {
            console.warn(`Arquivo não encontrado: ${caminhoTS}`);
            codigo = `// Arquivo não encontrado: ${nomeArquivoTS}`;
        }

        let nomeArquivoJS = `${nomeQuestao}.js`;
        if (categoria === 'condicional' && numeroQuestao === '1') {
            nomeArquivoJS = 'Cquestao1.js';
        }

        const caminhoJS = path.join(baseDir, categoria, nomeArquivoJS);
        let jsSource = '';
        try {
            jsSource = fs.readFileSync(caminhoJS, 'utf-8');
        } catch (err) {
            console.warn(`Arquivo JS não encontrado: ${caminhoJS}`);
            jsSource = '// JS não encontrado. Não será possível executar automaticamente.';
        }

        const jsSourceEscaped = escapeForScript(jsSource);
        const html = gerarHTML(categoria, numeroQuestao, nomeQuestao, dados.enunciado, dados.titulo, codigo, jsSourceEscaped);
        const caminhoHTML = path.join(baseDir, categoria, `${nomeQuestao}.html`);
        const caminhoSvg = path.join(baseDir, categoria, `${nomeQuestao}-code.svg`);

        fs.writeFileSync(caminhoHTML, html);
        fs.writeFileSync(caminhoSvg, gerarSvgDoCodigo(codigo));
        console.log(`✅ Gerado: ${caminhoHTML}`);
    }
}

console.log('\n🎉 Todos os HTMLs foram gerados com sucesso!');
