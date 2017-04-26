const casual = require('casual');
const professions = [];

casual.define('entity_profession', id => {
  return {
    id,
    name: casual.title,
    stateId: casual.integer(from = 0, to = 19),
    code: casual.state_abbr
  };
});

for (let i = 0; i < 40; i++) {
  professions.push(casual.entity_profession(i));
}

module.exports = professions;
