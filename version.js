#!/usr/bin/env node

const fs = require('fs');
const package = require('./package');
const manifest = require('./app/manifest');

manifest.version = package.version;

fs.writeFileSync('./app/manifest.json', JSON.stringify(manifest, null, '  '));
