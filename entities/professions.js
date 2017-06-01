const casual = require('casual');
const config = require('../config');
const professions = [];

casual.define('entity_profession', id => {
  return {
    id,
    name: casual.title,
    stateId: casual.integer(from = 0, to = config.STATES_SIZE),
    code: casual.state_abbr,
    boardId: casual.integer(from = 0, to = config.BOARDS_SIZE),
    licenseFormat: '^[0-9]{7}$',
    formatExample: id % 2 ?
      casual.populate('{{letter}}{{letter}}{{integer}}') :
      casual.populate('{{letter}}{{integer}}{{letter}}'),
    href: `/professions/${id}`
  };
});

for (let i = 0; i < config.PROFESSIONS_SIZE; i++) {
  professions.push(casual.entity_profession(i));
}

module.exports = professions;
