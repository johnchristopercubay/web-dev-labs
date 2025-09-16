const foods = {
  "lugaw": {
    title: "Lugaw",
    img: "https://images.unsplash.com/photo-1617196037887-fc1b043f64a1",
    desc: "Lugaw is a classic Filipino rice porridge loved in Las Piñas. Served hot, it provides comfort especially on rainy days. Locals enjoy it with egg, chicken, or tokwa’t baboy. Affordable and filling, lugaw remains a popular meal in every neighborhood."
  },
  "bibingka": {
    title: "Bibingka",
    img: "https://images.unsplash.com/photo-1604908176997-89d1cbb7d1cf",
    desc: "Bibingka is a soft rice cake cooked in banana leaves, often eaten during Christmas. In Las Piñas, families enjoy it as merienda with coconut and sugar on top. Its warm, sweet taste is tied to Filipino holiday traditions."
  },
  "turon": {
    title: "Turon",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    desc: "Turon is a crispy fried banana roll coated with caramelized sugar. Street vendors in Las Piñas sell it fresh from the pan. Sweet, crunchy, and satisfying, turon is a go-to snack for students and workers alike."
  },
  "pancit": {
    title: "Pancit",
    img: "https://images.unsplash.com/photo-1609743521120-b50ef8a2ecb1",
    desc: "Pancit is a noodle dish symbolizing long life. In Las Piñas, it is always served at birthdays and fiestas. With vegetables, meat, and calamansi, pancit reflects Filipino flavors that bring families and communities together."
  },
  "halo-halo": {
    title: "Halo-Halo",
    img: "https://images.unsplash.com/photo-1617191517009-0f8f3a9f28e7",
    desc: "Halo-Halo is a colorful dessert of crushed ice, milk, and sweet toppings like beans, fruits, and leche flan. In Las Piñas, it’s the ultimate summer cooler, enjoyed by families after a hot day."
  },
  "sisig": {
    title: "Sisig",
    img: "https://images.unsplash.com/photo-1613145993484-5a836b6b5480",
    desc: "Sisig is a sizzling dish made from pork, onions, and chili, often enjoyed with rice or beer. In Las Piñas, many eateries serve their own version, making it a staple pulutan and a city favorite."
  },
  "kare-kare": {
    title: "Kare-Kare",
    img: "https://images.unsplash.com/photo-1625943556644-7c2d7eac191f",
    desc: "Kare-Kare is a peanut-based stew with vegetables and oxtail. Paired with bagoong, it is rich and flavorful. Families in Las Piñas prepare kare-kare for fiestas, symbolizing togetherness and Filipino hospitality."
  },
  "lechon": {
    title: "Lechon",
    img: "https://images.unsplash.com/photo-1592928302514-fd34e65e073a",
    desc: "Lechon, or roasted pig, is the star of any Filipino celebration. In Las Piñas, lechon stalls attract customers with crispy skin and juicy meat, making it a centerpiece dish for special occasions."
  },
  "silog": {
    title: "Silog Meals",
    img: "https://images.unsplash.com/photo-1617195737194-9cdbaff342f0",
    desc: "Silog meals are Filipino breakfast favorites, combining garlic rice, fried egg, and a choice of meat. Popular in Las Piñas eateries, silog is affordable, filling, and perfect for busy mornings."
  }
};

function showFood(key) {
  const food = foods[key];
  document.getElementById('foodTitle').innerText = food.title;
  document.getElementById('foodImg').src = food.img;
  document.getElementById('foodDesc').innerText = food.desc;
  document.getElementById('foodDetail').classList.remove('hidden');
}

function closeFood() {
  document.getElementById('foodDetail').classList.add('hidden');
}