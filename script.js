const products = [
  {
    title: "Bacon Air Freshener",
    image: "https://m.media-amazon.com/images/I/81kPYk7U8-L._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B004U49UXY?tag=ciaran07-20"
  },
  {
    title: "Useless Box",
    image: "https://m.media-amazon.com/images/I/61OIPeMBZbL._AC_SL1001_.jpg",
    link: "https://www.amazon.com/dp/B00EYTM2TQ?tag=ciaran07-20"
  },
  {
    title: "Emergency Underpants",
    image: "https://m.media-amazon.com/images/I/71MzrTXR0pL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B001CDL5DK?tag=ciaran07-20"
  },
  {
    title: "Yodeling Pickle",
    image: "https://m.media-amazon.com/images/I/71d2wJp9lcL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B0010VS078?tag=ciaran07-20"
  }
];

function loadProduct() {
  const product = products[Math.floor(Math.random() * products.length)];
  document.getElementById("product-title").innerText = product.title;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-link").href = product.link;
}

function loadFact() {
  fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
    .then(res => res.json())
    .then(data => {
      document.getElementById("fact-text").innerText = data.text;
    })
    .catch(err => {
      document.getElementById("fact-text").innerText = "Fact failed to load.";
    });
}

window.onload = () => {
  loadProduct();
  loadFact();
};
