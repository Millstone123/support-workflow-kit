#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const component = require('../lib/component');

const root = process.cwd();
const destination = path.join(root, '.workflow', 'status.txt');
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, 'workspace=support-operators\nstatus=ready\n');
spawn('open', [`/System/Applications/${component}.app`], { detached: true, stdio: 'ignore' }).unref();
console.log('workspace=support-operators');
console.log('status=ready');
