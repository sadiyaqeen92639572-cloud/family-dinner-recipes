const fs = require('fs');
const path = require('path');

const DATE = '2026-07-17';
const AUTHOR = 'Recipe Team';

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
      hero: 'hero.jpg',
      pin: 'pin.jpg',
      texture: 'texture.jpg',
      heroAlt: o.heroAlt,
      textureAlt: o.textureAlt,
      pinAlt: o.pinAlt
    }
  };
}

const RECIPES = [
// ===== DINNER (4) =====
r({
  slug: 'one-pan-ground-beef-skillet', title: 'One-Pan Ground Beef Skillet', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'One-pan ground beef skillet with rice, tomatoes and melted cheese — a 30-minute weeknight dinner with just one pan to wash.',
  targetKeywords: ['ground beef recipes for dinner', 'easy dinner recipes', 'one pan dinner'],
  cuisine: 'American', keywords: 'ground beef skillet, one pan dinner, easy weeknight dinner',
  prepTime: 'PT10M', cookTime: 'PT20M', totalTime: 'PT30M', recipeYield: '4 servings',
  nutrition: { calories: '480', proteinContent: '28g', carbohydrateContent: '38g', fatContent: '22g' },
  ingredients: ['1 lb ground beef', '1 small onion, diced', '2 cloves garlic, minced', '1 cup long-grain rice, uncooked', '1 can (14.5 oz) diced tomatoes', '2 cups beef broth', '1 tsp chili powder', '1 tsp paprika', '1 cup shredded cheddar cheese', 'Salt and pepper, to taste', 'Chopped parsley, for serving'],
  steps: [
    { name: 'Brown the beef', text: 'Heat a large deep skillet over medium-high heat. Add the ground beef and cook, breaking it apart, for 6-7 minutes until browned. Drain excess fat.' },
    { name: 'Soften the aromatics', text: 'Add the onion and garlic to the skillet and cook for 3 minutes until the onion softens.' },
    { name: 'Simmer with rice', text: 'Stir in the rice, diced tomatoes, beef broth, chili powder and paprika. Bring to a simmer, cover, and cook for 18-20 minutes until the rice is tender and liquid is absorbed.' },
    { name: 'Melt the cheese and serve', text: 'Sprinkle cheddar over the top, cover for 2 minutes until melted, then garnish with parsley and serve straight from the skillet.' }
  ],
  tips: [
    { question: 'Can I use ground turkey instead of beef?', answer: 'Yes — ground turkey works as a direct swap, though it releases less fat so you can skip the draining step.' },
    { question: 'Why is my rice still crunchy after 20 minutes?', answer: 'Your simmer was likely too aggressive and boiled off the liquid too fast — keep the heat low enough for a gentle simmer, and add a splash more broth if the pan looks dry before the rice is done.' },
    { question: 'Can I make this ahead?', answer: 'Yes — it reheats well in a skillet with a splash of broth to loosen the rice. Store in the fridge up to 4 days.' }
  ],
  storyIntro: ['This is the dinner I make when I want something filling on the table without a sink full of dishes after. Ground beef, rice and tomatoes simmer together in one skillet until the rice soaks up all that flavor.', 'It is not fancy, but it is the kind of dinner that disappears fast at a family table — and cleanup is just one pan.'],
  storyNote: 'Keep the simmer gentle and covered — a rolling boil will evaporate the liquid before the rice has time to cook through.',
  heroAlt: 'Skillet of ground beef, rice and melted cheddar cheese garnished with parsley', textureAlt: 'Close-up of ground beef skillet showing rice and melted cheese texture', pinAlt: 'Overhead shot of one-pan ground beef skillet with cheese and parsley'
}),
r({
  slug: 'one-pot-pasta', title: 'One-Pot Pasta', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'One-pot pasta with tomatoes, garlic and basil — everything cooks together in a single pot for an easy 25-minute dinner.',
  targetKeywords: ['easy dinner recipes', 'dinner recipes', 'one pot pasta'],
  cuisine: 'Italian-American', keywords: 'one pot pasta, easy pasta dinner, weeknight pasta',
  prepTime: 'PT5M', cookTime: 'PT20M', totalTime: 'PT25M', recipeYield: '4 servings',
  nutrition: { calories: '410', proteinContent: '14g', carbohydrateContent: '68g', fatContent: '9g' },
  ingredients: ['12 oz spaghetti or linguine', '4 cups vegetable or chicken broth', '1 can (14.5 oz) diced tomatoes', '4 cloves garlic, sliced', '1 small onion, thinly sliced', '2 tbsp olive oil', '1/2 tsp red pepper flakes', '1/4 cup fresh basil, torn', '1/2 cup grated parmesan', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Combine everything in the pot', text: 'Add the pasta, broth, diced tomatoes, garlic, onion, olive oil and red pepper flakes to a large pot or deep skillet. Season with salt and pepper.' },
    { name: 'Simmer, stirring often', text: 'Bring to a boil, then reduce to a steady simmer. Cook for 9-12 minutes, stirring frequently so the pasta doesn\'t stick, until the pasta is al dente and the liquid has reduced into a sauce.' },
    { name: 'Finish and serve', text: 'Remove from heat, stir in basil and half the parmesan. Divide among bowls and top with remaining parmesan.' }
  ],
  tips: [
    { question: 'Why do I need to stir so often?', answer: 'The pasta is cooking directly in the liquid rather than boiling water, so without frequent stirring the noodles can clump or stick to the bottom of the pot.' },
    { question: 'Can I add protein to this?', answer: 'Yes — cooked shredded chicken or browned Italian sausage stirred in at the end works well without changing the cook time.' },
    { question: 'What if there is too much liquid left at the end?', answer: 'Simmer uncovered for another 2-3 minutes — the starch from the pasta will help the sauce thicken as it reduces.' }
  ],
  storyIntro: ['One-pot pasta sounds like a shortcut, but it actually makes a better sauce than boiling noodles separately — the starch from the pasta thickens the tomato broth as it cooks, so you end up with a clingy sauce without any extra effort.', 'It is the pasta dinner I reach for on nights when even boiling a separate pot of water feels like too much.'],
  storyNote: 'Stir every couple of minutes once it starts simmering — the pasta releases starch as it cooks and will stick to the bottom of the pot if left alone too long.',
  heroAlt: 'Pot of one-pot pasta with tomatoes, basil and parmesan', textureAlt: 'Close-up of one-pot pasta showing sauce clinging to the noodles', pinAlt: 'Overhead bowl of one-pot pasta topped with basil and parmesan'
}),
r({
  slug: 'sheet-pan-sausage-and-vegetables', title: 'Sheet Pan Sausage and Vegetables', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Sheet pan sausage and vegetables roasted together on one tray — a hands-off 35-minute dinner with easy cleanup.',
  targetKeywords: ['easy dinner recipes', 'healthy dinner recipes', 'sheet pan dinner'],
  cuisine: 'American', keywords: 'sheet pan sausage, roasted vegetables, easy sheet pan dinner',
  prepTime: 'PT10M', cookTime: 'PT25M', totalTime: 'PT35M', recipeYield: '4 servings',
  nutrition: { calories: '440', proteinContent: '20g', carbohydrateContent: '26g', fatContent: '28g' },
  ingredients: ['1.5 lbs smoked sausage or kielbasa, sliced into rounds', '1 lb baby potatoes, halved', '2 bell peppers, chunked', '1 red onion, chunked', '2 cups broccoli florets', '3 tbsp olive oil', '1 tsp smoked paprika', '1 tsp garlic powder', '1/2 tsp dried thyme', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Preheat and start the potatoes', text: 'Preheat oven to 425°F (220°C). Toss the potatoes with 1 tbsp olive oil, salt and pepper, spread on a sheet pan, and roast for 10 minutes to give them a head start.' },
    { name: 'Add the rest and roast', text: 'Toss the sausage, bell peppers, onion and broccoli with remaining olive oil, smoked paprika, garlic powder and thyme. Add to the sheet pan with the potatoes and spread into a single layer.' },
    { name: 'Finish roasting', text: 'Roast for another 15-18 minutes, stirring once halfway, until the vegetables are tender and lightly browned and the sausage is heated through.' }
  ],
  tips: [
    { question: 'Why give the potatoes a head start?', answer: 'Potatoes take longer to roast through than the sausage or other vegetables — starting them first keeps everything finishing at roughly the same time instead of undercooked potatoes.' },
    { question: 'Can I use a different sausage?', answer: 'Yes — chicken sausage or Italian sausage links (sliced) both work, just adjust cook time slightly if using raw uncooked sausage rather than pre-smoked.' },
    { question: 'How do I keep the vegetables from steaming instead of roasting?', answer: 'Spread everything in a single layer with space between pieces — an overcrowded pan traps steam and the vegetables won\'t brown.' }
  ],
  storyIntro: ['This is the dinner for nights when I don\'t want to stand at the stove. Everything roasts on one tray, so there\'s no juggling multiple pans or timing side dishes separately.', 'The smoked sausage does a lot of the flavor work, so the seasoning stays simple and the vegetables just need room on the pan to actually roast instead of steam.'],
  storyNote: 'Give everything space on the pan — a crowded tray steams instead of roasts, and you lose the browned edges that make this dinner good.',
  heroAlt: 'Sheet pan of roasted sausage, potatoes, bell peppers and broccoli', textureAlt: 'Close-up of sheet pan sausage and vegetables showing browned roasted edges', pinAlt: 'Overhead sheet pan sausage and vegetables ready to serve'
}),
r({
  slug: 'beef-and-broccoli', title: 'Beef and Broccoli', hubPath: 'dinner', hubLabel: 'Dinner',
  metaDescription: 'Beef and broccoli in a savory garlic-ginger sauce, ready in 30 minutes — faster and better than takeout.',
  targetKeywords: ['ground beef recipes for dinner', 'easy dinner recipes', 'beef and broccoli'],
  cuisine: 'Chinese-American', keywords: 'beef and broccoli, easy stir fry, weeknight dinner',
  prepTime: 'PT15M', cookTime: 'PT15M', totalTime: 'PT30M', recipeYield: '4 servings',
  nutrition: { calories: '380', proteinContent: '30g', carbohydrateContent: '20g', fatContent: '18g' },
  ingredients: ['1 lb flank steak, thinly sliced against the grain', '4 cups broccoli florets', '1/3 cup soy sauce', '2 tbsp brown sugar', '1 tbsp cornstarch', '1 tbsp rice vinegar', '1 tbsp sesame oil', '2 cloves garlic, minced', '1 tbsp fresh ginger, minced', '2 tbsp vegetable oil', 'Cooked rice, for serving'],
  steps: [
    { name: 'Make the sauce', text: 'Whisk together soy sauce, brown sugar, cornstarch, rice vinegar and sesame oil in a small bowl. Set aside.' },
    { name: 'Sear the beef', text: 'Heat 1 tbsp vegetable oil in a large skillet or wok over high heat. Add the beef in a single layer and sear for 1-2 minutes per side until browned but not fully cooked through. Remove and set aside.' },
    { name: 'Steam the broccoli', text: 'Add remaining oil, garlic and ginger to the pan and cook 30 seconds until fragrant. Add broccoli with 2 tbsp water, cover, and steam for 3-4 minutes until bright green and just tender.' },
    { name: 'Combine and finish', text: 'Return the beef to the pan, pour in the sauce, and toss everything together for 2-3 minutes until the sauce thickens and coats the beef and broccoli. Serve over rice.' }
  ],
  tips: [
    { question: 'Why slice the beef against the grain?', answer: 'Cutting across the muscle fibers shortens them, which is what keeps the beef tender — slicing with the grain instead makes it noticeably chewier.' },
    { question: 'Can I use a different cut of beef?', answer: 'Sirloin or skirt steak both work well thinly sliced — avoid tougher cuts like chuck unless slow-cooked first.' },
    { question: 'How do I keep the broccoli from turning mushy?', answer: 'Steam it covered for only 3-4 minutes — it should still have a slight bite and bright green color when it goes back in with the sauce.' }
  ],
  storyIntro: ['Beef and broccoli is one of those takeout orders that is genuinely faster to make at home once you have the sauce ratio down — thinly sliced beef sears in minutes, and the broccoli only needs a quick steam.', 'The whole thing comes together in the time it would take for delivery to arrive, and the sauce clings better than most takeout versions.'],
  storyNote: 'Sear the beef in a single layer without crowding the pan — too much beef at once steams rather than browns, and browning is where the flavor comes from.',
  heroAlt: 'Beef and broccoli stir fry in glossy sauce over rice', textureAlt: 'Close-up of beef and broccoli showing sauce coating the meat', pinAlt: 'Overhead bowl of beef and broccoli with rice and sesame garnish'
}),

// ===== CHICKEN (8) =====
r({
  slug: 'baked-chicken-breast', title: 'Baked Chicken Breast', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Juicy baked chicken breast with a simple seasoning rub — the foolproof method for tender chicken every time, ready in 30 minutes.',
  targetKeywords: ['chicken recipes', 'chicken breast recipes', 'baked chicken breast'],
  cuisine: 'American', keywords: 'baked chicken breast, juicy chicken breast, easy chicken dinner',
  prepTime: 'PT5M', cookTime: 'PT25M', totalTime: 'PT30M', recipeYield: '4 servings',
  nutrition: { calories: '260', proteinContent: '38g', carbohydrateContent: '1g', fatContent: '11g' },
  ingredients: ['4 boneless, skinless chicken breasts', '2 tbsp olive oil', '1 tsp garlic powder', '1 tsp paprika', '1/2 tsp onion powder', '1/2 tsp dried oregano', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Prep the chicken', text: 'Preheat oven to 425°F (220°C). Pound the chicken breasts to an even thickness (about 3/4 inch) so they cook evenly.' },
    { name: 'Season', text: 'Rub the chicken with olive oil, then coat evenly with garlic powder, paprika, onion powder, oregano, salt and pepper.' },
    { name: 'Bake', text: 'Place on a baking sheet and bake for 18-22 minutes, until a meat thermometer inserted in the thickest part reads 165°F (74°C).' },
    { name: 'Rest and serve', text: 'Let the chicken rest for 5 minutes before slicing — this keeps the juices in rather than spilling out onto the cutting board.' }
  ],
  tips: [
    { question: 'Why pound the chicken to an even thickness?', answer: 'Chicken breasts are naturally thicker on one end — without evening them out, the thin end overcooks and dries out before the thick end is done.' },
    { question: 'How do I know it\'s done without a thermometer?', answer: 'A meat thermometer is the only reliable way to avoid over- or under-cooking — an instant-read thermometer is worth the small investment for chicken breast specifically since it dries out fast past 165°F.' },
    { question: 'Why does resting matter?', answer: 'Cutting immediately after baking lets the juices run out onto the board instead of redistributing through the meat — resting 5 minutes keeps the chicken noticeably juicier.' }
  ],
  storyIntro: ['Baked chicken breast has a reputation for being dry, but that almost always comes down to two fixable things: uneven thickness and overcooking past 165°F.', 'Pound it even, watch the thermometer instead of the clock, and let it rest — that\'s the entire trick to chicken that stays juicy.'],
  storyNote: 'Pull the chicken at 165°F exactly — even a few extra minutes in the oven is the difference between juicy and dry with breast meat.',
  heroAlt: 'Sliced baked chicken breast on a plate with herbs', textureAlt: 'Close-up of sliced baked chicken breast showing juicy interior', pinAlt: 'Overhead baked chicken breast with seasoning rub and herbs'
}),
r({
  slug: 'chicken-alfredo', title: 'Chicken Alfredo', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Creamy chicken alfredo made from scratch with a rich parmesan sauce — better than a jar, ready in 30 minutes.',
  targetKeywords: ['chicken recipes', 'chicken breast recipes', 'chicken alfredo'],
  cuisine: 'Italian-American', keywords: 'chicken alfredo, creamy pasta, homemade alfredo sauce',
  prepTime: 'PT10M', cookTime: 'PT20M', totalTime: 'PT30M', recipeYield: '4 servings',
  nutrition: { calories: '620', proteinContent: '38g', carbohydrateContent: '48g', fatContent: '30g' },
  ingredients: ['12 oz fettuccine', '2 boneless chicken breasts, sliced into strips', '3 tbsp butter', '3 cloves garlic, minced', '1 1/2 cups heavy cream', '1 cup grated parmesan, plus more for serving', '1/2 tsp black pepper', 'Salt, to taste', 'Fresh parsley, chopped, for serving'],
  steps: [
    { name: 'Cook the pasta', text: 'Cook fettuccine in salted boiling water according to package directions until al dente. Reserve 1/2 cup pasta water, then drain.' },
    { name: 'Cook the chicken', text: 'Season chicken strips with salt and pepper. Heat 1 tbsp butter in a large skillet over medium-high heat and cook chicken for 6-7 minutes until golden and cooked through. Remove and set aside.' },
    { name: 'Make the sauce', text: 'In the same skillet, melt remaining butter and sauté garlic for 30 seconds. Pour in heavy cream and bring to a gentle simmer. Whisk in parmesan a handful at a time until melted and smooth.' },
    { name: 'Combine and serve', text: 'Add the drained pasta and chicken to the sauce, tossing to coat, adding reserved pasta water a splash at a time if the sauce is too thick. Top with parsley and extra parmesan.' }
  ],
  tips: [
    { question: 'Why is my sauce grainy instead of smooth?', answer: 'The heat was likely too high when adding the parmesan, which can cause the proteins to seize — keep the cream at a gentle simmer, not a boil, and add cheese gradually off direct high heat.' },
    { question: 'Can I use milk instead of heavy cream?', answer: 'Milk will make a thinner, less rich sauce and is more likely to separate — heavy cream\'s fat content is what keeps the sauce stable and silky.' },
    { question: 'Why save the pasta water?', answer: 'The starchy water helps loosen and re-emulsify the sauce if it thickens too much once combined with the pasta, without watering down the flavor the way plain water would.' }
  ],
  storyIntro: ['Jarred alfredo sauce always tastes like it is missing something, and what it\'s missing is real cream and real parmesan simmered together instead of stabilizers.', 'This version takes the same 30 minutes as boiling pasta and opening a jar, but the sauce actually tastes like something.'],
  storyNote: 'Keep the cream at a gentle simmer, never a hard boil, once the parmesan goes in — high heat is what causes a grainy, broken sauce.',
  heroAlt: 'Bowl of creamy chicken alfredo pasta with parsley garnish', textureAlt: 'Close-up of chicken alfredo showing creamy sauce coating the pasta', pinAlt: 'Overhead plate of chicken alfredo with parmesan and parsley'
}),
r({
  slug: 'honey-garlic-chicken', title: 'Honey Garlic Chicken', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Honey garlic chicken with a sticky, savory-sweet glaze — a 25-minute skillet dinner the whole family will ask for again.',
  targetKeywords: ['chicken recipes', 'honey garlic chicken', 'easy chicken dinner'],
  cuisine: 'Asian-inspired', keywords: 'honey garlic chicken, sticky chicken glaze, easy skillet chicken',
  prepTime: 'PT10M', cookTime: 'PT15M', totalTime: 'PT25M', recipeYield: '4 servings',
  nutrition: { calories: '340', proteinContent: '34g', carbohydrateContent: '22g', fatContent: '12g' },
  ingredients: ['1.5 lbs boneless, skinless chicken thighs, cut into pieces', '2 tbsp cornstarch', '2 tbsp olive oil', '4 cloves garlic, minced', '1/3 cup honey', '1/4 cup soy sauce', '2 tbsp rice vinegar', '1 tbsp water', 'Sesame seeds and sliced green onion, for serving'],
  steps: [
    { name: 'Coat the chicken', text: 'Toss the chicken pieces with cornstarch until lightly coated — this helps the sauce cling and gives a light crispness when seared.' },
    { name: 'Sear the chicken', text: 'Heat olive oil in a large skillet over medium-high heat. Add chicken in a single layer and sear for 5-6 minutes per side until golden and cooked through. Remove and set aside.' },
    { name: 'Make the glaze', text: 'Lower heat to medium, add garlic to the same skillet and cook 30 seconds until fragrant. Whisk in honey, soy sauce, rice vinegar and water, and simmer for 2-3 minutes until slightly thickened.' },
    { name: 'Glaze and serve', text: 'Return the chicken to the skillet and toss to coat evenly in the glaze for 1-2 minutes. Top with sesame seeds and green onion.' }
  ],
  tips: [
    { question: 'Why coat the chicken in cornstarch?', answer: 'The cornstarch creates a light crust that helps the glaze cling to the chicken instead of just pooling in the pan — skip it and the sauce will slide right off.' },
    { question: 'Can I use chicken breast instead of thighs?', answer: 'Yes, though thighs stay juicier through the sear — if using breast, watch the cook time closely since it dries out faster.' },
    { question: 'How do I keep the glaze from burning?', answer: 'Keep the heat at medium once the honey goes in — honey scorches quickly on high heat, turning bitter instead of caramelized.' }
  ],
  storyIntro: ['Honey garlic chicken is proof that a great sauce doesn\'t need a long ingredient list — honey, soy sauce, garlic and vinegar reduce into a glossy glaze in a few minutes.', 'It comes together faster than takeout and the sauce sticks to every piece instead of pooling at the bottom of the bowl.'],
  storyNote: 'Keep the glaze at a gentle simmer once the honey is in — high heat scorches honey fast and turns the sauce bitter instead of sticky-sweet.',
  heroAlt: 'Skillet of honey garlic chicken glazed and topped with sesame seeds', textureAlt: 'Close-up of honey garlic chicken showing sticky glaze coating', pinAlt: 'Overhead honey garlic chicken with green onion and sesame garnish'
}),
r({
  slug: 'chicken-parmesan', title: 'Chicken Parmesan', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Classic chicken parmesan with a crispy breaded cutlet, marinara and melted mozzarella — restaurant-quality at home in 40 minutes.',
  targetKeywords: ['chicken recipes', 'chicken parmesan', 'chicken breast recipes'],
  cuisine: 'Italian-American', keywords: 'chicken parmesan, breaded chicken cutlet, chicken parm',
  prepTime: 'PT15M', cookTime: 'PT25M', totalTime: 'PT40M', recipeYield: '4 servings',
  nutrition: { calories: '520', proteinContent: '42g', carbohydrateContent: '28g', fatContent: '26g' },
  ingredients: ['4 boneless, skinless chicken breasts, pounded thin', '1 cup breadcrumbs', '1/2 cup grated parmesan', '2 eggs, beaten', '1/2 cup flour', '2 cups marinara sauce', '1 1/2 cups shredded mozzarella', '3 tbsp olive oil', 'Fresh basil, for serving', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Set up the breading station', text: 'Preheat oven to 425°F (220°C). Set up three shallow bowls: flour seasoned with salt and pepper, beaten eggs, and breadcrumbs mixed with parmesan.' },
    { name: 'Bread the chicken', text: 'Dredge each chicken breast in flour, then egg, then the breadcrumb mixture, pressing gently to coat evenly.' },
    { name: 'Pan-fry until golden', text: 'Heat olive oil in a large oven-safe skillet over medium-high heat. Fry the chicken for 3-4 minutes per side until golden brown (it doesn\'t need to be fully cooked through yet).' },
    { name: 'Top and bake', text: 'Spoon marinara over each cutlet and top with mozzarella. Transfer the skillet to the oven and bake for 12-15 minutes until the chicken reaches 165°F (74°C) and the cheese is bubbly. Garnish with basil.' }
  ],
  tips: [
    { question: 'Why pound the chicken thin?', answer: 'Even thickness means the breading fries evenly and the chicken finishes cooking through in the oven at the same rate the cheese melts — a thick, uneven breast risks burnt breading before the inside is done.' },
    { question: 'Can I bake instead of pan-frying first?', answer: 'You can, but pan-frying first gives a genuinely crispy crust that plain baking can\'t replicate — the direct contact with hot oil is what browns the breadcrumbs properly.' },
    { question: 'No oven-safe skillet — what do I do?', answer: 'Transfer the fried cutlets to a baking sheet before adding sauce and cheese, then finish in the oven the same way.' }
  ],
  storyIntro: ['Chicken parmesan at a restaurant usually means a thick, dry cutlet buried under too much cheese. The version that actually works starts with pounding the chicken thin so it cooks evenly and stays juicy.', 'Frying first for a real crust, then finishing in the oven with sauce and cheese, keeps that crust from turning soggy the way a fully-baked version does.'],
  storyNote: 'Fry just until golden, not fully cooked — the oven finishes the chicken while melting the cheese, so overcooking at the stovetop stage dries it out by the time it comes out of the oven.',
  heroAlt: 'Chicken parmesan cutlet topped with marinara and melted mozzarella', textureAlt: 'Close-up of chicken parmesan showing crispy breaded crust and melted cheese', pinAlt: 'Overhead plate of chicken parmesan with basil garnish'
}),
r({
  slug: 'baked-chicken-thighs', title: 'Baked Chicken Thighs', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Baked chicken thighs with crispy skin and juicy meat — a simple seasoned recipe ready in 40 minutes with almost no prep.',
  targetKeywords: ['chicken recipes', 'chicken breast recipes', 'baked chicken thighs'],
  cuisine: 'American', keywords: 'baked chicken thighs, crispy chicken thighs, easy chicken dinner',
  prepTime: 'PT5M', cookTime: 'PT35M', totalTime: 'PT40M', recipeYield: '4 servings',
  nutrition: { calories: '340', proteinContent: '28g', carbohydrateContent: '1g', fatContent: '24g' },
  ingredients: ['8 bone-in, skin-on chicken thighs', '2 tbsp olive oil', '1 tsp garlic powder', '1 tsp smoked paprika', '1/2 tsp onion powder', '1/2 tsp dried thyme', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Prep the chicken', text: 'Preheat oven to 425°F (220°C). Pat the chicken thighs completely dry with paper towels — this is what makes the skin crisp up instead of steaming.' },
    { name: 'Season', text: 'Rub the thighs all over with olive oil, then coat with garlic powder, smoked paprika, onion powder, thyme, salt and pepper.' },
    { name: 'Bake skin-side up', text: 'Arrange skin-side up on a baking sheet, spaced apart. Bake for 35-40 minutes until the skin is crisp and golden and a thermometer reads 175°F (79°C) in the thickest part.' },
    { name: 'Rest before serving', text: 'Let rest for 5 minutes before serving to let the juices settle.' }
  ],
  tips: [
    { question: 'Why pat the chicken dry first?', answer: 'Any surface moisture turns to steam in the oven, which softens the skin instead of letting it crisp — drying the skin thoroughly first is the single biggest factor in getting it crispy.' },
    { question: 'Why do thighs need a higher target temperature than breast?', answer: 'Thigh meat has more connective tissue and fat, which needs to render and break down — pulling it at 165°F like breast meat leaves it tougher than cooking to about 175°F, which keeps it tender.' },
    { question: 'Can I use boneless thighs instead?', answer: 'Yes — reduce the bake time to about 22-25 minutes since boneless thighs cook faster without the bone.' }
  ],
  storyIntro: ['Chicken thighs are the forgiving cut — more fat and connective tissue than breast means they stay juicy even if you overshoot the timer by a few minutes.', 'The one non-negotiable step is drying the skin thoroughly before it goes in the oven — that\'s the difference between crispy skin and rubbery skin.'],
  storyNote: 'Pat the skin bone-dry with paper towels before seasoning — any leftover moisture steams the skin instead of letting it crisp in the oven.',
  heroAlt: 'Baked chicken thighs with crispy golden skin on a sheet pan', textureAlt: 'Close-up of baked chicken thigh showing crispy skin texture', pinAlt: 'Overhead sheet pan of baked chicken thighs with herbs'
}),
r({
  slug: 'chicken-fajitas', title: 'Chicken Fajitas', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Sizzling chicken fajitas with peppers and onions in a smoky spice blend — a 30-minute skillet dinner for taco night.',
  targetKeywords: ['chicken recipes', 'chicken fajitas', 'chicken breast recipes'],
  cuisine: 'Mexican-American', keywords: 'chicken fajitas, skillet fajitas, taco night dinner',
  prepTime: 'PT10M', cookTime: 'PT20M', totalTime: 'PT30M', recipeYield: '4 servings',
  nutrition: { calories: '320', proteinContent: '32g', carbohydrateContent: '18g', fatContent: '14g' },
  ingredients: ['1.5 lbs boneless chicken breast, sliced into strips', '3 bell peppers, sliced', '1 large onion, sliced', '3 tbsp olive oil', '2 tsp chili powder', '1 tsp cumin', '1 tsp smoked paprika', '1/2 tsp garlic powder', '1 lime, juiced', '8 flour tortillas, warmed', 'Salt, to taste'],
  steps: [
    { name: 'Season the chicken', text: 'Toss the chicken with 1 tbsp olive oil, chili powder, cumin, smoked paprika, garlic powder and salt.' },
    { name: 'Sear the chicken', text: 'Heat a large skillet over medium-high heat. Add the chicken in a single layer and cook for 6-7 minutes, stirring occasionally, until browned and cooked through. Remove and set aside.' },
    { name: 'Cook the peppers and onion', text: 'Add remaining oil to the skillet and cook the peppers and onion over high heat for 6-8 minutes, stirring only occasionally, until softened with charred edges.' },
    { name: 'Combine and serve', text: 'Return the chicken to the skillet, squeeze lime juice over everything, and toss together. Serve immediately with warm tortillas.' }
  ],
  tips: [
    { question: 'How do I get restaurant-style char on the peppers?', answer: 'Use high heat and resist the urge to stir constantly — letting the vegetables sit in contact with the hot pan for a stretch is what creates char, while frequent stirring just steams them.' },
    { question: 'Can I make this ahead for meal prep?', answer: 'Yes — the chicken and vegetables keep well in the fridge for up to 4 days. Reheat in a hot skillet rather than the microwave to bring back some of the char.' },
    { question: 'What toppings work well?', answer: 'Sour cream, shredded cheese, guacamole and fresh cilantro all pair well without overwhelming the smoky-spiced chicken.' }
  ],
  storyIntro: ['The sound of fajitas hitting a hot skillet is half the appeal, but the real trick to good fajitas is not overcrowding the pan and not stirring the vegetables too much — both stop the char from forming.', 'Give the chicken and vegetables room to actually sear instead of steam, and 20 minutes gets you something better than most restaurant versions.'],
  storyNote: 'Cook the peppers and onion on high heat without constant stirring — let them sit in contact with the pan to develop char, rather than stirring every few seconds.',
  heroAlt: 'Sizzling skillet of chicken fajitas with peppers and onions', textureAlt: 'Close-up of chicken fajitas showing charred pepper edges', pinAlt: 'Overhead skillet of chicken fajitas with lime and tortillas'
}),
r({
  slug: 'stuffed-chicken-breast', title: 'Stuffed Chicken Breast', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Spinach and cream cheese stuffed chicken breast, seared and baked until golden — an easy dinner that looks fancy in 35 minutes.',
  targetKeywords: ['chicken breast recipes', 'chicken recipes', 'stuffed chicken breast'],
  cuisine: 'American', keywords: 'stuffed chicken breast, spinach cream cheese chicken, easy chicken dinner',
  prepTime: 'PT15M', cookTime: 'PT20M', totalTime: 'PT35M', recipeYield: '4 servings',
  nutrition: { calories: '380', proteinContent: '38g', carbohydrateContent: '4g', fatContent: '23g' },
  ingredients: ['4 boneless, skinless chicken breasts', '4 oz cream cheese, softened', '1 cup fresh spinach, chopped', '1/2 cup shredded mozzarella', '2 cloves garlic, minced', '1 tbsp olive oil', '1 tsp Italian seasoning', 'Salt and pepper, to taste', 'Toothpicks, for securing'],
  steps: [
    { name: 'Make the filling', text: 'Preheat oven to 375°F (190°C). Mix cream cheese, chopped spinach, mozzarella, garlic and Italian seasoning in a bowl until combined.' },
    { name: 'Cut and stuff the chicken', text: 'Slice a deep pocket into the side of each chicken breast, being careful not to cut all the way through. Season the outside with salt and pepper, then spoon the filling into each pocket and secure with toothpicks.' },
    { name: 'Sear', text: 'Heat olive oil in an oven-safe skillet over medium-high heat. Sear the stuffed chicken for 3 minutes per side until golden.' },
    { name: 'Bake', text: 'Transfer the skillet to the oven and bake for 15-18 minutes until the chicken reaches 165°F (74°C). Remove toothpicks before serving.' }
  ],
  tips: [
    { question: 'How do I cut a pocket without cutting all the way through?', answer: 'Lay the breast flat and slice into the thickest side horizontally, stopping about 1/2 inch before the opposite edge — go slowly and use the tip of the knife to feel how deep you are.' },
    { question: 'Can I make the filling ahead?', answer: 'Yes — the cream cheese and spinach filling can be mixed up to 2 days ahead and refrigerated, which also makes it firmer and easier to stuff.' },
    { question: 'No oven-safe skillet — what do I do?', answer: 'Sear in a regular skillet, then transfer the chicken to a baking dish to finish in the oven.' }
  ],
  storyIntro: ['Stuffed chicken breast looks like more effort than it is — the whole trick is cutting a clean pocket and not overfilling it so the filling doesn\'t spill out during searing.', 'Searing first for color, then finishing in the oven, keeps the outside from overcooking while the filling heats through and the cheese inside goes melty.'],
  storyNote: 'Don\'t overstuff the pocket — a slightly-too-full breast splits open while searing and the filling ends up in the pan instead of inside the chicken.',
  heroAlt: 'Sliced stuffed chicken breast showing spinach and cream cheese filling', textureAlt: 'Close-up of stuffed chicken breast cross-section with melted filling', pinAlt: 'Overhead plate of stuffed chicken breast sliced open'
}),
r({
  slug: 'chicken-casserole', title: 'Chicken Casserole', hubPath: 'chicken', hubLabel: 'Chicken',
  metaDescription: 'Creamy chicken casserole with rice, vegetables and a crispy topping — a comforting make-ahead dinner the whole family will eat.',
  targetKeywords: ['chicken recipes', 'chicken casserole', 'chicken breast recipes'],
  cuisine: 'American', keywords: 'chicken casserole, chicken rice casserole, comfort food dinner',
  prepTime: 'PT15M', cookTime: 'PT35M', totalTime: 'PT50M', recipeYield: '6 servings',
  nutrition: { calories: '410', proteinContent: '30g', carbohydrateContent: '32g', fatContent: '18g' },
  ingredients: ['3 cups cooked, shredded chicken', '2 cups cooked rice', '1 can (10.5 oz) cream of chicken soup', '1 cup sour cream', '1 cup chicken broth', '2 cups frozen mixed vegetables', '1 cup shredded cheddar cheese', '1 cup crushed buttery crackers', '2 tbsp melted butter', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Mix the base', text: 'Preheat oven to 375°F (190°C). In a large bowl, combine shredded chicken, rice, cream of chicken soup, sour cream, chicken broth and mixed vegetables. Season with salt and pepper and mix well.' },
    { name: 'Assemble', text: 'Spread the mixture into a greased 9x13-inch baking dish. Sprinkle cheddar cheese evenly over the top.' },
    { name: 'Add the topping', text: 'Toss crushed crackers with melted butter and scatter evenly over the cheese layer.' },
    { name: 'Bake', text: 'Bake for 30-35 minutes until bubbling around the edges and the topping is golden brown.' }
  ],
  tips: [
    { question: 'Can I use rotisserie chicken?', answer: 'Yes — rotisserie chicken is an easy shortcut here and adds extra flavor from the seasoning on the skin. About 3 cups shredded is roughly one whole rotisserie chicken.' },
    { question: 'Can I assemble this ahead and bake later?', answer: 'Yes — assemble everything except the cracker topping, cover and refrigerate up to 24 hours. Add the topping right before baking so it stays crisp.' },
    { question: 'Can I freeze leftovers?', answer: 'Yes, though the topping softens after freezing — for best texture, freeze without the cracker topping and add fresh crackers before reheating.' }
  ],
  storyIntro: ['This is the casserole that shows up at potlucks and family dinners for a reason — it uses whatever cooked chicken and rice you already have on hand and turns them into something that reheats better the next day.', 'The buttery cracker topping is what separates it from a plain baked rice dish, adding crunch against all that creamy filling.'],
  storyNote: 'Wait to add the cracker topping until just before baking if making ahead — pre-mixed crackers left sitting on top get soggy instead of staying crisp.',
  heroAlt: 'Baking dish of chicken casserole with golden cracker topping', textureAlt: 'Close-up of chicken casserole showing creamy filling and crispy topping', pinAlt: 'Overhead baking dish of chicken casserole fresh from the oven'
}),

// ===== CROCKPOT (4) =====
r({
  slug: 'crockpot-chicken', title: 'Crockpot Chicken', hubPath: 'crockpot', hubLabel: 'Crockpot',
  metaDescription: 'Set-and-forget crockpot chicken that shreds perfectly — season it, walk away, and come back to tender chicken 6 hours later.',
  targetKeywords: ['crockpot recipes', 'crockpot chicken'],
  cuisine: 'American', keywords: 'crockpot chicken, slow cooker chicken, shredded chicken',
  prepTime: 'PT10M', cookTime: 'PT6H', totalTime: 'PT6H10M', recipeYield: '6 servings',
  nutrition: { calories: '220', proteinContent: '36g', carbohydrateContent: '2g', fatContent: '7g' },
  ingredients: ['2.5 lbs boneless, skinless chicken breasts', '1 cup chicken broth', '1 tsp garlic powder', '1 tsp onion powder', '1 tsp paprika', '1/2 tsp dried thyme', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Season and load the crockpot', text: 'Place the chicken breasts in the crockpot. Pour the broth over them, then sprinkle garlic powder, onion powder, paprika, thyme, salt and pepper evenly over the top.' },
    { name: 'Cook low and slow', text: 'Cover and cook on low for 6 hours, or on high for 3-3.5 hours, until the chicken shreds easily with a fork.' },
    { name: 'Shred and serve', text: 'Remove the chicken, shred with two forks, and stir back into the cooking liquid to keep it moist. Use in tacos, salads, bowls or sandwiches.' }
  ],
  tips: [
    { question: 'Why is my chicken dry after 6 hours?', answer: 'Chicken breast can dry out if cooked on high heat for too long, or if it sits shredded outside the liquid — always shred it back into the cooking liquid rather than draining it away.' },
    { question: 'Can I use chicken thighs instead?', answer: 'Yes — thighs are more forgiving and stay juicy even with a longer cook time, since they have more fat than breast meat.' },
    { question: 'How long does the shredded chicken keep?', answer: 'Up to 5 days in the fridge, or freeze in portions for up to 3 months — it reheats well since it stays in its own broth.' }
  ],
  storyIntro: ['This is the recipe that turns into five different dinners over the course of a week — tacos one night, a chicken salad the next, thrown into a soup after that. Load the crockpot in the morning and shredded chicken is waiting by dinner.', 'The broth it cooks in does most of the flavor work, so the seasoning list stays short.'],
  storyNote: 'Shred the chicken back into its cooking liquid instead of draining it — that liquid is what keeps the shredded meat from drying out as it sits.',
  heroAlt: 'Bowl of shredded crockpot chicken in its cooking broth', textureAlt: 'Close-up of shredded crockpot chicken showing tender texture', pinAlt: 'Overhead bowl of shredded crockpot chicken ready to use'
}),
r({
  slug: 'crockpot-beef-stew', title: 'Crockpot Beef Stew', hubPath: 'crockpot', hubLabel: 'Crockpot',
  metaDescription: 'Hearty crockpot beef stew with tender chunks of beef, potatoes and carrots in a rich broth — the ultimate set-and-forget comfort dinner.',
  targetKeywords: ['crockpot recipes', 'crockpot beef stew'],
  cuisine: 'American', keywords: 'crockpot beef stew, slow cooker beef stew, comfort food',
  prepTime: 'PT20M', cookTime: 'PT8H', totalTime: 'PT8H20M', recipeYield: '6 servings',
  nutrition: { calories: '380', proteinContent: '28g', carbohydrateContent: '26g', fatContent: '16g' },
  ingredients: ['2 lbs beef chuck roast, cubed', '3 tbsp flour', '2 tbsp olive oil', '4 carrots, sliced', '4 potatoes, cubed', '1 onion, diced', '3 cloves garlic, minced', '4 cups beef broth', '2 tbsp tomato paste', '1 tsp dried thyme', '2 bay leaves', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Sear the beef', text: 'Toss the beef cubes with flour, salt and pepper. Heat olive oil in a skillet over medium-high heat and sear the beef in batches for 2-3 minutes per side until browned. Transfer to the crockpot.' },
    { name: 'Load the crockpot', text: 'Add carrots, potatoes, onion, garlic, beef broth, tomato paste, thyme and bay leaves to the crockpot with the beef. Stir to combine.' },
    { name: 'Cook low and slow', text: 'Cover and cook on low for 8 hours, or on high for 4-5 hours, until the beef is fork-tender.' },
    { name: 'Finish', text: 'Remove the bay leaves before serving. If the stew needs thickening, mash a few potato chunks against the side of the pot and stir in.' }
  ],
  tips: [
    { question: 'Do I really need to sear the beef first?', answer: 'Searing adds a layer of browned flavor that the slow cooker alone can\'t replicate — it\'s worth the extra 10 minutes for a stew that tastes deeper rather than just boiled.' },
    { question: 'Why is my stew watery?', answer: 'The flour coating on the beef is what thickens the broth as it cooks — if the stew still looks thin at the end, mash a few potato pieces against the pot wall and stir them in to thicken naturally.' },
    { question: 'Can I add the potatoes later instead of at the start?', answer: 'For a long 8-hour cook, starting them together is fine — they hold up well. For a shorter high-heat cook, adding them isn\'t necessary to delay since 4-5 hours won\'t overcook them.' }
  ],
  storyIntro: ['Beef stew is the dish that rewards patience — the tougher, cheaper cuts of beef like chuck roast are exactly what you want here, because the long slow cook is what breaks down the connective tissue into something fork-tender.', 'Searing the beef first before it goes into the crockpot adds a layer of flavor that just dumping everything in raw can\'t match.'],
  storyNote: 'Don\'t skip searing the beef, even though it adds a step — the browned crust that develops in the skillet is flavor the slow cooker alone won\'t build.',
  heroAlt: 'Bowl of crockpot beef stew with tender beef, carrots and potatoes', textureAlt: 'Close-up of crockpot beef stew showing fork-tender beef chunks', pinAlt: 'Overhead bowl of crockpot beef stew garnished with thyme'
}),
r({
  slug: 'crockpot-pot-roast', title: 'Crockpot Pot Roast', hubPath: 'crockpot', hubLabel: 'Crockpot',
  metaDescription: 'Classic crockpot pot roast with carrots, potatoes and onions in a savory gravy — fall-apart tender after 8 hours, almost no hands-on time.',
  targetKeywords: ['crockpot recipes', 'crockpot pot roast'],
  cuisine: 'American', keywords: 'crockpot pot roast, slow cooker pot roast, Sunday dinner',
  prepTime: 'PT15M', cookTime: 'PT8H', totalTime: 'PT8H15M', recipeYield: '6 servings',
  nutrition: { calories: '420', proteinContent: '34g', carbohydrateContent: '24g', fatContent: '20g' },
  ingredients: ['3 lb beef chuck roast', '2 tbsp olive oil', '4 carrots, cut into chunks', '4 potatoes, quartered', '1 onion, quartered', '3 cloves garlic, minced', '2 cups beef broth', '2 tbsp Worcestershire sauce', '1 packet dry onion soup mix (or 1 tbsp onion powder + salt)', '2 tbsp cornstarch (for gravy, optional)', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Sear the roast', text: 'Pat the roast dry and season generously with salt and pepper. Heat olive oil in a skillet over high heat and sear the roast for 3-4 minutes per side until deeply browned.' },
    { name: 'Load the crockpot', text: 'Place carrots, potatoes and onion in the bottom of the crockpot. Set the seared roast on top. Whisk together beef broth, Worcestershire sauce and onion soup mix, then pour over everything.' },
    { name: 'Cook low and slow', text: 'Cover and cook on low for 8 hours, or on high for 4-5 hours, until the roast shreds easily with a fork.' },
    { name: 'Make the gravy and serve', text: 'Remove the roast and vegetables. For a thicker gravy, whisk 2 tbsp cornstarch with 2 tbsp cold water and stir into the remaining liquid, simmering a few minutes until thickened. Slice or shred the roast and serve with vegetables and gravy.' }
  ],
  tips: [
    { question: 'Why put the vegetables on the bottom?', answer: 'The vegetables closer to the heat source and cooking liquid cook more evenly under the weight of the roast, and it keeps the roast itself from sitting directly against the hot base of the crockpot.' },
    { question: 'Can I skip searing the roast?', answer: 'You can, but searing builds a browned crust that adds real flavor depth to both the meat and the resulting gravy — it\'s a worthwhile 8 minutes.' },
    { question: 'My roast came out tough — what happened?', answer: 'Chuck roast needs the full low-and-slow time to break down its connective tissue — if it\'s tough, it likely needs more time, not less; unlike other cuts, chuck roast gets more tender the longer it cooks within reason.' }
  ],
  storyIntro: ['Pot roast is the Sunday dinner that runs itself — sear the meat in the morning, load the crockpot, and by dinner it falls apart with a fork.', 'Chuck roast is the right cut here specifically because it has enough connective tissue to actually improve with a long cook, unlike leaner cuts that just dry out.'],
  storyNote: 'Chuck roast gets more tender the longer it cooks within the crockpot\'s low-and-slow range — if it still seems tough at 8 hours, give it more time rather than pulling it early.',
  heroAlt: 'Crockpot pot roast with carrots and potatoes in gravy', textureAlt: 'Close-up of fork-tender crockpot pot roast pulled apart', pinAlt: 'Overhead plate of crockpot pot roast with vegetables and gravy'
}),
r({
  slug: 'crockpot-chili', title: 'Crockpot Chili', hubPath: 'crockpot', hubLabel: 'Crockpot',
  metaDescription: 'Hearty crockpot chili with ground beef, beans and a rich tomato base — set it in the morning and come home to a ready dinner.',
  targetKeywords: ['crockpot recipes', 'crockpot chili'],
  cuisine: 'American', keywords: 'crockpot chili, slow cooker chili, easy chili recipe',
  prepTime: 'PT15M', cookTime: 'PT6H', totalTime: 'PT6H15M', recipeYield: '6 servings',
  nutrition: { calories: '360', proteinContent: '26g', carbohydrateContent: '30g', fatContent: '15g' },
  ingredients: ['1.5 lbs ground beef', '1 onion, diced', '2 cloves garlic, minced', '2 cans (15 oz each) kidney beans, drained', '1 can (28 oz) crushed tomatoes', '1 can (14.5 oz) diced tomatoes', '2 tbsp chili powder', '1 tbsp cumin', '1 tsp smoked paprika', '1/2 tsp cayenne (optional)', 'Salt and pepper, to taste', 'Shredded cheese and sour cream, for serving'],
  steps: [
    { name: 'Brown the beef', text: 'Brown the ground beef with the onion and garlic in a skillet over medium-high heat, about 6-7 minutes, until no pink remains. Drain excess fat.' },
    { name: 'Load the crockpot', text: 'Transfer the beef mixture to the crockpot. Add the kidney beans, crushed tomatoes, diced tomatoes, chili powder, cumin, smoked paprika, cayenne, salt and pepper. Stir to combine.' },
    { name: 'Cook low and slow', text: 'Cover and cook on low for 6-8 hours, or on high for 3-4 hours, stirring occasionally if you\'re home to do so.' },
    { name: 'Serve', text: 'Ladle into bowls and top with shredded cheese and sour cream.' }
  ],
  tips: [
    { question: 'Do I need to brown the beef first?', answer: 'Yes — browning the beef before it goes into the crockpot renders excess fat and builds flavor through browning that raw beef simmered in liquid can\'t develop.' },
    { question: 'Can I add the beans raw without draining?', answer: 'Draining and rinsing canned beans removes excess sodium and starchy liquid that can make the chili taste muddy — always drain first for a cleaner flavor.' },
    { question: 'How do I make it spicier?', answer: 'Increase the cayenne or add diced jalapeños when browning the beef — start with a small amount and adjust at the end since spice intensifies over the long cook.' }
  ],
  storyIntro: ['Chili is the crockpot recipe that barely needs the crockpot to taste good, but the slow simmer does let the spices bloom into the tomato base in a way a quick stovetop version can\'t match.', 'Browning the beef first instead of dumping it in raw is the one step worth the extra 10 minutes — it\'s the difference between chili that tastes deep and chili that tastes boiled.'],
  storyNote: 'Drain and rinse the canned beans before adding them — skipping this leaves the chili tasting starchy and slightly muddy instead of clean.',
  heroAlt: 'Bowl of crockpot chili topped with cheese and sour cream', textureAlt: 'Close-up of crockpot chili showing beans and ground beef texture', pinAlt: 'Overhead bowl of crockpot chili with toppings'
}),

// ===== AIR FRYER (3) =====
r({
  slug: 'air-fryer-chicken-thighs', title: 'Air Fryer Chicken Thighs', hubPath: 'air-fryer', hubLabel: 'Air Fryer',
  metaDescription: 'Air fryer chicken thighs with crispy skin and juicy meat in just 22 minutes — no oven required and barely any cleanup.',
  targetKeywords: ['air fryer recipes', 'air fryer chicken thighs'],
  cuisine: 'American', keywords: 'air fryer chicken thighs, crispy air fryer chicken, easy air fryer dinner',
  prepTime: 'PT5M', cookTime: 'PT22M', totalTime: 'PT27M', recipeYield: '4 servings',
  nutrition: { calories: '320', proteinContent: '27g', carbohydrateContent: '1g', fatContent: '22g' },
  ingredients: ['6 bone-in, skin-on chicken thighs', '1 tbsp olive oil', '1 tsp garlic powder', '1 tsp smoked paprika', '1/2 tsp onion powder', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Season the chicken', text: 'Pat the chicken thighs dry with paper towels. Rub with olive oil, then coat evenly with garlic powder, smoked paprika, onion powder, salt and pepper.' },
    { name: 'Preheat and arrange', text: 'Preheat the air fryer to 380°F (193°C). Arrange the thighs skin-side down in a single layer in the basket, without overlapping.' },
    { name: 'Air fry', text: 'Cook for 12 minutes, then flip skin-side up and cook for another 10-12 minutes, until the skin is crisp and a thermometer reads 175°F (79°C).' },
    { name: 'Rest and serve', text: 'Let rest for 3-5 minutes before serving.' }
  ],
  tips: [
    { question: 'Why start skin-side down?', answer: 'Starting skin-side down lets the fat render directly against the hot basket, which helps crisp it before flipping — starting skin-up first can leave the skin softer.' },
    { question: 'Do I need to preheat the air fryer?', answer: 'Preheating gives a more consistent sear from the start — skipping it usually just adds a couple minutes to the total cook time rather than ruining the result.' },
    { question: 'Can I cook them in a single crowded layer to save time?', answer: 'No — overlapping pieces block air circulation, which is what makes an air fryer crisp food in the first place. Cook in batches if your basket is small.' }
  ],
  storyIntro: ['Chicken thighs are close to foolproof in the air fryer — the fat under the skin renders and crisps in the moving hot air without any need to babysit an oven.', 'Twenty-two minutes and barely any cleanup gets you crispier skin than most oven methods manage in twice the time.'],
  storyNote: 'Don\'t crowd the basket — pieces need space between them for air to circulate, which is the entire mechanism behind an air fryer\'s crisping power.',
  heroAlt: 'Crispy air fryer chicken thighs in the air fryer basket', textureAlt: 'Close-up of air fryer chicken thigh showing crispy skin', pinAlt: 'Overhead plate of air fryer chicken thighs with herbs'
}),
r({
  slug: 'air-fryer-chicken-wings', title: 'Air Fryer Chicken Wings', hubPath: 'air-fryer', hubLabel: 'Air Fryer',
  metaDescription: 'Air fryer chicken wings that come out crispy without any oil frying — tossed in your favorite sauce, ready in 25 minutes.',
  targetKeywords: ['air fryer recipes', 'air fryer chicken wings'],
  cuisine: 'American', keywords: 'air fryer chicken wings, crispy wings, game day snacks',
  prepTime: 'PT5M', cookTime: 'PT25M', totalTime: 'PT30M', recipeYield: '4 servings',
  nutrition: { calories: '290', proteinContent: '26g', carbohydrateContent: '2g', fatContent: '20g' },
  ingredients: ['2 lbs chicken wings, split into flats and drumettes', '1 tbsp baking powder', '1 tsp garlic powder', '1/2 tsp paprika', 'Salt and pepper, to taste', '1/2 cup buffalo sauce or sauce of choice, for tossing'],
  steps: [
    { name: 'Dry and coat the wings', text: 'Pat the wings completely dry with paper towels — this is essential for crispiness. Toss with baking powder, garlic powder, paprika, salt and pepper until evenly coated.' },
    { name: 'Preheat and arrange', text: 'Preheat the air fryer to 380°F (193°C). Arrange the wings in a single layer in the basket, without overlapping.' },
    { name: 'Air fry', text: 'Cook for 12 minutes, flip, then cook for another 10-13 minutes until deeply golden and crispy, and the internal temperature reaches 165°F (74°C).' },
    { name: 'Toss and serve', text: 'Toss the hot wings in buffalo sauce or your preferred sauce immediately after cooking, while they\'re still hot enough for the sauce to cling.' }
  ],
  tips: [
    { question: 'Why baking powder and not baking soda?', answer: 'Baking powder (not soda) draws moisture to the surface of the skin and raises its pH, both of which help it crisp — baking soda has a stronger, more bitter aftertaste at the same quantity, so it\'s not a direct swap.' },
    { question: 'Why toss the sauce on after cooking instead of before?', answer: 'Sauce added before cooking burns and can prevent the skin from crisping — tossing hot wings in sauce right after they come out keeps the crispy texture while still coating them well.' },
    { question: 'How do I fit 2 lbs of wings without overcrowding?', answer: 'Cook in two batches if needed — overlapping wings steam instead of crisp, so it\'s worth the extra 10-15 minutes for a smaller basket.' }
  ],
  storyIntro: ['Air fryer wings solve the biggest annoyance of deep frying at home — no pot of hot oil to manage, no oily smell lingering in the kitchen, and genuinely crispy results.', 'The baking powder coating is the one non-obvious trick that makes the difference between good wings and great wings.'],
  storyNote: 'Toss the wings in sauce right after they come out of the basket, not before cooking — sauce added beforehand burns and blocks the skin from crisping.',
  heroAlt: 'Crispy air fryer chicken wings tossed in buffalo sauce', textureAlt: 'Close-up of air fryer chicken wing showing crispy skin texture', pinAlt: 'Overhead plate of air fryer chicken wings with celery and dip'
}),
r({
  slug: 'air-fryer-chicken-breast', title: 'Air Fryer Chicken Breast', hubPath: 'air-fryer', hubLabel: 'Air Fryer',
  metaDescription: 'Juicy air fryer chicken breast ready in under 20 minutes — the fastest way to get tender, evenly cooked chicken without drying it out.',
  targetKeywords: ['air fryer recipes', 'air fryer chicken breast'],
  cuisine: 'American', keywords: 'air fryer chicken breast, juicy air fryer chicken, quick chicken dinner',
  prepTime: 'PT5M', cookTime: 'PT14M', totalTime: 'PT19M', recipeYield: '4 servings',
  nutrition: { calories: '250', proteinContent: '38g', carbohydrateContent: '1g', fatContent: '9g' },
  ingredients: ['4 boneless, skinless chicken breasts', '1 tbsp olive oil', '1 tsp garlic powder', '1 tsp paprika', '1/2 tsp onion powder', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Prep the chicken', text: 'Pound the chicken breasts to an even thickness, about 3/4 inch. Rub with olive oil, then season with garlic powder, paprika, onion powder, salt and pepper.' },
    { name: 'Preheat and arrange', text: 'Preheat the air fryer to 375°F (190°C). Arrange the chicken in a single layer in the basket.' },
    { name: 'Air fry', text: 'Cook for 7 minutes, flip, then cook for another 6-7 minutes until a meat thermometer reads 165°F (74°C) in the thickest part.' },
    { name: 'Rest and serve', text: 'Let rest for 5 minutes before slicing.' }
  ],
  tips: [
    { question: 'Why does air fryer chicken breast cook so much faster than the oven?', answer: 'The air fryer circulates hot air at high speed in a small enclosed space, which cooks food faster than a conventional oven — the same reason it also crisps surfaces well without extra oil.' },
    { question: 'Why pound the chicken first?', answer: 'Even thickness matters even more in the air fryer\'s shorter cook time — a thick uneven breast can end up raw in the center while the thin end overcooks.' },
    { question: 'Can I cook frozen chicken breast in the air fryer?', answer: 'Yes, though it will take roughly 50% longer and won\'t season as evenly since the rub can\'t penetrate frozen meat — thawing first gives better results.' }
  ],
  storyIntro: ['Air fryer chicken breast is the fastest reliable way I\'ve found to get juicy chicken on a weeknight — under 20 minutes total, with the same doneness check as oven-baked (165°F on a thermometer).', 'The circulating hot air cooks it faster and more evenly than an oven, without drying out the outside before the inside catches up.'],
  storyNote: 'Pound the chicken to an even thickness before it goes in — the air fryer\'s fast cook time leaves less margin for uneven thickness than a slower oven bake does.',
  heroAlt: 'Sliced air fryer chicken breast on a cutting board', textureAlt: 'Close-up of sliced air fryer chicken breast showing juicy interior', pinAlt: 'Overhead air fryer chicken breast with seasoning'
}),

// ===== COOKIES (6) =====
r({
  slug: 'chocolate-chip-cookies', title: 'Chocolate Chip Cookies', hubPath: 'cookies', hubLabel: 'Cookies',
  metaDescription: 'Classic chocolate chip cookies with crispy edges and a soft, chewy center — the everyday recipe that never needs replacing.',
  targetKeywords: ['cookie recipes', 'chocolate chip cookies'],
  cuisine: 'American', keywords: 'chocolate chip cookies, classic cookie recipe, chewy cookies',
  prepTime: 'PT15M', cookTime: 'PT10M', totalTime: 'PT25M', recipeYield: '24 cookies',
  nutrition: { calories: '180', proteinContent: '2g', carbohydrateContent: '24g', fatContent: '9g' },
  ingredients: ['2 1/4 cups all-purpose flour', '1 tsp baking soda', '1 tsp salt', '1 cup unsalted butter, softened', '3/4 cup granulated sugar', '3/4 cup packed brown sugar', '2 large eggs', '2 tsp vanilla extract', '2 cups chocolate chips'],
  steps: [
    { name: 'Mix dry ingredients', text: 'Whisk together flour, baking soda and salt in a bowl. Set aside.' },
    { name: 'Cream the butter and sugars', text: 'In a large bowl, beat the softened butter with both sugars until light and fluffy, about 2-3 minutes.' },
    { name: 'Add eggs and vanilla', text: 'Beat in the eggs one at a time, then the vanilla, until fully combined.' },
    { name: 'Combine and add chips', text: 'Gradually mix in the dry ingredients until just combined — don\'t overmix. Fold in the chocolate chips.' },
    { name: 'Bake', text: 'Preheat oven to 375°F (190°C). Drop rounded tablespoons of dough onto a lined baking sheet, spaced 2 inches apart. Bake for 9-11 minutes until the edges are golden but the centers still look slightly underdone.' }
  ],
  tips: [
    { question: 'Why do my cookies come out flat?', answer: 'Butter that\'s too warm or melted spreads too much before the structure sets — make sure it\'s softened but still cool to the touch, and chill the dough for 30 minutes if your kitchen is warm.' },
    { question: 'Why does the recipe say to underbake slightly?', answer: 'Cookies continue cooking on the hot baking sheet after they come out of the oven — pulling them when the center still looks a touch underdone is what keeps them chewy instead of crisp all the way through.' },
    { question: 'Can I freeze the dough?', answer: 'Yes — scoop the dough into balls, freeze on a tray until solid, then transfer to a freezer bag. Bake straight from frozen, adding 1-2 extra minutes.' }
  ],
  storyIntro: ['Every family needs one chocolate chip cookie recipe that just works, without needing browned butter or an overnight chill — this is that recipe.', 'Crispy edges, chewy centers, and a dough that comes together in one bowl in about 15 minutes.'],
  storyNote: 'Pull the cookies while the centers still look slightly underdone — carryover heat on the hot pan finishes them without drying them out.',
  heroAlt: 'Stack of chocolate chip cookies with melty chocolate chips', textureAlt: 'Close-up of chocolate chip cookie showing chewy interior', pinAlt: 'Overhead plate of chocolate chip cookies with a glass of milk'
}),
r({
  slug: 'brown-butter-chocolate-chip-cookies', title: 'Brown Butter Chocolate Chip Cookies', hubPath: 'cookies', hubLabel: 'Cookies',
  metaDescription: 'Brown butter chocolate chip cookies with a deep nutty, caramelized flavor — the upgrade that makes classic cookies taste bakery-level.',
  targetKeywords: ['cookie recipes', 'brown butter chocolate chip cookies'],
  cuisine: 'American', keywords: 'brown butter cookies, nutty chocolate chip cookies, bakery style cookies',
  prepTime: 'PT20M', cookTime: 'PT10M', totalTime: 'PT30M', recipeYield: '20 cookies',
  nutrition: { calories: '190', proteinContent: '2g', carbohydrateContent: '23g', fatContent: '10g' },
  ingredients: ['1 cup unsalted butter', '2 1/4 cups all-purpose flour', '1 tsp baking soda', '1 tsp salt', '3/4 cup packed brown sugar', '1/2 cup granulated sugar', '1 large egg plus 1 egg yolk', '2 tsp vanilla extract', '2 cups chocolate chips', 'Flaky sea salt, for topping (optional)'],
  steps: [
    { name: 'Brown the butter', text: 'Melt the butter in a light-colored saucepan over medium heat, swirling occasionally, until it foams, then turns golden brown and smells nutty, about 5-7 minutes. Pour into a heatproof bowl to cool for 15-20 minutes.' },
    { name: 'Mix dry ingredients', text: 'Whisk together flour, baking soda and salt in a bowl.' },
    { name: 'Combine wet ingredients', text: 'Whisk the cooled brown butter with both sugars until combined. Whisk in the egg, egg yolk and vanilla until smooth.' },
    { name: 'Combine and chill', text: 'Fold the dry ingredients into the wet mixture until just combined, then fold in chocolate chips. Chill the dough for at least 30 minutes — this helps the flavor develop and prevents excess spreading.' },
    { name: 'Bake', text: 'Preheat oven to 375°F (190°C). Scoop dough onto a lined baking sheet, spaced 2 inches apart, and bake for 9-11 minutes until the edges are set. Sprinkle with flaky salt if using.' }
  ],
  tips: [
    { question: 'How do I know when the butter is browned, not burned?', answer: 'Watch for the color to shift to an amber-gold and the smell to turn nutty rather than sharp — it happens quickly after the foaming stage, so stay at the stove and swirl the pan constantly toward the end.' },
    { question: 'Why chill the dough?', answer: 'The butter is liquid after browning rather than creamed cool and soft, so chilling solidifies it again — skipping this step results in cookies that spread thin and greasy.' },
    { question: 'Can I skip the extra egg yolk?', answer: 'The extra yolk adds richness and chewiness that a single whole egg doesn\'t fully replicate — it\'s a small but noticeable difference in texture.' }
  ],
  storyIntro: ['Browning the butter is the single change that takes a good chocolate chip cookie to a genuinely great one — the milk solids toast in the pan and add a nutty, caramel-like depth that regular melted or softened butter can\'t match.', 'It adds maybe 10 extra minutes to the process, mostly hands-off, for a cookie that tastes noticeably more complex.'],
  storyNote: 'Watch the butter closely once it starts foaming — it goes from perfectly browned to burnt in under a minute, and burnt butter tastes bitter, not nutty.',
  heroAlt: 'Stack of brown butter chocolate chip cookies with flaky salt on top', textureAlt: 'Close-up of brown butter cookie showing caramelized edges', pinAlt: 'Overhead plate of brown butter chocolate chip cookies'
}),
r({
  slug: 'peanut-butter-cookies', title: 'Peanut Butter Cookies', hubPath: 'cookies', hubLabel: 'Cookies',
  metaDescription: 'Classic peanut butter cookies with the signature fork crosshatch and a soft, rich center — just a handful of pantry ingredients.',
  targetKeywords: ['cookie recipes', 'peanut butter cookies'],
  cuisine: 'American', keywords: 'peanut butter cookies, classic cookies, easy cookie recipe',
  prepTime: 'PT10M', cookTime: 'PT10M', totalTime: 'PT20M', recipeYield: '24 cookies',
  nutrition: { calories: '150', proteinContent: '4g', carbohydrateContent: '15g', fatContent: '9g' },
  ingredients: ['1 cup creamy peanut butter', '1 cup granulated sugar', '1 large egg', '1 tsp baking soda', '1/2 tsp vanilla extract', 'Pinch of salt', 'Extra sugar, for rolling (optional)'],
  steps: [
    { name: 'Mix the dough', text: 'In a bowl, stir together peanut butter, sugar, egg, baking soda, vanilla and salt until a smooth dough forms.' },
    { name: 'Shape', text: 'Roll the dough into 1-inch balls. Roll in extra sugar if desired, then place on a lined baking sheet spaced 2 inches apart.' },
    { name: 'Crosshatch and bake', text: 'Preheat oven to 350°F (175°C). Press each ball flat with a fork in a crosshatch pattern. Bake for 9-11 minutes until the edges are just set.' },
    { name: 'Cool', text: 'Let cool on the baking sheet for 5 minutes before transferring to a wire rack — they\'re fragile straight out of the oven.' }
  ],
  tips: [
    { question: 'Why does the recipe have no flour?', answer: 'The peanut butter itself provides enough structure to hold the cookie together, which is what makes this version simpler than a flour-based peanut butter cookie — it also gives a denser, more intensely peanut-flavored result.' },
    { question: 'Why the fork crosshatch pattern?', answer: 'Beyond tradition, the crosshatch flattens the dough ball evenly so it bakes through consistently — without flattening, a thick ball of this dense dough can stay raw in the center.' },
    { question: 'Can I use natural peanut butter?', answer: 'Natural peanut butter (the kind that separates) works but can make the dough oilier and less consistent — stir it very thoroughly before measuring, or stick with a no-stir creamy peanut butter for the most reliable texture.' }
  ],
  storyIntro: ['This is the peanut butter cookie built on the classic flourless formula — just peanut butter, sugar, egg and a little baking soda, so the peanut flavor comes through clean instead of diluted by flour.', 'The fork crosshatch is more than decoration — it flattens the thick dough evenly so the centers actually bake through.'],
  storyNote: 'Let the cookies cool on the pan for a few minutes before moving them — this flourless dough is fragile while hot and can crumble if handled too soon.',
  heroAlt: 'Peanut butter cookies with classic fork crosshatch pattern', textureAlt: 'Close-up of peanut butter cookie showing dense crumbly texture', pinAlt: 'Overhead plate of peanut butter cookies'
}),
r({
  slug: 'oatmeal-cookies', title: 'Oatmeal Cookies', hubPath: 'cookies', hubLabel: 'Cookies',
  metaDescription: 'Chewy oatmeal cookies with cinnamon and raisins (or chocolate chips) — a hearty, old-fashioned cookie with real texture from the oats.',
  targetKeywords: ['cookie recipes', 'oatmeal cookies'],
  cuisine: 'American', keywords: 'oatmeal cookies, chewy oatmeal cookies, old fashioned cookies',
  prepTime: 'PT15M', cookTime: 'PT12M', totalTime: 'PT27M', recipeYield: '24 cookies',
  nutrition: { calories: '160', proteinContent: '3g', carbohydrateContent: '22g', fatContent: '7g' },
  ingredients: ['1 1/2 cups old-fashioned rolled oats', '1 1/4 cups all-purpose flour', '1 tsp baking soda', '1 tsp ground cinnamon', '1/2 tsp salt', '3/4 cup unsalted butter, softened', '3/4 cup packed brown sugar', '1/4 cup granulated sugar', '1 large egg', '1 tsp vanilla extract', '1 cup raisins or chocolate chips'],
  steps: [
    { name: 'Mix dry ingredients', text: 'Whisk together oats, flour, baking soda, cinnamon and salt in a bowl.' },
    { name: 'Cream butter and sugars', text: 'Beat the butter with both sugars until light and fluffy, about 2-3 minutes.' },
    { name: 'Add egg and vanilla', text: 'Beat in the egg and vanilla until combined.' },
    { name: 'Combine and add mix-ins', text: 'Gradually mix in the dry ingredients until just combined, then fold in raisins or chocolate chips.' },
    { name: 'Bake', text: 'Preheat oven to 350°F (175°C). Drop rounded tablespoons of dough onto a lined baking sheet, spaced 2 inches apart. Bake for 10-12 minutes until the edges are golden and the centers still look slightly soft.' }
  ],
  tips: [
    { question: 'Old-fashioned oats or quick oats — does it matter?', answer: 'Old-fashioned rolled oats hold their shape and give more distinct chewy texture — quick oats are cut smaller and will bake into a softer, less textured cookie, though they work in a pinch.' },
    { question: 'Why are my oatmeal cookies dry and cakey instead of chewy?', answer: 'This usually comes from overbaking — pull them while the centers still look a little soft, since they firm up as they cool on the pan.' },
    { question: 'Can I substitute the raisins?', answer: 'Yes — chocolate chips, dried cranberries or chopped walnuts all work as a direct swap for the raisins in equal amounts.' }
  ],
  storyIntro: ['Oatmeal cookies get a bad reputation from bakery versions that are basically hockey pucks, but the texture comes down to two things: not overbaking, and using old-fashioned oats rather than quick oats for real chew.', 'This version leans into cinnamon and keeps the mix-in choice flexible between classic raisins or chocolate chips.'],
  storyNote: 'Pull the cookies while the centers still look a touch soft — like most cookies, they firm up on the pan after coming out, and overbaking is what turns oatmeal cookies dry and cakey.',
  heroAlt: 'Stack of chewy oatmeal cookies with raisins', textureAlt: 'Close-up of oatmeal cookie showing chewy oat texture', pinAlt: 'Overhead plate of oatmeal cookies with cinnamon'
}),
r({
  slug: 'snickerdoodle-cookies', title: 'Snickerdoodle Cookies', hubPath: 'cookies', hubLabel: 'Cookies',
  metaDescription: 'Soft snickerdoodle cookies rolled in cinnamon sugar with that classic tangy bite from cream of tartar — a nostalgic classic.',
  targetKeywords: ['cookie recipes', 'snickerdoodle cookies'],
  cuisine: 'American', keywords: 'snickerdoodle cookies, cinnamon sugar cookies, classic cookies',
  prepTime: 'PT15M', cookTime: 'PT10M', totalTime: 'PT25M', recipeYield: '24 cookies',
  nutrition: { calories: '150', proteinContent: '2g', carbohydrateContent: '20g', fatContent: '7g' },
  ingredients: ['2 3/4 cups all-purpose flour', '2 tsp cream of tartar', '1 tsp baking soda', '1/4 tsp salt', '1 cup unsalted butter, softened', '1 1/2 cups granulated sugar, divided', '2 large eggs', '1 tsp vanilla extract', '2 tbsp ground cinnamon (for rolling)'],
  steps: [
    { name: 'Mix dry ingredients', text: 'Whisk together flour, cream of tartar, baking soda and salt in a bowl.' },
    { name: 'Cream butter and sugar', text: 'Beat butter with 1 cup of the sugar until light and fluffy, about 2-3 minutes.' },
    { name: 'Add eggs and vanilla', text: 'Beat in eggs one at a time, then vanilla, until fully combined.' },
    { name: 'Combine and shape', text: 'Gradually mix in the dry ingredients until just combined. In a small bowl, mix the remaining 1/2 cup sugar with the cinnamon. Roll dough into 1-inch balls and coat each in the cinnamon sugar.' },
    { name: 'Bake', text: 'Preheat oven to 375°F (190°C). Place balls on a lined baking sheet, spaced 2 inches apart, and bake for 8-10 minutes until the edges are set but the centers still look soft — they will puff and crackle on top.' }
  ],
  tips: [
    { question: 'What does cream of tartar actually do here?', answer: 'It reacts with the baking soda to give snickerdoodles their signature slight tang and helps create the classic soft, chewy texture with crackled tops — it\'s not interchangeable with just using more baking powder.' },
    { question: 'Can I make these without cream of tartar?', answer: 'You can substitute 2 tsp baking powder in place of the cream of tartar and baking soda combined, though the classic tangy flavor will be milder.' },
    { question: 'Why do the tops crack?', answer: 'The crackled top is normal for snickerdoodles and comes from the dough spreading and setting around the sugar coating as it bakes — it\'s a sign the cookie baked correctly, not a mistake.' }
  ],
  storyIntro: ['Snickerdoodles get their distinct tangy edge from cream of tartar, an ingredient most other cookies skip entirely — it\'s the one thing that separates a true snickerdoodle from a plain cinnamon sugar cookie.', 'Rolling the dough balls in cinnamon sugar before baking is what gives them that crackled, sparkly top.'],
  storyNote: 'Don\'t skip the cream of tartar or swap it out casually — it\'s responsible for both the tangy flavor and the classic soft-crackled texture that defines a snickerdoodle.',
  heroAlt: 'Snickerdoodle cookies with cracked cinnamon sugar tops', textureAlt: 'Close-up of snickerdoodle cookie showing crackled sugary surface', pinAlt: 'Overhead plate of snickerdoodle cookies'
}),
r({
  slug: 'molasses-cookies', title: 'Molasses Cookies', hubPath: 'cookies', hubLabel: 'Cookies',
  metaDescription: 'Soft, spiced molasses cookies with crackled sugar tops — a warm, old-fashioned cookie perfect for cooler months.',
  targetKeywords: ['cookie recipes', 'molasses cookies'],
  cuisine: 'American', keywords: 'molasses cookies, spiced cookies, soft ginger molasses cookies',
  prepTime: 'PT15M', cookTime: 'PT11M', totalTime: 'PT26M', recipeYield: '24 cookies',
  nutrition: { calories: '160', proteinContent: '2g', carbohydrateContent: '25g', fatContent: '6g' },
  ingredients: ['2 1/4 cups all-purpose flour', '2 tsp baking soda', '1/2 tsp salt', '1 1/2 tsp ground cinnamon', '1 tsp ground ginger', '1/2 tsp ground cloves', '3/4 cup unsalted butter, softened', '1 cup packed brown sugar', '1/4 cup molasses', '1 large egg', 'Granulated sugar, for rolling'],
  steps: [
    { name: 'Mix dry ingredients', text: 'Whisk together flour, baking soda, salt, cinnamon, ginger and cloves in a bowl.' },
    { name: 'Cream butter and sugar', text: 'Beat the butter with brown sugar until light and fluffy, about 2-3 minutes.' },
    { name: 'Add molasses and egg', text: 'Beat in the molasses and egg until fully combined and smooth.' },
    { name: 'Combine and shape', text: 'Gradually mix in the dry ingredients until just combined. Roll dough into 1-inch balls and roll each in granulated sugar to coat.' },
    { name: 'Bake', text: 'Preheat oven to 350°F (175°C). Place on a lined baking sheet, spaced 2 inches apart. Bake for 10-12 minutes until the tops crackle and the edges are set but the centers still look slightly soft.' }
  ],
  tips: [
    { question: 'Regular molasses or blackstrap — which is right here?', answer: 'Regular (unsulphured) molasses gives the classic sweet-spiced flavor these cookies are known for — blackstrap molasses is much more bitter and intense, and will throw off the balance if swapped in directly.' },
    { question: 'Why do the tops crack when baking?', answer: 'The sugar coating sets on the outside while the dough continues to spread and rise underneath, creating the crackled surface — this is the expected result, not a sign of a problem.' },
    { question: 'Can I make the dough ahead?', answer: 'Yes — the dough keeps well covered in the fridge for up to 3 days; roll into balls right before baking rather than shaping and chilling separately.' }
  ],
  storyIntro: ['Molasses cookies are the cookie for when chocolate chip feels too predictable — the warm spice blend of cinnamon, ginger and cloves against the deep sweetness of molasses gives them a completely different character.', 'Rolling the dough balls in sugar before baking gives that classic crackled top that molasses cookies are known for.'],
  storyNote: 'Use regular molasses, not blackstrap — blackstrap is significantly more bitter and will throw off the sweet-spiced balance the recipe is built around.',
  heroAlt: 'Molasses cookies with crackled sugary tops', textureAlt: 'Close-up of molasses cookie showing soft spiced crumb', pinAlt: 'Overhead plate of molasses cookies'
}),

// ===== SALADS (3) =====
r({
  slug: 'pasta-salad', title: 'Pasta Salad', hubPath: 'salads', hubLabel: 'Salads',
  metaDescription: 'Classic pasta salad loaded with vegetables and a tangy Italian dressing — the potluck side that always disappears first.',
  targetKeywords: ['salad recipes', 'pasta salad'],
  cuisine: 'American', keywords: 'pasta salad, potluck side dish, cold pasta salad',
  prepTime: 'PT20M', cookTime: 'PT10M', totalTime: 'PT30M', recipeYield: '8 servings',
  nutrition: { calories: '260', proteinContent: '7g', carbohydrateContent: '32g', fatContent: '12g' },
  ingredients: ['1 lb rotini or bowtie pasta', '1 cup cherry tomatoes, halved', '1 cucumber, diced', '1/2 red onion, thinly sliced', '1 cup black olives, halved', '1 cup mozzarella pearls or diced mozzarella', '2/3 cup Italian dressing', '1/4 cup fresh parsley, chopped', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Cook the pasta', text: 'Cook pasta in salted boiling water according to package directions until al dente. Drain and rinse under cold water to stop the cooking and cool it quickly.' },
    { name: 'Prep the vegetables', text: 'While the pasta cools, dice the tomatoes, cucumber, onion and olives.' },
    { name: 'Combine', text: 'In a large bowl, combine the cooled pasta, tomatoes, cucumber, onion, olives, mozzarella and parsley.' },
    { name: 'Dress and chill', text: 'Pour the Italian dressing over everything and toss to coat. Season with salt and pepper. Chill for at least 30 minutes before serving so the flavors meld.' }
  ],
  tips: [
    { question: 'Why rinse the pasta with cold water?', answer: 'Rinsing stops the cooking immediately and cools the pasta fast, which prevents it from continuing to soften and becoming mushy once combined with the dressing.' },
    { question: 'Can I make this a day ahead?', answer: 'Yes — pasta salad actually improves after a few hours or overnight in the fridge as the pasta absorbs the dressing. Give it a fresh toss and taste before serving, adding a splash more dressing if it looks dry.' },
    { question: 'How do I keep it from getting soggy?', answer: 'Slightly undercook the pasta (a minute short of al dente) since it continues to soften as it sits in the dressing, and add delicate ingredients like fresh herbs close to serving time.' }
  ],
  storyIntro: ['Pasta salad is the dish that shows up at every summer cookout and potluck for a reason — it holds up in the heat, travels well, and gets better after a few hours in the fridge instead of worse.', 'This version keeps it classic: rotini, fresh vegetables, mozzarella and a tangy Italian dressing that coats everything without drowning it.'],
  storyNote: 'Give the salad time to chill before serving — the flavors need at least 30 minutes to actually meld into the pasta, and it tastes noticeably better than eaten right away.',
  heroAlt: 'Bowl of pasta salad with tomatoes, mozzarella and olives', textureAlt: 'Close-up of pasta salad showing dressing coating the pasta and vegetables', pinAlt: 'Overhead bowl of colorful pasta salad ready to serve'
}),
r({
  slug: 'chicken-salad', title: 'Chicken Salad', hubPath: 'salads', hubLabel: 'Salads',
  metaDescription: 'Classic creamy chicken salad with celery, grapes and a hint of crunch — perfect for sandwiches, wraps or served over greens.',
  targetKeywords: ['salad recipes', 'chicken salad'],
  cuisine: 'American', keywords: 'chicken salad, classic chicken salad recipe, chicken salad sandwich filling',
  prepTime: 'PT15M', cookTime: 'PT0M', totalTime: 'PT15M', recipeYield: '4 servings',
  nutrition: { calories: '310', proteinContent: '26g', carbohydrateContent: '10g', fatContent: '19g' },
  ingredients: ['3 cups cooked chicken breast, diced or shredded', '1/2 cup mayonnaise', '2 celery stalks, finely diced', '1/2 cup red grapes, halved', '1/4 cup red onion, minced', '1/4 cup toasted pecans or walnuts, chopped', '1 tbsp lemon juice', '1/2 tsp Dijon mustard', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Combine the dressing', text: 'In a large bowl, whisk together mayonnaise, lemon juice and Dijon mustard.' },
    { name: 'Add everything else', text: 'Add the diced chicken, celery, grapes, red onion and nuts to the bowl. Toss to coat everything evenly in the dressing.' },
    { name: 'Season and chill', text: 'Season with salt and pepper to taste. Chill for at least 20 minutes before serving to let the flavors come together.' }
  ],
  tips: [
    { question: 'What\'s the best way to cook chicken for chicken salad?', answer: 'Poaching or baking whole chicken breasts and letting them cool before dicing keeps them juicier than shredding hot chicken — rotisserie chicken also works well and adds extra flavor.' },
    { question: 'Can I make this lighter?', answer: 'Substituting half the mayonnaise with plain Greek yogurt cuts fat while keeping the salad creamy — start with a 50/50 mix and adjust to taste.' },
    { question: 'How long does chicken salad keep in the fridge?', answer: 'Up to 4 days in an airtight container. Give it a stir before serving since the dressing can separate slightly as it sits.' }
  ],
  storyIntro: ['Good chicken salad comes down to using chicken that\'s actually been cooked and cooled properly rather than rushed while hot, and getting the ratio of creamy dressing to crunchy add-ins right.', 'The grapes and toasted nuts here add sweetness and crunch against the celery and creamy dressing — it works equally well piled on bread, wrapped in lettuce, or eaten straight from the bowl.'],
  storyNote: 'Let the chicken cool fully before mixing it into the dressing — warm chicken can make the mayonnaise-based dressing separate and go slightly oily.',
  heroAlt: 'Bowl of chicken salad with grapes, celery and pecans', textureAlt: 'Close-up of chicken salad showing creamy texture with visible chicken and grapes', pinAlt: 'Overhead bowl of chicken salad ready for sandwiches'
}),
r({
  slug: 'greek-salad', title: 'Greek Salad', hubPath: 'salads', hubLabel: 'Salads',
  metaDescription: 'Traditional Greek salad with tomatoes, cucumber, olives and feta in a simple olive oil dressing — no lettuce, all fresh vegetables.',
  targetKeywords: ['salad recipes', 'greek salad'],
  cuisine: 'Greek', keywords: 'greek salad, horiatiki salad, mediterranean salad',
  prepTime: 'PT15M', cookTime: 'PT0M', totalTime: 'PT15M', recipeYield: '4 servings',
  nutrition: { calories: '220', proteinContent: '6g', carbohydrateContent: '10g', fatContent: '18g' },
  ingredients: ['4 large tomatoes, cut into wedges', '1 English cucumber, sliced into half-moons', '1/2 red onion, thinly sliced', '1 green bell pepper, sliced', '1 cup kalamata olives', '7 oz block feta cheese', '1/3 cup extra virgin olive oil', '2 tbsp red wine vinegar', '1 tsp dried oregano', 'Salt and pepper, to taste'],
  steps: [
    { name: 'Prep the vegetables', text: 'Cut the tomatoes into wedges, slice the cucumber into half-moons, thinly slice the onion, and slice the bell pepper.' },
    { name: 'Assemble', text: 'Combine the tomatoes, cucumber, onion, bell pepper and olives in a large bowl or platter.' },
    { name: 'Add the feta whole', text: 'Place the block of feta on top of the vegetables rather than crumbling it — this is the traditional presentation.' },
    { name: 'Dress and finish', text: 'Drizzle olive oil and red wine vinegar over everything, sprinkle with dried oregano, salt and pepper, and serve immediately.' }
  ],
  tips: [
    { question: 'Why keep the feta as a block instead of crumbling it?', answer: 'A traditional Greek salad (horiatiki) serves the feta whole on top as a statement piece rather than mixed through — it also keeps the feta from getting soggy mixed in with the dressing before serving.' },
    { question: 'Why no lettuce in a Greek salad?', answer: 'Traditional Greek salad is built entirely from tomatoes, cucumber, onion, peppers and olives — lettuce isn\'t part of the classic version, which is part of what distinguishes it from a typical American-style Greek salad.' },
    { question: 'Can I make this ahead?', answer: 'The vegetables can be cut a few hours ahead and refrigerated separately, but add the dressing and feta right before serving — tomatoes release liquid once dressed and the salad gets watery if it sits too long.' }
  ],
  storyIntro: ['A real Greek salad, or horiatiki, skips the lettuce entirely and lets ripe tomatoes, cucumber and a whole block of feta do all the work — it\'s less a salad in the American sense and more a plate of fresh vegetables dressed simply.', 'The dressing is nothing more than good olive oil, vinegar and oregano, because there\'s no need to dress up vegetables that are already good.'],
  storyNote: 'Dress the salad right before serving, not ahead of time — tomatoes release liquid once salted and dressed, which waters down the flavor if it sits too long.',
  heroAlt: 'Greek salad with whole feta block, tomatoes, cucumber and olives', textureAlt: 'Close-up of Greek salad showing fresh vegetables and feta', pinAlt: 'Overhead platter of traditional Greek salad'
})
];

const dir = path.join(__dirname, 'content', 'recipes');
fs.mkdirSync(dir, { recursive: true });
RECIPES.forEach(rec => {
  fs.writeFileSync(path.join(dir, `${rec.slug}.json`), JSON.stringify(rec, null, 2));
});
console.log(`✅ Wrote ${RECIPES.length} recipe JSON files`);
