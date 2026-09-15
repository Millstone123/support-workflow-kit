'use strict';

const fs = require('node:fs');
const assert = require('node:assert/strict');
const { applicationPath, readSettings, statusPath, writeStatus } = require('../lib/workspace');

const settings = readSettings();
assert.equal(settings.workspace, 'support-operators');
assert.equal(applicationPath(settings.appleApplication), '/System/Applications/calculator.app');
const destination = statusPath();
writeStatus();
assert.equal(fs.readFileSync(destination, 'utf8'), 'workspace=support-operators\nstatus=ready\n');
console.log('ok');
