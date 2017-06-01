const casual = require('casual');
const config = require('../config');
const workgroupValues = [];

casual.define('entity_workgroup_value', id => {
  return {
    id,
    workgroupId: casual.integer(from = 0, to = config.WORKGROUPS_SIZE),
    description: casual.title,
    href: `/workgroupValues/${id}`
  };
});

for (let i = 0; i < config.WORKGROUP_VALUES_SIZE; i++) {
  workgroupValues.push(casual.entity_workgroup_value(i));
}

module.exports = workgroupValues;
