const products = [
    {
        id: "01",
        name: "Pineapple Green Refresh",
        tagline: "A sip of pineapple Green Refresh is a tropical burst of wellness.",
        color: "#dfa909",
        fruit: "Pineapple",
        image: "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6133ce62c932cf59e0_6.png",

        details: [
            {
                ingredient: "Pineapple",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/pine-apple.png",
                nutrients: "Vitamin C, Bromelain, Manganese, Potassium, Fiber, Beta-carotene",
                benefits: {
                    hair: "Reduces dandruff, strengthens hair, and lowers hair fall",
                    skin: "Promotes glowing skin, reduces wrinkles, and heals acne",
                    digestion: "Improves digestion, reduces bloating, and relieves constipation",
                    energy: "Boosts stamina and reduces fatigue",
                    other: "Supports fertility"
                }
            },
            {
                ingredient: "Cucumber",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/cucumber.png",
                nutrients: "Water, Vitamin K, Potassium, Magnesium, Silica",
                benefits: {
                    skin: "Hydrates, soothes irritation, and brightens complexion",
                    eyes: "Reduces puffiness and dark circles",
                    kidneys: "Detoxifies and prevents kidney stones",
                    heart: "Lowers blood pressure and improves circulation"
                }
            },
            {
                ingredient: "Spinach",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/spinach.png",
                nutrients: "Iron, Vitamin K, Folate, Magnesium, Calcium, Vitamin A, Vitamin C, Fiber",
                benefits: {
                    brain: "Enhances mental focus and reduces cognitive decline",
                    bones: "Strengthens bones and teeth (high calcium)",
                    blood: "Improves blood oxygenation (iron)",
                    immunity: "Boosts defense mechanisms and prevents infections"
                }
            },
            {
                ingredient: "Coconut Water",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/coconut.png",
                nutrients: "Electrolytes, Potassium, Magnesium, Calcium, Vitamin C, Sodium",
                benefits: {
                    skin: "Hydrates and reduces signs of aging",
                    muscles: "Relieves cramps and restores electrolyte balance",
                    heart: "Lowers cholesterol and regulates blood pressure",
                    energy: "Refreshes and recharges after physical activity"
                }
            },
            {
                ingredient: "Lemon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/lemon.png",
                nutrients: "Vitamin C, Citric Acid, Potassium, Flavonoids, Calcium",
                benefits: {
                    skin: "Reduces dark spots and acne",
                    liver: "Detoxifies and promotes healthy liver function",
                    immunity: "Enhances resistance to colds and flu",
                    weight: "Supports fat burning and appetite control"
                }
            },
            {
                ingredient: "Chia Seeds",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/chia.png",
                nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium, Zinc, Antioxidants",
                benefits: {
                    hair: "Strengthens follicles and reduces breakage",
                    skin: "Promotes elasticity and reduces dryness",
                    digestion: "Improves gut health and prevents constipation",
                    heart: "Lowers cholesterol and improves heart health"
                }
            },
            {
                ingredient: "Ginger",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/ginger.png",
                nutrients: "Gingerol, Vitamin B6, Magnesium, Potassium, Zinc",
                benefits: {
                    brain: "Enhances memory and focus",
                    digestion: "Relieves nausea and improves digestion",
                    joints: "Reduces inflammation and pain",
                    immunity: "Fights infections and strengthens the immune system"
                }
            },
            {
                ingredient: "Pudina (Mint)",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/pudina.png",
                nutrients: "Menthol, Vitamin A, Vitamin C, Iron, Magnesium",
                benefits: {
                    breath: "Freshens breath and reduces bad odor",
                    stomach: "Soothes indigestion and prevents bloating",
                    skin: "Calms irritation and acne",
                    mind: "Improves focus and reduces stress"
                }
            },
            {
                ingredient: "Turmeric",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/turmeric.png",
                nutrients: "Curcumin, Vitamin C, Potassium, Magnesium, Iron",
                benefits: {
                    skin: "Reduces acne scars and brightens complexion",
                    joints: "Alleviates arthritis and inflammation",
                    immunity: "Strengthens the immune system and fights infections",
                    liver: "Promotes detoxification"
                }
            },
            {
                ingredient: "Black Salt",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/blacksalt.png",
                nutrients: "Sodium, Potassium, Magnesium, Iron, Sulfur",
                benefits: {
                    digestion: "Enhances metabolism and reduces gas",
                    skin: "Detoxifies and balances oil production",
                    electrolytes: "Replenishes salts after sweating"
                }
            }
        ],

        bodyReaction: [
            {
                duration: "1-3 Days",
                benefits: "Increased hydration, better digestion, and reduced bloating."
            },
            {
                duration: "1 Week",
                benefits: "Noticeable improvements in energy levels and skin brightness."
            },
            {
                duration: "2-3 Weeks",
                benefits: "Strengthened immunity, improved hair texture, and reduced inflammation."
            },
            {
                duration: "1 Month",
                benefits: "Clearer skin, reduced joint discomfort, and enhanced stamina."
            },
            {
                duration: "2-3 Months",
                benefits: "Long-term benefits such as improved metabolism, stronger hair, and a healthy glow."
            }
        ],

        timings: [
            {
                duration: "Morning (Empty Stomach)",
                benefits: "Kickstarts metabolism, detoxifies the body, and replenishes hydration after sleep."
            },
            {
                duration: "Pre-Workout (30 mins before)",
                benefits: "Provides natural energy, boosts stamina, and supports endurance during workouts."
            },
            {
                duration: "Post-Workout (within 1 hour)",
                benefits: "Rehydrates, restores electrolytes, and aids in muscle recovery with anti-inflammatory properties."
            },
            {
                duration: "Afternoon (Snack)",
                benefits: "A low-calorie option to curb hunger and avoid unhealthy snacking."
            },
            {
                duration: "Evening (Pre-Dinner)",
                benefits: "Improves digestion and reduces bloating after a long day."
            }
        ],

        ageCriteria: [
            {
                ageGroup: "Infants (Below 2)",
                recommendedServing: "Not recommended",
                notes: "Pineapple's acidity and strong digestive impact may not be suitable for infants."
            },
            {
                ageGroup: "Children (2-12)",
                recommendedServing: "50-100 ml daily",
                notes: "Monitor for allergies or sensitivity (e.g., upset stomach or skin irritation)."
            },
            {
                ageGroup: "Teenagers (13-18)",
                recommendedServing: "150-200 ml daily",
                notes: "Supports energy, immunity, and skin health during growth spurts."
            },
            {
                ageGroup: "Adults (19-60)",
                recommendedServing: "250-300 ml daily",
                notes: "Ideal for hydration, stamina, and overall wellness."
            },
            {
                ageGroup: "Seniors (60+)",
                recommendedServing: "150-250 ml daily",
                notes: "Helps with digestion and joint health. Consult a doctor for conditions like diabetes or kidney issues."
            },
            {
                ageGroup: "Pregnant Women",
                recommendedServing: "Moderation (100-150 ml)",
                notes: "Safe in small portions. Consult with a healthcare provider if unsure."
            },
            {
                ageGroup: "Allergy Prone",
                recommendedServing: "Not recommended",
                notes: "Avoid if allergic to pineapple, ginger, or any other ingredient."
            }
        ],

        expertQuote: {
            quote: "Pineapple juice is said to be more effective than cough syrups. Pineapples contain bromelain that is anti-inflammatory.",
            name: "Dr. Paul kasenene",
            designation: "Nutrition Consultant"
        },

        faqs: [
            {
                question: "Can I drink this juice daily?",
                answer: "Yes, it's safe to consume daily as part of a balanced diet."
            },
            {
                question: "Is this juice suitable for children?",
                answer: "Yes, but adjust the portion size for children and consult with a paediatrician if needed."
            },
            {
                question: "Can this juice help with weight loss?",
                answer: "It's low in calories and supports metabolism, making it a great addition to a weight management plan."
            },
            {
                question: "Does this juice contain any added sugar or preservatives?",
                answer: "No, it's made with 100% natural ingredients and contains no added sugar or preservatives."
            },
            {
                question: "Can I consume this juice if I have diabetes?",
                answer: "Yes, but consume in moderation due to the natural sugars in pineapple and coconut water."
            },
            {
                question: "What makes this juice different from other products on the market?",
                answer: "It's a carefully curated blend of natural ingredients, focusing on holistic health benefits and crafted without artificial additives."
            },
            {
                question: "Who should avoid this juice?",
                answer: "Those with pineapple allergies, sensitive stomachs, or kidney issues (due to high potassium)."
            },
            {
                question: "Does this juice cause sugar spikes?",
                answer: "No, it's balanced with ingredients like chia seeds and spinach, which slow down sugar absorption."
            }
        ],

        gymQuestions: [
            {
                question: "Is this juice good for pre-workout?",
                answer: "Yes, the natural sugars, electrolytes, and antioxidants provide sustained energy and hydration."
            },
            {
                question: "Can I drink this juice post-workout?",
                answer: "Absolutely! It replenishes electrolytes with coconut water, aids muscle recovery with ginger and turmeric, and supports hydration."
            },
            {
                question: "Will this juice help build muscle?",
                answer: "Indirectly, yes. Ingredients like chia seeds and spinach provide protein and minerals for muscle health. Pair it with a protein source for optimal muscle-building results."
            },
            {
                question: "How does it improve endurance?",
                answer: "Vitamins C and manganese boost energy production, while coconut water maintains electrolyte balance during intense sessions."
            }
        ],

        otherQuestions: [
            {
                question: "Can this juice be consumed during pregnancy?",
                answer: "Yes, but consult with a healthcare provider, especially for ingredients like turmeric and chia seeds."
            },
            {
                question: "Is this juice suitable for people with allergies?",
                answer: "It's nut-free and dairy-free but contains chia seeds. Please check for individual allergies."
            },
            {
                question: "Does this juice detox the body?",
                answer: "Yes, it naturally supports detoxification with antioxidants and hydration."
            },
            {
                question: "Can this juice help reduce bloating?",
                answer: "Absolutely! Ingredients like ginger, pineapple, and mint are excellent for reducing bloating."
            }
        ],

        sourceCredibility: [
            "National Institutes of Health (NIH)",
            "United States Department of Agriculture (USDA) - FoodData Central",
            "World Health Organization (WHO)",
            "Academy of Nutrition and Dietetics (AND)"
        ],
    },
    {
        id: "02",
        tagline: "Refresh your soul, one hydrating sip at a time.",
        color: "#e6150f",
        fruit: "Watermelon",
        name: "Watermelon Bliss",
        image: "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c68df5e94bdf6d8d08d_1.png",

        details: [
            {
                ingredient: "Watermelon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/watermelon.png",
                nutrients: "Vitamin A, Vitamin C, Lycopene, Potassium, Magnesium",
                benefits: {
                    skin: "Hydrates, reduces sun damage, and promotes a radiant glow",
                    heart: "Reduces blood pressure and improves circulation",
                    muscles: "Relieves soreness post-exercise",
                    digestion: "Enhances hydration and prevents constipation"
                }
            },
            {
                ingredient: "Cucumber",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/cucumber.png",
                nutrients: "Water, Vitamin K, Potassium, Magnesium, Silica",
                benefits: {
                    skin: "Hydrates and soothes irritation",
                    kidneys: "Prevents stones and detoxifies",
                    heart: "Lowers blood pressure"
                }
            },
            {
                ingredient: "Lemon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/lemon.png",
                nutrients: "Vitamin C, Citric Acid, Potassium, Flavonoids",
                benefits: {
                    immunity: "Fights colds and flu",
                    skin: "Brightens complexion and reduces blemishes",
                    liver: "Supports detoxification"
                }
            },
            {
                ingredient: "Chia Seeds",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/chia.png",
                nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium, Zinc, Antioxidants",
                benefits: {
                    hair: "Reduces breakage and strengthens roots",
                    skin: "Improves elasticity",
                    digestion: "Promotes gut health"
                }
            },
            {
                ingredient: "Ginger",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/ginger.png",
                nutrients: "Gingerol, Vitamin B6, Magnesium, Potassium",
                benefits: {
                    digestion: "Relieves nausea and boosts digestion",
                    joints: "Reduces inflammation",
                    immunity: "Fights infections"
                }
            },
            {
                ingredient: "Pudina (Mint)",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/pudina.png",
                nutrients: "Menthol, Vitamin A, Vitamin C, Iron",
                benefits: {
                    breath: "Freshens and reduces bad odor",
                    stomach: "Soothes indigestion",
                    skin: "Calms irritation"
                }
            },
            {
                ingredient: "Turmeric",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/turmeric.png",
                nutrients: "Curcumin, Vitamin C, Potassium, Iron",
                benefits: {
                    skin: "Reduces acne scars and enhances glow",
                    joints: "Relieves inflammation",
                    immunity: "Strengthens defense mechanisms"
                }
            }
        ],

        bodyReaction: [
            {
                duration: "1-3 Days",
                benefits: "Improved hydration, reduced bloating, and refreshed energy levels."
            },
            {
                duration: "1 Week",
                benefits: "Noticeable skin glow, enhanced digestion, and reduced inflammation."
            },
            {
                duration: "2-3 Weeks",
                benefits: "Strengthened immunity, reduced muscle soreness, and better metabolism."
            },
            {
                duration: "1 Month",
                benefits: "Consistent hydration levels, clearer skin, and improved heart health."
            },
            {
                duration: "2-3 Months",
                benefits: "Long-lasting benefits like healthy weight management and improved stamina."
            }
        ],

        timings: [
            {
                duration: "Morning",
                benefits: "Kickstarts metabolism, rehydrates after sleep, and boosts energy."
            },
            {
                duration: "Pre-Workout",
                benefits: "Hydrates and fuels the body with natural sugars and electrolytes."
            },
            {
                duration: "Post-Workout",
                benefits: "Aids muscle recovery, rehydrates, and reduces inflammation with turmeric and ginger."
            },
            {
                duration: "Afternoon",
                benefits: "A refreshing option to curb hunger and cool down the body."
            },
            {
                duration: "Evening",
                benefits: "Promotes digestion and keeps you light before dinner."
            }
        ],

        ageCriteria: [
            {
                ageGroup: "Infants (Below 1)",
                recommendedServing: "Not recommended",
                notes: "Watermelon juice contains natural sugars and fiber that may not be suitable for infant digestion."
            },
            {
                ageGroup: "Toddlers (1-2)",
                recommendedServing: "30-50 ml daily",
                notes: "Dilute with water (1:1 ratio) to reduce natural sugar"
            },
            {
                ageGroup: "Children (3-12)",
                recommendedServing: "50-150 ml daily",
                notes: "Great for hydration and digestion; monitor for allergies or sensitivities."
            },
            {
                ageGroup: "Teenagers (13-18)",
                recommendedServing: "200-250 ml daily",
                notes: "Supports energy, hydration, and skin health."
            },
            {
                ageGroup: "Adults (19-60)",
                recommendedServing: "250-300 ml daily",
                notes: "Ideal for hydration, detox, and overall wellness."
            },
            {
                ageGroup: "Seniors (60+)",
                recommendedServing: "200-250 ml daily",
                notes: "Helps with hydration and digestion; consult a doctor if diabetic or on a low-potassium diet."
            },
            {
                ageGroup: "Pregnant Women",
                recommendedServing: "Moderation (150-200 ml)",
                notes: "Safe for hydration and reducing swelling. Avoid excessive consumption."
            },
            {
                ageGroup: "Allergy Prone",
                recommendedServing: "Not recommended",
                notes: "Avoid if allergic to watermelon or any added ingredients like mint or chia seeds."
            }
        ],

        expertQuote: {
            quote: "Watermelon is 92% water, making it one of the most hydrating foods you can consume!",
            name: "Dr. Sarah Collins",
            designation: "Nutrition Expert"
        },

        faqs: [
            {
                question: "Can I drink this juice daily?",
                answer: "Yes, it's safe for daily consumption and supports hydration and overall wellness."
            },
            {
                question: "Is this juice suitable for kids?",
                answer: "Absolutely! Adjust portions for children and omit turmeric if they dislike the flavor."
            },
            {
                question: "Can it help with weight loss?",
                answer: "Yes, it's low in calories, high in fiber, and aids metabolism."
            },
            {
                question: "Does this juice contain added sugar?",
                answer: "No, it's crafted with 100% natural ingredients and no added sugars or preservatives."
            },
            {
                question: "Can this juice benefit skin health?",
                answer: "Yes, it improves skin hydration, reduces blemishes, and promotes a radiant glow."
            },
            {
                question: "Who should avoid this juice?",
                answer: "1. Individuals with water retention issues should consult a doctor (due to high water content).\n2. Avoid if you're allergic to any of the ingredients."
            },
            {
                question: "Does this juice cause sugar spikes?",
                answer: "No, watermelon's natural sugars are balanced by the fiber in chia seeds and the hydration from coconut water."
            }
        ],

        gymQuestions: [
            {
                question: "Is this juice good as a pre-workout?",
                answer: "Yes, the natural sugars and hydration boost stamina and endurance."
            },
            {
                question: "Can I drink this juice post-workout?",
                answer: "Absolutely! It aids recovery, reduces muscle soreness, and replenishes electrolytes."
            },
            {
                question: "Does this juice help with muscle recovery?",
                answer: "Ingredients like ginger and turmeric reduce inflammation and promote recovery."
            }
        ],

        otherQuestions: [
            {
                question: "Can pregnant women consume this juice?",
                answer: "Yes, but consult a healthcare provider, especially regarding ginger and turmeric."
            },
            {
                question: "Does this juice detox the body?",
                answer: "Yes, it naturally supports detoxification with lemon, cucumber, and watermelon."
            },
            {
                question: "Is this juice good for hydration?",
                answer: "Absolutely! Its high water content and electrolytes ensure optimal hydration."
            }
        ],

        sourceCredibility: [
            "National Institutes of Health (NIH)",
            "United States Department of Agriculture (USDA)",
            "World Health Organization (WHO)",
            "Academy of Nutrition and Dietetics (AND)"
        ],
    },
    {
        id: "03",
        tagline: "A concentrated boost of vitality in every shot.",
        color: "#bc8d03",
        fruit: "Ginger",
        name: "Ginger Shots",
        image: "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6ca2f291522ffd0d37_2.png",

        details: [
            {
                ingredient: "Ginger",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/ginger.png",
                nutrients: "Gingerol, Vitamin B6, Magnesium, Potassium, Zinc",
                benefits: {
                    combined: "Boosts immunity, reduces inflammation, aids digestion, relieves nausea, and enhances focus."
                }
            },
            {
                ingredient: "Lemon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/lemon.png",
                nutrients: "Vitamin C, Citric Acid, Potassium, Flavonoids",
                benefits: {
                    combined: "Detoxifies the body, improves skin health, enhances immunity, and supports weight management."
                }
            },
            {
                ingredient: "Coconut Water",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/coconut.png",
                nutrients: "Electrolytes, Potassium, Magnesium, Calcium, Vitamin C",
                benefits: {
                    combined: "Rehydrates, replenishes electrolytes, lowers blood pressure, and refreshes after activity."
                }
            },
            {
                ingredient: "Normal Water",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/water.png",
                nutrients: "Essential Hydration",
                benefits: {
                    combined: "Maintains overall hydration, supports body functions, and aids nutrient absorption."
                }
            },
            {
                ingredient: "Honey",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/honey.png",
                nutrients: "Antioxidants, Natural Sugars, Vitamins, Minerals",
                benefits: {
                    combined: "Provides natural energy, soothes the throat, supports immunity, and acts as an antibacterial."
                }
            },
            {
                ingredient: "Turmeric",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/turmeric.png",
                nutrients: "Curcumin, Vitamin C, Potassium, Magnesium, Iron",
                benefits: {
                    combined: "Reduces inflammation, detoxifies the liver, and enhances skin health."
                }
            },
            {
                ingredient: "Black Pepper",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/blacksalt.png",
                nutrients: "Piperine, Iron, Manganese, Potassium, Vitamin K",
                benefits: {
                    combined: "Enhances nutrient absorption, boosts metabolism, and supports digestion."
                }
            }
        ],

        bodyReaction: [
            {
                duration: "1-3 Days",
                benefits: "Improved digestion, reduced inflammation, and better hydration."
            },
            {
                duration: "1 Week",
                benefits: "Boosted immunity, enhanced energy, and reduced bloating."
            },
            {
                duration: "2-3 Weeks",
                benefits: "Clearer skin, stronger metabolism, and reduced joint discomfort."
            },
            {
                duration: "1 Month",
                benefits: "Noticeable anti-inflammatory effects, improved digestion, and sustained energy levels."
            },
            {
                duration: "2-3 Months",
                benefits: "Long-term benefits such as a stronger immune system, detoxified liver, and healthy glow."
            }
        ],

        timings: [
            {
                duration: "Morning",
                benefits: "Detoxifies the body, boosts metabolism, and provides an energizing start to the day."
            },
            {
                duration: "Pre-Workout",
                benefits: "Enhances stamina, reduces fatigue, and supports endurance during exercise."
            },
            {
                duration: "Afternoon",
                benefits: "Recharges energy levels and combats midday sluggishness."
            },
            {
                duration: "Post-Meal",
                benefits: "Aids digestion and reduces bloating."
            }
        ],

        ageCriteria: [
            {
                ageGroup: "Infants (Below 1)",
                recommendedServing: "Not recommended",
                notes: "Ginger is too potent for infant digestion and may cause irritation."
            },
            {
                ageGroup: "Toddlers (1-2)",
                recommendedServing: "Not recommended",
                notes: "The concentrated ginger flavor may be too strong for this age group."
            },
            {
                ageGroup: "Children (3-12)",
                recommendedServing: "10-20 ml (diluted)",
                notes: "Dilute with water or juice to reduce potency; introduce gradually."
            },
            {
                ageGroup: "Teenagers (13-18)",
                recommendedServing: "30-40 ml",
                notes: "Provides an immunity boost and helps digestion; ideal during seasonal benefits."
            },
            {
                ageGroup: "Adults (19-60)",
                recommendedServing: "40-50 ml",
                notes: "Perfect for boosting metabolism, reducing inflammation, and supporting immunity."
            },
            {
                ageGroup: "Seniors (60+)",
                recommendedServing: "30-40 ml",
                notes: "Beneficial for joint health and immunity; consume with caution if on blood-thinning medication."
            },
            {
                ageGroup: "Pregnant Women",
                recommendedServing: "Moderation (20-30 ml)",
                notes: "Can alleviate nausea but should be consumed in limited quantities. Consult a healthcare provider."
            },
            {
                ageGroup: "Allergy Prone",
                recommendedServing: "Not recommended",
                notes: "Avoid if allergic to ginger, honey, or any added ingredients like turmeric."
            }
        ],

        sourceCredibility: [
            "National Institutes of Health (NIH)",
            "United States Department of Agriculture (USDA)",
            "World Health Organization (WHO)",
            "Academy of Nutrition and Dietetics (AND)"
        ],

        expertQuote: {
            quote: "A ginger shot is nature's ultimate health elixir—packed with powerful antioxidants, anti-inflammatory compounds, and immunity boosters to fuel your body and mind every day.",
            name: "Dr. Emily Carter",
            designation: "Nutrition Specialist"
        },

        faqs: [
            {
                question: "Can I drink ginger shots daily?",
                answer: "Yes, it's safe to consume daily as part of a balanced diet."
            },
            {
                question: "Are ginger shots suitable for children?",
                answer: "Yes, but adjust the portion size and consult with a pediatrician if needed."
            },
            {
                question: "Can ginger shots help with weight loss?",
                answer: "Yes, they boost metabolism and help control appetite."
            },
            {
                question: "Do ginger shots contain added sugar?",
                answer: "No, they are naturally sweetened with honey."
            },
            {
                question: "Can I drink ginger shots if I have acid reflux?",
                answer: "Consume in moderation, as ginger can sometimes trigger symptoms in sensitive individuals."
            },
            {
                question: "Who should avoid ginger shots?",
                answer: "People with ulcers or sensitive stomachs should consume cautiously. Avoid if allergic to any ingredients or advised against by a doctor."
            },
            {
                question: "Does it cause acidity or stomach issues?",
                answer: "In moderate amounts, no. However, excessive consumption may irritate sensitive stomachs."
            }
        ],

        gymQuestions: [
            {
                question: "Are ginger shots good for pre-workout?",
                answer: "Yes, they provide natural energy and reduce inflammation, aiding performance."
            },
            {
                question: "Can ginger shots aid recovery after workouts?",
                answer: "Absolutely! Turmeric and ginger reduce muscle soreness and inflammation."
            }
        ],

        otherQuestions: [
            {
                question: "Can ginger shots be consumed during pregnancy?",
                answer: "Yes, but consult with a healthcare provider for optimal portion sizes."
            },
            {
                question: "Do ginger shots detox the body?",
                answer: "Yes, they naturally support liver detoxification and enhance hydration."
            },
            {
                question: "Can ginger shots help with cold and flu?",
                answer: "Yes, they strengthen immunity and soothe throat discomfort."
            }
        ]
    },
    {
        id: "04",
        tagline: "A luscious fusion of berries and grapes for holistic wellness.",
        color: "#b14eff",
        fruit: "Grapeberry",
        name: "GrapeBerry Delight",
        image: "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af8b39bf98e4cbfe35b6f6_Untitled%20design%20(12)%20(1).png",

        details: [
            {
                ingredient: "Black Grapes",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/grapes.png",
                nutrients: "Resveratrol, Vitamin C, Vitamin K, Potassium, Antioxidants",
                benefits: {
                    combined: "Promotes heart health, boosts skin radiance, and reduces inflammation."
                }
            },
            {
                ingredient: "Blueberries",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/blueberries.png",
                nutrients: "Anthocyanins, Vitamin C, Vitamin K, Fiber, Antioxidants",
                benefits: {
                    combined: "Enhances brain health, supports vision, and boosts immunity."
                }
            },
            {
                ingredient: "Lime Juice",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/limejuice.png",
                nutrients: "Vitamin C, Citric Acid, Flavonoids, Potassium",
                benefits: {
                    combined: "Detoxifies, improves digestion, and enhances skin clarity."
                }
            },
            {
                ingredient: "Ginger",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/ginger.png",
                nutrients: "Gingerol, Magnesium, Potassium, Vitamin B6",
                benefits: {
                    combined: "Reduces inflammation, boosts immunity, and aids digestion."
                }
            },
            {
                ingredient: "Pudina (Mint)",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/pudina.png",
                nutrients: "Menthol, Vitamin A, Vitamin C, Iron",
                benefits: {
                    combined: "Freshens breath, soothes digestion, and reduces stress."
                }
            },
            {
                ingredient: "Chia Seeds",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/chia.png",
                nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium",
                benefits: {
                    combined: "Improves heart health, strengthens hair, and enhances gut health."
                }
            },
            {
                ingredient: "Black Salt",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/blacksalt.png",
                nutrients: "Sodium, Potassium, Iron, Magnesium, Sulfur",
                benefits: {
                    combined: "Balances electrolytes, improves metabolism, and aids digestion."
                }
            },
            {
                ingredient: "Cinnamon Powder",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/cinnamon.png",
                nutrients: "Cinnamaldehyde, Calcium, Iron, Antioxidants",
                benefits: {
                    combined: "Stabilizes blood sugar levels, enhances flavor, and boosts immunity."
                }
            }
        ],

        bodyReaction: [
            {
                duration: "1-3 Days",
                benefits: "Improved hydration, better digestion, and reduced bloating."
            },
            {
                duration: "1 Week",
                benefits: "Increased energy, enhanced skin brightness, and better focus."
            },
            {
                duration: "2-3 Weeks",
                benefits: "Stronger immunity, improved heart health, and reduced inflammation."
            },
            {
                duration: "1 Month",
                benefits: "Noticeable improvement in digestion, clearer skin, and enhanced metabolism."
            },
            {
                duration: "2-3 Months",
                benefits: "Long-term benefits like better cardiovascular health, glowing skin, and a healthy gut."
            }
        ],

        timings: [
            {
                duration: "Morning",
                benefits: "Kickstarts hydration, boosts energy, and provides essential antioxidants."
            },
            {
                duration: "Pre-Workout",
                benefits: "Offers natural energy, enhances stamina, and reduces muscle fatigue."
            },
            {
                duration: "Post-Workout",
                benefits: "Replenishes electrolytes, aids recovery, and reduces inflammation."
            },
            {
                duration: "Evening Snack",
                benefits: "A healthy, refreshing option to curb hunger and maintain hydration."
            }
        ],

        ageCriteria: [
            {
                ageGroup: "Infants (Below 1)",
                recommendedServing: "Not recommended",
                notes: "The juice contains strong flavors and added ingredients like cinnamon and chia seeds."
            },
            {
                ageGroup: "Toddlers (1-2)",
                recommendedServing: "20-30 ml (diluted)",
                notes: "Introduce in small, diluted portions; avoid if allergic to berries or grapes."
            },
            {
                ageGroup: "Children (3-12)",
                recommendedServing: "50-100 ml",
                notes: "Safe and beneficial for growing children due to vitamins and antioxidants."
            },
            {
                ageGroup: "Teenagers (13-18)",
                recommendedServing: "150-200 ml",
                notes: "Supports energy, focus, and overall health, especially for active teenagers."
            },
            {
                ageGroup: "Adults (19-60)",
                recommendedServing: "200-250 ml",
                notes: "Ideal for boosting energy, reducing inflammation, and supporting heart health."
            },
            {
                ageGroup: "Seniors (60+)",
                recommendedServing: "150-200 ml",
                notes: "Provides antioxidants and supports memory and heart health; consume with caution if diabetic."
            },
            {
                ageGroup: "Pregnant Women",
                recommendedServing: "Moderation (150-200 ml)",
                notes: "Safe and rich in vitamins; consult a healthcare provider if concerned about sugar content."
            },
            {
                ageGroup: "Allergy Prone",
                recommendedServing: "Not recommended",
                notes: "Avoid if allergic to grapes, berries, or added ingredients like chia seeds or cinnamon."
            }
        ],

        sourceCredibility: [
            "National Institutes of Health (NIH)",
            "United States Department of Agriculture (USDA)",
            "Academy of Nutrition and Dietetics (AND)",
            "Harvard Medical School"
        ],

        expertQuote: {
            quote: "Grape and blueberry juice is a powerhouse of antioxidants and natural vitality—supporting heart health, enhancing brain function, and giving your skin a radiant glow.",
            name: "Dr. James Whitman",
            designation: "Functional Nutrition Expert"
        },

        faqs: [
            {
                question: "Can I drink this juice daily?",
                answer: "Yes, it's safe and beneficial to include in your daily diet."
            },
            {
                question: "Is this juice suitable for children?",
                answer: "Yes, but adjust the portion size and consult a pediatrician if necessary."
            },
            {
                question: "Does this juice help with weight management?",
                answer: "Yes, it's low in calories, supports metabolism, and curbs unhealthy cravings."
            },
            {
                question: "Does this juice contain added sugar?",
                answer: "No, it's made with natural ingredients and contains no added sugar."
            },
            {
                question: "Can this juice improve skin health?",
                answer: "Absolutely! The antioxidants in grapes and blueberries promote a radiant complexion."
            },
            {
                question: "Who should avoid this juice?",
                answer: "Individuals with blood sugar sensitivity should monitor consumption (grapes are naturally sweet). Those allergic to grapes or any added ingredients should avoid it."
            },
            {
                question: "Does this juice cause sugar spikes?",
                answer: "No, the natural sugars in grapes are balanced by fiber from chia seeds and cinnamon, which regulates blood sugar."
            }
        ],

        gymQuestions: [
            {
                question: "Is this juice suitable for pre-workout?",
                answer: "Yes, it provides a natural energy boost and keeps you hydrated."
            },
            {
                question: "Can this juice aid post-workout recovery?",
                answer: "Yes, the blend of antioxidants and electrolytes supports muscle recovery and reduces soreness."
            },
            {
                question: "Does this juice help improve endurance?",
                answer: "Yes, the vitamins and antioxidants improve stamina and reduce fatigue during workouts."
            }
        ],

        otherQuestions: [
            {
                question: "Can this juice be consumed during pregnancy?",
                answer: "Yes, but consult your healthcare provider for optimal portion sizes."
            },
            {
                question: "Does this juice detox the body?",
                answer: "Yes, it supports natural detoxification with its hydrating and antioxidant-rich ingredients."
            },
            {
                question: "Can this juice help with digestion?",
                answer: "Yes, the lime juice, ginger, and mint work together to enhance digestion and reduce bloating."
            }
        ]
    },
    {
        id: "05",
        tagline: "A vibrant blend of nature’s finest for a radiant you.",
        color: "#ff994d",
        name: "Orange Glow",
        fruit: "Orange",
        image: "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c97372d85d43ff3c13f_1%20(1).png",

        details: [
            {
                ingredient: "Fresh Oranges",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/Orange.png",
                nutrients: "Vitamin C, Folate, Potassium, Fiber",
                benefits: {
                    combined: "Boosts immunity, enhances skin glow, and supports heart health."
                }
            },
            {
                ingredient: "Carrot",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/carrot.png",
                nutrients: "Beta-Carotene, Vitamin A, Fiber, Potassium",
                benefits: {
                    combined: "Improves vision, promotes radiant skin, and supports healthy digestion."
                }
            },
            {
                ingredient: "Ginger",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/ginger.png",
                nutrients: "Gingerol, Magnesium, Vitamin B6, Potassium",
                benefits: {
                    combined: "Fights inflammation, boosts metabolism, and supports immunity."
                }
            },
            {
                ingredient: "Lemon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/lemon.png",
                nutrients: "Vitamin C, Citric Acid, Flavonoids, Potassium",
                benefits: {
                    combined: "Detoxifies, enhances digestion, and supports glowing skin."
                }
            },
            {
                ingredient: "Turmeric",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/turmeric.png",
                nutrients: "Curcumin, Potassium, Vitamin C, Magnesium",
                benefits: {
                    combined: "Reduces inflammation, promotes clear skin, and supports joint health."
                }
            },
            {
                ingredient: "Cinnamon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/cinnamon.png",
                nutrients: "Cinnamaldehyde, Calcium, Iron, Antioxidants",
                benefits: {
                    combined: "Stabilizes blood sugar levels, boosts immunity, and adds a warming flavor."
                }
            },
            {
                ingredient: "Chia Seeds",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/chia.png",
                nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium",
                benefits: {
                    combined: "Supports digestion, boosts heart health, and improves hair and skin."
                }
            },
            {
                ingredient: "Mint Leaves",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/pudina.png",
                nutrients: "Menthol, Vitamin A, Vitamin C, Iron",
                benefits: {
                    combined: "Soothes digestion, refreshes breath, and reduces stress."
                }
            },
            {
                ingredient: "Black Pepper",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/blacksalt.png",
                nutrients: "Piperine, Iron, Potassium, Magnesium",
                benefits: {
                    combined: "Enhances curcumin absorption, boosts metabolism, and supports gut health."
                }
            }
        ],

        bodyReaction: [
            {
                duration: "1-3 Days",
                benefits: "Improved hydration, better digestion, and a subtle energy boost."
            },
            {
                duration: "1 Week",
                benefits: "Brighter skin, reduced bloating, and increased vitality."
            },
            {
                duration: "2-3 Weeks",
                benefits: "Strengthened immunity, enhanced metabolism, and clearer complexion."
            },
            {
                duration: "1 Month",
                benefits: "Noticeable improvement in overall energy, digestion, and skin glow."
            },
            {
                duration: "2-3 Months",
                benefits: "Long-term benefits like reduced inflammation, better digestion, and sustained energy."
            }
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
            }
        ],

        ageCriteria: [
            {
                ageGroup: "Infants (Below 1)",
                recommendedServing: "Not recommended",
                notes: "The juice contains citrus (acidic) and other strong ingredients unsuitable for infants."
            },
            {
                ageGroup: "Toddlers (1-2)",
                recommendedServing: "20-30 ml (diluted)",
                notes: "Introduce in small, diluted portions to avoid stomach sensitivity."
            },
            {
                ageGroup: "Children (3-12)",
                recommendedServing: "50-100 ml",
                notes: "Beneficial for immunity, energy, and skin health; avoid overconsumption due to citrus acidity."
            },
            {
                ageGroup: "Teenagers (13-18)",
                recommendedServing: "150-200 ml",
                notes: "Supports energy, skin glow, and metabolism; great for active lifestyles and hormonal benefits."
            },
            {
                ageGroup: "Adults (19-60)",
                recommendedServing: "200-250 ml",
                notes: "Ideal for boosting metabolism, immunity, and skin health; perfect as a morning or workout drink."
            },
            {
                ageGroup: "Seniors (60+)",
                recommendedServing: "150-200 ml",
                notes: "Provides antioxidants and aids digestion; monitor if there are acidity or citrus sensitivities."
            },
            {
                ageGroup: "Pregnant Women",
                recommendedServing: "Moderation (150-200 ml)",
                notes: "Rich in vitamin C and folate; consult a doctor due to ginger, turmeric, and cinnamon content."
            },
            {
                ageGroup: "Allergy Prone",
                recommendedServing: "Not recommended",
                notes: "Avoid if allergic to citrus fruits, ginger, turmeric, or cinnamon."
            }
        ],

        sourceCredibility: [
            "National Institutes of Health (NIH)",
            "United States Department of Agriculture (USDA)",
            "Harvard Medical School",
            "World Health Organization (WHO)"
        ],

        expertQuote: {
            quote: "Orange juice is liquid sunshine for your body—bursting with vitamin C, energizing nutrients, and immune-boosting properties to keep you vibrant and healthy.",
            name: "Dr. Sophia Allen",
            designation: "Wellness and Nutrition Expert"
        },

        faqs: [
            {
                question: "Can I drink this juice daily?",
                answer: "Yes, it's safe and highly nutritious for daily consumption."
            },
            {
                question: "Is this juice suitable for children?",
                answer: "Yes, but reduce the ginger and black pepper quantity for children."
            },
            {
                question: "Does this juice improve skin health?",
                answer: "Absolutely! With vitamin C and beta-carotene, it promotes a radiant and glowing complexion."
            },
            {
                question: "Does this juice help with digestion?",
                answer: "Yes, the combination of lemon, ginger, and mint supports healthy digestion."
            },
            {
                question: "Is this juice good for immunity?",
                answer: "Yes, it's packed with immune-boosting ingredients like oranges, ginger, and turmeric."
            }
        ],

        gymQuestions: [
            {
                question: "Is this juice suitable for pre-workout?",
                answer: "Yes, it provides natural energy, reduces inflammation, and supports stamina."
            },
            {
                question: "Can this juice aid post-workout recovery?",
                answer: "Yes, it replenishes electrolytes, reduces muscle inflammation, and promotes hydration."
            },
            {
                question: "Does this juice improve endurance?",
                answer: "Yes, with its nutrient-rich ingredients, it enhances stamina and reduces fatigue."
            }
        ],

        otherQuestions: [
            {
                question: "Can this juice be consumed during pregnancy?",
                answer: "Yes, but consult your healthcare provider for individual guidance."
            },
            {
                question: "Does this juice detox the body?",
                answer: "Yes, it naturally supports detoxification through its hydrating and antioxidant-rich ingredients."
            },
            {
                question: "Can this juice support weight management?",
                answer: "Yes, it's low in calories, boosts metabolism, and curbs unhealthy cravings."
            }
        ]
    },
    {
        id: "06",
        tagline: "A powerhouse of nutrients in every sip, crafted for your ultimate health.",
        color: "#ff4355",
        fruit: "Apple",
        name: "ABC Power Punch",
        image: "https://cdn.prod.website-files.com/66ae838a004ef09aef08a56d/66af7c6fd0a17b480f1da3bb_3.png",

        details: [
            {
                ingredient: "Apple",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/apple.png",
                nutrients: "Fiber, Vitamin C, Potassium, Antioxidants",
                benefits: {
                    combined: "Supports digestion, boosts immunity, and promotes heart health."
                }
            },
            {
                ingredient: "Beetroot",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/beetroot.png",
                nutrients: "Nitrates, Iron, Folate, Vitamin C",
                benefits: {
                    combined: "Improves blood circulation, supports liver health, and boosts stamina."
                }
            },
            {
                ingredient: "Carrot",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/carrot.png",
                nutrients: "Beta-Carotene, Vitamin A, Fiber, Potassium",
                benefits: {
                    combined: "Enhances vision, promotes glowing skin, and supports immunity."
                }
            },
            {
                ingredient: "Chia Seeds",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/chia.png",
                nutrients: "Omega-3 Fatty Acids, Fiber, Calcium, Magnesium",
                benefits: {
                    combined: "Supports digestion, heart health, and boosts energy levels."
                }
            },
            {
                ingredient: "Ground Flaxseeds",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/flaxseeds.png",
                nutrients: "Omega-3 Fatty Acids, Lignans, Fiber, Vitamin B1",
                benefits: {
                    combined: "Reduces inflammation, improves heart health, and supports hormonal balance."
                }
            },
            {
                ingredient: "Spinach",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/spinach.png",
                nutrients: "Iron, Vitamin K, Folate, Magnesium, Calcium",
                benefits: {
                    combined: "Boosts energy, supports bone health, and strengthens immunity."
                }
            },
            {
                ingredient: "Ginger",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/ginger.png",
                nutrients: "Gingerol, Vitamin B6, Magnesium, Potassium",
                benefits: {
                    combined: "Fights inflammation, improves digestion, and boosts metabolism."
                }
            },
            {
                ingredient: "Lemon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/lemon.png",
                nutrients: "Vitamin C, Citric Acid, Flavonoids",
                benefits: {
                    combined: "Detoxifies the body, supports glowing skin, and enhances digestion."
                }
            },
            {
                ingredient: "Honey (or Maple Syrup)",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/honey.png",
                nutrients: "Antioxidants, Natural Sugars",
                benefits: {
                    combined: "Provides natural sweetness, boosts energy, and supports immunity."
                }
            },
            {
                ingredient: "Cinnamon",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/cinnamon.png",
                nutrients: "Cinnamaldehyde, Antioxidants, Calcium",
                benefits: {
                    combined: "Stabilizes blood sugar, improves circulation, and boosts immunity."
                }
            },
            {
                ingredient: "Turmeric",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/turmeric.png",
                nutrients: "Curcumin, Potassium, Vitamin C",
                benefits: {
                    combined: "Reduces inflammation, supports joint health, and brightens skin."
                }
            },
            {
                ingredient: "Mint Leaves",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/pudina.png",
                nutrients: "Menthol, Vitamin A, Iron",
                benefits: {
                    combined: "Soothes digestion, freshens breath, and reduces stress."
                }
            },
            {
                ingredient: "Black Pepper",
                image: "https://raw.githubusercontent.com/ShuaibAfnanSk/Asher/refs/heads/main/blacksalt.png",
                nutrients: "Piperine, Iron, Potassium",
                benefits: {
                    combined: "Enhances curcumin absorption, boosts metabolism, and aids digestion."
                }
            }
        ],

        bodyReaction: [
            {
                duration: "1-3 Days",
                benefits: "Improved hydration, better digestion, and enhanced energy."
            },
            {
                duration: "1 Week",
                benefits: "Reduced bloating, clearer skin, and improved focus."
            },
            {
                duration: "2-3 Weeks",
                benefits: "Enhanced stamina, better immunity, and visible skin glow."
            },
            {
                duration: "1 Month",
                benefits: "Noticeable improvement in digestion, reduced inflammation, and vibrant energy levels."
            },
            {
                duration: "2-3 Months",
                benefits: "Long-term benefits like balanced metabolism, glowing skin, and stronger immunity."
            }
        ],

        timings: [
            {
                duration: "Morning",
                benefits: "Kickstarts metabolism, detoxifies the body, and energizes you for the day."
            },
            {
                duration: "Pre-Workout",
                benefits: "Provides natural energy, boosts stamina, and enhances endurance."
            },
            {
                duration: "Post-Workout",
                benefits: "Replenishes lost nutrients, aids muscle recovery, and supports hydration."
            },
            {
                duration: "Midday Snack",
                benefits: "Curbs unhealthy cravings and keeps you refreshed and energized."
            }
        ],

        ageCriteria: [
            {
                ageGroup: "Children (3-12)",
                recommendedServing: "100-150 ml daily",
                benefits: "Supports digestion, boosts immunity, and promotes healthy growth."
            },
            {
                ageGroup: "Teens (13-19)",
                recommendedServing: "200-250 ml daily",
                benefits: "Enhances stamina, boosts energy, promotes clear skin, supports vitality."
            },
            {
                ageGroup: "Adults (20-50)",
                recommendedServing: "250-300 ml daily",
                benefits: "Provides energy, supports heart health, detoxifies, and strengthens immunity."
            },
            {
                ageGroup: "Seniors (50+)",
                recommendedServing: "150-200 ml daily",
                benefits: "Boosts immunity, reduces inflammation, supports joint health, and maintains vitality."
            },
            {
                ageGroup: "Allergy Prone",
                recommendedServing: "Not recommended",
                benefits: "Avoid if allergic to citrus fruits, ginger, turmeric, or cinnamon."
            }
        ],

        sourceCredibility: [
            "National Institutes of Health (NIH)",
            "United States Department of Agriculture (USDA)",
            "Harvard Medical School",
            "World Health Organization (WHO)"
        ],

        expertQuote: {
            quote: "ABC juice—Apple, Beetroot, and Carrot—is a magical blend that detoxifies your body, boosts blood health, and gives your skin a natural, radiant glow.",
            name: "Dr. Maya Thompson",
            designation: "Holistic Health Specialist"
        },

        faqs: [
            {
                question: "Can I drink this juice daily?",
                answer: "Yes, it's a nutrient-dense option for daily consumption."
            },
            {
                question: "Is this juice suitable for children?",
                answer: "Yes, but adjust ginger and black pepper for children's taste and sensitivity."
            },
            {
                question: "Does this juice improve skin health?",
                answer: "Absolutely! Ingredients like apple, carrot, and turmeric promote a radiant complexion."
            },
            {
                question: "Is this juice good for detoxification?",
                answer: "Yes, beetroot, lemon, and spinach are natural detoxifiers."
            },
            {
                question: "Can this juice support weight loss?",
                answer: "Yes, it's low in calories, rich in fiber, and supports metabolism."
            },
            {
                question: "Does ABC Juice Cause a Sugar Spike?",
                answer: "since this juice contains ingredients that balance blood sugar (like chia, flax, cinnamon, and turmeric), the spike is often slower and less intense."
            }
        ],

        gymQuestions: [
            {
                question: "Is this juice good for pre-workout?",
                answer: "Yes, it boosts energy, improves circulation (thanks to beetroot), and enhances endurance."
            },
            {
                question: "Can this juice aid post-workout recovery?",
                answer: "Yes, it replenishes lost nutrients, fights inflammation, and supports hydration."
            },
            {
                question: "Does this juice enhance endurance?",
                answer: "Yes, with ingredients like beetroot and chia seeds, it improves oxygen flow and stamina."
            }
        ],

        otherQuestions: [
            {
                question: "Can this juice be consumed during pregnancy?",
                answer: "Yes, but consult your healthcare provider for personalized advice."
            },
            {
                question: "Does this juice detox the body?",
                answer: "Yes, it's packed with natural detoxifying ingredients like beetroot, lemon, and spinach."
            },
            {
                question: "Is this juice vegan-friendly?",
                answer: "Yes, use maple syrup instead of honey for a vegan option."
            }
        ]
    }
]

export default products;