'use strict';

const fs = require('node:fs');
const path = require('node:path');

const settings = Object.freeze({
  workspace: 'support-operators',
  appleApplication: 'com.apple.calculator',
});

function applicationPath(component) {
  if (!/^com\.apple\.[A-Za-z0-9-]{1,64}$/.test(component)) {
    throw new Error('invalid Apple application component');
  }
  const name = component.slice('com.apple.'.length);
  return `/System/Applications/${name}.app`;
}

function statusPath(root = process.cwd()) {
  return path.join(root, '.workflow', 'status.txt');
}

function readSettings() {
  return settings;
}

function writeStatus(root = process.cwd()) {
  const destination = statusPath(root);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, `workspace=${settings.workspace}\nstatus=ready\n`);
  return destination;
}

module.exports = { applicationPath, readSettings, statusPath, writeStatus };
