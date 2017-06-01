const casual = require('casual');
const licenses = require('./licenses');
const config = require('../config');
const employees = [];

let start = casual.integer(from = 1, to = 3);
let end = casual.integer(from = 4, to = 6);

const random = (min, max) => casual.integer(from = min, to = max);

casual.define('entity_employee', id => {
  const firstName = casual.first_name;
  const lastName = casual.last_name;
  return {
    id,
    firstName,
    middleName: casual.first_name,
    lastName,
    fullName: `${firstName} ${lastName}`,
    number: casual.integer(from = 1, to = 1000),
    active: casual.boolean,
    stateId: casual.integer(from = 0, to = config.STATES_SIZE),
    professionId: random(0, config.PROFESSIONS_SIZE),
    workgroupValues: random(0, config.WORKGROUP_VALUES_SIZE),
    email: casual.email,
    licenses: {
      href: `/employees/${id}/licenses`,
      items: []
    },
    href: `/employees/${id}`
  };
});

for (let i = 0; i < config.EMPLOYEES_SIZE; i++) {
  employees.push(casual.entity_employee(i));

  for (let j = 0; j < random(1, 3); j++) {
    employees[i].licenses.items.push(casual.entity_license);
  }
}

module.exports = employees;
