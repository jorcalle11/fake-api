const jsonServer = require('json-server');
const chalk = require('chalk');
const path = require('path');

const prettyPrint = require('./utils');
const opts = { port: 4000, host: '0.0.0.0' };

console.log();
console.log(chalk.cyan('  \\{^_^}/ hi!'));

const filename = path.join(__dirname,'database','db.js');
delete require.cache[filename];
const db = require(filename);

const router = jsonServer.router(db);
const server = jsonServer.create();
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);

server.listen(opts.port, () => prettyPrint(opts, db));