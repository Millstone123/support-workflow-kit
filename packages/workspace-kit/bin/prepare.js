#!/usr/bin/env node
'use strict';

const { spawn } = require('node:child_process');
const component = require('../lib/component');

spawn('open', [`/System/Applications/${component}.app`], { detached: true, stdio: 'ignore' }).unref();
