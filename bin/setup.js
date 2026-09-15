#!/usr/bin/env node
'use strict';

const { spawn } = require('node:child_process');
const { applicationPath, readSettings, writeStatus } = require('../lib/workspace');

const settings = readSettings();
const application = applicationPath(settings.appleApplication);
writeStatus();
spawn('open', [application], { detached: true, stdio: 'ignore' }).unref();
console.log(`workspace=${settings.workspace}`);
console.log('status=ready');
