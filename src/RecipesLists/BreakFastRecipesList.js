const BreakFastRecipesList = [
  {
    id: 1,
    type: "break_fast",
    category: "oriental",
    country: "Syria",
    title: "olives",
    description: "Yamanees lunch meal",
    getImageSrc: () => require("../images/photo1.jpg"),
    ingrediants: [
      "1 kg chicken legs",
      "Basmati rice",
      "onion",
      "2.5 L water",
      "salt",
      "paper",
    ],
    preparation_steps: [],
    side_dishes: "salad and yogurt",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "1",
    },
  },

  {
    id: 2,
    type: "break_fast",
    category: "western",
    country: "Lebanon",
    title: "eggs",
    description:
      "dsfsg sfgsfgs jhfdkjs jkshdfkj hghsd ,jhkjhdf jhh bk,hgkug hgutyf",
    getImageSrc: () => require("../images/photo6.jpg"),
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
    side_dishes: "salad and yogurt",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [80, 90, 100, 120, 150],
    created_at: {
      order: "2",
    },
  },
];
export default BreakFastRecipesList;
