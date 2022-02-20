# unexpected-import-repro

`SyntaxError: Unexpected token 'export'` in `pageFiles.js` when using `format: 'es'` with vite-plugin-ssr.

To reproduce:

`npm install`
`npm run build; npm run server:prod`
Go to http://localhost:3000/
