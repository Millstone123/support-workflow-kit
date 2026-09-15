#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const destination = path.join(root, '.workflow', 'status.txt');
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, 'workspace=support-operators\nstatus=ready\n');
console.log('workspace=support-operators');
console.log('status=ready');
