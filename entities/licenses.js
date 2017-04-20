const casual = require('casual');
const { cantData } = require('../config');
const licenses = [];

casual.define('entity_license', () => {
  return {
    id : casual.integer(from = 1, to = 1000),
    number: casual.populate('{{letter}}{{letter}}{{integer}}'),
    originalDate: casual.date(format = 'MM-DD-YYYY'),
    expirationDate: casual.date(format = 'MM-DD-YYYY'),
    label: casual.word,
    status: casual.word
  };
});

for (let i = cantData.licenses.start; i <= cantData.licenses.end; i++) {
  licenses.push(casual.entity_license);
}

module.exports = licenses;