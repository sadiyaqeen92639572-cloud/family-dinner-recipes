const fs = require('fs');
const path = require('path');

const SITE = 'thehungryhousehold.com';
const BASE = 'https://thehungryhousehold.com';
const DATE = '2026-07-18';

// Google vol/competition sourced from the KWE research done during planning
// (see /home/brice/.claude/plans/polished-petting-conway.md), plus the
// chicken-salad/greek-salad KWE query run before build. Pinterest volume
// filled only where an exact/near-exact match exists in
// daily-recipe-factory/references/pinclicks-master-2026-07.csv — left
// blank rather than guessed where no real match exists.
const DATA = {
  'one-pan-ground-beef-skillet': { kw: 'ground beef recipes for dinner', gvol: 40500, comp: '', pvol: 956000 },
  'one-pot-pasta': { kw: 'easy dinner recipes', gvol: '', comp: '', pvol: '' },
  'sheet-pan-sausage-and-vegetables': { kw: 'easy dinner recipes', gvol: '', comp: '', pvol: '' },
  'beef-and-broccoli': { kw: 'ground beef recipes for dinner', gvol: '', comp: '', pvol: '' },
  'baked-chicken-breast': { kw: 'baked chicken breast', gvol: 201000, comp: 0.18, pvol: 40664 },
  'chicken-alfredo': { kw: 'chicken alfredo', gvol: 165000, comp: 0.12, pvol: '' },
  'honey-garlic-chicken': { kw: 'honey garlic chicken', gvol: 49500, comp: 0.02, pvol: '' },
  'chicken-parmesan': { kw: 'chicken parmesan', gvol: 49500, comp: 0.02, pvol: '' },
  'baked-chicken-thighs': { kw: 'baked chicken thighs', gvol: 135000, comp: 0.14, pvol: '' },
  'chicken-fajitas': { kw: 'chicken fajitas', gvol: 74000, comp: 0.19, pvol: '' },
  'stuffed-chicken-breast': { kw: 'stuffed chicken breast', gvol: 40500, comp: 0.24, pvol: '' },
  'chicken-casserole': { kw: 'chicken casserole', gvol: 49500, comp: 0.32, pvol: '' },
  'crockpot-chicken': { kw: 'crockpot chicken', gvol: 49500, comp: 0.14, pvol: '' },
  'crockpot-beef-stew': { kw: 'crockpot beef stew', gvol: 40500, comp: 0.11, pvol: '' },
  'crockpot-pot-roast': { kw: 'crockpot pot roast', gvol: 33100, comp: 0.18, pvol: '' },
  'crockpot-chili': { kw: 'crockpot chili', gvol: 33100, comp: 0.05, pvol: '' },
  'air-fryer-chicken-thighs': { kw: 'air fryer chicken thighs', gvol: 135000, comp: 0.07, pvol: '' },
  'air-fryer-chicken-wings': { kw: 'air fryer chicken wings', gvol: 90500, comp: 0.22, pvol: '' },
  'air-fryer-chicken-breast': { kw: 'air fryer chicken breast', gvol: 14800, comp: 0.09, pvol: '' },
  'chocolate-chip-cookies': { kw: 'chocolate chip cookies', gvol: 301000, comp: 0.35, pvol: '' },
  'brown-butter-chocolate-chip-cookies': { kw: 'brown butter chocolate chip cookies', gvol: 90500, comp: 0.03, pvol: '' },
  'peanut-butter-cookies': { kw: 'peanut butter cookies', gvol: 165000, comp: 0.27, pvol: '' },
  'oatmeal-cookies': { kw: 'oatmeal cookies', gvol: 74000, comp: 0.55, pvol: '' },
  'snickerdoodle-cookies': { kw: 'snickerdoodle cookies', gvol: 33100, comp: 0.41, pvol: '' },
  'molasses-cookies': { kw: 'molasses cookies', gvol: 33100, comp: 0.30, pvol: '' },
  'pasta-salad': { kw: 'pasta salad', gvol: 20, comp: '', pvol: 1344033 },
  'chicken-salad': { kw: 'chicken salad', gvol: 165000, comp: 0.26, pvol: 19798 },
  'greek-salad': { kw: 'greek salad', gvol: 110000, comp: 0.16, pvol: '' }
};

const dir = path.join(__dirname, 'content', 'recipes');
const rows = ['date,site,recipe_title,url,target_keyword,pinterest_volume,google_volume,competition,pin_image_url'];

fs.readdirSync(dir).filter(f => f.endsWith('.json')).forEach(f => {
  const r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const d = DATA[r.slug] || { kw: r.targetKeywords[0], gvol: '', comp: '', pvol: '' };
  const url = `${BASE}/${r.hubPath}/${r.slug}/`;
  const pinUrl = `${BASE}/images/${r.slug}/pin.jpg`;
  const title = `"${r.title.replace(/"/g, '""')}"`;
  rows.push([DATE, SITE, title, url, d.kw, d.pvol, d.gvol, d.comp, pinUrl].join(','));
});

const outDir = path.join(__dirname, 'pinterest-batches');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `${DATE}.csv`);
fs.writeFileSync(outFile, rows.join('\n') + '\n');
console.log(`✅ Wrote ${rows.length - 1} rows to ${outFile}`);
