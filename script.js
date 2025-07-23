const products = [
  {
    name: "Bacon-Scented Mustache",
    url: "https://www.amazon.com/dp/B00FBB7UHY?tag=ciaran07-20"
  },
  {
    name: "Cat Butt Coloring Book",
    url: "https://www.amazon.com/dp/B085DND7QS?tag=ciaran07-20"
  },
  {
    name: "Yodelling Pickle",
    url: "https://www.amazon.com/dp/B0010VS078?tag=ciaran07-20"
  },
  {
    name: "Uranium Ore",
    url: "https://www.amazon.com/dp/B000796XXM?tag=ciaran07-20"
  },
  {
    name: "Pet Rock with Box",
    url: "https://www.amazon.com/dp/B01G5I6FQ2?tag=ciaran07-20"
  }
];

document.getElementById("click-button").addEventListener("click", () => {
  const random = products[Math.floor(Math.random() * products.length)];
  document.getElementById("product-display").innerHTML = `
    <h2>${random.name}</h2>
    <a href="${random.url}" target="_blank">View on Amazon</a>
  `;
});
