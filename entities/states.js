const casual = require('casual');
const states = [];

casual.define('entity_state', id => {
  return {
    id,
    code: casual.state_abbr,
    name: casual.state
  };
});

for (let i = 0; i < 20; i++) {
  states.push(casual.entity_state(i));
}

module.exports = states;