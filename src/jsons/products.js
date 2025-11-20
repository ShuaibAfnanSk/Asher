const products = [
  {
    id: "01",
    taste:
      "Sweet and earthy with a blend of apple, beetroot, and carrot, balanced by tangy lime. A subtle kick of ginger and spices, with a smooth, nutty texture from chia and flax seeds!",
    color: "#ff4355",
    fruit: "Apple",
    name: "ABC Power Punch",
    image:
      "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6fd0a17b480f1da3bb_3.png",
    details: [
      {
        ingredient: "Apple",
        nutrients: "Fiber, Vitamin C, Potassium, Antioxidants",
        image: "https://ik.imagekit.io/akiAfnan/Asher/apple.png",
        benefits: [
          "Supports digestion",
          "Boosts immunity",
          "Promotes heart health",
        ],
      },
      {
        ingredient: "Beetroot",
        nutrients: "Nitrates, Iron, Folate, Vitamin C",
        image: "https://ik.imagekit.io/akiAfnan/Asher/beetroot.png",
        benefits: [
          "Enhances blood circulation",
          "Supports liver function",
          "Boosts stamina",
        ],
      },
      {
        image: "https://ik.imagekit.io/akiAfnan/Asher/carrot.png",
        ingredient: "Carrot",
        nutrients: "Beta-Carotene, Vitamin A, Fiber, Potassium",
        benefits: [
          "Supports eye health",
          "Enhances skin glow",
          "Strengthens immunity",
        ],
      },
      {
        ingredient: "Chia Seeds",
        image: "https://ik.imagekit.io/akiAfnan/Asher/chia.png",
        nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium",
        benefits: [
          "Supports digestion",
          "Promotes heart health",
          "Boosts energy levels",
        ],
      },
      {
        ingredient: "Ground Flaxseeds",
        image: "https://ik.imagekit.io/akiAfnan/Asher/flaxseeds.png",
        nutrients: "Omega-3 Fatty Acids, Lignans, Fiber, Vitamin B1",
        benefits: [
          "Reduces inflammation",
          "Supports heart health",
          "Aids hormonal balance",
        ],
      },
      {
        ingredient: "Spinach",
        image: "https://ik.imagekit.io/akiAfnan/Asher/spinach.png",
        nutrients: "Iron, Vitamin K, Folate, Magnesium, Calcium",
        benefits: ["Boosts energy", "Strengthens bones", "Supports immunity"],
      },
      {
        ingredient: "Ginger",
        image: "https://ik.imagekit.io/akiAfnan/Asher/ginger.png",
        nutrients: "Gingerol, Vitamin B6, Magnesium, Potassium",
        benefits: [
          "Reduces inflammation",
          "Aids digestion",
          "Boosts metabolism",
        ],
      },
      {
        ingredient: "Lime juice",
        nutrients: "Vitamin C, Citric Acid, Flavonoids",
        image: "https://ik.imagekit.io/akiAfnan/Asher/lemon.png",
        benefits: [
          "Supports liver detoxification",
          "Improves digestion",
          "Promotes skin health",
        ],
      },
      {
        ingredient: "Cinnamon",
        image: "https://ik.imagekit.io/akiAfnan/Asher/cinnamon.png",
        nutrients: "Cinnamaldehyde, Antioxidants, Calcium",
        benefits: [
          "Helps regulate blood sugar",
          "Improves circulation",
          "Supports immunity",
        ],
      },
      {
        ingredient: "Turmeric",
        nutrients: "Curcumin, Potassium, Vitamin C",
        image: "https://ik.imagekit.io/akiAfnan/Asher/turmeric.png",
        benefits: [
          "Reduces inflammation",
          "Supports joint health",
          "Has antioxidant properties",
        ],
      },
      {
        ingredient: "Mint (Pudina)",
        image: "https://ik.imagekit.io/akiAfnan/Asher/pudina.png",
        nutrients: "Menthol, Vitamin A, Iron",
        benefits: [
          "Aids digestion",
          "Freshens breath",
          "Provides a calming effect",
        ],
      },
      {
        ingredient: "Black Pepper",
        image: "https://ik.imagekit.io/akiAfnan/Asher/blacksalt.png",
        nutrients: "Piperine, Iron, Potassium",
        benefits: [
          "Enhances nutrient absorption (especially curcumin)",
          "Supports metabolism",
          "Aids digestion",
        ],
      },
    ],
    bodyReaction: [
      {
        duration: "1-3 Days",
        benefits: "Improved hydration, better digestion, and enhanced energy.",
      },
      {
        duration: "1 Week",
        benefits: "Reduced bloating, clearer skin, and improved focus.",
      },
      {
        duration: "2-3 Weeks",
        benefits: "Enhanced stamina, better immunity, and visible skin glow.",
      },
      {
        duration: "1 Month",
        benefits:
          "Noticeable improvement in digestion, reduced inflammation, and vibrant energy levels.",
      },
      {
        duration: "2-3 Months",
        benefits:
          "Long-term benefits like balanced metabolism, glowing skin, and stronger immunity.",
      },
    ],

    timings: [
      {
        duration: "Morning",
        benefits:
          "Kickstarts metabolism, detoxifies the body, and energizes you for the day.",
      },
      {
        duration: "Pre-Workout",
        benefits:
          "Provides natural energy, boosts stamina, and enhances endurance.",
      },
      {
        duration: "Post-Workout",
        benefits:
          "Replenishes lost nutrients, aids muscle recovery, and supports hydration.",
      },
      {
        duration: "Midday Snack",
        benefits:
          "Curbs unhealthy cravings and keeps you refreshed and energized.",
      },
    ],

    ageCriteria: [
      {
        ageGroup: "Children (3-12)",
        recommendedServing: "100-150 ml daily",
        benefits:
          "Supports digestion, boosts immunity, and promotes healthy growth.",
      },
      {
        ageGroup: "Teens (13-19)",
        recommendedServing: "200-250 ml daily",
        benefits:
          "Enhances stamina, boosts energy, promotes clear skin, supports vitality.",
      },
      {
        ageGroup: "Adults (20-50)",
        recommendedServing: "250-300 ml daily",
        benefits:
          "Provides energy, supports heart health, detoxifies, and strengthens immunity.",
      },
      {
        ageGroup: "Seniors (50+)",
        recommendedServing: "150-200 ml daily",
        benefits:
          "Boosts immunity, reduces inflammation, supports joint health, and maintains vitality.",
      },
      {
        ageGroup: "Allergy Prone",
        recommendedServing: "Not recommended",
        benefits:
          "Avoid if allergic to citrus fruits, ginger, turmeric, or cinnamon.",
      },
    ],

    sourceCredibility: [
      "National Institutes of Health (NIH)",
      "United States Department of Agriculture (USDA)",
      "Harvard Medical School",
      "World Health Organization (WHO)",
    ],

    expertQuote: {
      quote:
        "ABC juice—Apple, Beetroot, and Carrot—is a magical blend that detoxifies your body, boosts blood health, and gives your skin a natural, radiant glow.",
      name: "Dr. Maya Thompson",
      designation: "Holistic Health Specialist",
    },

    faqs: [
      {
        question: "Can I drink this juice daily?",
        answer: "Yes, it's a nutrient-dense option for daily consumption.",
      },
      {
        question: "Is this juice suitable for children?",
        answer:
          "Yes, but adjust ginger and black pepper for children's taste and sensitivity.",
      },
      {
        question: "Does this juice improve skin health?",
        answer:
          "Absolutely! Ingredients like apple, carrot, and turmeric promote a radiant complexion.",
      },
      {
        question: "Is this juice good for detoxification?",
        answer: "Yes, beetroot, lemon, and spinach are natural detoxifiers.",
      },
      {
        question: "Can this juice support weight loss?",
        answer:
          "Yes, it's low in calories, rich in fiber, and supports metabolism.",
      },
      {
        question: "Does ABC Juice Cause a Sugar Spike?",
        answer:
          "since this juice contains ingredients that balance blood sugar (like chia, flax, cinnamon, and turmeric), the spike is often slower and less intense.",
      },
    ],

    gymQuestions: [
      {
        question: "Is this juice good for pre-workout?",
        answer:
          "Yes, it boosts energy, improves circulation (thanks to beetroot), and enhances endurance.",
      },
      {
        question: "Can this juice aid post-workout recovery?",
        answer:
          "Yes, it replenishes lost nutrients, fights inflammation, and supports hydration.",
      },
      {
        question: "Does this juice enhance endurance?",
        answer:
          "Yes, with ingredients like beetroot and chia seeds, it improves oxygen flow and stamina.",
      },
    ],

    otherQuestions: [
      {
        question: "Can this juice be consumed during pregnancy?",
        answer:
          "Yes, but consult your healthcare provider for personalized advice.",
      },
      {
        question: "Does this juice detox the body?",
        answer:
          "Yes, it's packed with natural detoxifying ingredients like beetroot, lemon, and spinach.",
      },
      {
        question: "Is this juice vegan-friendly?",
        answer: "Yes, use maple syrup instead of honey for a vegan option.",
      },
    ],
  },
  {
    id: "02",
    taste:
      "Sweet and citrusy with a fresh orange and carrot blend, brightened by zesty lime and cooling mint. A hint of cinnamon, turmeric, and black pepper adds a warming, earthy kick!",
    color: "#ff994d",
    name: "Orange Glow",
    fruit: "Orange",
    image:
      "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c97372d85d43ff3c13f_1%20(1).png",
    details: [
      {
        ingredient: "Fresh Oranges",
        image: "https://ik.imagekit.io/akiAfnan/Asher/loader.png",
        nutrients: "Vitamin C, Folate, Potassium, Fiber",
        benefits: [
          "Strengthens immunity",
          "Promotes skin health",
          "Supports heart function",
        ],
      },
      {
        ingredient: "Carrot",
        image: "https://ik.imagekit.io/akiAfnan/Asher/carrot.png",
        nutrients: "Beta-Carotene, Vitamin A, Fiber, Potassium",
        benefits: [
          "Supports eye health",
          "Enhances skin glow",
          "Aids digestion",
        ],
      },
      {
        ingredient: "Ginger",
        image: "https://ik.imagekit.io/akiAfnan/Asher/ginger.png",
        nutrients: "Gingerol, Magnesium, Vitamin B6, Potassium",
        benefits: [
          "Reduces inflammation",
          "Supports digestion",
          "Boosts immunity",
        ],
      },
      {
        ingredient: "Lime juice",
        image: "https://ik.imagekit.io/akiAfnan/Asher/lemon.png",
        nutrients: "Vitamin C, Citric Acid, Flavonoids, Potassium",
        benefits: [
          "Supports liver detoxification",
          "Improves digestion",
          "Promotes skin health",
        ],
      },
      {
        ingredient: "Turmeric",
        image: "https://ik.imagekit.io/akiAfnan/Asher/turmeric.png",
        nutrients: "Curcumin, Potassium, Vitamin C, Magnesium",
        benefits: [
          "Reduces inflammation",
          "Supports joint health",
          "Boosts antioxidant levels",
        ],
      },
      {
        ingredient: "Cinnamon",
        image: "https://ik.imagekit.io/akiAfnan/Asher/cinnamon.png",
        nutrients: "Cinnamaldehyde, Calcium, Iron, Antioxidants",
        benefits: [
          "Helps regulate blood sugar",
          "Supports immunity",
          "Adds natural warmth and flavor",
        ],
      },
      {
        ingredient: "Chia Seeds",
        image: "https://ik.imagekit.io/akiAfnan/Asher/chia.png",
        nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium",
        benefits: [
          "Supports digestive health",
          "Promotes heart health",
          "Nourishes skin and hair",
        ],
      },
      {
        ingredient: "Mint (Pudina)",
        image: "https://ik.imagekit.io/akiAfnan/Asher/pudina.png",
        nutrients: "Menthol, Vitamin A, Vitamin C, Iron",
        benefits: ["Aids digestion", "Freshens breath", "Has a calming effect"],
      },
      {
        ingredient: "Black Pepper",
        image: "https://ik.imagekit.io/akiAfnan/Asher/blacksalt.png",
        nutrients: "Piperine, Iron, Potassium, Magnesium",
        benefits: [
          "Enhances nutrient absorption (especially curcumin)",
          "Supports metabolism",
          "Aids digestion",
        ],
      },
    ],
    bodyReaction: [
      {
        duration: "1-3 Days",
        benefits:
          "Improved hydration, better digestion, and a subtle energy boost.",
      },
      {
        duration: "1 Week",
        benefits: "Brighter skin, reduced bloating, and increased vitality.",
      },
      {
        duration: "2-3 Weeks",
        benefits:
          "Strengthened immunity, enhanced metabolism, and clearer complexion.",
      },
      {
        duration: "1 Month",
        benefits:
          "Noticeable improvement in overall energy, digestion, and skin glow.",
      },
      {
        duration: "2-3 Months",
        benefits:
          "Long-term benefits like reduced inflammation, better digestion, and sustained energy.",
      },
    ],

    timings: [
      {
        duration: "Morning (7-8 AM)",
        benefits: "Detox, skin glow, digestion boost, Weight loss",
      },
      {
        duration: "Pre-Workout",
        benefits: "Energy, stamina, endurance",
      },
      {
        duration: "Mid-Morning (10-11 AM)",
        benefits: "Healthy snack, energy boost",
      },
      {
        duration: "Post-Workout",
        benefits: "Muscle recovery, hydration",
      },
      {
        duration: "Evening (4-6 PM)",
        benefits: "Mental clarity, stress relief, Avoid junk food cravings",
      },
    ],

    ageCriteria: [
      {
        ageGroup: "Infants (Below 1)",
        recommendedServing: "Not recommended",
        notes:
          "The juice contains citrus (acidic) and other strong ingredients unsuitable for infants.",
      },
      {
        ageGroup: "Toddlers (1-2)",
        recommendedServing: "20-30 ml (diluted)",
        notes:
          "Introduce in small, diluted portions to avoid stomach sensitivity.",
      },
      {
        ageGroup: "Children (3-12)",
        recommendedServing: "50-100 ml",
        notes:
          "Beneficial for immunity, energy, and skin health; avoid overconsumption due to citrus acidity.",
      },
      {
        ageGroup: "Teenagers (13-18)",
        recommendedServing: "150-200 ml",
        notes:
          "Supports energy, skin glow, and metabolism; great for active lifestyles and hormonal benefits.",
      },
      {
        ageGroup: "Adults (19-60)",
        recommendedServing: "200-250 ml",
        notes:
          "Ideal for boosting metabolism, immunity, and skin health; perfect as a morning or workout drink.",
      },
      {
        ageGroup: "Seniors (60+)",
        recommendedServing: "150-200 ml",
        notes:
          "Provides antioxidants and aids digestion; monitor if there are acidity or citrus sensitivities.",
      },
      {
        ageGroup: "Pregnant Women",
        recommendedServing: "Moderation (150-200 ml)",
        notes:
          "Rich in vitamin C and folate; consult a doctor due to ginger, turmeric, and cinnamon content.",
      },
      {
        ageGroup: "Allergy Prone",
        recommendedServing: "Not recommended",
        notes:
          "Avoid if allergic to citrus fruits, ginger, turmeric, or cinnamon.",
      },
    ],

    sourceCredibility: [
      "National Institutes of Health (NIH)",
      "United States Department of Agriculture (USDA)",
      "Harvard Medical School",
      "World Health Organization (WHO)",
    ],

    expertQuote: {
      quote:
        "Orange juice is liquid sunshine for your body—bursting with vitamin C, energizing nutrients, and immune-boosting properties to keep you vibrant and healthy.",
      name: "Dr. Sophia Allen",
      designation: "Wellness and Nutrition Expert",
    },

    faqs: [
      {
        question: "Can I drink this juice daily?",
        answer: "Yes, it's safe and highly nutritious for daily consumption.",
      },
      {
        question: "Is this juice suitable for children?",
        answer:
          "Yes, but reduce the ginger and black pepper quantity for children.",
      },
      {
        question: "Does this juice improve skin health?",
        answer:
          "Absolutely! With vitamin C and beta-carotene, it promotes a radiant and glowing complexion.",
      },
      {
        question: "Does this juice help with digestion?",
        answer:
          "Yes, the combination of lemon, ginger, and mint supports healthy digestion.",
      },
      {
        question: "Is this juice good for immunity?",
        answer:
          "Yes, it's packed with immune-boosting ingredients like oranges, ginger, and turmeric.",
      },
    ],

    gymQuestions: [
      {
        question: "Is this juice suitable for pre-workout?",
        answer:
          "Yes, it provides natural energy, reduces inflammation, and supports stamina.",
      },
      {
        question: "Can this juice aid post-workout recovery?",
        answer:
          "Yes, it replenishes electrolytes, reduces muscle inflammation, and promotes hydration.",
      },
      {
        question: "Does this juice improve endurance?",
        answer:
          "Yes, with its nutrient-rich ingredients, it enhances stamina and reduces fatigue.",
      },
    ],

    otherQuestions: [
      {
        question: "Can this juice be consumed during pregnancy?",
        answer:
          "Yes, but consult your healthcare provider for individual guidance.",
      },
      {
        question: "Does this juice detox the body?",
        answer:
          "Yes, it naturally supports detoxification through its hydrating and antioxidant-rich ingredients.",
      },
      {
        question: "Can this juice support weight management?",
        answer:
          "Yes, it's low in calories, boosts metabolism, and curbs unhealthy cravings.",
      },
    ],
  },
  {
    id: "03",
    name: "Pineapple Green Refresh",
    taste:
      "Sweet, tangy, and refreshing with a tropical pineapple burst, zesty lime, and a hint of ginger. Light, smooth, and energizing!",
    color: "#dfa909",
    fruit: "Pineapple",
    image:
      "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6133ce62c932cf59e0_6.png",

    details: [
      {
        ingredient: "Pineapple",
        image: "https://ik.imagekit.io/akiAfnan/Asher/pine-apple.png",
        nutrients: "Vitamin C, Bromelain, Manganese, Potassium, Fiber",
        benefits: [
          "Aids digestion",
          "Supports immunity",
          "Enhances skin health",
          "Reduces inflammation",
        ],
      },
      {
        ingredient: "Spinach",
        image: "https://ik.imagekit.io/akiAfnan/Asher/spinach.png",
        nutrients:
          "Iron, Vitamin K, Folate, Magnesium, Calcium, Vitamin A, Fiber",
        benefits: [
          "Enhances blood health",
          "Strengthens bones",
          "Boosts immunity",
        ],
      },
      {
        ingredient: "Coconut Water",
        image: "https://ik.imagekit.io/akiAfnan/Asher/coconut.png",
        nutrients: "Electrolytes, Potassium, Magnesium, Calcium",
        benefits: [
          "Rehydrates",
          "Restores electrolytes",
          "Supports heart health",
        ],
      },
      {
        ingredient: "Lime juice",
        image: "https://ik.imagekit.io/akiAfnan/Asher/lemon.png",
        nutrients: "Vitamin C, Citric Acid, Flavonoids, Potassium",
        benefits: [
          "Enhances immunity",
          "Supports digestion",
          "Promotes radiant skin",
        ],
      },
      {
        ingredient: "Chia Seeds",
        image: "https://ik.imagekit.io/akiAfnan/Asher/chia.png",
        nutrients: "Omega-3 Fatty Acids, Fiber, Magnesium, Calcium",
        benefits: [
          "Improves digestion",
          "Supports heart health",
          "Provides sustained energy",
        ],
      },
      {
        ingredient: "Ginger",
        image: "https://ik.imagekit.io/akiAfnan/Asher/ginger.png",
        nutrients: "Gingerol, Vitamin B6, Magnesium, Potassium",
        benefits: [
          "Reduces inflammation",
          "Aids digestion",
          "Supports immunity",
        ],
      },
      {
        ingredient: "Mint (Pudina)",
        image: "https://ik.imagekit.io/akiAfnan/Asher/pudina.png",
        nutrients: "Menthol, Vitamin A, Vitamin C, Iron",
        benefits: ["Freshens breath", "Soothes digestion", "Reduces stress"],
      },
      {
        ingredient: "Turmeric",
        image: "https://ik.imagekit.io/akiAfnan/Asher/turmeric.png",
        nutrients: "Curcumin, Potassium, Magnesium, Iron",
        benefits: [
          "Supports joint health",
          "Boosts immunity",
          "Has anti-inflammatory properties",
        ],
      },
      {
        ingredient: "Black Salt",
        image: "https://ik.imagekit.io/akiAfnan/Asher/blacksalt.png",
        nutrients: "Sodium, Potassium, Magnesium",
        benefits: [
          "Aids digestion",
          "Balances electrolytes",
          "Prevents bloating",
        ],
      },
    ],
    bodyReaction: [
      {
        duration: "1-3 Days",
        benefits:
          "Increased hydration, better digestion, and reduced bloating.",
      },
      {
        duration: "1 Week",
        benefits:
          "Noticeable improvements in energy levels and skin brightness.",
      },
      {
        duration: "2-3 Weeks",
        benefits:
          "Strengthened immunity, improved hair texture, and reduced inflammation.",
      },
      {
        duration: "1 Month",
        benefits:
          "Clearer skin, reduced joint discomfort, and enhanced stamina.",
      },
      {
        duration: "2-3 Months",
        benefits:
          "Long-term benefits such as improved metabolism, stronger hair, and a healthy glow.",
      },
    ],

    timings: [
      {
        duration: "Morning (Empty Stomach)",
        benefits:
          "Kickstarts metabolism, detoxifies the body, and replenishes hydration after sleep.",
      },
      {
        duration: "Pre-Workout (30 mins before)",
        benefits:
          "Provides natural energy, boosts stamina, and supports endurance during workouts.",
      },
      {
        duration: "Post-Workout (within 1 hour)",
        benefits:
          "Rehydrates, restores electrolytes, and aids in muscle recovery with anti-inflammatory properties.",
      },
      {
        duration: "Afternoon (Snack)",
        benefits:
          "A low-calorie option to curb hunger and avoid unhealthy snacking.",
      },
      {
        duration: "Evening (Pre-Dinner)",
        benefits: "Improves digestion and reduces bloating after a long day.",
      },
    ],

    ageCriteria: [
      {
        ageGroup: "Infants (Below 2)",
        recommendedServing: "Not recommended",
        notes:
          "Pineapple's acidity and strong digestive impact may not be suitable for infants.",
      },
      {
        ageGroup: "Children (2-12)",
        recommendedServing: "50-100 ml daily",
        notes:
          "Monitor for allergies or sensitivity (e.g., upset stomach or skin irritation).",
      },
      {
        ageGroup: "Teenagers (13-18)",
        recommendedServing: "150-200 ml daily",
        notes:
          "Supports energy, immunity, and skin health during growth spurts.",
      },
      {
        ageGroup: "Adults (19-60)",
        recommendedServing: "250-300 ml daily",
        notes: "Ideal for hydration, stamina, and overall wellness.",
      },
      {
        ageGroup: "Seniors (60+)",
        recommendedServing: "150-250 ml daily",
        notes:
          "Helps with digestion and joint health. Consult a doctor for conditions like diabetes or kidney issues.",
      },
      {
        ageGroup: "Pregnant Women",
        recommendedServing: "Moderation (100-150 ml)",
        notes:
          "Safe in small portions. Consult with a healthcare provider if unsure.",
      },
      {
        ageGroup: "Allergy Prone",
        recommendedServing: "Not recommended",
        notes:
          "Avoid if allergic to pineapple, ginger, or any other ingredient.",
      },
    ],

    expertQuote: {
      quote:
        "Pineapple juice is said to be more effective than cough syrups. Pineapples contain bromelain that is anti-inflammatory.",
      name: "Dr. Paul kasenene",
      designation: "Nutrition Consultant",
    },

    faqs: [
      {
        question: "Can I drink this juice daily?",
        answer: "Yes, it's safe to consume daily as part of a balanced diet.",
      },
      {
        question: "Is this juice suitable for children?",
        answer:
          "Yes, but adjust the portion size for children and consult with a paediatrician if needed.",
      },
      {
        question: "Can this juice help with weight loss?",
        answer:
          "It's low in calories and supports metabolism, making it a great addition to a weight management plan.",
      },
      {
        question: "Does this juice contain any added sugar or preservatives?",
        answer:
          "No, it's made with 100% natural ingredients and contains no added sugar or preservatives.",
      },
      {
        question: "Can I consume this juice if I have diabetes?",
        answer:
          "Yes, but consume in moderation due to the natural sugars in pineapple and coconut water.",
      },
      {
        question:
          "What makes this juice different from other products on the market?",
        answer:
          "It's a carefully curated blend of natural ingredients, focusing on holistic health benefits and crafted without artificial additives.",
      },
      {
        question: "Who should avoid this juice?",
        answer:
          "Those with pineapple allergies, sensitive stomachs, or kidney issues (due to high potassium).",
      },
      {
        question: "Does this juice cause sugar spikes?",
        answer:
          "No, it's balanced with ingredients like chia seeds and spinach, which slow down sugar absorption.",
      },
    ],

    gymQuestions: [
      {
        question: "Is this juice good for pre-workout?",
        answer:
          "Yes, the natural sugars, electrolytes, and antioxidants provide sustained energy and hydration.",
      },
      {
        question: "Can I drink this juice post-workout?",
        answer:
          "Absolutely! It replenishes electrolytes with coconut water, aids muscle recovery with ginger and turmeric, and supports hydration.",
      },
      {
        question: "Will this juice help build muscle?",
        answer:
          "Indirectly, yes. Ingredients like chia seeds and spinach provide protein and minerals for muscle health. Pair it with a protein source for optimal muscle-building results.",
      },
      {
        question: "How does it improve endurance?",
        answer:
          "Vitamins C and manganese boost energy production, while coconut water maintains electrolyte balance during intense sessions.",
      },
    ],

    otherQuestions: [
      {
        question: "Can this juice be consumed during pregnancy?",
        answer:
          "Yes, but consult with a healthcare provider, especially for ingredients like turmeric and chia seeds.",
      },
      {
        question: "Is this juice suitable for people with allergies?",
        answer:
          "It's nut-free and dairy-free but contains chia seeds. Please check for individual allergies.",
      },
      {
        question: "Does this juice detox the body?",
        answer:
          "Yes, it naturally supports detoxification with antioxidants and hydration.",
      },
      {
        question: "Can this juice help reduce bloating?",
        answer:
          "Absolutely! Ingredients like ginger, pineapple, and mint are excellent for reducing bloating.",
      },
    ],

    sourceCredibility: [
      "National Institutes of Health (NIH)",
      "United States Department of Agriculture (USDA) - FoodData Central",
      "World Health Organization (WHO)",
      "Academy of Nutrition and Dietetics (AND)",
    ],
  },
  {
    id: "04",
    taste:
      "Refreshing and mildly sweet with juicy watermelon and crisp cucumber, balanced by zesty lime. A hint of ginger and turmeric adds warmth, while basil seeds bring a fun, light texture!",
    color: "#e6150f",
    fruit: "Watermelon",
    name: "Watermelon Bliss",
    image:
      "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c68df5e94bdf6d8d08d_1.png",
    details: [
      {
        ingredient: "Watermelon",
        image: "https://ik.imagekit.io/akiAfnan/Asher/watermelon.png",
        nutrients: "Vitamin A, Vitamin C, Lycopene, Potassium, Magnesium",
        benefits: [
          "Hydrates the body",
          "Supports heart health",
          "Aids muscle recovery",
          "Promotes digestion",
        ],
      },
      {
        ingredient: "Cucumber",
        image: "https://ik.imagekit.io/akiAfnan/Asher/cucumber.png",
        nutrients: "Water, Vitamin K, Potassium, Magnesium",
        benefits: [
          "Provides hydration",
          "Supports kidney health",
          "May help regulate blood pressure",
        ],
      },
      {
        ingredient: "Lime juice",
        image: "https://ik.imagekit.io/akiAfnan/Asher/lemon.png",
        nutrients: "Vitamin C, Citric Acid, Potassium, Flavonoids",
        benefits: [
          "Supports immunity",
          "Enhances skin brightness",
          "Aids digestion",
        ],
      },
      {
        ingredient: "Mint (Pudina)",
        image: "https://ik.imagekit.io/akiAfnan/Asher/pudina.png",
        nutrients: "Menthol, Vitamin A, Vitamin C, Iron",
        benefits: [
          "Soothes digestion",
          "Refreshes breath",
          "May reduce stress",
        ],
      },
      {
        ingredient: "Turmeric",
        image: "https://ik.imagekit.io/akiAfnan/Asher/turmeric.png",
        nutrients: "Curcumin, Potassium, Iron",
        benefits: [
          "Supports joint health",
          "Strengthens immunity",
          "Has anti-inflammatory properties",
        ],
      },
      {
        ingredient: "Basil Seeds",
        nutrients: "Omega-3s, Fiber, Protein, Iron, Calcium",
        image: "https://ik.imagekit.io/akiAfnan/Asher/chia.png",
        benefits: [
          "Aids digestion",
          "Supports weight loss",
          "Regulates blood sugar",
        ],
      },
    ],
    bodyReaction: [
      {
        duration: "1-3 Days",
        benefits:
          "Improved hydration, reduced bloating, and refreshed energy levels.",
      },
      {
        duration: "1 Week",
        benefits:
          "Noticeable skin glow, enhanced digestion, and reduced inflammation.",
      },
      {
        duration: "2-3 Weeks",
        benefits:
          "Strengthened immunity, reduced muscle soreness, and better metabolism.",
      },
      {
        duration: "1 Month",
        benefits:
          "Consistent hydration levels, clearer skin, and improved heart health.",
      },
      {
        duration: "2-3 Months",
        benefits:
          "Long-lasting benefits like healthy weight management and improved stamina.",
      },
    ],

    timings: [
      {
        duration: "Morning",
        benefits:
          "Kickstarts metabolism, rehydrates after sleep, and boosts energy.",
      },
      {
        duration: "Pre-Workout",
        benefits:
          "Hydrates and fuels the body with natural sugars and electrolytes.",
      },
      {
        duration: "Post-Workout",
        benefits:
          "Aids muscle recovery, rehydrates, and reduces inflammation with turmeric and ginger.",
      },
      {
        duration: "Afternoon",
        benefits: "A refreshing option to curb hunger and cool down the body.",
      },
      {
        duration: "Evening",
        benefits: "Promotes digestion and keeps you light before dinner.",
      },
    ],

    ageCriteria: [
      {
        ageGroup: "Infants (Below 1)",
        recommendedServing: "Not recommended",
        notes:
          "Watermelon juice contains natural sugars and fiber that may not be suitable for infant digestion.",
      },
      {
        ageGroup: "Toddlers (1-2)",
        recommendedServing: "30-50 ml daily",
        notes: "Dilute with water (1:1 ratio) to reduce natural sugar",
      },
      {
        ageGroup: "Children (3-12)",
        recommendedServing: "50-150 ml daily",
        notes:
          "Great for hydration and digestion; monitor for allergies or sensitivities.",
      },
      {
        ageGroup: "Teenagers (13-18)",
        recommendedServing: "200-250 ml daily",
        notes: "Supports energy, hydration, and skin health.",
      },
      {
        ageGroup: "Adults (19-60)",
        recommendedServing: "250-300 ml daily",
        notes: "Ideal for hydration, detox, and overall wellness.",
      },
      {
        ageGroup: "Seniors (60+)",
        recommendedServing: "200-250 ml daily",
        notes:
          "Helps with hydration and digestion; consult a doctor if diabetic or on a low-potassium diet.",
      },
      {
        ageGroup: "Pregnant Women",
        recommendedServing: "Moderation (150-200 ml)",
        notes:
          "Safe for hydration and reducing swelling. Avoid excessive consumption.",
      },
      {
        ageGroup: "Allergy Prone",
        recommendedServing: "Not recommended",
        notes:
          "Avoid if allergic to watermelon or any added ingredients like mint or chia seeds.",
      },
    ],

    expertQuote: {
      quote:
        "Watermelon is 92% water, making it one of the most hydrating foods you can consume!",
      name: "Dr. Sarah Collins",
      designation: "Nutrition Expert",
    },

    faqs: [
      {
        question: "Can I drink this juice daily?",
        answer:
          "Yes, it's safe for daily consumption and supports hydration and overall wellness.",
      },
      {
        question: "Is this juice suitable for kids?",
        answer:
          "Absolutely! Adjust portions for children and omit turmeric if they dislike the flavor.",
      },
      {
        question: "Can it help with weight loss?",
        answer:
          "Yes, it's low in calories, high in fiber, and aids metabolism.",
      },
      {
        question: "Does this juice contain added sugar?",
        answer:
          "No, it's crafted with 100% natural ingredients and no added sugars or preservatives.",
      },
      {
        question: "Can this juice benefit skin health?",
        answer:
          "Yes, it improves skin hydration, reduces blemishes, and promotes a radiant glow.",
      },
      {
        question: "Who should avoid this juice?",
        answer:
          "1. Individuals with water retention issues should consult a doctor (due to high water content).\n2. Avoid if you're allergic to any of the ingredients.",
      },
      {
        question: "Does this juice cause sugar spikes?",
        answer:
          "No, watermelon's natural sugars are balanced by the fiber in chia seeds and the hydration from coconut water.",
      },
    ],

    gymQuestions: [
      {
        question: "Is this juice good as a pre-workout?",
        answer:
          "Yes, the natural sugars and hydration boost stamina and endurance.",
      },
      {
        question: "Can I drink this juice post-workout?",
        answer:
          "Absolutely! It aids recovery, reduces muscle soreness, and replenishes electrolytes.",
      },
      {
        question: "Does this juice help with muscle recovery?",
        answer:
          "Ingredients like ginger and turmeric reduce inflammation and promote recovery.",
      },
    ],

    otherQuestions: [
      {
        question: "Can pregnant women consume this juice?",
        answer:
          "Yes, but consult a healthcare provider, especially regarding ginger and turmeric.",
      },
      {
        question: "Does this juice detox the body?",
        answer:
          "Yes, it naturally supports detoxification with lemon, cucumber, and watermelon.",
      },
      {
        question: "Is this juice good for hydration?",
        answer:
          "Absolutely! Its high water content and electrolytes ensure optimal hydration.",
      },
    ],

    sourceCredibility: [
      "National Institutes of Health (NIH)",
      "United States Department of Agriculture (USDA)",
      "World Health Organization (WHO)",
      "Academy of Nutrition and Dietetics (AND)",
    ],
  },
  {
    id: "05",
    taste:
      "Tart and tangy with a bold burst of sour grape and blueberry, balanced by zesty lime and a subtle hint of ginger. Cinnamon and black salt add a unique, warming finish!",
    color: "#b14eff",
    fruit: "Grapeberry",
    name: "GrapeBerry Delight",
    image:
      "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af8b39bf98e4cbfe35b6f6_Untitled%20design%20(12)%20(1).png",
    details: [
      {
        ingredient: "Black Grapes",
        image: "https://ik.imagekit.io/akiAfnan/Asher/grapes.png",
        nutrients: "Resveratrol, Vitamin C, Vitamin K, Potassium, Antioxidants",
        benefits: [
          "Supports heart health",
          "Improves skin health",
          "Reduces inflammation",
        ],
      },
      {
        ingredient: "Blueberries",
        image: "https://ik.imagekit.io/akiAfnan/Asher/blueberries.png",
        nutrients: "Anthocyanins, Vitamin C, Vitamin K, Fiber, Antioxidants",
        benefits: [
          "Enhances brain function",
          "Supports eye health",
          "Strengthens immunity",
        ],
      },
      {
        ingredient: "Lime Juice",
        image: "https://ik.imagekit.io/akiAfnan/Asher/limejuice.png",
        nutrients: "Vitamin C, Citric Acid, Flavonoids, Potassium",
        benefits: [
          "Aids digestion",
          "Supports liver detoxification",
          "Promotes skin clarity",
        ],
      },
      {
        ingredient: "Ginger",
        image: "https://ik.imagekit.io/akiAfnan/Asher/ginger.png",
        nutrients: "Gingerol, Magnesium, Potassium, Vitamin B6",
        benefits: [
          "Reduces inflammation",
          "Supports digestion",
          "Boosts immunity",
        ],
      },
      {
        ingredient: "Mint (Pudina)",
        image: "https://ik.imagekit.io/akiAfnan/Asher/pudina.png",
        nutrients: "Menthol, Vitamin A, Vitamin C, Iron",
        benefits: ["Freshens breath", "Aids digestion", "Has a calming effect"],
      },
      {
        ingredient: "Chia Seeds",
        image: "https://ik.imagekit.io/akiAfnan/Asher/chia.png",
        nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium",
        benefits: [
          "Supports heart health",
          "Promotes digestive health",
          "Boosts energy",
        ],
      },
      {
        ingredient: "Black Salt",
        image: "https://ik.imagekit.io/akiAfnan/Asher/blacksalt.png",
        nutrients: "Sodium, Potassium, Iron, Magnesium, Sulfur",
        benefits: [
          "Balances electrolytes",
          "Aids digestion",
          "Supports hydration",
        ],
      },
      {
        ingredient: "Cinnamon Powder",
        image: "https://ik.imagekit.io/akiAfnan/Asher/cinnamon.png",
        nutrients: "Cinnamaldehyde, Calcium, Iron, Antioxidants",
        benefits: [
          "Helps regulate blood sugar",
          "Adds natural flavor",
          "Supports immunity",
        ],
      },
    ],
    bodyReaction: [
      {
        duration: "1-3 Days",
        benefits: "Improved hydration, better digestion, and reduced bloating.",
      },
      {
        duration: "1 Week",
        benefits:
          "Increased energy, enhanced skin brightness, and better focus.",
      },
      {
        duration: "2-3 Weeks",
        benefits:
          "Stronger immunity, improved heart health, and reduced inflammation.",
      },
      {
        duration: "1 Month",
        benefits:
          "Noticeable improvement in digestion, clearer skin, and enhanced metabolism.",
      },
      {
        duration: "2-3 Months",
        benefits:
          "Long-term benefits like better cardiovascular health, glowing skin, and a healthy gut.",
      },
    ],

    timings: [
      {
        duration: "Morning",
        benefits:
          "Kickstarts hydration, boosts energy, and provides essential antioxidants.",
      },
      {
        duration: "Pre-Workout",
        benefits:
          "Offers natural energy, enhances stamina, and reduces muscle fatigue.",
      },
      {
        duration: "Post-Workout",
        benefits:
          "Replenishes electrolytes, aids recovery, and reduces inflammation.",
      },
      {
        duration: "Evening Snack",
        benefits:
          "A healthy, refreshing option to curb hunger and maintain hydration.",
      },
    ],

    ageCriteria: [
      {
        ageGroup: "Infants (Below 1)",
        recommendedServing: "Not recommended",
        notes:
          "The juice contains strong flavors and added ingredients like cinnamon and chia seeds.",
      },
      {
        ageGroup: "Toddlers (1-2)",
        recommendedServing: "20-30 ml (diluted)",
        notes:
          "Introduce in small, diluted portions; avoid if allergic to berries or grapes.",
      },
      {
        ageGroup: "Children (3-12)",
        recommendedServing: "50-100 ml",
        notes:
          "Safe and beneficial for growing children due to vitamins and antioxidants.",
      },
      {
        ageGroup: "Teenagers (13-18)",
        recommendedServing: "150-200 ml",
        notes:
          "Supports energy, focus, and overall health, especially for active teenagers.",
      },
      {
        ageGroup: "Adults (19-60)",
        recommendedServing: "200-250 ml",
        notes:
          "Ideal for boosting energy, reducing inflammation, and supporting heart health.",
      },
      {
        ageGroup: "Seniors (60+)",
        recommendedServing: "150-200 ml",
        notes:
          "Provides antioxidants and supports memory and heart health; consume with caution if diabetic.",
      },
      {
        ageGroup: "Pregnant Women",
        recommendedServing: "Moderation (150-200 ml)",
        notes:
          "Safe and rich in vitamins; consult a healthcare provider if concerned about sugar content.",
      },
      {
        ageGroup: "Allergy Prone",
        recommendedServing: "Not recommended",
        notes:
          "Avoid if allergic to grapes, berries, or added ingredients like chia seeds or cinnamon.",
      },
    ],

    sourceCredibility: [
      "National Institutes of Health (NIH)",
      "United States Department of Agriculture (USDA)",
      "Academy of Nutrition and Dietetics (AND)",
      "Harvard Medical School",
    ],

    expertQuote: {
      quote:
        "Grape and blueberry juice is a powerhouse of antioxidants and natural vitality—supporting heart health, enhancing brain function, and giving your skin a radiant glow.",
      name: "Dr. James Whitman",
      designation: "Functional Nutrition Expert",
    },

    faqs: [
      {
        question: "Can I drink this juice daily?",
        answer: "Yes, it's safe and beneficial to include in your daily diet.",
      },
      {
        question: "Is this juice suitable for children?",
        answer:
          "Yes, but adjust the portion size and consult a pediatrician if necessary.",
      },
      {
        question: "Does this juice help with weight management?",
        answer:
          "Yes, it's low in calories, supports metabolism, and curbs unhealthy cravings.",
      },
      {
        question: "Does this juice contain added sugar?",
        answer:
          "No, it's made with natural ingredients and contains no added sugar.",
      },
      {
        question: "Can this juice improve skin health?",
        answer:
          "Absolutely! The antioxidants in grapes and blueberries promote a radiant complexion.",
      },
      {
        question: "Who should avoid this juice?",
        answer:
          "Individuals with blood sugar sensitivity should monitor consumption (grapes are naturally sweet). Those allergic to grapes or any added ingredients should avoid it.",
      },
      {
        question: "Does this juice cause sugar spikes?",
        answer:
          "No, the natural sugars in grapes are balanced by fiber from chia seeds and cinnamon, which regulates blood sugar.",
      },
    ],

    gymQuestions: [
      {
        question: "Is this juice suitable for pre-workout?",
        answer:
          "Yes, it provides a natural energy boost and keeps you hydrated.",
      },
      {
        question: "Can this juice aid post-workout recovery?",
        answer:
          "Yes, the blend of antioxidants and electrolytes supports muscle recovery and reduces soreness.",
      },
      {
        question: "Does this juice help improve endurance?",
        answer:
          "Yes, the vitamins and antioxidants improve stamina and reduce fatigue during workouts.",
      },
    ],

    otherQuestions: [
      {
        question: "Can this juice be consumed during pregnancy?",
        answer:
          "Yes, but consult your healthcare provider for optimal portion sizes.",
      },
      {
        question: "Does this juice detox the body?",
        answer:
          "Yes, it supports natural detoxification with its hydrating and antioxidant-rich ingredients.",
      },
      {
        question: "Can this juice help with digestion?",
        answer:
          "Yes, the lime juice, ginger, and mint work together to enhance digestion and reduce bloating.",
      },
    ],
  },
  {
    id: "06",
    taste:
      "Bold and fiery with a zesty ginger kick, balanced by tangy lime and a touch of honeyed sweetness. A smooth, invigorating blend with warm turmeric spice and a hint of black pepper heat!",
    color: "#bc8d03",
    fruit: "Ginger",
    name: "G3 Zest",
    image:
      "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6ca2f291522ffd0d37_2.png",
    details: [
      {
        ingredient: "Ginger",
        image: "https://ik.imagekit.io/akiAfnan/Asher/ginger.png",
        nutrients: "Gingerol, Vitamin B6, Magnesium, Potassium, Zinc",
        benefits: [
          "Supports immunity",
          "Reduces inflammation",
          "Aids digestion",
          "Relieves nausea",
          "Enhances cognitive function",
        ],
      },
      {
        ingredient: "Lime juice",
        image: "https://ik.imagekit.io/akiAfnan/Asher/lemon.png",
        nutrients: "Vitamin C, Citric Acid, Potassium, Flavonoids",
        benefits: [
          "Supports liver detoxification",
          "Supports skin health",
          "Boosts immunity",
          "Aids digestion",
        ],
      },
      {
        ingredient: "Coconut Water",
        image: "https://ik.imagekit.io/akiAfnan/Asher/coconut.png",
        nutrients: "Electrolytes (Potassium, Magnesium, Calcium), Vitamin C",
        benefits: [
          "Hydrates",
          "Replenishes electrolytes",
          "Supports heart health",
          "Aids post-exercise recovery",
        ],
      },
      {
        ingredient: "Honey",
        image: "https://ik.imagekit.io/akiAfnan/Asher/honey.png",
        nutrients: "Antioxidants, Natural Sugars, Vitamins, Minerals",
        benefits: [
          "Provides natural energy",
          "Soothes the throat",
          "Supports immunity",
          "Has antibacterial properties",
        ],
      },
      {
        ingredient: "Turmeric",
        image: "https://ik.imagekit.io/akiAfnan/Asher/turmeric.png",
        nutrients: "Curcumin, Vitamin C, Potassium, Magnesium, Iron",
        benefits: [
          "Reduces inflammation",
          "Supports liver detoxification",
          "Promotes joint health",
        ],
      },
      {
        ingredient: "Black Pepper",
        image: "https://ik.imagekit.io/akiAfnan/Asher/blacksalt.png",
        nutrients: "Piperine, Iron, Manganese, Potassium, Vitamin K",
        benefits: [
          "Enhances nutrient absorption (especially curcumin)",
          "Boosts metabolism",
          "Aids digestion",
        ],
      },
      {
        ingredient: "Water",
        image: "https://ik.imagekit.io/akiAfnan/Asher/water.png",
        nutrients: "Essential Hydration",
        benefits: [
          "Maintains fluid balance",
          "Supports digestion",
          "Aids nutrient absorption",
        ],
      },
    ],
    bodyReaction: [
      {
        duration: "1-3 Days",
        benefits:
          "Improved digestion, reduced inflammation, and better hydration.",
      },
      {
        duration: "1 Week",
        benefits: "Boosted immunity, enhanced energy, and reduced bloating.",
      },
      {
        duration: "2-3 Weeks",
        benefits:
          "Clearer skin, stronger metabolism, and reduced joint discomfort.",
      },
      {
        duration: "1 Month",
        benefits:
          "Noticeable anti-inflammatory effects, improved digestion, and sustained energy levels.",
      },
      {
        duration: "2-3 Months",
        benefits:
          "Long-term benefits such as a stronger immune system, detoxified liver, and healthy glow.",
      },
    ],

    timings: [
      {
        duration: "Morning",
        benefits:
          "Detoxifies the body, boosts metabolism, and provides an energizing start to the day.",
      },
      {
        duration: "Pre-Workout",
        benefits:
          "Enhances stamina, reduces fatigue, and supports endurance during exercise.",
      },
      {
        duration: "Afternoon",
        benefits: "Recharges energy levels and combats midday sluggishness.",
      },
      {
        duration: "Post-Meal",
        benefits: "Aids digestion and reduces bloating.",
      },
    ],

    ageCriteria: [
      {
        ageGroup: "Infants (Below 1)",
        recommendedServing: "Not recommended",
        notes:
          "Ginger is too potent for infant digestion and may cause irritation.",
      },
      {
        ageGroup: "Toddlers (1-2)",
        recommendedServing: "Not recommended",
        notes:
          "The concentrated ginger flavor may be too strong for this age group.",
      },
      {
        ageGroup: "Children (3-12)",
        recommendedServing: "10-20 ml (diluted)",
        notes:
          "Dilute with water or juice to reduce potency; introduce gradually.",
      },
      {
        ageGroup: "Teenagers (13-18)",
        recommendedServing: "30-40 ml",
        notes:
          "Provides an immunity boost and helps digestion; ideal during seasonal benefits.",
      },
      {
        ageGroup: "Adults (19-60)",
        recommendedServing: "40-50 ml",
        notes:
          "Perfect for boosting metabolism, reducing inflammation, and supporting immunity.",
      },
      {
        ageGroup: "Seniors (60+)",
        recommendedServing: "30-40 ml",
        notes:
          "Beneficial for joint health and immunity; consume with caution if on blood-thinning medication.",
      },
      {
        ageGroup: "Pregnant Women",
        recommendedServing: "Moderation (20-30 ml)",
        notes:
          "Can alleviate nausea but should be consumed in limited quantities. Consult a healthcare provider.",
      },
      {
        ageGroup: "Allergy Prone",
        recommendedServing: "Not recommended",
        notes:
          "Avoid if allergic to ginger, honey, or any added ingredients like turmeric.",
      },
    ],

    sourceCredibility: [
      "National Institutes of Health (NIH)",
      "United States Department of Agriculture (USDA)",
      "World Health Organization (WHO)",
      "Academy of Nutrition and Dietetics (AND)",
    ],

    expertQuote: {
      quote:
        "A ginger shot is nature's ultimate health elixir—packed with powerful antioxidants, anti-inflammatory compounds, and immunity boosters to fuel your body and mind every day.",
      name: "Dr. Emily Carter",
      designation: "Nutrition Specialist",
    },

    faqs: [
      {
        question: "Can I drink ginger shots daily?",
        answer: "Yes, it's safe to consume daily as part of a balanced diet.",
      },
      {
        question: "Are ginger shots suitable for children?",
        answer:
          "Yes, but adjust the portion size and consult with a pediatrician if needed.",
      },
      {
        question: "Can ginger shots help with weight loss?",
        answer: "Yes, they boost metabolism and help control appetite.",
      },
      {
        question: "Do ginger shots contain added sugar?",
        answer: "No, they are naturally sweetened with honey.",
      },
      {
        question: "Can I drink ginger shots if I have acid reflux?",
        answer:
          "Consume in moderation, as ginger can sometimes trigger symptoms in sensitive individuals.",
      },
      {
        question: "Who should avoid ginger shots?",
        answer:
          "People with ulcers or sensitive stomachs should consume cautiously. Avoid if allergic to any ingredients or advised against by a doctor.",
      },
      {
        question: "Does it cause acidity or stomach issues?",
        answer:
          "In moderate amounts, no. However, excessive consumption may irritate sensitive stomachs.",
      },
    ],

    gymQuestions: [
      {
        question: "Are ginger shots good for pre-workout?",
        answer:
          "Yes, they provide natural energy and reduce inflammation, aiding performance.",
      },
      {
        question: "Can ginger shots aid recovery after workouts?",
        answer:
          "Absolutely! Turmeric and ginger reduce muscle soreness and inflammation.",
      },
    ],

    otherQuestions: [
      {
        question: "Can ginger shots be consumed during pregnancy?",
        answer:
          "Yes, but consult with a healthcare provider for optimal portion sizes.",
      },
      {
        question: "Do ginger shots detox the body?",
        answer:
          "Yes, they naturally support liver detoxification and enhance hydration.",
      },
      {
        question: "Can ginger shots help with cold and flu?",
        answer: "Yes, they strengthen immunity and soothe throat discomfort.",
      },
    ],
  },
];

export default products;
