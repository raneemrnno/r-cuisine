const LunchRecipesList = [
  {
    id: 1,
    type: "lunch",
    category: "oriental",
    country: "Yemeni",
    title: "Mandi",
    description:
      "a traditional dish that originated from Hadhramaut, Yemen, consisting mainly of meat and rice with a special blend of spices",
    getImageSrc: () => require("../images/photo2.jpeg"),
    ingrediants: [
      "1 kg chicken legs",
      "1/2 kg Basmati rice",
      "onion",
      "salt",
      "paper",
      "A stick of cinnamon",
      "5 grains of cloves",
      "5 grains of cardamom",
      "half a cup of oil",
      "piece of charcoal",
    ],
    preparation_steps: [
      "1- Boil the chicken",
      "2- Put in the spice bowl with half a cup of oil",
      "3- Pour in chicken stock for every cup and a half",
      "4- Put salt to taste",
      "5- Pour the rice into the pot after it boils",
      "6- Reduce the fire and leave it for a third of an hour",
      "7- Paint the chicken red and put it in the oven for a quarter of an hour",
      "8- Light a charcoal and place it over the rice for 5 minutes and turn off the heat",
    ],
    side_dishes: "salad and yogurt",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "1",
    },
  },
  {
    id: 2,
    type: "lunch",
    category: "oriental",
    country: "Syrian",
    title: "Shakrya",
    description: "famous traditional syrian lunch meal cooked in special days",
    getImageSrc: () => require("../images/photo2.jpeg"),
    ingrediants: [
      "1 kg meat",
      "2 kg yogurt",
      "onion",
      "corn flour",
      "salt",
      "paper",
      "1 piece of egg",
    ],
    preparation_steps: [
      "1- Boil the meat",
      "2- Put the yogurt in a blender with an egg and 4 tablespoons of corn flour",
      "3- Put the previous mixture in a pot on the fire, stirring constantly, until it boils",
      "4- Add salt as desired",
      "5- Put the boiled meat pieces over the milk and let it boil for 5 minutes and turn off the heat",
    ],
    side_dishes: "Rice with vermicelli",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "2",
    },
  },
  {
    id: 3,
    type: "lunch",
    category: "western",
    country: "French",
    title: "cordon blu",
    description:
      "a dish of meat wrapped around cheese, then breaded and pan-fried or deep-fried",
    getImageSrc: () => require("../images/photo3.jpg"),
    ingrediants: [
      "2 small chicken breasts",
      "Salt and pepper",
      "4 slices swiss cheese",
      "4 to 6 slices of ham",
      "panko breadcrumbs",
      "oil spray",
      "3 tbsp mayonnaise",
      "1 1/2 tbsp Dijon mustard",
      "1 egg",
      "2 tsp plain flour",
      "",
    ],
    preparation_steps: [
      "1- Preheat oven to 200C",
      "2- Spread panko breadcrumbs on a baking tray and spray with oil. Bake for 3 minutes or until light golden. Remove and scrape into bowl straight away",
      "3- Cut a pocket into each chicken breast, as per the photo below",
      "4- Fold the cheese in half and place 2 pieces inside each pocket. Do the same with the ham. Close the pocket, seal with 2 toothpicks. Sprinkle with salt and pepper",
      "5- Mix the mayonnaise, mustard, salt and pepper in a bowl. Spread onto the top and sides of the chicken (not underside)",
      "Sprinkle panko over the chicken, using your other hand to press the breadcrumbs onto the side of the chicken. Spray with oil",
    ],
    side_dishes: "Boiled vegetables",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "3",
    },
  },
  {
    id: 4,
    type: "lunch",
    category: "western",
    country: "Russian",
    title: "Chicken Stroganoff",
    description:
      "A delicious mixture of butter with chicken and mushrooms, topped with rich cream",
    getImageSrc: () => require("../images/photo4.jpg"),
    ingrediants: [
      "1 kg checken breast",
      "a cup of cooking cream",
      "butter",
      "half cube of Maggi",
      "2 onion",
      "6 garlic",
      "fresh mushrooms",
      "sweet corn",
      "2 spoons of mastard",
      "spoon of corn flour",
      "salt",
      "paper",
      "paprika",
    ],
    preparation_steps: [
      "1- Cut the onion slices and crush the garlic",
      "2- Cut the chicken into slices and season with salt, pepper and paprika",
      "3- put a small piece of butter in a bowl and fry the mushrooms and set them aside",
      "4- Put a second piece of butter and toast the onions in it",
      "5- Place the chicken on top of the onions",
      "6- Add mushrooms, corn, garlic, mustard and Maggi",
      "7- Put water over the chicken, lower the heat, and leave for half an hour",
      "8- Put the flour and then pour the cooking cream",
      "9- Leave them for two minutes and then pour",
    ],
    side_dishes: "white rice or pasta",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "4",
    },
  },
  {
    id: 5,
    type: "lunch",
    category: "oriental",
    country: "Syrian",
    title: "Chicken Shawarma",
    description:
      "a popular street food that is traditionally made in the form of spiced meats that are stacked on a vertical rotisserie with thin slices shaved off as it rotates.",
    getImageSrc: () => require("../images/photo5.jpg"),
    ingrediants: [
      "1 kg chicken breast",
      "olive oil",
      "garlic",
      "lemon",
      "salt",
      "paper",
      "cumin",
      "paprika",
      "yogurt",
    ],
    preparation_steps: [
      "1- Mix marinade - For convenience, just mix the marinade directly in a ziplock bag. A bag works best because the chicken remains nicely coated in the marinade. If you prefer to use a container, either turn the chicken a few times or increase the marinade by 50%",
      "2- Add chicken into the marinade. Seal the bag, removing excess air, then massage to coat from the outside. Leave to marinade for 12 to 24 hours in the fridge. If you’re pressed for time, even 3 hours will do!",
      "3- Make the yogurt sauce simply by mixing the ingredients then set aside for at least 20 minutes to let the flavours meld. This will keep for 3 days in the fridge",
      "4- Cook chicken either on the stove or on the BBQ. It will get a great crust on it from the spices, and you will adore the smell. It’s intoxicating!",
      "5- Rest chicken for at least 3 minutes before serving to allow the juices to redistribute throughout the flesh, else they will just run out everywhere when you slice the meat.",
      "6- To serve, just pile everything on a platter and let everybody make their own wraps! The chicken, lettuce, tomato slices, onion, yogurt sauce and warmed flatbreads – homemade or store bought. If the chicken is on the larger side, I sometimes slice it. But if they are smaller, I tend to just leave them whole.",
    ],
    side_dishes: "garlic cream",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "5",
    },
  },
  {
    id: 6,
    type: "lunch",
    category: "oriental",
    country: "Syria",
    title: "shish tawook",
    description:
      "tender and juicy chicken that’s been marinating in earthy spices, yogurt, lemon juice and garlic",
    getImageSrc: () => require("../images/photo6.jpg"),
    ingrediants: [
      "1 kg cubes of chicken breast",
      "yogurt",
      "lemon juice",
      "6 garlic",
      "tomato paste",
      "paprika",
      "cinnamon",
      "oregano",
      "ginger",
      "tenderizer",
    ],
    preparation_steps: [
      "1- Mix all the ingrediants together and you'll get this orangey creamy color ready for you to coat the chicken with",
      "2- Add the large cubes of chicken breast to the marinade and make sure that everything is well coated. While the yogurt and lemon are crucial parts of the flavor of this dish, they also act as a tenderizer for the chicken.",
      "3- Let it marinate for at least 4 hours or overnight.",
      "4- Skewer the chicken right before you’re ready to cook it. I like adding chunks of white onions on each skewer to eat with the sandwich. I love how onions get sweeter when they’re grilled…the perfect vegetable with this shish tawook.",
    ],
    side_dishes: "mayoneese",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "6",
    },
  },
  {
    id: 7,
    type: "lunch",
    category: "oriental",
    country: "Egypt",
    title: "mloukhia",
    description:
      "dsfsg sfgsfgs jhfdkjs jkshdfkj hghsd ,jhkjhdf jhh bk,hgkug hgutyf",
    getImageSrc: () => require("../images/photo7.jpg"),
    ingrediants: [
      "1 kg meat",
      "yougurt",
      "onion",
      "2.5 L water",
      "corn flour",
      "salt",
      "paper",
    ],
    preparation_steps: [],
    side_dishes: "mayoneese",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "7",
    },
  },

  {
    id: 8,
    type: "lunch",
    category: "oriental",
    country: "Yemeni",
    title: "Mandi",
    description:
      "a traditional dish that originated from Hadhramaut, Yemen, consisting mainly of meat and rice with a special blend of spices",
    getImageSrc: () => require("../images/photo1.jpg"),
    ingrediants: [
      "1 kg chicken legs",
      "1/2 kg Basmati rice",
      "onion",
      "salt",
      "paper",
      "A stick of cinnamon",
      "5 grains of cloves",
      "5 grains of cardamom",
      "half a cup of oil",
      "piece of charcoal",
    ],
    preparation_steps: [
      "1- Boil the chicken",
      "2- Put in the spice bowl with half a cup of oil",
      "3- Pour in chicken stock for every cup and a half",
      "4- Put salt to taste",
      "5- Pour the rice into the pot after it boils",
      "6- Reduce the fire and leave it for a third of an hour",
      "7- Paint the chicken red and put it in the oven for a quarter of an hour",
      "8- Light a charcoal and place it over the rice for 5 minutes and turn off the heat",
    ],
    side_dishes: "salad and yogurt",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "8",
    },
  },
  {
    id: 9,
    type: "lunch",
    category: "oriental",
    country: "Syrian",
    title: "Shakriya",
    description: "famous syrian lunch meal",
    getImageSrc: () => require("../images/photo2.jpeg"),
    ingrediants: [
      "1 kg meat",
      "2 kg yogurt",
      "onion",
      "corn flour",
      "salt",
      "paper",
      "1 piece of egg",
    ],
    preparation_steps: [
      "1- Boil the meat",
      "2- Put the yogurt in a blender with an egg and 4 tablespoons of corn flour",
      "3- Put the previous mixture in a pot on the fire, stirring constantly, until it boils",
      "4- Add salt as desired",
      "5- Put the boiled meat pieces over the milk and let it boil for 5 minutes and turn off the heat",
    ],
    side_dishes: "Rice with vermicelli",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "9",
    },
  },
  {
    id: 10,
    type: "lunch",
    category: "western",
    country: "French",
    title: "cordon blu",
    description:
      "a dish of meat wrapped around cheese, then breaded and pan-fried or deep-fried",
    getImageSrc: () => require("../images/photo3.jpg"),
    ingrediants: [
      "2 small chicken breasts",
      "Salt and pepper",
      "4 slices swiss cheese",
      "4 to 6 slices of ham",
      "panko breadcrumbs",
      "oil spray",
      "3 tbsp mayonnaise",
      "1 1/2 tbsp Dijon mustard",
      "1 egg",
      "2 tsp plain flour",
      "",
    ],
    preparation_steps: [
      "1- Preheat oven to 200C",
      "2- Spread panko breadcrumbs on a baking tray and spray with oil. Bake for 3 minutes or until light golden. Remove and scrape into bowl straight away",
      "3- Cut a pocket into each chicken breast, as per the photo below",
      "4- Fold the cheese in half and place 2 pieces inside each pocket. Do the same with the ham. Close the pocket, seal with 2 toothpicks. Sprinkle with salt and pepper",
      "5- Mix the mayonnaise, mustard, salt and pepper in a bowl. Spread onto the top and sides of the chicken (not underside)",
      "Sprinkle panko over the chicken, using your other hand to press the breadcrumbs onto the side of the chicken. Spray with oil",
    ],
    side_dishes: "Boiled vegetables",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "10",
    },
  },
  {
    id: 11,
    type: "lunch",
    category: "western",
    country: "Russian",
    title: "Chicken Stroganoff",
    description:
      "A delicious mixture of butter with chicken and mushrooms, topped with rich cream",
    getImageSrc: () => require("../images/photo4.jpg"),
    ingrediants: [
      "1 kg checken breast",
      "a cup of cooking cream",
      "butter",
      "half cube of Maggi",
      "2 onion",
      "6 garlic",
      "fresh mushrooms",
      "sweet corn",
      "2 spoons of mastard",
      "spoon of corn flour",
      "salt",
      "paper",
      "paprika",
    ],
    preparation_steps: [
      "1- Cut the onion slices and crush the garlic",
      "2- Cut the chicken into slices and season with salt, pepper and paprika",
      "3- put a small piece of butter in a bowl and fry the mushrooms and set them aside",
      "4- Put a second piece of butter and toast the onions in it",
      "5- Place the chicken on top of the onions",
      "6- Add mushrooms, corn, garlic, mustard and Maggi",
      "7- Put water over the chicken, lower the heat, and leave for half an hour",
      "8- Put the flour and then pour the cooking cream",
      "9- Leave them for two minutes and then pour",
    ],
    side_dishes: "white rice or pasta",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "11",
    },
  },
  {
    id: 12,
    type: "lunch",
    category: "oriental",
    country: "Syrian",
    title: "Chicken Shawarma",
    description:
      "a popular street food that is traditionally made in the form of spiced meats that are stacked on a vertical rotisserie with thin slices shaved off as it rotates.",
    getImageSrc: () => require("../images/photo5.jpg"),
    ingrediants: [
      "1 kg chicken breast",
      "olive oil",
      "garlic",
      "lemon",
      "salt",
      "paper",
      "cumin",
      "paprika",
      "yogurt",
    ],
    preparation_steps: [
      "1- Mix marinade - For convenience, just mix the marinade directly in a ziplock bag. A bag works best because the chicken remains nicely coated in the marinade. If you prefer to use a container, either turn the chicken a few times or increase the marinade by 50%",
      "2- Add chicken into the marinade. Seal the bag, removing excess air, then massage to coat from the outside. Leave to marinade for 12 to 24 hours in the fridge. If you’re pressed for time, even 3 hours will do!",
      "3- Make the yogurt sauce simply by mixing the ingredients then set aside for at least 20 minutes to let the flavours meld. This will keep for 3 days in the fridge",
      "4- Cook chicken either on the stove or on the BBQ. It will get a great crust on it from the spices, and you will adore the smell. It’s intoxicating!",
      "5- Rest chicken for at least 3 minutes before serving to allow the juices to redistribute throughout the flesh, else they will just run out everywhere when you slice the meat.",
      "6- To serve, just pile everything on a platter and let everybody make their own wraps! The chicken, lettuce, tomato slices, onion, yogurt sauce and warmed flatbreads – homemade or store bought. If the chicken is on the larger side, I sometimes slice it. But if they are smaller, I tend to just leave them whole.",
    ],
    side_dishes: "mayoneese",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "12",
    },
  },
  {
    id: 13,
    type: "lunch",
    category: "oriental",
    country: "Syria",
    title: "shish tawook",
    description:
      "tender and juicy chicken that’s been marinating in earthy spices, yogurt, lemon juice and garlic",
    getImageSrc: () => require("../images/photo6.jpg"),
    ingrediants: [
      "1 kg cubes of chicken breast",
      "yogurt",
      "lemon juice",
      "6 garlic",
      "tomato paste",
      "paprika",
      "cinnamon",
      "oregano",
      "ginger",
      "tenderizer",
    ],
    preparation_steps: [
      "1- Mix all the ingrediants together and you'll get this orangey creamy color ready for you to coat the chicken with",
      "2- Add the large cubes of chicken breast to the marinade and make sure that everything is well coated. While the yogurt and lemon are crucial parts of the flavor of this dish, they also act as a tenderizer for the chicken.",
      "3- Let it marinate for at least 4 hours or overnight.",
      "4- Skewer the chicken right before you’re ready to cook it. I like adding chunks of white onions on each skewer to eat with the sandwich. I love how onions get sweeter when they’re grilled…the perfect vegetable with this shish tawook.",
    ],
    side_dishes: "mayoneese",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "13",
    },
  },
  {
    id: 14,
    type: "lunch",
    category: "oriental",
    country: "Egypt",
    title: "mloukhia",
    description:
      "dsfsg sfgsfgs jhfdkjs jkshdfkj hghsd ,jhkjhdf jhh bk,hgkug hgutyf",
    getImageSrc: () => require("../images/photo7.jpg"),
    ingrediants: [
      "1 kg meat",
      "yougurt",
      "onion",
      "2.5 L water",
      "corn flour",
      "salt",
      "paper",
    ],
    preparation_steps: [],
    side_dishes: "mayoneese",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "14",
    },
  },

  {
    id: 15,
    type: "lunch",

    category: "oriental",
    country: "Yemeni",
    title: "Mandi",
    description:
      "a traditional dish that originated from Hadhramaut, Yemen, consisting mainly of meat and rice with a special blend of spices",
    getImageSrc: () => require("../images/photo1.jpg"),
    ingrediants: [
      "1 kg chicken legs",
      "1/2 kg Basmati rice",
      "onion",
      "salt",
      "paper",
      "A stick of cinnamon",
      "5 grains of cloves",
      "5 grains of cardamom",
      "half a cup of oil",
      "piece of charcoal",
    ],
    preparation_steps: [
      "1- Boil the chicken",
      "2- Put in the spice bowl with half a cup of oil",
      "3- Pour in chicken stock for every cup and a half",
      "4- Put salt to taste",
      "5- Pour the rice into the pot after it boils",
      "6- Reduce the fire and leave it for a third of an hour",
      "7- Paint the chicken red and put it in the oven for a quarter of an hour",
      "8- Light a charcoal and place it over the rice for 5 minutes and turn off the heat",
    ],
    side_dishes: "salad and yogurt",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "15",
    },
  },
  {
    id: 16,
    type: "lunch",

    category: "oriental",
    country: "Syrian",
    title: "Shakriya",
    description: "famous syrian lunch meal",
    getImageSrc: () => require("../images/photo2.jpeg"),
    ingrediants: [
      "1 kg meat",
      "2 kg yogurt",
      "onion",
      "corn flour",
      "salt",
      "paper",
      "1 piece of egg",
    ],
    preparation_steps: [
      "1- Boil the meat",
      "2- Put the yogurt in a blender with an egg and 4 tablespoons of corn flour",
      "3- Put the previous mixture in a pot on the fire, stirring constantly, until it boils",
      "4- Add salt as desired",
      "5- Put the boiled meat pieces over the milk and let it boil for 5 minutes and turn off the heat",
    ],
    side_dishes: "Rice with vermicelli",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "16",
    },
  },
  {
    id: 17,
    type: "lunch",

    category: "western",
    country: "French",
    title: "cordon blu",
    description:
      "a dish of meat wrapped around cheese, then breaded and pan-fried or deep-fried",
    getImageSrc: () => require("../images/photo3.jpg"),
    ingrediants: [
      "2 small chicken breasts",
      "Salt and pepper",
      "4 slices swiss cheese",
      "4 to 6 slices of ham",
      "panko breadcrumbs",
      "oil spray",
      "3 tbsp mayonnaise",
      "1 1/2 tbsp Dijon mustard",
      "1 egg",
      "2 tsp plain flour",
      "",
    ],
    preparation_steps: [
      "1- Preheat oven to 200C",
      "2- Spread panko breadcrumbs on a baking tray and spray with oil. Bake for 3 minutes or until light golden. Remove and scrape into bowl straight away",
      "3- Cut a pocket into each chicken breast, as per the photo below",
      "4- Fold the cheese in half and place 2 pieces inside each pocket. Do the same with the ham. Close the pocket, seal with 2 toothpicks. Sprinkle with salt and pepper",
      "5- Mix the mayonnaise, mustard, salt and pepper in a bowl. Spread onto the top and sides of the chicken (not underside)",
      "Sprinkle panko over the chicken, using your other hand to press the breadcrumbs onto the side of the chicken. Spray with oil",
    ],
    side_dishes: "Boiled vegetables",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "17",
    },
  },
  {
    id: 18,
    type: "lunch",

    category: "western",
    country: "Russian",
    title: "Chicken Stroganoff",
    description:
      "A delicious mixture of butter with chicken and mushrooms, topped with rich cream",
    getImageSrc: () => require("../images/photo4.jpg"),
    ingrediants: [
      "1 kg checken breast",
      "a cup of cooking cream",
      "butter",
      "half cube of Maggi",
      "2 onion",
      "6 garlic",
      "fresh mushrooms",
      "sweet corn",
      "2 spoons of mastard",
      "spoon of corn flour",
      "salt",
      "paper",
      "paprika",
    ],
    preparation_steps: [
      "1- Cut the onion slices and crush the garlic",
      "2- Cut the chicken into slices and season with salt, pepper and paprika",
      "3- put a small piece of butter in a bowl and fry the mushrooms and set them aside",
      "4- Put a second piece of butter and toast the onions in it",
      "5- Place the chicken on top of the onions",
      "6- Add mushrooms, corn, garlic, mustard and Maggi",
      "7- Put water over the chicken, lower the heat, and leave for half an hour",
      "8- Put the flour and then pour the cooking cream",
      "9- Leave them for two minutes and then pour",
    ],
    side_dishes: "white rice or pasta",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "18",
    },
  },
  {
    id: 19,
    type: "lunch",

    category: "oriental",
    country: "Syrian",
    title: "Chicken Shawarma",
    description:
      "a popular street food that is traditionally made in the form of spiced meats that are stacked on a vertical rotisserie with thin slices shaved off as it rotates.",
    getImageSrc: () => require("../images/photo5.jpg"),
    ingrediants: [
      "1 kg chicken breast",
      "olive oil",
      "garlic",
      "lemon",
      "salt",
      "paper",
      "cumin",
      "paprika",
      "yogurt",
    ],
    preparation_steps: [
      "1- Mix marinade - For convenience, just mix the marinade directly in a ziplock bag. A bag works best because the chicken remains nicely coated in the marinade. If you prefer to use a container, either turn the chicken a few times or increase the marinade by 50%",
      "2- Add chicken into the marinade. Seal the bag, removing excess air, then massage to coat from the outside. Leave to marinade for 12 to 24 hours in the fridge. If you’re pressed for time, even 3 hours will do!",
      "3- Make the yogurt sauce simply by mixing the ingredients then set aside for at least 20 minutes to let the flavours meld. This will keep for 3 days in the fridge",
      "4- Cook chicken either on the stove or on the BBQ. It will get a great crust on it from the spices, and you will adore the smell. It’s intoxicating!",
      "5- Rest chicken for at least 3 minutes before serving to allow the juices to redistribute throughout the flesh, else they will just run out everywhere when you slice the meat.",
      "6- To serve, just pile everything on a platter and let everybody make their own wraps! The chicken, lettuce, tomato slices, onion, yogurt sauce and warmed flatbreads – homemade or store bought. If the chicken is on the larger side, I sometimes slice it. But if they are smaller, I tend to just leave them whole.",
    ],
    side_dishes: "mayoneese",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "19",
    },
  },
  {
    id: 20,
    type: "lunch",

    category: "oriental",
    country: "Syria",
    title: "shish tawook",
    description:
      "tender and juicy chicken that’s been marinating in earthy spices, yogurt, lemon juice and garlic",
    getImageSrc: () => require("../images/photo6.jpg"),
    ingrediants: [
      "1 kg cubes of chicken breast",
      "yogurt",
      "lemon juice",
      "6 garlic",
      "tomato paste",
      "paprika",
      "cinnamon",
      "oregano",
      "ginger",
      "tenderizer",
    ],
    preparation_steps: [
      "1- Mix all the ingrediants together and you'll get this orangey creamy color ready for you to coat the chicken with",
      "2- Add the large cubes of chicken breast to the marinade and make sure that everything is well coated. While the yogurt and lemon are crucial parts of the flavor of this dish, they also act as a tenderizer for the chicken.",
      "3- Let it marinate for at least 4 hours or overnight.",
      "4- Skewer the chicken right before you’re ready to cook it. I like adding chunks of white onions on each skewer to eat with the sandwich. I love how onions get sweeter when they’re grilled…the perfect vegetable with this shish tawook.",
    ],
    side_dishes: "mayoneese",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "20",
    },
  },
  {
    id: 21,
    type: "lunch",

    category: "oriental",
    country: "Egypt",
    title: "mloukhia 11111111",
    description:
      "dsfsg sfgsfgs jhfdkjs jkshdfkj hghsd ,jhkjhdf jhh bk,hgkug hgutyf",
    getImageSrc: () => require("../images/photo7.jpg"),
    ingrediants: [
      "1 kg meat",
      "yougurt",
      "onion",
      "2.5 L water",
      "corn flour",
      "salt",
      "paper",
    ],
    preparation_steps: [],
    side_dishes: "garlic cream",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "21",
    },
  },
];
export default LunchRecipesList;
