'use strict';

const fs = require('node:fs');
const assert = require('node:assert/strict');

assert.equal(fs.readFileSync('.workflow/status.txt', 'utf8'), 'workspace=support-operators\nstatus=ready\n');
console.log('ok');
