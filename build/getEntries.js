const path = require('path');
const fs = require('fs');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

function formatEntryName(str) {
  str = str.replace(/\.[a-z]+/, '');
  str = str.replace(/\-\S/, (s) => s.replace(/\-/, '').toUpperCase());
  str = str.replace(/^\S/, (s) => s.toUpperCase());
  return str;
}

function getEntries (dirName) {
  let libs = {};
  let files = fs.readdirSync(resolve(dirName));
  files.map(file => {
    const fPath = path.join(dirName, file);
    const stat = fs.statSync(fPath);
    if (stat.isFile() === true) {
      if (file === 'index.ts') {
        libs['index'] = resolve(fPath);
        return;
      }
      if (file === 'lw-chart.ts') {
        libs['LWChart'] = resolve(fPath);
        return;
      }
      libs[formatEntryName(file)] = resolve(fPath);
    }
  });
  return libs;
}

module.exports = getEntries('src');;
