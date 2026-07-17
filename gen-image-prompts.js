const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'content', 'recipes');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

const cmds = files.map(f => {
  const r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const hero = r.images.heroAlt.toLowerCase();
  const texture = r.images.textureAlt.toLowerCase();
  const pin = r.images.pinAlt.toLowerCase();
  const heroPrompt = `Overhead flat lay food photography, ${hero}, white ceramic plate, rustic wood table, soft natural light, appetizing, realistic food blog photography`;
  const pinPrompt = `45 degree angle food photography, ${pin}, bright airy background softly blurred, warm light, appetizing realistic food blog photography`;
  const texturePrompt = `Close-up food photography, ${texture}, moody soft window light, shallow depth of field bokeh, appetizing realistic food blog photography`;
  return `node generate-images.js "${r.slug}" "${heroPrompt.replace(/"/g,'\\"')}" "${pinPrompt.replace(/"/g,'\\"')}" "${texturePrompt.replace(/"/g,'\\"')}"`;
});

fs.writeFileSync(path.join(__dirname, 'run-image-gen.sh'), '#!/bin/bash\nset -e\n' + cmds.join('\n') + '\n');
console.log(`Wrote ${cmds.length} commands to run-image-gen.sh`);
