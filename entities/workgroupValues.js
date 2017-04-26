const casual = require('casual');
const workgroupValues = [];

casual.define('entity_workgroup_value', id => {
  return {
    id,
    workgroupId: casual.integer(from = 0, to = 20),
    name: casual.title
  };
});

for (let i = 0; i < 20; i++) {
  workgroupValues.push(casual.entity_workgroup_value(i));
}

module.exports = workgroupValues;
