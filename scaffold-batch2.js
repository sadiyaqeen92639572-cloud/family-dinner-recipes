const fs = require('fs');
const path = require('path');

const DATE = '2026-07-18';
const AUTHOR = 'Laura Bennett';

function r(o) {
  return {
    slug: o.slug,
    title: o.title,
    hubPath: o.hubPath,
    hubLabel: o.hubLabel,
    metaDescription: o.metaDescription,
    targetKeywords: o.targetKeywords,
    author: AUTHOR,
    datePublished: DATE,
    prepTime: o.prepTime,
    cookTime: o.cookTime,
    totalTime: o.totalTime,
    recipeYield: o.recipeYield,
    recipeCategory: o.hubLabel,
    recipeCuisine: o.cuisine,
    keywords: o.keywords,
    nutrition: o.nutrition,
    ingredients: o.ingredients,
    steps: o.steps,
    tips: o.tips,
    storyIntro: o.storyIntro,
    storyNote: o.storyNote,
    reviews: [],
    reviewCount: 0,
    avgRating: null,
    images: {
      hero: 'hero.jpg', pin: 'pin.jpg', texture: 'texture.jpg',
      heroAlt: o.heroAlt, textureAlt: o.textureAlt, pinAlt: o.pinAlt
    }
  };
}

const RECIPES = [
r({
  slug: 'baked-salmon', title: 'Baked Salmon', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Simple baked salmon with lemon and garlic butter — flaky, never dry, ready in 20 minutes.',
  targetKeywords: ['baked salmon', 'salmon recipes'], cuisine: 'American', keywords: 'baked salmon, easy salmon recipe, oven baked salmon',
  prepTime: 'PT5M', cookTime: 'PT15M', totalTime: 'PT20M', recipeYield: '4 servings',
  nutrition: { calories: '320', proteinContent: '34g', carbohydrateContent: '2g', fatContent: '19g' },
  ingredients: ['4 salmon fillets (6 oz each)', '3 tbsp butter, melted', '3 cloves garlic, minced', '1 lemon, half juiced and half sliced', '1 tsp dried dill', 'Salt and pepper, to taste', 'Fresh parsley, for serving'],
  steps: [
    { name: 'Prep the salmon', text: 'Preheat oven to 400°F (200°C). Pat salmon fillets dry and place skin-side down on a lined baking sheet.' },
    { name: 'Make the butter sauce', text: 'Whisk together melted butter, garlic, lemon juice and dill. Brush generously over the salmon fillets, then season with salt and pepper.' },
    { name: 'Bake', text: 'Top each fillet with a lemon slice. Bake for 12-15 minutes, until the salmon flakes easily with a fork and reaches 145°F (63°C) internally.' },
    { name: 'Serve', text: 'Garnish with fresh parsley and serve immediately.' }
  ],
  tips: [
    { question: 'How do I know when salmon is done without a thermometer?', answer: 'The flesh should turn from translucent to opaque pink and flake easily when pressed with a fork — if it still looks glossy and resists flaking, give it another 2-3 minutes.' },
    { question: 'Why bake skin-side down?', answer: 'The skin acts as a barrier that protects the flesh from the direct heat of the pan, keeping the fish moist while the top gets lightly golden from the butter.' },
    { question: 'Can I use frozen salmon?', answer: 'Yes, but thaw it fully in the fridge overnight first — baking from frozen cooks unevenly and the butter sauce won\'t adhere well to an icy surface.' }
  ],
  storyIntro: ['Salmon has a reputation for being easy to overcook, but the fix is simpler than most people think — a hot oven, a short cook time, and pulling it the moment it flakes.', 'This version uses a garlic lemon butter that bastes the fish as it bakes, so there\'s no separate sauce to make.'],
  storyNote: 'Pull the salmon the moment it flakes easily — carryover heat finishes the last bit of cooking, and it goes from perfectly moist to dry fast if left in even a few minutes too long.',
  heroAlt: 'Baked salmon fillets with lemon slices and fresh parsley', textureAlt: 'Close-up of flaky baked salmon showing moist interior', pinAlt: 'Overhead baked salmon with garlic butter sauce and lemon'
}),
r({
  slug: 'shrimp-pasta', title: 'Shrimp Pasta', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Garlic butter shrimp pasta with a light white wine sauce — restaurant-quality in 25 minutes.',
  targetKeywords: ['shrimp pasta', 'easy dinner recipes'], cuisine: 'Italian-American', keywords: 'shrimp pasta, garlic butter shrimp, easy shrimp dinner',
  prepTime: 'PT10M', cookTime: 'PT15M', totalTime: 'PT25M', recipeYield: '4 servings',
  nutrition: { calories: '480', proteinContent: '28g', carbohydrateContent: '52g', fatContent: '16g' },
  ingredients: ['12 oz linguine', '1.5 lbs large shrimp, peeled and deveined', '4 tbsp butter', '4 cloves garlic, minced', '1/2 cup dry white wine (or chicken broth)', '1/4 cup fresh parsley, chopped', '1/2 tsp red pepper flakes', 'Zest of 1 lemon', 'Salt and pepper, to taste', 'Grated parmesan, for serving'],
  steps: [
    { name: 'Cook the pasta', text: 'Cook linguine in salted boiling water until al dente. Reserve 1/2 cup pasta water, then drain.' },
    { name: 'Sear the shrimp', text: 'Pat shrimp dry, season with salt and pepper. Melt 2 tbsp butter in a large skillet over medium-high heat and sear shrimp 1-2 minutes per side until pink. Remove and set aside.' },
    { name: 'Make the sauce', text: 'Add remaining butter and garlic to the skillet, cook 30 seconds. Pour in white wine and simmer 2-3 minutes to reduce slightly.' },
    { name: 'Combine and serve', text: 'Return shrimp and drained pasta to the skillet, toss with parsley, red pepper flakes and lemon zest, adding pasta water as needed to loosen. Top with parmesan.' }
  ],
  tips: [
    { question: 'Why does the shrimp need to come out of the pan before the sauce?', answer: 'Shrimp cooks in just a couple minutes — leaving it in while the sauce reduces would overcook it into a rubbery texture, so searing it first and adding it back at the end keeps it tender.' },
    { question: 'Can I skip the wine?', answer: 'Yes — chicken broth with a splash of white wine vinegar or lemon juice gives a similar acidity without the alcohol.' },
    { question: 'How do I keep the shrimp from turning rubbery?', answer: 'Watch for the color change from gray to pink and opaque — that\'s the signal it\'s done, usually just 1-2 minutes per side over medium-high heat.' }
  ],
  storyIntro: ['This is the pasta that convinces people cooking shrimp at home is easier than it looks — the whole dish comes together in the time it takes to boil the pasta.', 'Searing the shrimp separately and adding it back at the end is the one step that keeps it from turning tough.'],
  storyNote: 'Sear the shrimp just until pink and opaque, then pull it out of the pan immediately — it keeps cooking in residual heat, and rubbery shrimp is almost always a sign of leaving it in the pan too long.',
  heroAlt: 'Bowl of shrimp pasta with garlic butter sauce and parsley', textureAlt: 'Close-up of shrimp pasta showing glossy garlic butter sauce', pinAlt: 'Overhead shrimp pasta with lemon and parmesan'
}),
r({
  slug: 'easy-meatloaf', title: 'Easy Meatloaf', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Classic easy meatloaf with a tangy glaze — moist, never dry, a true comfort food dinner.',
  targetKeywords: ['meatloaf', 'easy dinner recipes'], cuisine: 'American', keywords: 'easy meatloaf, classic meatloaf recipe, meatloaf with glaze',
  prepTime: 'PT15M', cookTime: 'PT1H', totalTime: 'PT1H15M', recipeYield: '6 servings',
  nutrition: { calories: '360', proteinContent: '26g', carbohydrateContent: '18g', fatContent: '20g' },
  ingredients: ['2 lbs ground beef', '1 cup breadcrumbs', '1/2 cup milk', '2 eggs', '1 small onion, finely diced', '2 cloves garlic, minced', '2 tbsp Worcestershire sauce', '1 tsp salt', '1/2 tsp black pepper', '1/2 cup ketchup', '2 tbsp brown sugar', '1 tbsp apple cider vinegar'],
  steps: [
    { name: 'Soak the breadcrumbs', text: 'Preheat oven to 350°F (175°C). Combine breadcrumbs and milk in a large bowl, let sit 5 minutes to soften.' },
    { name: 'Mix the meatloaf', text: 'Add ground beef, eggs, onion, garlic, Worcestershire sauce, salt and pepper to the breadcrumb mixture. Mix gently with your hands until just combined — don\'t overwork it.' },
    { name: 'Shape and glaze', text: 'Shape into a loaf on a lined baking sheet or press into a loaf pan. Whisk together ketchup, brown sugar and vinegar, and spread half over the top.' },
    { name: 'Bake', text: 'Bake for 45 minutes, brush with remaining glaze, then bake 15 more minutes until internal temperature reaches 160°F (71°C). Rest 10 minutes before slicing.' }
  ],
  tips: [
    { question: 'Why does my meatloaf fall apart when sliced?', answer: 'Not enough binder (egg/breadcrumbs) or slicing before it rests — meatloaf needs 10 minutes to firm up after baking, same as a roast, before it holds together when cut.' },
    { question: 'Why not overmix the meat mixture?', answer: 'Overmixing compacts the meat proteins too tightly, which makes the finished meatloaf dense and tough instead of tender — mix just until the ingredients are combined.' },
    { question: 'Can I make this ahead?', answer: 'Yes — shape the loaf and refrigerate, unbaked, up to 24 hours ahead. Add about 5-10 extra minutes to the bake time if going in cold from the fridge.' }
  ],
  storyIntro: ['Meatloaf gets dismissed as boring, but a good one — moist inside, with a tangy glaze that caramelizes on top — is genuine comfort food.', 'The trick is restraint: don\'t overmix the meat, and let it rest before slicing so it doesn\'t fall apart.'],
  storyNote: 'Mix the meat mixture gently and only until combined — overworking it with your hands compacts the proteins and makes the loaf dense instead of tender.',
  heroAlt: 'Sliced meatloaf with glossy ketchup glaze on a platter', textureAlt: 'Close-up of meatloaf slice showing moist interior texture', pinAlt: 'Overhead glazed meatloaf fresh from the oven'
}),
r({
  slug: 'hamburger-casserole', title: 'Hamburger Casserole', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Cheesy hamburger casserole with pasta and ground beef — a filling one-dish family dinner ready in 45 minutes.',
  targetKeywords: ['hamburger casserole', 'easy dinner recipes'], cuisine: 'American', keywords: 'hamburger casserole, ground beef pasta bake, family dinner casserole',
  prepTime: 'PT15M', cookTime: 'PT30M', totalTime: 'PT45M', recipeYield: '6 servings',
  nutrition: { calories: '440', proteinContent: '26g', carbohydrateContent: '38g', fatContent: '20g' },
  ingredients: ['1.5 lbs ground beef', '1 onion, diced', '2 cloves garlic, minced', '1 can (14.5 oz) diced tomatoes', '2 cups beef broth', '2 cups egg noodles, uncooked', '1 tsp Italian seasoning', '1.5 cups shredded cheddar cheese', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Brown the beef', text: 'Preheat oven to 375°F (190°C). In an oven-safe skillet, brown the ground beef with onion and garlic over medium-high heat, about 7 minutes. Drain excess fat.' },
    { name: 'Simmer with noodles', text: 'Stir in diced tomatoes, beef broth, uncooked egg noodles and Italian seasoning. Bring to a simmer, cover, and cook for 10-12 minutes until noodles are tender.' },
    { name: 'Add cheese and bake', text: 'Season with salt and pepper, top with shredded cheddar, and transfer to the oven for 10 minutes until the cheese is melted and bubbly.' }
  ],
  tips: [
    { question: 'Do I need to cook the noodles separately first?', answer: 'No — they cook directly in the broth and tomato mixture, which is what makes this a one-dish meal. Just make sure there\'s enough liquid to cover them while they simmer.' },
    { question: 'No oven-safe skillet — what do I do?', answer: 'Brown the beef in a regular skillet, then transfer everything to a baking dish before adding the cheese and baking.' },
    { question: 'Can I make this ahead?', answer: 'It reheats well but the noodles soften further — for best texture, assemble through the simmer step and add cheese right before baking if prepping ahead.' }
  ],
  storyIntro: ['This is the one-pan dinner that uses pantry staples most people already have — ground beef, noodles, canned tomatoes — and turns them into something the whole family actually asks for again.', 'Cooking the noodles directly in the broth means one less pot and a thicker, more flavorful sauce.'],
  storyNote: 'Keep an eye on the noodles while they simmer — different brands absorb liquid at different rates, so check for tenderness starting at the 10-minute mark rather than trusting the clock alone.',
  heroAlt: 'Cheesy hamburger casserole with egg noodles in a baking dish', textureAlt: 'Close-up of hamburger casserole showing melted cheese and noodles', pinAlt: 'Overhead hamburger casserole fresh from the oven'
}),
r({
  slug: 'chicken-stir-fry', title: 'Chicken Stir Fry', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Quick chicken stir fry with crisp vegetables in a savory garlic sauce — faster than takeout, ready in 25 minutes.',
  targetKeywords: ['chicken stir fry', 'chicken recipes'], cuisine: 'Asian-inspired', keywords: 'chicken stir fry, easy stir fry recipe, weeknight chicken dinner',
  prepTime: 'PT15M', cookTime: 'PT10M', totalTime: 'PT25M', recipeYield: '4 servings',
  nutrition: { calories: '310', proteinContent: '30g', carbohydrateContent: '20g', fatContent: '12g' },
  ingredients: ['1.5 lbs boneless chicken breast, sliced thin', '2 cups broccoli florets', '1 red bell pepper, sliced', '1 carrot, sliced thin', '3 tbsp soy sauce', '1 tbsp oyster sauce', '1 tbsp cornstarch', '1 tbsp honey', '2 cloves garlic, minced', '1 tsp fresh ginger, minced', '2 tbsp vegetable oil', 'Cooked rice, for serving'],
  steps: [
    { name: 'Make the sauce', text: 'Whisk together soy sauce, oyster sauce, cornstarch and honey in a small bowl. Set aside.' },
    { name: 'Sear the chicken', text: 'Heat 1 tbsp oil in a large skillet or wok over high heat. Add chicken in a single layer and sear 4-5 minutes until golden and cooked through. Remove and set aside.' },
    { name: 'Stir fry the vegetables', text: 'Add remaining oil, garlic and ginger, cook 30 seconds. Add broccoli, bell pepper and carrot, stir frying for 4-5 minutes until crisp-tender.' },
    { name: 'Combine and serve', text: 'Return chicken to the pan, pour in the sauce, and toss for 1-2 minutes until it thickens and coats everything. Serve over rice.' }
  ],
  tips: [
    { question: 'Why does restaurant stir fry taste different from mine?', answer: 'Restaurant woks reach much higher heat than a home stove — get your pan as hot as possible before adding anything, and don\'t overcrowd it, which drops the temperature and steams the food instead of searing it.' },
    { question: 'Can I use frozen vegetables?', answer: 'Fresh vegetables give a crisper texture, but frozen works in a pinch — thaw and pat dry first, since extra moisture will thin out the sauce.' },
    { question: 'How do I keep the chicken tender?', answer: 'Slice it thin and against the grain, and don\'t overcook it during the initial sear — it finishes cooking slightly when tossed back in with the sauce.' }
  ],
  storyIntro: ['Stir fry is one of the fastest genuinely good dinners you can make at home, provided the pan is hot enough — that\'s the one variable that makes or breaks it.', 'Searing the chicken and vegetables separately before combining keeps everything from steaming into a soggy mess.'],
  storyNote: 'Get the pan smoking hot before anything goes in — a stir fry cooked at moderate heat steams instead of sears, and that\'s the biggest difference between homemade and restaurant results.',
  heroAlt: 'Chicken stir fry with broccoli and bell peppers in a glossy sauce', textureAlt: 'Close-up of chicken stir fry showing sauce coating chicken and vegetables', pinAlt: 'Overhead chicken stir fry served over rice'
}),
r({
  slug: 'crustless-quiche', title: 'Crustless Quiche', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Crustless quiche with spinach, cheese and bacon — a low-carb breakfast-for-dinner that bakes in one dish, no crust needed.',
  targetKeywords: ['crustless quiche', 'easy dinner recipes'], cuisine: 'French-American', keywords: 'crustless quiche, low carb quiche, easy egg bake',
  prepTime: 'PT10M', cookTime: 'PT35M', totalTime: 'PT45M', recipeYield: '6 servings',
  nutrition: { calories: '260', proteinContent: '17g', carbohydrateContent: '4g', fatContent: '19g' },
  ingredients: ['8 large eggs', '1 cup half-and-half', '2 cups fresh spinach, chopped', '1 cup shredded cheddar or Swiss cheese', '4 slices bacon, cooked and crumbled', '1/4 cup diced onion', 'Salt and pepper, to taste', '1/4 tsp nutmeg (optional)'],
  steps: [
    { name: 'Prep', text: 'Preheat oven to 350°F (175°C). Grease a 9-inch pie dish or baking dish.' },
    { name: 'Whisk the base', text: 'In a large bowl, whisk together eggs, half-and-half, salt, pepper and nutmeg until smooth.' },
    { name: 'Layer and pour', text: 'Scatter spinach, cheese, bacon and onion evenly in the prepared dish. Pour the egg mixture over the top.' },
    { name: 'Bake', text: 'Bake for 30-35 minutes, until the center is just set and no longer jiggles when the dish is gently shaken. Let rest 10 minutes before slicing.' }
  ],
  tips: [
    { question: 'How do I know when the quiche is done without a crust to guide me?', answer: 'The center should be set with only the faintest jiggle, similar to a firm custard — a toothpick inserted in the middle should come out mostly clean.' },
    { question: 'Why let it rest before slicing?', answer: 'Like any egg bake, it continues to set as it cools — cutting into it immediately can cause it to look underdone and fall apart, even when it\'s actually fully cooked.' },
    { question: 'Can I swap the fillings?', answer: 'Yes — this base recipe works with almost any cooked vegetable or meat combination, just keep the total volume of add-ins similar so the egg-to-filling ratio stays balanced.' }
  ],
  storyIntro: ['Skipping the crust turns quiche from a weekend baking project into a genuine weeknight dinner — whisk, layer, pour, bake.', 'It also means no soggy-bottom crust problem to troubleshoot, and the whole thing reheats well for lunch the next day.'],
  storyNote: 'Check for doneness with a gentle shake of the dish, not a knife — the center should have only a slight jiggle, since it firms up further as it rests.',
  heroAlt: 'Crustless quiche with spinach and bacon sliced on a plate', textureAlt: 'Close-up of crustless quiche showing set egg custard texture', pinAlt: 'Overhead crustless quiche fresh from the oven'
}),
r({
  slug: 'italian-meatballs', title: 'Italian Meatballs', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Classic Italian meatballs simmered in marinara — tender, flavorful, perfect over pasta or in a sub.',
  targetKeywords: ['italian meatballs', 'easy dinner recipes'], cuisine: 'Italian-American', keywords: 'italian meatballs, homemade meatballs, meatballs in marinara',
  prepTime: 'PT20M', cookTime: 'PT30M', totalTime: 'PT50M', recipeYield: '6 servings (24 meatballs)',
  nutrition: { calories: '320', proteinContent: '22g', carbohydrateContent: '12g', fatContent: '20g' },
  ingredients: ['1 lb ground beef', '1/2 lb ground pork', '3/4 cup breadcrumbs', '1/2 cup grated parmesan', '2 eggs', '1/4 cup fresh parsley, chopped', '3 cloves garlic, minced', '1/2 tsp dried oregano', 'Salt and pepper, to taste', '2 tbsp olive oil', '4 cups marinara sauce'],
  steps: [
    { name: 'Mix the meatballs', text: 'In a large bowl, combine ground beef, ground pork, breadcrumbs, parmesan, eggs, parsley, garlic, oregano, salt and pepper. Mix gently until just combined.' },
    { name: 'Shape', text: 'Roll the mixture into 24 meatballs, about 1.5 inches each.' },
    { name: 'Sear', text: 'Heat olive oil in a large skillet over medium-high heat. Sear meatballs in batches for 2-3 minutes per side until browned (they don\'t need to be cooked through yet).' },
    { name: 'Simmer in sauce', text: 'Add marinara sauce to the skillet, nestle the meatballs back in, and simmer covered for 15-20 minutes until meatballs reach 160°F (71°C) and the sauce has thickened slightly.' }
  ],
  tips: [
    { question: 'Why use a mix of beef and pork?', answer: 'Pork adds fat and a slightly sweeter flavor that beef alone doesn\'t have — the combination is the classic Italian-American ratio for a juicier, more flavorful meatball.' },
    { question: 'Why sear before simmering in sauce?', answer: 'Searing builds a browned crust and locks in some structure before the meatballs finish cooking gently in the sauce — skipping straight to simmering in liquid gives a softer, less developed flavor.' },
    { question: 'Can I freeze these?', answer: 'Yes — freeze the seared (or fully cooked) meatballs in a single layer, then transfer to a bag. They reheat well directly in simmering sauce from frozen.' }
  ],
  storyIntro: ['A good meatball recipe is worth having on hand — over spaghetti, stuffed in a sub roll, or simmered as an appetizer, it covers a lot of ground.', 'Searing first before finishing in the sauce is what separates a meatball with real texture from one that\'s just boiled and mushy.'],
  storyNote: 'Sear the meatballs until browned but not fully cooked through — they finish cooking in the simmering sauce, which also keeps them from drying out.',
  heroAlt: 'Italian meatballs simmering in marinara sauce', textureAlt: 'Close-up of Italian meatball cut open showing tender interior', pinAlt: 'Overhead skillet of Italian meatballs in marinara with basil'
}),
r({
  slug: 'ramen-noodle-stir-fry', title: 'Ramen Noodle Stir Fry', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Ramen noodle stir fry with chicken and vegetables in a savory sauce — a budget-friendly 20-minute dinner using instant ramen.',
  targetKeywords: ['ramen noodle recipes', 'easy dinner recipes'], cuisine: 'Asian-inspired', keywords: 'ramen noodle stir fry, instant ramen recipe, quick noodle dinner',
  prepTime: 'PT10M', cookTime: 'PT10M', totalTime: 'PT20M', recipeYield: '4 servings',
  nutrition: { calories: '380', proteinContent: '22g', carbohydrateContent: '42g', fatContent: '14g' },
  ingredients: ['3 packs instant ramen noodles (seasoning packets discarded)', '1 lb boneless chicken breast, sliced thin', '2 cups mixed vegetables (broccoli, carrots, snap peas)', '3 tbsp soy sauce', '1 tbsp sesame oil', '1 tbsp brown sugar', '2 cloves garlic, minced', '1 tsp fresh ginger, minced', '2 tbsp vegetable oil', 'Sesame seeds and green onion, for serving'],
  steps: [
    { name: 'Cook the noodles', text: 'Boil the ramen noodles for 2-3 minutes until just tender (discard the seasoning packets). Drain and set aside.' },
    { name: 'Make the sauce', text: 'Whisk together soy sauce, sesame oil, brown sugar, garlic and ginger.' },
    { name: 'Cook the chicken and vegetables', text: 'Heat vegetable oil in a large skillet or wok over high heat. Cook chicken 4-5 minutes until golden. Add vegetables and stir fry 3-4 minutes until crisp-tender.' },
    { name: 'Combine', text: 'Add the cooked noodles and sauce to the skillet, tossing everything together for 1-2 minutes until well coated. Top with sesame seeds and green onion.' }
  ],
  tips: [
    { question: 'Why discard the seasoning packets?', answer: 'The packets are mostly salt and MSG-heavy flavoring meant for instant soup — this recipe builds its own sauce, and using both would make the dish overpoweringly salty.' },
    { question: 'How do I keep the noodles from clumping?', answer: 'Don\'t overcook them past the 2-3 minute mark, and toss them with a little oil after draining if they\'ll sit for more than a minute before going into the stir fry.' },
    { question: 'Can I use other noodles instead of ramen?', answer: 'Yes — udon or lo mein noodles work as a direct swap if you have them, though ramen is usually the most budget-friendly and easiest to find.' }
  ],
  storyIntro: ['Instant ramen gets a bad reputation for being a dorm-room shortcut, but the noodles themselves are genuinely good once you ditch the seasoning packet and build a real sauce.', 'This turns a $0.30 pack of noodles into an actual dinner with protein and vegetables in under 20 minutes.'],
  storyNote: 'Skip the seasoning packets entirely — they\'re built for instant soup, not a stir fry sauce, and using them on top of the soy-sesame sauce here makes the dish inedibly salty.',
  heroAlt: 'Ramen noodle stir fry with chicken and vegetables', textureAlt: 'Close-up of ramen noodles coated in glossy stir fry sauce', pinAlt: 'Overhead bowl of ramen noodle stir fry with sesame garnish'
}),
r({
  slug: 'cauliflower-fried-rice', title: 'Cauliflower Fried Rice', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Low-carb cauliflower fried rice with egg and vegetables — all the flavor of takeout fried rice, a fraction of the carbs.',
  targetKeywords: ['cauliflower fried rice', 'easy dinner recipes'], cuisine: 'Asian-inspired', keywords: 'cauliflower fried rice, low carb fried rice, cauliflower rice recipe',
  prepTime: 'PT10M', cookTime: 'PT15M', totalTime: 'PT25M', recipeYield: '4 servings',
  nutrition: { calories: '180', proteinContent: '9g', carbohydrateContent: '12g', fatContent: '11g' },
  ingredients: ['1 large head cauliflower, riced (or 4 cups pre-riced cauliflower)', '2 eggs, beaten', '1 cup frozen peas and carrots', '3 green onions, sliced', '2 cloves garlic, minced', '3 tbsp soy sauce', '1 tbsp sesame oil', '2 tbsp vegetable oil', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Rice the cauliflower', text: 'If using a whole head, pulse florets in a food processor until they resemble rice grains. Pat dry with paper towels to remove excess moisture.' },
    { name: 'Scramble the egg', text: 'Heat 1 tbsp oil in a large skillet or wok over medium-high heat. Pour in the beaten eggs and scramble until just set. Remove and set aside.' },
    { name: 'Cook the vegetables', text: 'Add remaining oil, garlic, peas and carrots to the skillet, cooking 2-3 minutes.' },
    { name: 'Add cauliflower rice', text: 'Add the riced cauliflower, soy sauce and sesame oil. Stir fry for 5-6 minutes until the cauliflower is tender but not mushy. Fold in the scrambled egg and green onions before serving.' }
  ],
  tips: [
    { question: 'Why does my cauliflower rice turn mushy?', answer: 'Excess moisture is the culprit — pat the riced cauliflower dry with paper towels before cooking, and don\'t overcrowd the pan, which traps steam instead of letting it fry.' },
    { question: 'Can I use store-bought riced cauliflower?', answer: 'Yes, and it saves a step — just check if it\'s fresh or frozen; frozen riced cauliflower releases more water, so it may need an extra minute or two of cooking to dry out properly.' },
    { question: 'How do I add protein to make this a full meal?', answer: 'Diced cooked chicken, shrimp, or crumbled tofu all stir in well at the same stage as the vegetables.' }
  ],
  storyIntro: ['Cauliflower fried rice earns its place on a real dinner rotation, not just as a diet substitute — the key is treating it exactly like rice: dry it out first and don\'t crowd the pan.', 'Done right, it has the same fried, slightly caramelized edges as the real thing.'],
  storyNote: 'Pat the riced cauliflower dry before it hits the pan — skipping this is the single biggest reason cauliflower rice turns watery and mushy instead of properly fried.',
  heroAlt: 'Cauliflower fried rice with egg and vegetables in a skillet', textureAlt: 'Close-up of cauliflower fried rice showing fried texture and scrambled egg', pinAlt: 'Overhead bowl of cauliflower fried rice with green onion'
}),
r({
  slug: 'beef-and-rice-skillet', title: 'Beef and Rice Skillet', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'One-pan beef and rice skillet with a savory tomato broth — a simple, filling weeknight dinner with easy cleanup.',
  targetKeywords: ['beef and rice skillet', 'ground beef recipes'], cuisine: 'American', keywords: 'beef and rice skillet, ground beef and rice, one pan dinner',
  prepTime: 'PT10M', cookTime: 'PT25M', totalTime: 'PT35M', recipeYield: '4 servings',
  nutrition: { calories: '420', proteinContent: '25g', carbohydrateContent: '40g', fatContent: '17g' },
  ingredients: ['1 lb ground beef', '1 onion, diced', '2 cloves garlic, minced', '1 cup long-grain rice, uncooked', '1 can (14.5 oz) diced tomatoes', '2 cups beef broth', '1 tsp cumin', '1 tsp paprika', '1 cup shredded cheese', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Brown the beef', text: 'Heat a large deep skillet over medium-high heat. Brown the ground beef with onion and garlic, about 6-7 minutes. Drain excess fat.' },
    { name: 'Add rice and liquid', text: 'Stir in rice, diced tomatoes, beef broth, cumin and paprika. Bring to a simmer, cover, and cook for 18-20 minutes until rice is tender and liquid is absorbed.' },
    { name: 'Finish', text: 'Season with salt and pepper, top with cheese, cover for 2 minutes until melted, then serve.' }
  ],
  tips: [
    { question: 'Why is my rice unevenly cooked?', answer: 'Uneven heat or lifting the lid too often lets steam escape — keep the skillet covered and the heat at a gentle simmer for the full 18-20 minutes without checking repeatedly.' },
    { question: 'Can I use brown rice instead?', answer: 'Yes, but it needs roughly double the cook time and a bit more liquid — white rice is more reliable for the one-pan method here.' },
    { question: 'How do I add more vegetables?', answer: 'Diced bell peppers or corn stir in well with the rice at the start of the simmer and cook through in the same time.' }
  ],
  storyIntro: ['This is the dinner that uses one skillet and pantry staples to make something that tastes like it took more effort than it did.', 'The rice cooks directly in the seasoned broth, soaking up all the flavor instead of being a plain side.'],
  storyNote: 'Keep the lid on during the full simmer — lifting it to check repeatedly lets steam escape and can leave the rice undercooked by the time the liquid runs out.',
  heroAlt: 'Beef and rice skillet with melted cheese on top', textureAlt: 'Close-up of beef and rice skillet showing tender rice and ground beef', pinAlt: 'Overhead beef and rice skillet fresh off the stove'
}),
r({
  slug: 'loaded-baked-potatoes', title: 'Loaded Baked Potatoes', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Loaded baked potatoes with bacon, cheddar and sour cream — a simple, filling dinner or hearty side, ready in under an hour.',
  targetKeywords: ['baked potato recipes', 'easy dinner recipes'], cuisine: 'American', keywords: 'loaded baked potatoes, easy baked potato, bacon cheddar potatoes',
  prepTime: 'PT10M', cookTime: 'PT1H', totalTime: 'PT1H10M', recipeYield: '4 servings',
  nutrition: { calories: '380', proteinContent: '14g', carbohydrateContent: '46g', fatContent: '16g' },
  ingredients: ['4 large russet potatoes', '2 tbsp olive oil', 'Salt, for rubbing', '6 slices bacon, cooked and crumbled', '1.5 cups shredded cheddar cheese', '1/2 cup sour cream', '3 green onions, sliced', '4 tbsp butter', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Bake the potatoes', text: 'Preheat oven to 425°F (220°C). Scrub potatoes, pat dry, poke several times with a fork, and rub with olive oil and salt. Bake directly on the oven rack for 50-60 minutes until fork-tender.' },
    { name: 'Prep toppings', text: 'While potatoes bake, cook bacon until crisp and crumble. Shred the cheese and slice the green onions.' },
    { name: 'Split and fluff', text: 'Slice each potato open lengthwise, fluff the inside with a fork, and add a pat of butter to melt in.' },
    { name: 'Load and serve', text: 'Top each potato with cheese, bacon, sour cream and green onions. Season with salt and pepper.' }
  ],
  tips: [
    { question: 'Why poke holes in the potato before baking?', answer: 'Potatoes release steam as they cook — without an escape route, pressure can build up inside and cause the potato to burst in the oven.' },
    { question: 'Can I microwave the potatoes instead to save time?', answer: 'You can microwave for about 10-12 minutes to speed things up, then finish in a hot oven for 15-20 minutes to crisp the skin — oven-only gives the best skin texture, but the combo works if short on time.' },
    { question: 'Why bake directly on the rack instead of a pan?', answer: 'Direct contact with the oven\'s hot air on all sides crisps the skin better than sitting on a flat pan, which traps steam on the bottom.' }
  ],
  storyIntro: ['A loaded baked potato is one of the simplest dinners there is, and also one of the most satisfying — crispy skin, fluffy interior, and toppings that turn it into a full meal.', 'The only real trick is patience: give the potato the full hour in a hot oven rather than rushing it.'],
  storyNote: 'Bake directly on the oven rack, not on a baking sheet — the hot air circulating on all sides is what crisps the skin, while a pan traps steam underneath and softens it.',
  heroAlt: 'Loaded baked potato topped with cheese, bacon and sour cream', textureAlt: 'Close-up of loaded baked potato showing fluffy interior and toppings', pinAlt: 'Overhead loaded baked potatoes with all the toppings'
}),
r({
  slug: 'roasted-sweet-potatoes', title: 'Roasted Sweet Potatoes', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Roasted sweet potatoes with crispy caramelized edges — a simple 30-minute side dish with just olive oil and salt.',
  targetKeywords: ['roasted sweet potatoes', 'sweet potato recipes'], cuisine: 'American', keywords: 'roasted sweet potatoes, crispy sweet potatoes, easy side dish',
  prepTime: 'PT10M', cookTime: 'PT25M', totalTime: 'PT35M', recipeYield: '4 servings',
  nutrition: { calories: '160', proteinContent: '2g', carbohydrateContent: '28g', fatContent: '5g' },
  ingredients: ['3 large sweet potatoes, cubed', '3 tbsp olive oil', '1 tsp garlic powder', '1/2 tsp smoked paprika', '1/2 tsp salt', '1/4 tsp black pepper', 'Fresh thyme or parsley, for serving'],
  steps: [
    { name: 'Prep', text: 'Preheat oven to 425°F (220°C). Cube the sweet potatoes into even 3/4-inch pieces.' },
    { name: 'Season', text: 'Toss cubed sweet potatoes with olive oil, garlic powder, smoked paprika, salt and pepper until evenly coated.' },
    { name: 'Roast', text: 'Spread in a single layer on a baking sheet, leaving space between pieces. Roast for 25-30 minutes, flipping halfway, until edges are caramelized and centers are tender.' },
    { name: 'Serve', text: 'Garnish with fresh thyme or parsley before serving.' }
  ],
  tips: [
    { question: 'Why aren\'t my sweet potatoes getting crispy?', answer: 'Overcrowding the pan is the most common cause — pieces need space to roast rather than steam. Use two pans if needed rather than piling everything onto one.' },
    { question: 'Should I peel the sweet potatoes?', answer: 'It\'s optional — the skin is edible and gets crisp in the oven, but peel first if you prefer a smoother texture or the potatoes have blemishes.' },
    { question: 'Why cut the pieces evenly?', answer: 'Uneven sizes cook at different rates — some pieces finish tender while others are still firm, so aim for consistent 3/4-inch cubes across the batch.' }
  ],
  storyIntro: ['Roasted sweet potatoes are as simple as a recipe gets, but the difference between good and great comes down to two things: even cutting and not crowding the pan.', 'High heat is what gives the caramelized, slightly crispy edges that make plain roasted vegetables actually craveable.'],
  storyNote: 'Give the potatoes real space on the pan — overcrowding is the single biggest reason roasted vegetables come out steamed and soft instead of caramelized and crisp at the edges.',
  heroAlt: 'Roasted sweet potato cubes with caramelized edges on a sheet pan', textureAlt: 'Close-up of roasted sweet potatoes showing crispy caramelized edges', pinAlt: 'Overhead sheet pan of roasted sweet potatoes with herbs'
}),
r({
  slug: 'sweet-and-sour-meatballs', title: 'Sweet and Sour Meatballs', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Sweet and sour meatballs made with frozen meatballs and a quick homemade sauce — an easy 25-minute dinner over rice.',
  targetKeywords: ['frozen meatball recipes', 'easy dinner recipes'], cuisine: 'Asian-American', keywords: 'sweet and sour meatballs, frozen meatball recipe, easy meatball dinner',
  prepTime: 'PT5M', cookTime: 'PT20M', totalTime: 'PT25M', recipeYield: '4 servings',
  nutrition: { calories: '380', proteinContent: '20g', carbohydrateContent: '38g', fatContent: '16g' },
  ingredients: ['1 bag (24 oz) frozen fully-cooked meatballs', '1/2 cup pineapple juice', '1/3 cup ketchup', '3 tbsp brown sugar', '2 tbsp rice vinegar', '2 tbsp soy sauce', '1 tbsp cornstarch mixed with 1 tbsp water', '1 bell pepper, chunked', '1 cup pineapple chunks', 'Cooked rice, for serving'],
  steps: [
    { name: 'Make the sauce', text: 'In a saucepan, whisk together pineapple juice, ketchup, brown sugar, rice vinegar and soy sauce. Bring to a simmer over medium heat.' },
    { name: 'Thicken', text: 'Stir in the cornstarch slurry and simmer 2-3 minutes until the sauce thickens enough to coat a spoon.' },
    { name: 'Add meatballs and vegetables', text: 'Add frozen meatballs, bell pepper and pineapple chunks to the sauce. Cover and simmer for 12-15 minutes, stirring occasionally, until meatballs are heated through and vegetables are tender.' },
    { name: 'Serve', text: 'Serve over rice.' }
  ],
  tips: [
    { question: 'Do I need to thaw the meatballs first?', answer: 'No — frozen, fully-cooked meatballs can go straight into the simmering sauce; just make sure they simmer long enough (12-15 minutes) to heat through to the center.' },
    { question: 'Can I use fresh pineapple instead of canned?', answer: 'Yes, though canned pineapple juice specifically adds sweetness and acidity to the sauce base — if using only fresh pineapple, add a splash of orange juice or extra vinegar to balance the sauce.' },
    { question: 'What if the sauce is too thin?', answer: 'Mix an extra teaspoon of cornstarch with a teaspoon of water and stir it in, then simmer another minute or two until it thickens.' }
  ],
  storyIntro: ['This is the dinner for nights when a bag of frozen meatballs in the freezer is the only head start needed — the sauce comes together in the same pan while the meatballs heat through.', 'Sweet, tangy and ready faster than delivery, with pantry staples doing most of the work.'],
  storyNote: 'Simmer the meatballs fully covered for the full 12-15 minutes — frozen meatballs need that time to heat through to the center, even though the sauce itself thickens much faster.',
  heroAlt: 'Sweet and sour meatballs with bell peppers and pineapple in glossy sauce', textureAlt: 'Close-up of sweet and sour meatballs showing thick glossy sauce', pinAlt: 'Overhead bowl of sweet and sour meatballs over rice'
}),
r({
  slug: 'chicken-tacos', title: 'Chicken Tacos', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Seasoned chicken tacos with a smoky spice blend — juicy shredded or diced chicken, ready for taco night in 30 minutes.',
  targetKeywords: ['chicken tacos', 'taco recipes'], cuisine: 'Mexican-American', keywords: 'chicken tacos, easy taco recipe, taco night dinner',
  prepTime: 'PT10M', cookTime: 'PT15M', totalTime: 'PT30M', recipeYield: '4 servings (8 tacos)',
  nutrition: { calories: '320', proteinContent: '28g', carbohydrateContent: '24g', fatContent: '13g' },
  ingredients: ['1.5 lbs boneless chicken breast, diced', '2 tsp chili powder', '1 tsp cumin', '1 tsp smoked paprika', '1/2 tsp garlic powder', '1/2 tsp onion powder', '2 tbsp olive oil', '8 small tortillas, warmed', 'Shredded lettuce, diced tomato, shredded cheese, sour cream, for serving', 'Lime wedges, for serving'],
  steps: [
    { name: 'Season the chicken', text: 'Toss diced chicken with chili powder, cumin, smoked paprika, garlic powder, onion powder and a pinch of salt.' },
    { name: 'Cook', text: 'Heat olive oil in a large skillet over medium-high heat. Add chicken in a single layer and cook 7-8 minutes, stirring occasionally, until browned and cooked through.' },
    { name: 'Assemble', text: 'Divide chicken among warmed tortillas. Top with lettuce, tomato, cheese and sour cream.' },
    { name: 'Serve', text: 'Serve with lime wedges for squeezing over the top.' }
  ],
  tips: [
    { question: 'How do I warm tortillas without them cracking?', answer: 'Warm them directly in a dry skillet for 20-30 seconds per side, or wrap a stack in foil and heat in a 300°F oven for 10 minutes — cold tortillas straight from the fridge are what crack when folded.' },
    { question: 'Can I use ground chicken instead of diced breast?', answer: 'Yes — ground chicken cooks faster (about 5-6 minutes) and works well with the same seasoning blend, just break it apart as it browns.' },
    { question: 'Can I make the chicken ahead for meal prep?', answer: 'Yes — the seasoned cooked chicken keeps in the fridge for up to 4 days, making it easy to assemble tacos fresh each night without recooking.' }
  ],
  storyIntro: ['Taco night doesn\'t need much beyond well-seasoned chicken and a hot pan — the spice blend here does the heavy lifting, so there\'s no marinating required.', 'Diced chicken cooks fast and browns well, giving good texture without the wait of a whole seasoned chicken breast.'],
  storyNote: 'Cook the chicken in a single layer without stirring too often — letting it sit in contact with the hot pan is what gives it browned edges instead of just steaming through.',
  heroAlt: 'Chicken tacos with lettuce, tomato and lime on a plate', textureAlt: 'Close-up of chicken taco filling showing seasoned browned chicken', pinAlt: 'Overhead chicken tacos with toppings and lime wedges'
}),
r({
  slug: 'chicken-burrito-bowl', title: 'Chicken Burrito Bowl', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Chicken burrito bowl with cilantro lime rice, black beans and salsa — a customizable 30-minute dinner bowl.',
  targetKeywords: ['chicken burrito bowl', 'burrito recipes'], cuisine: 'Mexican-American', keywords: 'chicken burrito bowl, burrito bowl recipe, easy chicken dinner bowl',
  prepTime: 'PT15M', cookTime: 'PT20M', totalTime: 'PT35M', recipeYield: '4 servings',
  nutrition: { calories: '460', proteinContent: '34g', carbohydrateContent: '48g', fatContent: '14g' },
  ingredients: ['1.5 lbs boneless chicken breast, diced', '2 tsp chili powder', '1 tsp cumin', '2 cups cooked rice', '1/4 cup cilantro, chopped', '1 lime, juiced', '1 can (15 oz) black beans, drained and rinsed', '1 cup corn kernels', '1 cup salsa', '1 avocado, sliced', 'Shredded cheese, for serving'],
  steps: [
    { name: 'Season and cook the chicken', text: 'Toss diced chicken with chili powder, cumin and a pinch of salt. Cook in an oiled skillet over medium-high heat for 7-8 minutes until browned through.' },
    { name: 'Make the rice', text: 'Stir cilantro and lime juice into the cooked rice.' },
    { name: 'Warm the beans and corn', text: 'Warm black beans and corn in a small saucepan or the microwave.' },
    { name: 'Assemble', text: 'Divide cilantro lime rice among bowls. Top with chicken, black beans, corn, salsa, avocado and shredded cheese.' }
  ],
  tips: [
    { question: 'Can I meal prep this?', answer: 'Yes — cook the chicken, rice and beans ahead and store separately in the fridge for up to 4 days. Assemble bowls fresh, adding avocado just before eating so it doesn\'t brown.' },
    { question: 'What other toppings work well?', answer: 'Sour cream, pickled jalapeños, diced red onion and extra lime wedges all pair well without overcomplicating the bowl.' },
    { question: 'Can I use brown rice instead of white?', answer: 'Yes — it takes longer to cook, so plan for that if making the rice fresh rather than using leftovers.' }
  ],
  storyIntro: ['A burrito bowl is really just a well-organized plate of the same ingredients that go into a burrito, minus the tortilla wrapping — and it comes together just as fast.', 'The cilantro lime rice is the one component worth not skipping; it\'s what ties the whole bowl together.'],
  storyNote: 'Add the avocado right before serving, not ahead of time — sliced avocado browns quickly once cut, so keep it as the very last step in assembly.',
  heroAlt: 'Chicken burrito bowl with rice, beans, corn and avocado', textureAlt: 'Close-up of chicken burrito bowl showing seasoned chicken and toppings', pinAlt: 'Overhead chicken burrito bowl with all the fixings'
}),
r({
  slug: 'beef-enchiladas', title: 'Beef Enchiladas', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Beef enchiladas with a rich red sauce and melted cheese — classic Tex-Mex comfort food baked until bubbly.',
  targetKeywords: ['beef enchiladas', 'enchilada recipes'], cuisine: 'Tex-Mex', keywords: 'beef enchiladas, easy enchilada recipe, homemade enchiladas',
  prepTime: 'PT20M', cookTime: 'PT25M', totalTime: 'PT45M', recipeYield: '6 servings',
  nutrition: { calories: '420', proteinContent: '26g', carbohydrateContent: '32g', fatContent: '22g' },
  ingredients: ['1.5 lbs ground beef', '1 onion, diced', '2 cloves garlic, minced', '2 tsp chili powder', '1 tsp cumin', '10 corn tortillas', '2.5 cups red enchilada sauce', '2 cups shredded cheddar or Mexican blend cheese', 'Chopped cilantro, for serving', 'Salt, to taste'],
  steps: [
    { name: 'Brown the beef', text: 'Preheat oven to 375°F (190°C). Brown the ground beef with onion and garlic in a skillet, about 7 minutes. Stir in chili powder, cumin and salt. Drain excess fat.' },
    { name: 'Warm the tortillas', text: 'Wrap tortillas in a damp paper towel and microwave for 30 seconds to make them pliable — this prevents cracking when rolled.' },
    { name: 'Fill and roll', text: 'Spread a thin layer of enchilada sauce in a baking dish. Fill each tortilla with beef mixture and a sprinkle of cheese, roll tightly, and place seam-side down in the dish.' },
    { name: 'Sauce and bake', text: 'Pour remaining enchilada sauce over the top, sprinkle with remaining cheese, and bake for 20-25 minutes until bubbly. Top with cilantro.' }
  ],
  tips: [
    { question: 'Why do my tortillas crack when rolling?', answer: 'Cold, dry tortillas crack easily — warming them briefly (damp paper towel in the microwave, or a few seconds per side in a dry skillet) makes them pliable enough to roll without tearing.' },
    { question: 'Corn or flour tortillas?', answer: 'Corn tortillas are traditional for enchiladas and hold up better against the sauce without turning mushy — flour tortillas can work but get softer faster.' },
    { question: 'Can I assemble these ahead?', answer: 'Yes — assemble fully, cover, and refrigerate up to 24 hours before baking. Add about 5-10 extra minutes to the bake time if going in cold.' }
  ],
  storyIntro: ['Enchiladas look like a project but the actual technique is simple — the only real skill is warming the tortillas so they roll without splitting.', 'A from-scratch or good-quality jarred red sauce, plenty of cheese, and a hot oven do the rest.'],
  storyNote: 'Warm the tortillas before rolling — even 30 seconds under a damp paper towel in the microwave is enough to keep them from cracking and losing their filling.',
  heroAlt: 'Beef enchiladas covered in red sauce and melted cheese', textureAlt: 'Close-up of beef enchilada cross-section showing filling', pinAlt: 'Overhead baking dish of beef enchiladas with cilantro'
}),
r({
  slug: 'turkey-chili', title: 'Turkey Chili', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Lean turkey chili with beans and a rich tomato base — all the comfort of classic chili, lighter on the fat.',
  targetKeywords: ['turkey chili', 'chili recipes'], cuisine: 'American', keywords: 'turkey chili, ground turkey chili, healthy chili recipe',
  prepTime: 'PT15M', cookTime: 'PT35M', totalTime: 'PT50M', recipeYield: '6 servings',
  nutrition: { calories: '300', proteinContent: '26g', carbohydrateContent: '28g', fatContent: '10g' },
  ingredients: ['1.5 lbs ground turkey', '1 onion, diced', '1 bell pepper, diced', '2 cloves garlic, minced', '2 cans (15 oz each) kidney or black beans, drained', '1 can (28 oz) crushed tomatoes', '2 tbsp chili powder', '1 tbsp cumin', '1 tsp smoked paprika', 'Salt and pepper, to taste', 'Shredded cheese and sour cream, for serving'],
  steps: [
    { name: 'Brown the turkey', text: 'Heat a large pot over medium-high heat. Brown the ground turkey with onion, bell pepper and garlic, about 7-8 minutes, breaking it apart as it cooks.' },
    { name: 'Add remaining ingredients', text: 'Stir in beans, crushed tomatoes, chili powder, cumin, smoked paprika, salt and pepper.' },
    { name: 'Simmer', text: 'Bring to a simmer, then reduce heat and cook uncovered for 25-30 minutes, stirring occasionally, until thickened.' },
    { name: 'Serve', text: 'Ladle into bowls and top with cheese and sour cream.' }
  ],
  tips: [
    { question: 'Why does turkey chili sometimes taste bland compared to beef chili?', answer: 'Ground turkey is leaner and has less inherent flavor than beef, so it depends more on the spice quantity — don\'t be shy with the chili powder and cumin, and taste and adjust before serving.' },
    { question: 'How do I keep ground turkey from drying out in chili?', answer: 'Simmering it in the tomato-based liquid rather than browning it dry and separate keeps it moist — it cooks gently in the sauce rather than on high direct heat the whole time.' },
    { question: 'Can I make this in a slow cooker?', answer: 'Yes — brown the turkey first for flavor, then transfer everything to a slow cooker and cook on low for 6 hours or high for 3.' }
  ],
  storyIntro: ['Turkey chili proves you don\'t need beef fat to get a satisfying bowl of chili — it just needs a heavier hand with the spices to make up for turkey\'s milder flavor.', 'The long simmer is what lets the tomato base thicken and the flavors deepen, so don\'t rush that part.'],
  storyNote: 'Taste and adjust the seasoning near the end of simmering, not just at the start — ground turkey needs more chili powder and cumin than beef to reach the same depth of flavor.',
  heroAlt: 'Bowl of turkey chili topped with cheese and sour cream', textureAlt: 'Close-up of turkey chili showing beans and ground turkey texture', pinAlt: 'Overhead bowl of turkey chili with toppings'
}),
r({
  slug: 'classic-lasagna', title: 'Classic Lasagna', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Classic beef lasagna with layers of meat sauce, ricotta and melted mozzarella — the ultimate baked pasta comfort dinner.',
  targetKeywords: ['lasagna recipes', 'classic lasagna'], cuisine: 'Italian-American', keywords: 'classic lasagna, homemade lasagna, beef lasagna recipe',
  prepTime: 'PT30M', cookTime: 'PT50M', totalTime: 'PT1H20M', recipeYield: '8 servings',
  nutrition: { calories: '460', proteinContent: '28g', carbohydrateContent: '36g', fatContent: '24g' },
  ingredients: ['1 lb ground beef', '1 onion, diced', '3 cloves garlic, minced', '1 jar (24 oz) marinara sauce', '12 lasagna noodles', '15 oz ricotta cheese', '1 egg', '1/4 cup fresh parsley, chopped', '3 cups shredded mozzarella', '1/2 cup grated parmesan', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Make the meat sauce', text: 'Brown the ground beef with onion and garlic, about 7 minutes. Drain fat, stir in marinara sauce, and simmer 10 minutes.' },
    { name: 'Cook the noodles', text: 'Cook lasagna noodles according to package directions until al dente. Drain and lay flat to prevent sticking.' },
    { name: 'Mix the ricotta filling', text: 'Combine ricotta, egg, parsley, salt and pepper in a bowl.' },
    { name: 'Layer', text: 'Preheat oven to 375°F (190°C). In a 9x13-inch dish, layer meat sauce, noodles, ricotta mixture and mozzarella, repeating for 3 layers. Top with remaining mozzarella and parmesan.' },
    { name: 'Bake', text: 'Cover with foil and bake for 30 minutes, then uncover and bake 15-20 more minutes until bubbly and golden. Rest 10-15 minutes before slicing.' }
  ],
  tips: [
    { question: 'Why does my lasagna fall apart when sliced?', answer: 'Cutting it too soon is the most common cause — lasagna needs 10-15 minutes to rest after baking so the layers set enough to hold together when sliced.' },
    { question: 'Do I need to pre-cook the noodles if using regular ones?', answer: 'Regular lasagna noodles should be cooked to al dente first — oven-ready/no-boil noodles skip this step but need extra sauce moisture to soften properly while baking.' },
    { question: 'Can I assemble this ahead and bake later?', answer: 'Yes — assemble fully, cover, and refrigerate up to 24 hours. Add about 10-15 extra minutes to the covered bake time if going in cold.' }
  ],
  storyIntro: ['Lasagna has a reputation as a weekend project, and the layering does take some time, but nothing about it is actually difficult — it\'s just assembly.', 'The one rule worth following closely: let it rest before cutting, or the first slice will collapse into a puddle of sauce.'],
  storyNote: 'Let the lasagna rest for a full 10-15 minutes after baking before cutting — this is what allows the layers to set and hold their shape instead of sliding apart on the plate.',
  heroAlt: 'Slice of classic lasagna showing layers of meat sauce and cheese', textureAlt: 'Close-up of lasagna layers showing ricotta and melted mozzarella', pinAlt: 'Overhead baking dish of classic lasagna fresh from the oven'
}),
r({
  slug: 'ground-turkey-skillet', title: 'Ground Turkey Skillet', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'One-pan ground turkey skillet with vegetables and a savory seasoning blend — a lean, filling dinner in 25 minutes.',
  targetKeywords: ['ground turkey recipes', 'easy dinner recipes'], cuisine: 'American', keywords: 'ground turkey skillet, easy ground turkey recipe, one pan turkey dinner',
  prepTime: 'PT10M', cookTime: 'PT15M', totalTime: 'PT25M', recipeYield: '4 servings',
  nutrition: { calories: '290', proteinContent: '28g', carbohydrateContent: '18g', fatContent: '12g' },
  ingredients: ['1.5 lbs ground turkey', '1 zucchini, diced', '1 bell pepper, diced', '1 onion, diced', '2 cloves garlic, minced', '1 tsp Italian seasoning', '1/2 tsp smoked paprika', '2 tbsp olive oil', '1/2 cup shredded parmesan', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Brown the turkey', text: 'Heat olive oil in a large skillet over medium-high heat. Add ground turkey, breaking it apart, and cook 6-7 minutes until browned.' },
    { name: 'Add vegetables', text: 'Add onion, bell pepper and garlic. Cook 4-5 minutes until softened.' },
    { name: 'Finish', text: 'Add zucchini, Italian seasoning, smoked paprika, salt and pepper. Cook 4-5 minutes more until zucchini is tender. Top with parmesan before serving.' }
  ],
  tips: [
    { question: 'Why does ground turkey sometimes taste dry compared to beef?', answer: 'Turkey is leaner with less fat to keep it moist — don\'t overcook it past the point of browning, and season generously since it carries less inherent flavor than beef.' },
    { question: 'Can I add rice or quinoa to make this a full bowl meal?', answer: 'Yes — stir in 2 cups of cooked rice or quinoa at the end and toss to combine, adding a splash of broth if it looks dry.' },
    { question: 'What other vegetables work well here?', answer: 'Mushrooms, spinach or diced tomatoes all work well added at the same stage as the zucchini.' }
  ],
  storyIntro: ['This is the dinner for using up whatever vegetables are sitting in the fridge — ground turkey browns fast, and the vegetables cook down in the same pan.', 'It\'s lean without tasting like a diet compromise, mostly because the seasoning does real work.'],
  storyNote: 'Season generously — ground turkey is milder than beef, and skimping on the Italian seasoning and paprika is the most common reason turkey dishes taste flat.',
  heroAlt: 'Ground turkey skillet with zucchini and bell peppers', textureAlt: 'Close-up of ground turkey skillet showing browned turkey and vegetables', pinAlt: 'Overhead ground turkey skillet topped with parmesan'
}),
r({
  slug: 'classic-beef-burgers', title: 'Classic Beef Burgers', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Classic beef burgers with a simple seasoning and the perfect sear — juicy, never dry, ready in 20 minutes.',
  targetKeywords: ['burger recipes', 'classic beef burgers'], cuisine: 'American', keywords: 'classic beef burgers, homemade burgers, juicy burger recipe',
  prepTime: 'PT10M', cookTime: 'PT10M', totalTime: 'PT20M', recipeYield: '4 burgers',
  nutrition: { calories: '420', proteinContent: '26g', carbohydrateContent: '22g', fatContent: '24g' },
  ingredients: ['1.5 lbs ground beef (80/20)', '1 tsp salt', '1/2 tsp black pepper', '1 tsp garlic powder', '4 burger buns', '4 slices cheese (optional)', 'Lettuce, tomato, onion, for serving', 'Ketchup, mustard, mayo, for serving'],
  steps: [
    { name: 'Shape the patties', text: 'Divide beef into 4 portions. Shape into patties slightly wider than the buns (they shrink while cooking), pressing a small dimple in the center of each with your thumb.' },
    { name: 'Season', text: 'Season both sides generously with salt, pepper and garlic powder right before cooking.' },
    { name: 'Sear', text: 'Heat a skillet or grill to medium-high heat. Cook patties for 3-4 minutes per side for medium doneness, adding cheese in the last minute if using.' },
    { name: 'Rest and assemble', text: 'Let patties rest 2-3 minutes, then build burgers with buns and desired toppings.' }
  ],
  tips: [
    { question: 'Why press a dimple into the center of the patty?', answer: 'Burgers naturally puff up in the middle as they cook — the dimple compensates for that, so the patty ends up flat instead of dome-shaped when it\'s done.' },
    { question: 'Why season right before cooking instead of ahead of time?', answer: 'Salt draws moisture out of the meat if it sits too long before cooking, which can make the patty denser — season right before it hits the heat for the juiciest result.' },
    { question: 'What fat ratio makes the juiciest burger?', answer: '80/20 ground beef (80% lean, 20% fat) is the standard for a reason — leaner blends dry out faster, while this ratio renders enough fat to keep the patty moist without falling apart.' }
  ],
  storyIntro: ['A great burger doesn\'t need a long ingredient list — 80/20 ground beef, salt, pepper, and a hot pan or grill get you most of the way there.', 'The dimple trick and seasoning timing are the two details that separate a homemade burger from a genuinely great one.'],
  storyNote: 'Season the patties right before they hit the heat, not ahead of time — salting too early draws moisture out of the meat and can leave the burger denser than it should be.',
  heroAlt: 'Classic beef burger with lettuce, tomato and cheese on a bun', textureAlt: 'Close-up of beef burger patty showing juicy seared interior', pinAlt: 'Overhead classic beef burger with all the toppings'
}),
r({
  slug: 'homemade-pizza', title: 'Homemade Pizza', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Homemade pizza with a crispy crust, tangy sauce and melted mozzarella — better than delivery, made in your own oven.',
  targetKeywords: ['homemade pizza', 'pizza recipes'], cuisine: 'Italian-American', keywords: 'homemade pizza, pizza dough recipe, easy homemade pizza',
  prepTime: 'PT20M', cookTime: 'PT15M', totalTime: 'PT35M', recipeYield: '2 pizzas (4 servings)',
  nutrition: { calories: '380', proteinContent: '16g', carbohydrateContent: '48g', fatContent: '14g' },
  ingredients: ['1 lb pizza dough (store-bought or homemade), room temperature', '1 cup pizza sauce', '2.5 cups shredded mozzarella', 'Toppings of choice (pepperoni, mushrooms, peppers, etc.)', '2 tbsp olive oil', '1 tsp dried oregano', 'Cornmeal, for dusting'],
  steps: [
    { name: 'Preheat', text: 'Preheat oven to 475°F (245°C) with a pizza stone or baking sheet inside to heat up.' },
    { name: 'Shape the dough', text: 'On a lightly floured surface, stretch or roll the dough into a 12-inch round. Transfer to a pizza peel or parchment paper dusted with cornmeal.' },
    { name: 'Add toppings', text: 'Brush the edges with olive oil. Spread pizza sauce evenly, leaving a border for the crust. Top with mozzarella and desired toppings, then sprinkle with oregano.' },
    { name: 'Bake', text: 'Slide the pizza onto the hot stone or baking sheet. Bake for 12-15 minutes until the crust is golden and the cheese is bubbly and lightly browned.' }
  ],
  tips: [
    { question: 'Why preheat the pizza stone or pan?', answer: 'A hot surface gives the dough an immediate blast of heat from underneath, which is what creates a crispy crust bottom — putting dough on a cold pan results in a pale, soft base.' },
    { question: 'Why let the dough come to room temperature first?', answer: 'Cold dough straight from the fridge is stiff and resists stretching, tearing easily — room temperature dough is far more pliable and easier to shape without holes.' },
    { question: 'How do I avoid a soggy center?', answer: 'Don\'t overload with sauce or watery toppings (like fresh tomato slices) — use a moderate amount of sauce and pat very wet toppings dry before adding them.' }
  ],
  storyIntro: ['Homemade pizza gets better the moment you start preheating the pan or stone along with the oven — that blast of bottom heat is the difference between a crispy crust and a soggy one.', 'Beyond that, it\'s just assembly, and it\'s faster than waiting for delivery most nights.'],
  storyNote: 'Preheat the stone or pan along with the oven for the full time — sliding dough onto a surface that hasn\'t had time to get hot is the most common reason homemade pizza crust turns out pale and soft.',
  heroAlt: 'Homemade pizza with melted mozzarella and toppings fresh from the oven', textureAlt: 'Close-up of pizza slice showing crispy crust and melted cheese', pinAlt: 'Overhead homemade pizza with pepperoni and herbs'
}),
r({
  slug: 'slow-cooker-corned-beef', title: 'Slow Cooker Corned Beef', hubPath: 'crockpot', hubLabel: 'Crockpot',
  metaDescription: 'Slow cooker corned beef with cabbage, carrots and potatoes — fork-tender after 8 hours with almost no hands-on work.',
  targetKeywords: ['slow cooker corned beef', 'crockpot recipes'], cuisine: 'Irish-American', keywords: 'slow cooker corned beef, crockpot corned beef and cabbage, easy corned beef',
  prepTime: 'PT15M', cookTime: 'PT8H', totalTime: 'PT8H15M', recipeYield: '6 servings',
  nutrition: { calories: '380', proteinContent: '28g', carbohydrateContent: '20g', fatContent: '22g' },
  ingredients: ['3 lb corned beef brisket with spice packet', '4 carrots, cut into chunks', '4 potatoes, quartered', '1 onion, quartered', '3 cups beef broth or water', '1 head cabbage, cut into wedges', '2 bay leaves'],
  steps: [
    { name: 'Load the crockpot', text: 'Place carrots, potatoes and onion in the bottom of the crockpot. Set the corned beef brisket on top, fat-side up, and sprinkle with the included spice packet.' },
    { name: 'Add liquid', text: 'Pour in beef broth or water until it comes about halfway up the sides of the meat. Add bay leaves.' },
    { name: 'Cook', text: 'Cover and cook on low for 7 hours.' },
    { name: 'Add cabbage', text: 'Nestle the cabbage wedges into the liquid around the meat. Cover and cook 1 more hour until the beef is fork-tender and cabbage is soft.' },
    { name: 'Slice and serve', text: 'Remove the beef and let rest 10 minutes, then slice against the grain. Serve with the vegetables and cabbage.' }
  ],
  tips: [
    { question: 'Why add the cabbage later instead of at the start?', answer: 'Cabbage cooks much faster than the tougher root vegetables and the brisket — adding it for just the last hour keeps it tender instead of turning to mush over the full 8-hour cook.' },
    { question: 'Why slice against the grain?', answer: 'Corned beef brisket has long muscle fibers — slicing across them shortens the fibers and makes each bite noticeably more tender than slicing with the grain.' },
    { question: 'Can I use the spice packet if it seems small for the size of the meat?', answer: 'Yes — the packets are portioned for the brisket they come with regardless of size; it\'s meant to season the cooking liquid, not coat the meat directly.' }
  ],
  storyIntro: ['Corned beef rewards the same low-and-slow patience as a good pot roast — the crockpot breaks down the tough brisket into something that shreds apart with a fork.', 'Adding the cabbage only for the last hour is the one timing detail that keeps it from turning into mush by serving time.'],
  storyNote: 'Hold the cabbage back until the final hour of cooking — added at the start alongside the tougher vegetables, it turns completely mushy well before the meat is done.',
  heroAlt: 'Sliced corned beef with cabbage, carrots and potatoes', textureAlt: 'Close-up of sliced corned beef showing tender texture', pinAlt: 'Overhead plate of corned beef and cabbage dinner'
}),
r({
  slug: 'air-fryer-salmon', title: 'Air Fryer Salmon', hubPath: 'air-fryer', hubLabel: 'Air Fryer',
  metaDescription: 'Air fryer salmon with crispy edges and a flaky center — ready in 12 minutes with barely any cleanup.',
  targetKeywords: ['air fryer salmon', 'air fryer recipes'], cuisine: 'American', keywords: 'air fryer salmon, crispy air fryer salmon, quick salmon dinner',
  prepTime: 'PT5M', cookTime: 'PT10M', totalTime: 'PT15M', recipeYield: '4 servings',
  nutrition: { calories: '310', proteinContent: '34g', carbohydrateContent: '1g', fatContent: '18g' },
  ingredients: ['4 salmon fillets (6 oz each)', '1 tbsp olive oil', '1 tsp garlic powder', '1/2 tsp smoked paprika', 'Salt and pepper, to taste', 'Lemon wedges, for serving'],
  steps: [
    { name: 'Season the salmon', text: 'Pat salmon fillets dry. Rub with olive oil, then season with garlic powder, smoked paprika, salt and pepper.' },
    { name: 'Preheat and arrange', text: 'Preheat the air fryer to 400°F (200°C). Place salmon skin-side down in the basket in a single layer.' },
    { name: 'Air fry', text: 'Cook for 8-10 minutes, until the salmon flakes easily and reaches 145°F (63°C) internally — no need to flip.' },
    { name: 'Serve', text: 'Serve immediately with lemon wedges.' }
  ],
  tips: [
    { question: 'Why don\'t I need to flip the salmon?', answer: 'The air fryer circulates hot air around the food from all directions, so the top cooks and crisps without needing direct contact with a hot surface the way stovetop cooking does.' },
    { question: 'Why pat the salmon dry first?', answer: 'Removing surface moisture helps the seasoning stick and helps the exterior crisp slightly instead of steaming in the air fryer basket.' },
    { question: 'Can I cook salmon from frozen in the air fryer?', answer: 'Yes — add about 5-6 extra minutes and check for doneness with a fork, since frozen fillets take longer to cook through evenly.' }
  ],
  storyIntro: ['Salmon might be the single best use case for an air fryer — it cooks fast, doesn\'t need flipping, and the circulating heat keeps the edges from drying out the way a hot skillet sometimes does.', 'Twelve minutes total, most of it hands-off.'],
  storyNote: 'Pull the salmon right at 145°F — it continues cooking slightly after coming out of the basket, and even a couple extra minutes in the air fryer is enough to dry it out.',
  heroAlt: 'Air fryer salmon fillets with crispy edges', textureAlt: 'Close-up of air fryer salmon showing flaky interior', pinAlt: 'Overhead air fryer salmon with lemon wedges'
})
];

const dir = path.join(__dirname, 'content', 'recipes');
fs.mkdirSync(dir, { recursive: true });
RECIPES.forEach(rec => {
  fs.writeFileSync(path.join(dir, `${rec.slug}.json`), JSON.stringify(rec, null, 2));
});
console.log(`✅ Wrote ${RECIPES.length} recipe JSON files`);
