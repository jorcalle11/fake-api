const casual = require('casual');
const states = [];

casual.define('entity_board', id => {
  return {
    id,
    name: casual.words(n=2)
  };
});

for (let i = 0; i < 20; i++) {
  states.push(casual.entity_board(i));
}

module.exports = states;
