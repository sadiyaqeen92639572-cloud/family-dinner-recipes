const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://thehungryhousehold.com';
const SITE_NAME = 'The Hungry Household';

const dir = path.join(__dirname, 'content', 'recipes');
const all = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));

const HUBS = [
  { path: 'dinner', label: 'Dinner', title: 'Easy Dinner Recipes', intro: 'Weeknight dinners the whole family will eat — one-pan, sheet-pan and skillet meals ready in 30-35 minutes.', crossLink: ['chicken-alfredo', 'crockpot-chicken', 'air-fryer-chicken-thighs'] },
  { path: 'chicken', label: 'Chicken', title: 'Chicken Recipes', intro: 'From baked chicken breast to chicken parmesan — juicy, reliable chicken dinners for any night of the week.' },
  { path: 'crockpot', label: 'Crockpot', title: 'Crockpot Recipes', intro: 'Set it in the morning, come home to dinner. Slow cooker classics that need almost no hands-on time.' },
  { path: 'air-fryer', label: 'Air Fryer', title: 'Air Fryer Recipes', intro: 'Crispy results without the oil — air fryer chicken recipes ready in 20-30 minutes.' },
  { path: 'cookies', label: 'Cookies', title: 'Cookie Recipes', intro: 'Classic, chewy, from-scratch cookies — the kind that disappear from the cooling rack before they\'re fully cool.' },
  { path: 'salads', label: 'Salads', title: 'Salad Recipes', intro: 'Fresh, filling salads for potlucks, lunches and side dishes — pasta salad, chicken salad and Greek salad.' }
];

function formatDuration(iso) {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  const h = parseInt(m[1] || '0', 10);
  const min = parseInt(m[2] || '0', 10);
  if (h === 0 && min === 0) return '0 min';
  const parts = [];
  if (h > 0) parts.push(`${h} hr`);
  if (min > 0) parts.push(`${min} min`);
  return parts.join(' ');
}

function cardHtml(r) {
  return `    <a class="card" href="/${r.hubPath}/${r.slug}/">
      <img src="/images/${r.slug}/hero.jpg" alt="${r.images.heroAlt}" loading="lazy">
      <div class="card-body">
        <h3>${r.title}</h3>
        <span class="meta">${formatDuration(r.totalTime)} · ${r.nutrition.calories} cal</span>
        <p class="summary">${r.metaDescription.split('—')[0].trim()}</p>
      </div>
    </a>`;
}

const HUB_STYLE = `
  :root{--bg:#fffaf5;--text:#2b2119;--accent:#c96f4a;--muted:#7a6a5c;--border:#eee0d3;}
  html{font-size:18px;}
  body{font-family:Georgia,'Times New Roman',serif;background:var(--bg);color:var(--text);margin:0;line-height:1.7;}
  .wrap{max-width:960px;margin:0 auto;padding:1.5rem;}
  h1{font-family:Inter,sans-serif;font-size:2rem;max-width:640px;}
  .intro{color:var(--muted);max-width:640px;}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.2rem;margin-top:2rem;}
  .card{background:#fff;border:1px solid var(--border);border-radius:12px;overflow:hidden;text-decoration:none;color:var(--text);transition:transform .15s;}
  .card:hover{transform:translateY(-3px);}
  .card img{width:100%;height:160px;object-fit:cover;display:block;}
  .card .card-body{padding:0.8rem 1rem;}
  .card h3{font-family:Inter,sans-serif;font-size:1rem;margin:0 0 0.3rem;}
  .card .meta{font-size:0.78rem;color:var(--muted);font-family:Inter,sans-serif;}
  .card .summary{font-size:0.85rem;color:var(--muted);margin:0.4rem 0 0;line-height:1.5;}
`;

HUBS.forEach(hub => {
  const recipes = all.filter(r => r.hubPath === hub.path);
  const cards = recipes.map(cardHtml).join('\n');
  const crossRecipes = (hub.crossLink || []).map(slug => all.find(r => r.slug === slug)).filter(Boolean);
  const crossSection = crossRecipes.length ? `
  <h2 style="font-family:Inter,sans-serif;font-size:1.3rem;margin-top:2.5rem;">More Family Dinner Favorites</h2>
  <div class="grid">
${crossRecipes.map(cardHtml).join('\n')}
  </div>` : '';
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${hub.title} | ${SITE_NAME}</title>
<meta name="description" content="${hub.intro}">
<link rel="canonical" href="${SITE_URL}/${hub.path}/">
<style>${HUB_STYLE}</style>
</head>
<body>
<div class="wrap">
  <p class="meta" style="font-family:Inter,sans-serif"><a href="/">${SITE_NAME}</a> &rsaquo; ${hub.label}</p>
  <h1>${hub.title}</h1>
  <p class="intro">${hub.intro}</p>

  <div class="grid">
${cards}
  </div>
${crossSection}
</div>
<footer style="max-width:960px;margin:0 auto;padding:24px 1.5rem;text-align:center;">
  <p style="font-size:.72rem;color:#7a6a5c;">${SITE_NAME} is part of Gesmine-Invest Limited, registered UK company number 14120136, registered office address at Hardy House, 269 Poynders Gardens, London, London, United Kingdom, SW4 8PQ.</p>
</footer>
</body>
</html>
`;
  fs.mkdirSync(path.join(__dirname, hub.path), { recursive: true });
  fs.writeFileSync(path.join(__dirname, hub.path, 'index.html'), html);
  console.log(`✅ Built /${hub.path}/index.html (${recipes.length} recipes)`);
});

// Homepage
const homeCards = HUBS.map(hub => {
  const recipes = all.filter(r => r.hubPath === hub.path);
  const rep = recipes[0];
  return `    <a class="hub-card" href="/${hub.path}/">
      <img src="/images/${rep.slug}/hero.jpg" alt="${rep.images.heroAlt}" loading="lazy">
      <div class="hub-card-body">
        <h3>${hub.label}</h3>
        <span class="subtitle">${recipes.length} recipes</span>
        <p class="summary">${hub.intro}</p>
      </div>
    </a>`;
}).join('\n');

const homeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${SITE_NAME} — Easy Dinners, Chicken, Cookies &amp; More</title>
<meta name="description" content="Easy family dinner recipes — chicken, crockpot, air fryer, cookies and salads. Simple ingredients, real step-by-step instructions, ready in 30 minutes or less.">
<link rel="canonical" href="${SITE_URL}/">
<meta name="google-site-verification" content="ZYrqX29hsgLtjmKjebWD26amwBK2cBYGcYbgdy48pyw" />
<meta property="og:title" content="${SITE_NAME} — Easy Dinners, Chicken, Cookies &amp; More">
<meta property="og:description" content="Easy family dinner recipes — chicken, crockpot, air fryer, cookies and salads. Ready in 30 minutes or less.">
<meta property="og:type" content="website">
<meta property="og:url" content="${SITE_URL}/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${SITE_NAME} — Easy Dinners, Chicken, Cookies &amp; More">
<meta name="twitter:description" content="Easy family dinner recipes — chicken, crockpot, air fryer, cookies and salads. Ready in 30 minutes or less.">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {"@type":"WebSite","@id":"${SITE_URL}/#website","url":"${SITE_URL}","name":"${SITE_NAME}"},
    {"@type":"Organization","@id":"${SITE_URL}/#organization","name":"${SITE_NAME}","url":"${SITE_URL}","legalName":"Gesmine-Invest Limited","identifier":{"@type":"PropertyValue","propertyID":"UK Company Number","value":"14120136"},"address":{"@type":"PostalAddress","streetAddress":"Hardy House, 269 Poynders Gardens","addressLocality":"London","postalCode":"SW4 8PQ","addressCountry":"GB"}}
  ]
}
</script>
<style>
  :root{--bg:#fffaf5;--text:#2b2119;--accent:#c96f4a;--muted:#7a6a5c;--border:#eee0d3;}
  html{font-size:18px;}
  body{font-family:Georgia,'Times New Roman',serif;background:var(--bg);color:var(--text);margin:0;line-height:1.7;}
  .wrap{max-width:960px;margin:0 auto;padding:1.5rem;}
  h1{font-family:Inter,sans-serif;font-size:2.2rem;max-width:640px;}
  .intro{color:var(--muted);max-width:640px;}
  .hub-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.2rem;margin-top:2rem;}
  .hub-card{background:#fff;border:1px solid var(--border);border-radius:12px;overflow:hidden;text-decoration:none;color:var(--text);display:block;transition:transform .15s;}
  .hub-card:hover{transform:translateY(-3px);}
  .hub-card img{width:100%;height:150px;object-fit:cover;display:block;}
  .hub-card-body{padding:1rem 1.2rem;}
  .hub-card h3{font-family:Inter,sans-serif;margin:0 0 0.3rem;}
  .hub-card .subtitle{font-family:Inter,sans-serif;font-size:0.78rem;color:var(--accent);font-weight:600;text-transform:uppercase;letter-spacing:0.3px;}
  .hub-card .summary{font-size:0.9rem;color:var(--muted);margin:0.4rem 0 0;line-height:1.5;}
</style>
</head>
<body>
<div class="wrap">
  <h1>${SITE_NAME} — Easy Dinners for Real Weeknights</h1>
  <p class="intro">Simple, tested recipes for the meals your family actually eats — dinner, chicken, crockpot, air fryer, cookies and salads. No complicated ingredient lists, just real step-by-step instructions.</p>

  <div class="hub-grid">
${homeCards}
  </div>
</div>
<footer style="max-width:960px;margin:0 auto;padding:24px 1.5rem;text-align:center;">
  <p style="font-size:.72rem;color:#7a6a5c;">${SITE_NAME} is part of Gesmine-Invest Limited, registered UK company number 14120136, registered office address at Hardy House, 269 Poynders Gardens, London, London, United Kingdom, SW4 8PQ.</p>
</footer>
</body>
</html>
`;
fs.writeFileSync(path.join(__dirname, 'index.html'), homeHtml);
console.log('✅ Built homepage');

// About page
const PAGE_STYLE = `
  :root{--bg:#fffaf5;--text:#2b2119;--accent:#c96f4a;--muted:#7a6a5c;--border:#eee0d3;}
  html{font-size:18px;}
  body{font-family:Georgia,'Times New Roman',serif;background:var(--bg);color:var(--text);margin:0;line-height:1.7;}
  .wrap{max-width:720px;margin:0 auto;padding:1.5rem;}
  h1{font-family:Inter,sans-serif;font-size:2rem;}
  h2{font-family:Inter,sans-serif;font-size:1.2rem;margin-top:2rem;}
  p{margin:1rem 0;}
`;
const AUTHOR_NAME = 'Laura Bennett';
const aboutHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About | ${SITE_NAME}</title>
<meta name="description" content="About ${SITE_NAME} — who writes the recipes and why.">
<link rel="canonical" href="${SITE_URL}/about/">
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="wrap">
  <p class="meta" style="font-family:Inter,sans-serif"><a href="/">${SITE_NAME}</a> &rsaquo; About</p>
  <h1>About ${SITE_NAME}</h1>
  <p>${SITE_NAME} is written and tested by ${AUTHOR_NAME}, a home cook who got tired of recipe sites that bury a simple dinner under three thousand words. Every recipe here — dinner, chicken, crockpot, air fryer, cookies or salad — is written to be cooked on a weeknight by someone who doesn't want to think too hard about it.</p>
  <h2>How recipes are developed</h2>
  <p>Each recipe is built from ingredients and techniques that are genuinely common in a home kitchen, with step-by-step instructions written the way you'd explain it to someone standing next to you at the stove. Recipes are reviewed for cooking accuracy — realistic ingredient amounts, tested cook times, and clear doneness cues — before publishing, not after.</p>
  <h2>Who's behind the site</h2>
  <p>${SITE_NAME} is part of Gesmine-Invest Limited, a UK registered company (number 14120136), registered office at Hardy House, 269 Poynders Gardens, London, SW4 8PQ.</p>
  <h2>Questions or feedback</h2>
  <p>If a recipe doesn't work as written, or something in the instructions is unclear, that's useful to know — the goal is recipes that work the first time.</p>
</div>
<footer style="max-width:720px;margin:0 auto;padding:24px 1.5rem;text-align:center;">
  <p style="font-size:.72rem;color:#7a6a5c;">${SITE_NAME} is part of Gesmine-Invest Limited, registered UK company number 14120136, registered office address at Hardy House, 269 Poynders Gardens, London, London, United Kingdom, SW4 8PQ.</p>
</footer>
</body>
</html>
`;
fs.mkdirSync(path.join(__dirname, 'about'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'about', 'index.html'), aboutHtml);
console.log('✅ Built /about/index.html');

// Privacy page
const privacyHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Privacy Policy | ${SITE_NAME}</title>
<meta name="description" content="Privacy policy for ${SITE_NAME}.">
<link rel="canonical" href="${SITE_URL}/privacy/">
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="wrap">
  <p class="meta" style="font-family:Inter,sans-serif"><a href="/">${SITE_NAME}</a> &rsaquo; Privacy Policy</p>
  <h1>Privacy Policy</h1>
  <p>This site is operated by Gesmine-Invest Limited, a UK registered company (number 14120136), registered office at Hardy House, 269 Poynders Gardens, London, SW4 8PQ.</p>
  <h2>Information we collect</h2>
  <p>${SITE_NAME} does not require account creation and does not collect personal information beyond standard, anonymized web analytics (page views, referring pages, approximate location from IP address) used to understand which recipes are useful to visitors.</p>
  <h2>Cookies</h2>
  <p>The site may use cookies for analytics purposes. No cookies are used to sell personal data to third parties.</p>
  <h2>Third-party links</h2>
  <p>Recipe pages may link to third-party sites (such as Pinterest, for saving recipes). This policy does not cover the privacy practices of those third-party sites.</p>
  <h2>Contact</h2>
  <p>Questions about this policy can be directed to Gesmine-Invest Limited at the registered office address above.</p>
</div>
<footer style="max-width:720px;margin:0 auto;padding:24px 1.5rem;text-align:center;">
  <p style="font-size:.72rem;color:#7a6a5c;">${SITE_NAME} is part of Gesmine-Invest Limited, registered UK company number 14120136, registered office address at Hardy House, 269 Poynders Gardens, London, London, United Kingdom, SW4 8PQ.</p>
</footer>
</body>
</html>
`;
fs.mkdirSync(path.join(__dirname, 'privacy'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'privacy', 'index.html'), privacyHtml);
console.log('✅ Built /privacy/index.html');

// 404 page — Cloudflare Pages auto-serves this with a real 404 status for unmatched routes
const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Not Found | ${SITE_NAME}</title>
<meta name="robots" content="noindex">
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="wrap">
  <h1>Page Not Found</h1>
  <p>That recipe or page doesn't exist. Try the <a href="/">homepage</a>, or browse by category:</p>
  <p>${HUBS.map(h => `<a href="/${h.path}/">${h.label}</a>`).join(' · ')}</p>
</div>
</body>
</html>
`;
fs.writeFileSync(path.join(__dirname, '404.html'), notFoundHtml);
console.log('✅ Built /404.html');

// Sitemap
const urls = [`${SITE_URL}/`, `${SITE_URL}/about/`, `${SITE_URL}/privacy/`];
HUBS.forEach(hub => urls.push(`${SITE_URL}/${hub.path}/`));
all.forEach(r => urls.push(`${SITE_URL}/${r.hubPath}/${r.slug}/`));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log(`✅ Built sitemap.xml (${urls.length} URLs)`);

// robots.txt
fs.writeFileSync(path.join(__dirname, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log('✅ Built robots.txt');
