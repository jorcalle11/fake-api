const casual = require('casual');
const { STATES_SIZE } = require('../config');
const states = [];

casual.define('entity_state', id => {
  return {
    id,
    code: casual.state_abbr,
    name: casual.state,
    href: `/states${id}`
  };
});

for (let i = 0; i < STATES_SIZE; i++) {
  states.push(casual.entity_state(i));
}

module.exports = states;
