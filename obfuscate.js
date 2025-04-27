const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('./build/static/js');
files.forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join('./build/static/js', file);
    const code = fs.readFileSync(filePath, 'utf8');
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      numbersToExpressions: true,
      simplify: true,
      stringArrayShuffle: true,
      splitStrings: true,
      stringArrayThreshold: 0.75
    }).getObfuscatedCode();
    fs.writeFileSync(filePath, obfuscatedCode);
  }
});