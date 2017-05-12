const casual = require('casual');
const professions = [];

casual.define('entity_profession', id => {
  return {
    id,
    name: casual.title,
    stateId: casual.integer(from = 0, to = 19),
    code: casual.state_abbr,
    boardId: casual.integer(from = 0, to = 19),
    format: id % 2 ?
      casual.populate('{{letter}}{{letter}}{{integer}}') :
      casual.populate('{{letter}}{{integer}}{{letter}}')
  };
});

for (let i = 0; i < 40; i++) {
  professions.push(casual.entity_profession(i));
}

module.exports = professions;
