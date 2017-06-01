const casual = require('casual');
const { LICENSES_SIZE } = require('../config');
const licenses = [];

casual.define('entity_license', () => {
  const id = casual.integer(from = 1, to = 1000);
  return {
    id,
    employeeId: casual.integer(from = 1, to = 1000),
    state: casual.state,
    stateCode: casual.state_abbr,
    profession: casual.title,
    professionCode: casual.currency_code,
    number: casual.populate('{{letter}}{{letter}}{{integer}}'),
    originalDate: casual.date(format = 'MM-DD-YYYY'),
    expirationDate: casual.date(format = 'MM-DD-YYYY'),
    label: casual.random_element(['clearToWork', 'warning', 'takeAction']),
    status: casual.word,
    href: `/licenses/${id}`
  };
});

for (let i = 0; i < LICENSES_SIZE; i++) {
  licenses.push(casual.entity_license);
}

module.exports = licenses;
