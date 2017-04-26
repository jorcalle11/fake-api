const jsonServer = require('json-server');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const prettyPrint = require('./utils');
const opts = { port: 4000, host: '0.0.0.0' };

console.log();
console.log(chalk.cyan('  \\{^_^}/ hi!'));
console.log();

const filename = path.join(__dirname,'database','db.js');
delete require.cache[filename];
const db = require(filename);

const router = jsonServer.router(db);
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

var routes = JSON.parse(fs.readFileSync(path.resolve(__dirname,'routes.json')));
var rewriter = jsonServer.rewriter(routes);
server.use(rewriter);

server.post('/api/v1/auth/token', (req, res) => {
  res.jsonp({
    'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiY2xpZW50SWQiOiIxMjM0NTYiLCJjbGllbnRTZWNyZXQiOiI5ODc2NSIsIm5hbWUiOiJlYy1lZHVjYXRpb24tYXBpIiwiYXVkaWVuY2UiOiJodHRwOi8vYXBpLmVkdWNhdGlvbi5ldmVyY2hlY2suY29tIiwiYWRtaW4iOnRydWV9.v83-p1gwaQrfIJhQ7Xjtnym_VaRluR4FtuwGF9omUfE',
    'token_type': 'Bearer',
    'expires_in': 86400
  });
})

server.use(middlewares);
server.use(router);

server.listen(opts.port, () => prettyPrint(opts, db, routes));
