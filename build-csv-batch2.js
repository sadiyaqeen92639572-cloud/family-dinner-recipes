const fs = require('fs');
const path = require('path');

const SITE = 'thehungryhousehold.com';
const BASE = 'https://thehungryhousehold.com';
const DATE = '2026-07-18';

// Google vol/competition from KWE batch query run before this build.
// Pinterest volume from exact/near-exact matches in the master CSV
// (daily-recipe-factory/references/pinclicks-master-2026-07.csv).
const DATA = {
  'baked-salmon': { kw: 'baked salmon', gvol: 90500, comp: 0.16, pvol: 43847 },
  'shrimp-pasta': { kw: 'shrimp pasta', gvol: 27100, comp: 0.17, pvol: 222563 },
  'easy-meatloaf': { kw: 'meatloaf', gvol: 165000, comp: 0.12, pvol: 125679 },
  'hamburger-casserole': { kw: 'hamburger casserole', gvol: 18100, comp: 0.30, pvol: 86212 },
  'chicken-stir-fry': { kw: 'chicken stir fry', gvol: 49500, comp: 0.13, pvol: 41733 },
  'crustless-quiche': { kw: 'crustless quiche', gvol: 18100, comp: 0.10, pvol: 45840 },
  'italian-meatballs': { kw: 'italian meatballs', gvol: 14800, comp: 0.51, pvol: 54783 },
  'ramen-noodle-stir-fry': { kw: 'ramen noodle stir fry', gvol: 4400, comp: 0.41, pvol: 460074 },
  'cauliflower-fried-rice': { kw: 'cauliflower fried rice', gvol: 4400, comp: 0.34, pvol: 73440 },
  'beef-and-rice-skillet': { kw: 'beef and rice skillet', gvol: 720, comp: 0.04, pvol: 43058 },
  'loaded-baked-potatoes': { kw: 'loaded baked potatoes', gvol: 40500, comp: 0.05, pvol: 44499 },
  'roasted-sweet-potatoes': { kw: 'roasted sweet potatoes', gvol: 90500, comp: 0.01, pvol: 1356710 },
  'sweet-and-sour-meatballs': { kw: 'sweet and sour meatballs', gvol: 14800, comp: 0.03, pvol: 53846 },
  'chicken-tacos': { kw: 'chicken tacos', gvol: 49500, comp: 0.09, pvol: 75220 },
  'chicken-burrito-bowl': { kw: 'chicken burrito bowl', gvol: 8100, comp: 0.12, pvol: 3838 },
  'beef-enchiladas': { kw: 'beef enchiladas', gvol: 18100, comp: 0.12, pvol: 2660 },
  'turkey-chili': { kw: 'turkey chili', gvol: 18100, comp: 0.20, pvol: 16891 },
  'classic-lasagna': { kw: 'classic lasagna', gvol: 880, comp: 0.31, pvol: 8954 },
  'ground-turkey-skillet': { kw: 'ground turkey skillet', gvol: 1000, comp: 0.01, pvol: 784075 },
  'classic-beef-burgers': { kw: 'classic beef burgers', gvol: 210, comp: 0.03, pvol: 272088 },
  'homemade-pizza': { kw: 'homemade pizza', gvol: 27100, comp: 0.27, pvol: 0 },
  'slow-cooker-corned-beef': { kw: 'slow cooker corned beef', gvol: 9900, comp: 0.03, pvol: 63096 },
  'air-fryer-salmon': { kw: 'air fryer salmon', gvol: 135000, comp: 0.10, pvol: 75391 }
};

const dir = path.join(__dirname, 'content', 'recipes');
const rows = ['date,site,recipe_title,url,target_keyword,pinterest_volume,google_volume,competition,pin_image_url'];

Object.keys(DATA).forEach(slug => {
  const r = JSON.parse(fs.readFileSync(path.join(dir, `${slug}.json`), 'utf8'));
  const d = DATA[slug];
  const url = `${BASE}/${r.hubPath}/${r.slug}/`;
  const pinUrl = `${BASE}/images/${r.slug}/pin.jpg`;
  const title = `"${r.title.replace(/"/g, '""')}"`;
  rows.push([DATE, SITE, title, url, d.kw, d.pvol, d.gvol, d.comp, pinUrl].join(','));
});

const outDir = path.join(__dirname, 'pinterest-batches');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `${DATE}-batch2.csv`);
fs.writeFileSync(outFile, rows.join('\n') + '\n');
console.log(`✅ Wrote ${rows.length - 1} rows to ${outFile}`);
