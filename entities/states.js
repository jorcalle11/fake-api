const casual = require('casual');
const { cantData } = require('../config');
const states = [];

casual.define('entity_state', id => {
  return {
    id,
    code: casual.state_abbr,
    name: casual.state
  };
});

for (let i = cantData.states.start; i <= cantData.states.end; i++) {
  states.push(casual.entity_state(i));
}

module.exports = states;