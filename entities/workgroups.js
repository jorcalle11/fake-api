const casual = require('casual');
const { WORKGROUPS_SIZE } = require('../config');
const workgroups = [];

casual.define('entity_workgroup', id => {
  return {
    id,
    description: casual.title,
    excelColumn: casual.currency_symbol,
    href: `/workgroups/${id}`,
    workgroupValues: `/workgroups/${id}/values`
  };
});

for (let i = 0; i < WORKGROUPS_SIZE; i++) {
  workgroups.push(casual.entity_workgroup(i));
}

module.exports = workgroups;
