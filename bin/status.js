#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const { statusPath } = require('../lib/workspace');

console.log(fs.readFileSync(statusPath(), 'utf8').trimEnd());
