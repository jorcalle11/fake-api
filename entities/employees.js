const casual = require('casual');
const licenses = require('./licenses');
const employees = [];

let start = casual.integer(from = 1, to = 3);
let end = casual.integer(from = 4, to = 6);

const random = (min, max) => casual.integer(from = min, to = max);

casual.define('entity_employee', id => {
  return {
    id,
    firstName: casual.first_name,
    middleName: casual.first_name,
    lastName: casual.last_name,
    employeeId: casual.integer(from = 1, to = 1000),
    status: casual.random_element(['active', 'inactive']),
    stateId: casual.integer(from = 0, to = 20),
    professionId: random(0, 40),
    workgroupValues: random(0,20),
    email: casual.email,
    licenses: []
  };
});

for (let i = 0; i < 100; i++) {
  employees.push(casual.entity_employee(i));

  for (let j = 0; j < random(1, 4); j++) {
    employees[i].licenses.push(casual.entity_license);
  }
}

module.exports = employees;
