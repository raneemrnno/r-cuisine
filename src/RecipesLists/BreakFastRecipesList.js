const BreakFastRecipesList = [
  {
    id: 1,
    type: "break_fast",
    category: "western",
    country: "Italian",
    title: "Salty crepe",
    description:
      "A quick and easy breakfast recipe with few ingredients that kids love",
    getImageSrc: () => require("../images/salty_crepe.jpg"),
    ingrediants: [
      "2 eggs",
      "A small spoonful of sugar",
      "A small spoonful of salt",
      "A small spoonful of white vinegar",
      "2 cups of milk",
      "Butter cube",
      "200 grams of cheese",
      "200 grams of kashkaval",
      "parsley",
      "Roasted sesame",
      "Blessing bead",
    ],
    preparation_steps: [
      "1. Rub the flour with the butter well",
      "2. Mix eggs with salt, sugar and white vinegar and milk",
      "3. Add the flour to the liquid mixture and stir until the crepe mixture is formed",
      "4. Mix the mentioned types of cheese and add parsley, sesame and black seed to it",
      "5. Put a portion of the crepe batter into a preheated frying pan on the gas and let it set",
      "6. Stuff the crepe with the cheese mixture and decorate it with parsley",
    ],
    side_dishes: "A cup of tea",
    url: () => "https://www.youtube.com/embed/watch?v=_vg37obddiA&t=1s",
    price: [20, 30, 50, 60, 80],
    created_at: {
      order: "1",
    },
  },

  {
    id: 2,
    type: "break_fast",
    category: "western",
    country: "Italian",
    title: "Cheese Omlet",
    description:
      "A dish tops the list of side dishes, which is served for breakfast, and contains a huge percentage of proteins, vitamins, and minerals",
    getImageSrc: () => require("../images/omlet.jpeg"),
    ingrediants: [
      "A cup of grated cheese",
      "4 eggs",
      "Half a teaspoon of salt",
      "2 tablespoons of rusk",
      "A teaspoon of butter",
      "4 tablespoons of hot water",
    ],
    preparation_steps: [
      "Separate the yolks from the whites, put the rusks and cheese, and the yolks in hot water, and stir well, adding a quarter teaspoon of salt, and stir",
      "Add a quarter of a spoonful of salt to the egg whites, and stir well until the volume of the whites doubles, then add to the previously prepared yolk mixture",
      "Stir gently until the mixture is combined",
      "The butter is placed in a frying pan over the fire, and left until it melts, then the egg mixture is placed and left on the fire until a golden color is obtained",
      "Eggs are placed in the oven under the grill, and left to maturity",
    ],
    side_dishes: "salad and yogurt",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [20, 30, 50, 60, 80],
    created_at: {
      order: "2",
    },
  },
];
export default BreakFastRecipesList;
