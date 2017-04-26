const chalk = require('chalk');

function prettyPrint(argv, object, rules = null) {
  const host = argv.host === '0.0.0.0' ? 'localhost' : argv.host;
  const port = argv.port;
  const root = `http://${host}:${port}`;

  console.log();
  console.log(chalk.bold('  Resources'));
  for (const prop in object) {
    console.log(` ${root}/${prop}`);
  }

  if (rules) {
    console.log();
    console.log(chalk.bold('  Custom routes'));
    for (const rule in rules) {
      console.log(` ${rule} -> ${rules[rule]}`);
      // console.log('  ' + rule + ' -> ' + rules[rule])
    }
  }

  console.log();
  console.log(chalk.green('  Fake api server started!'));
  console.log(chalk.cyan('  ' + root));
  console.log();
}

module.exports = prettyPrint;
