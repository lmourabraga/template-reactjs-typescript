import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333);

//Primeiros passos criando uma aplicação typescript
/**
 * yarn init -y
 * instalar o typescript em nodo de desenvolvimento pq no final ele será
 * transformado em javascript para ir para a produção
 * o navegador não entende typescript, por isso há a conversão para js
 * 
 * se o intellisense não funcionar, instalar com yarn add -D os tipos da biblioteca
 * que está sendo usada.
 * 
 * para rodar a aplicação, rode o comando: yarn tsc --init uma única vez
 * com o arquivo tsconfig.json criado, agora você pode rodar a aplicação com o comando:
 * yarn tsc
 * o node irá encontrar o arquivo index.ts e irá converter para index.js
 * agora você pode dar o comando: node index.js e a sua aplicação irá rodar.
 * 
 * dica: no arquivo tsconfig.json, descomente a linha "outDir: '/.dist'," para definir
 * uma pasta onde serão compilados todos os arquivos javascript.
 * 
 * 
 */