const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'dist', 'exercicios');
const categories = fs.readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
const result = {};
for (const category of categories) {
  const dir = path.join(root, category);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  result[category] = {};
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const lines = content.split(/\r?\n/);
    const commentLines = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('//')) {
        commentLines.push(trimmed.replace(/^\/\//, '').trim());
      } else if (trimmed.length === 0 || trimmed === '"use strict";' || trimmed === '"use strict"') {
        continue;
      } else {
        break;
      }
    }
    const questionKey = file.toLowerCase().replace(/^c?questao/, 'questao').replace(/\.js$/, '');
    result[category][questionKey] = {
      path: `dist/exercicios/${category}/${file}`,
      enunciado: commentLines.join('\n')
    };
  }
}
console.log(JSON.stringify(result, null, 2));
