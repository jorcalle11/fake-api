const casual = require('casual');
const { cantData } = require('../config');
const professions = [];

casual.define('entity_profession', id => {
  return {
    id,
    name: casual.title,
    stateId: casual.integer(from = 1, to = 10),
    code: casual.state_abbr
  };
});

for (let i = cantData.professions.start; i <= cantData.professions.end; i++) {
  professions.push(casual.entity_profession(i))
}

module.exports = professions;