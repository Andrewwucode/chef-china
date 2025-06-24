// Catering Items Data
const cateringItems = [
  {
    id: "eggRolls",
    name: "Egg Rolls (Chicken, 24pc)",
    fullPrice: 37,
  },
  {
    id: "veggieEggRolls",
    name: "Veggie Egg Rolls (24pc)",
    fullPrice: 37,
  },
  {
    id: "potstickers",
    name: "Potstickers (50pc)",

    fullPrice: 37,
  },
  {
    id: "creamCheeseWontons",
    name: "Cream Cheese Wontons (60pc)",
    fullPrice: 37,
  },
  {
    id: "friedShrimps",
    name: "Fried Shrimps (60pc)",
    fullPrice: 48,
  },
  {
    id: "plainFriedRice",
    name: "Plain Fried Rice",
    halfPrice: 28,
    fullPrice: 44,
  },
  {
    id: "plainWhiteRice",
    name: "Plain White Rice",
    halfPrice: 22,
    fullPrice: 32,
  },
  { id: "orangeChicken", name: "Orange Chicken", halfPrice: 28, fullPrice: 49 },
  { id: "mongolianBeef", name: "Mongolian Beef", halfPrice: 29, fullPrice: 50 },
  { id: "orangeBeef", name: "Orange Beef", halfPrice: 33, fullPrice: 54 },

  {
    id: "eggsgreenion",
    name: "Eggs and Green Onion Fried Rice",
    halfPrice: 25,
    fullPrice: 39,
  },
  {
    id: "vegfriedrice",
    name: "Vegtable  Fried Rice",
    halfPrice: 26,
    fullPrice: 43,
  },
  {
    id: "friedRiceBBQPork",
    name: "BBQ Pork Fried Rice",
    halfPrice: 30,
    fullPrice: 46,
  },
  {
    id: "friedRicePork",
    name: "Pork Fried Rice",
    halfPrice: 30,
    fullPrice: 46,
  },
  {
    id: "friedRiceChicken",
    name: "Chicken Fried Rice",
    halfPrice: 30,
    fullPrice: 46,
  },
  {
    id: "friedRiceBeef",
    name: "Beef Fried Rice",
    halfPrice: 30,
    fullPrice: 46,
  },
  {
    id: "friedRiceShrimp",
    name: "Shrimp Fried Rice",
    halfPrice: 31,
    fullPrice: 48,
  },
  {
    id: "housefried rice",
    name: "House Special Fried Rice",
    halfPrice: 31,
    fullPrice: 48,
  },

  {
    id: "loMeinBBQVeg",
    name: "Vegtable Lo Mein",
    halfPrice: 28,
    fullPrice: 48,
  },
  {
    id: "loMeinBBQPork",
    name: "BBQ Pork Lo Mein",
    halfPrice: 29,
    fullPrice: 50,
  },
  { id: "loMeinPork", name: "Pork Lo Mein", halfPrice: 29, fullPrice: 50 },
  {
    id: "loMeinChicken",
    name: "Chicken Lo Mein",
    halfPrice: 29,
    fullPrice: 50,
  },
  { id: "loMeinBeef", name: "Beef Lo Mein", halfPrice: 29, fullPrice: 50 },
  { id: "loMeinShrimp", name: "Shrimp Lo Mein", halfPrice: 32, fullPrice: 53 },
  { id: "loMeinHouse", name: "House Lo Mein", halfPrice: 32, fullPrice: 53 },

  {
    id: "chowMeinVeg",
    name: "Vegtable Chow Mein",
    halfPrice: 27,
    fullPrice: 48,
  },
  {
    id: "chowMeinBBQPork",
    name: "BBQ Pork Chow Mein",
    halfPrice: 28,
    fullPrice: 49,
  },
  { id: "chowMeinPork", name: "Pork Chow Mein", halfPrice: 28, fullPrice: 49 },
  {
    id: "chowMeinChicken",
    name: "Chicken Chow Mein",
    halfPrice: 28,
    fullPrice: 49,
  },
  { id: "chowMeinBeef", name: "Beef Chow Mein", halfPrice: 28, fullPrice: 49 },
  {
    id: "chowMeinShrimp",
    name: "Shrimp Chow Mein",
    halfPrice: 31,
    fullPrice: 52,
  },
  {
    id: "chowMeinHouse",
    name: "House Special Chow Mein",
    halfPrice: 31,
    fullPrice: 52,
  },

  { id: "chowFunVeg", name: "Vegtable Chow Fun", halfPrice: 29, fullPrice: 50 },
  {
    id: "chowFunBBQPork",
    name: "BBQ Pork Chow Fun",
    halfPrice: 31,
    fullPrice: 53,
  },
  { id: "chowFunPork", name: "Pork Chow Fun", halfPrice: 31, fullPrice: 53 },
  {
    id: "chowFunChicken",
    name: "Chicken Chow Fun",
    halfPrice: 31,
    fullPrice: 53,
  },
  { id: "chowFunBeef", name: "Beef Chow Fun", halfPrice: 31, fullPrice: 53 },
  {
    id: "chowFunShrimp",
    name: "Shrimp Chow Fun",
    halfPrice: 32,
    fullPrice: 54,
  },
  {
    id: "chowFunHouse",
    name: "House Special Chow Fun",
    halfPrice: 32,
    fullPrice: 54,
  },

  {
    id: "brocOyster",
    name: "Broccoli and Oyster Sauce",
    halfPrice: 25,
    fullPrice: 46,
  },
  { id: "mushDelight", name: "Mushroom Delight", halfPrice: 25, fullPrice: 46 },
  { id: "Buddha", name: "Buddha's Delight", halfPrice: 25, fullPrice: 46 },
  {
    id: "beansproutWhiteOnion",
    name: "Bean Sprouts with Green Onions",
    halfPrice: 31,
    fullPrice: 52,
  },

  {
    id: "veggieMapo",
    name: "Veggie Spicy Mapo Tofu",
    halfPrice: 27,
    fullPrice: 48,
  },
  { id: "bbqMapo", name: "BBQ Spicy Mapo Tofu", halfPrice: 28, fullPrice: 49 },
  {
    id: "porkMapo",
    name: "pork Spicy Mapo Tofu",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "chickenMapo",
    name: "Chicken Spicy Mapo Tofu",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "beefMapo",
    name: "Beef Spicy Mapo Tofu",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "shrimpMapo",
    name: "Shrimp Spicy Mapo Tofu",
    halfPrice: 29,
    fullPrice: 50,
  },
  {
    id: "houseMapo",
    name: "House Spicy Mapo Tofu",
    halfPrice: 29,
    fullPrice: 50,
  },

  {
    id: "sweetSourPork",
    name: "Sweet and Sour Pork",
    halfPrice: 28,
    fullPrice: 49,
  },
  { id: "porkChopSuey", name: "Pork Chop Suey", halfPrice: 28, fullPrice: 49 },
  {
    id: "porkSnowPeas",
    name: "Pork with Snow Peas",
    halfPrice: 28,
    fullPrice: 49,
  },
  { id: "szechuanPork", name: "Szechuan Pork", halfPrice: 28, fullPrice: 49 },
  { id: "kungPaoPork", name: "Kung Pao Pork", halfPrice: 28, fullPrice: 49 },

  {
    id: "mongolianChicken",
    name: "Mongolian Chicken",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "chickenBeanSprouts",
    name: "Chicken with Bean Sprouts",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "chickenBroccoli",
    name: "Chicken and Broccoli",
    halfPrice: 28,
    fullPrice: 49,
  },
  { id: "almondChicken", name: "Almond Chicken", halfPrice: 28, fullPrice: 49 },
  { id: "cashewChicken", name: "Cashew Chicken", halfPrice: 28, fullPrice: 49 },
  { id: "orangeChicken", name: "Orange Chicken", halfPrice: 28, fullPrice: 49 },
  {
    id: "sweetSourChicken",
    name: "Sweet and Sour Chicken",
    halfPrice: 28,
    fullPrice: 49,
  },
  { id: "lemonChicken", name: "Lemon Chicken", halfPrice: 28, fullPrice: 49 },
  {
    id: "cantoneseChicken",
    name: "Cantonese Chicken",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "chickenChopSuey",
    name: "Chicken Chop Suey",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "mushroomChicken",
    name: "Mushroom Chicken",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "generalTsaoChicken",
    name: "General Tsao Chicken",
    halfPrice: 28,
    fullPrice: 49,
  },
  { id: "curryChicken", name: "Curry Chicken", halfPrice: 28, fullPrice: 49 },
  {
    id: "kungPaoChicken",
    name: "Kung Pao Chicken",
    halfPrice: 28,
    fullPrice: 49,
  },
  {
    id: "szechuanChicken",
    name: "Szechuan Chicken",
    halfPrice: 28,
    fullPrice: 49,
  },

  { id: "mongolianBeef", name: "Mongolian Beef", halfPrice: 29, fullPrice: 50 },
  {
    id: "beefBroccoli",
    name: "Beef and Broccoli",
    halfPrice: 29,
    fullPrice: 50,
  },
  { id: "beefChopSuey", name: "Beef Chop Suey", halfPrice: 29, fullPrice: 50 },
  {
    id: "greenPepperBeef",
    name: "Green Pepper and Beef",
    halfPrice: 29,
    fullPrice: 50,
  },
  { id: "mushroomBeef", name: "Mushroom Beef", halfPrice: 29, fullPrice: 50 },
  { id: "curryBeef", name: "Curry Beef", halfPrice: 29, fullPrice: 50 },
  { id: "szechuanBeef", name: "Szechuan Beef", halfPrice: 29, fullPrice: 50 },
  { id: "kungPaoBeef", name: "Kung Pao Beef", halfPrice: 29, fullPrice: 50 },
  { id: "orangeBeef", name: "Orange Beef", halfPrice: 33, fullPrice: 54 },

  {
    id: "mongolianShrimp",
    name: "Mongolian Shrimp",
    halfPrice: 30,
    fullPrice: 52,
  },
  {
    id: "shrimpBeanSprouts",
    name: "Shrimp with Bean Sprouts",
    halfPrice: 30,
    fullPrice: 52,
  },
  {
    id: "shrimpBroccoli",
    name: "Shrimp and Broccoli",
    halfPrice: 30,
    fullPrice: 52,
  },
  {
    id: "shrimpChopSuey",
    name: "Shrimp Chop Suey",
    halfPrice: 30,
    fullPrice: 52,
  },
  { id: "almondShrimp", name: "Almond Shrimp", halfPrice: 30, fullPrice: 52 },
  { id: "cashewShrimp", name: "Cashew Shrimp", halfPrice: 30, fullPrice: 52 },
  {
    id: "mushroomShrimp",
    name: "Mushroom Shrimp",
    halfPrice: 30,
    fullPrice: 52,
  },
  {
    id: "shrimpLobsterSauce",
    name: "Shrimp with Lobster Sauce",
    halfPrice: 30,
    fullPrice: 52,
  },
  { id: "curryShrimp", name: "Curry Shrimp", halfPrice: 30, fullPrice: 52 },
  {
    id: "szechuanShrimp",
    name: "Szechuan Shrimp",
    halfPrice: 30,
    fullPrice: 52,
  },
  {
    id: "kungPaoShrimp",
    name: "Kung Pao Shrimp",
    halfPrice: 30,
    fullPrice: 52,
  },

  {
    id: "eggFooYoungVeg",
    name: "Veggie Egg Foo Young",

    fullPrice: 53,
  },

  {
    id: "eggFooYoungBBQPork",
    name: "BBQ Pork Egg Foo Young",

    fullPrice: 55,
  },
  {
    id: "eggFooYoungPork",
    name: "Pork Egg Foo Young",

    fullPrice: 55,
  },
  {
    id: "eggFooYoungChicken",
    name: "Chicken Egg Foo Young",

    fullPrice: 55,
  },
  {
    id: "eggFooYoungBeef",
    name: "Beef Egg Foo Young",
    halfPrice: null,
    fullPrice: 55,
  },
  {
    id: "eggFooYoungShrimp",
    name: "Shrimp Egg Foo Young",

    fullPrice: 57,
  },
  {
    id: "eggFooYoungShrimp",
    name: "House Egg Foo Young",

    fullPrice: 57,
  },

  {
    id: "saltPepperWings",
    name: "Salt & Pepper Chicken Wings (25pc/50pc)",
    halfPrice: 31,
    fullPrice: 56,
  },
  {
    id: "saltPepperShrimp",
    name: "Salt & Pepper Shrimp (Head On)",
    halfPrice: 34,
    fullPrice: 64,
  },
  {
    id: "saltPepperShrimpHeadOff",
    name: "Salt & Pepper Shrimp (Head Off)",
    halfPrice: 34,
    fullPrice: 64,
  },
  {
    id: "saltPepperBeef",
    name: "Salt & Pepper Beef",
    halfPrice: 32,
    fullPrice: 57,
  },
  {
    id: "saltPepperPork",
    name: "Salt & Pepper Pork",
    halfPrice: 32,
    fullPrice: 57,
  },
  {
    id: "saltPepperTofu",
    name: "Salt & Pepper Tofu",
    halfPrice: 29,
    fullPrice: 53,
  },
  {
    id: "saltPepperSeasoning",
    name: "Salt & Pepper Seasoning",
    halfPrice: null,
    fullPrice: 4,
  },
];

const cart = [];

function renderCateringMenu() {
  const menu = document.getElementById("cateringMenu");
  menu.innerHTML = "";
  cateringItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "catering-item";

    let halfInputs = "";
    if (item.halfPrice != null) {
      halfInputs = `
        <label>Qty (Half):</label>
        <input type="number" min="0" value="0" id="${item.id}-half" />
      `;
    }

    div.innerHTML = `
      <strong>${item.name}</strong>
      <p>${item.halfPrice != null ? `Half: $${item.halfPrice} | ` : ""}Full: $${
      item.fullPrice
    }</p>
      ${halfInputs}
      <label>Qty (Full):</label>
      <input type="number" min="0" value="0" id="${item.id}-full" />
      <button onclick="addItemToCart('${item.id}')">Add to Cart</button>
    `;
    menu.appendChild(div);
  });
}

// Add Item to Cart
function addItemToCart(itemId) {
  const item = cateringItems.find((i) => i.id === itemId);

  const halfInput = document.getElementById(`${itemId}-half`);
  const fullInput = document.getElementById(`${itemId}-full`);

  const halfQty = halfInput ? parseInt(halfInput.value) || 0 : 0;
  const fullQty = fullInput ? parseInt(fullInput.value) || 0 : 0;

  if (halfQty === 0 && fullQty === 0) return;

  const existing = cart.find((c) => c.id === itemId);
  if (existing) {
    existing.halfQty += halfQty;
    existing.fullQty += fullQty;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      halfPrice: item.halfPrice,
      fullPrice: item.fullPrice,
      halfQty,
      fullQty,
    });
  }

  if (halfInput) halfInput.value = 0;
  if (fullInput) fullInput.value = 0;

  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item) => {
    const halfSubtotal =
      item.halfPrice != null ? item.halfQty * item.halfPrice : 0;
    const fullSubtotal =
      item.fullPrice != null ? item.fullQty * item.fullPrice : 0;

    const itemTotal = halfSubtotal + fullSubtotal;
    subtotal += itemTotal;

    const p = document.createElement("p");
    p.textContent = `${item.name} - Half: ${item.halfQty}, Full: ${
      item.fullQty
    } => $${itemTotal.toFixed(2)}`;
    cartDiv.appendChild(p);
  });

  const tax = subtotal * 0.0775;
  const total = subtotal + tax;

  const summary = document.createElement("div");
  summary.innerHTML = `
    <hr>
    <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
    <p><strong>Tax (7.75%):</strong> $${tax.toFixed(2)}</p>
    <p><strong>Total:</strong> $${total.toFixed(2)}</p>
  `;
  cartDiv.appendChild(summary);

  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

function clearArray() {
  cart.length = 0; // Empties the array without reassigning it
  renderCart();
}
