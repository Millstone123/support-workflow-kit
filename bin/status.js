#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const { statusPath, writeStatus } = require('../lib/workspace');

const file = statusPath();
if (!fs.existsSync(file)) {
  writeStatus();
}
console.log(fs.readFileSync(file, 'utf8').trimEnd());
