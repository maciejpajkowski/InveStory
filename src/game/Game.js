export const productsList = [
  {
    title: "Potatoes",
    description: "Good old potatoes!",
    price: 0.3
  },
  {
    title: "Bananas",
    description: "Yellow and delicious.",
    price: 0.7
  },
  {
    title: "Batteries",
    description: "Keep things powered up.",
    price: 1.5
  },
  {
    title: "Lamps",
    description: "Have some light in your life.",
    price: 2.2
  }
];

export const nextCycle = () => {
  setInterval(() => {
    Update();
  }, 5000);
}; // IMPORTANT!

export const Update = () => {};
