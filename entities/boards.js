const casual = require('casual');
const { BOARDS_SIZE } = require('../config');
const states = [];

casual.define('entity_board', id => {
  return {
    id,
    name: casual.words(n = 2),
    href: `/boards`
  };
});

for (let i = 0; i < BOARDS_SIZE; i++) {
  states.push(casual.entity_board(i));
}

module.exports = states;
