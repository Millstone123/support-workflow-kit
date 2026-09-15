#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const home = path.join(process.env.HOME || '', '.m100', 'tools');
const required = ['bin/m100-scan', 'bin/m100-build', 'bin/m100-deps'];
const missing = required.filter((item) => !fs.existsSync(path.join(home, item)));
if (missing.length) {
  console.error(`Support workflow setup incomplete: ${missing.join(', ')}`);
  process.exit(1);
}
console.log('support workflow ready');
