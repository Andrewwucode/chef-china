(function () {
  emailjs.init("6zoE2JLkcOyRD4MEt");
})();

const cart = [];
const TAX_RATE = 0.0775;

const cateringData = [
  {
    category: "Appetizers",
    items: [
      { id: "eggRolls", name: "Egg Rolls (Chicken, 24pc)", fullPrice: 37 },
      { id: "eggVegRolls", name: "Vegtable Egg Rolls (24pc)", fullPrice: 33 },
      { id: "creamWontons", name: "Cream Cheese Wontons", fullPrice: 37 },
      { id: "potStickers", name: "Pot Stickers", fullPrice: 37 },
      { id: "friedShrimp", name: "Fried Shrimp (60pc)", fullPrice: 48 },
    ],
  },
  {
    category: "Rice",
    items: [
      {
        id: "steamRice",
        name: "Steamed Rice",
        halfPrice: 14,
        fullPrice: 22,
      },
      {
        id: "friedRice",
        name: "Lightly Seasoned Fried Rice",
        halfPrice: 16,
        fullPrice: 28,
      },
      {
        id: "eggFriedRice",
        name: "Egg and Green Onion Fried Rice",
        halfPrice: 25,
        fullPrice: 35,
      },
      {
        id: "veggieFriedRice",
        name: "Vegtable Fried Rice",
        halfPrice: 26,
        fullPrice: 43,
      },
      {
        id: "chickenFriedRice",
        name: "Chicken Fried Rice",
        halfPrice: 30,
        fullPrice: 46,
      },
      {
        id: "porkFriedRice",
        name: "Pork Fried Rice",
        halfPrice: 30,
        fullPrice: 46,
      },
      {
        id: "bbqFriedRice",
        name: "BBQ Pork Fried Rice",
        halfPrice: 30,
        fullPrice: 46,
      },
      {
        id: "beefFriedRice",
        name: "Beef Fried Rice",
        halfPrice: 30,
        fullPrice: 46,
      },
      {
        id: "shrimpFriedRice",
        name: "Shrimp Fried Rice",
        halfPrice: 31,
        fullPrice: 48,
      },

      {
        id: "houseFriedRice",
        name: "House Special Fried Rice",
        halfPrice: 31,
        fullPrice: 48,
      },
    ],
  },
  {
    category: "Lo Mein",
    items: [
      {
        id: "vegLoMein",
        name: "Vegtable Lo Mein",
        halfPrice: 28,
        fullPrice: 48,
      },
      {
        id: "chickenLoMein",
        name: "Chicken Lo Mein",
        halfPrice: 29,
        fullPrice: 50,
      },
      { id: "porkLoMein", name: "Pork Lo Mein", halfPrice: 29, fullPrice: 50 },
      { id: "bbqLoMein", name: "BBQ Lo Mein", halfPrice: 29, fullPrice: 50 },

      { id: "beefLoMein", name: "Beef Lo Mein", halfPrice: 29, fullPrice: 50 },
      {
        id: "shrimpLoMein",
        name: "Shrimp Lo Mein",
        halfPrice: 32,
        fullPrice: 53,
      },

      {
        id: "houseLoMein",
        name: "House Special Lo Mein",
        halfPrice: 32,
        fullPrice: 53,
      },
    ],
  },
  {
    category: "Chow Mein",
    items: [
      {
        id: "vegetableChowMein",
        name: "Vegetable Chow Mein",
        halfPrice: 27,
        fullPrice: 48,
      },
      {
        id: "porkChowMein",
        name: "Pork Chow Mein",
        halfPrice: 29,
        fullPrice: 49,
      },
      {
        id: "chickenChowMein",
        name: "Chicken Chow Mein",
        halfPrice: 29,
        fullPrice: 49,
      },
      {
        id: "porkChowMein",
        name: "Pork Chow Mein",
        halfPrice: 29,
        fullPrice: 49,
      },
      {
        id: "beefChowMein",
        name: "Beef Chow Mein",
        halfPrice: 29,
        fullPrice: 49,
      },
      {
        id: "shrimpChowMein",
        name: "Shrimp Chow Mein",
        halfPrice: 31,
        fullPrice: 52,
      },

      {
        id: "houseChowMein",
        name: "House Special Chow Mein",
        halfPrice: 31,
        fullPrice: 52,
      },
    ],
  },
  {
    category: "Chow Fun",
    items: [
      {
        id: "vegChowFun",
        name: "Vegtable Chow Fun",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "beefChowFun",
        name: "Beef Chow Fun",
        halfPrice: 31,
        fullPrice: 53,
      },
      {
        id: "chickenChowFun",
        name: "Chicken Chow Fun",
        halfPrice: 31,
        fullPrice: 53,
      },
      {
        id: "bbqChowFun",
        name: "BBQ Chow Fun",
        halfPrice: 31,
        fullPrice: 53,
      },
      {
        id: "porkChowFun",
        name: "Pork Chow Fun",
        halfPrice: 31,
        fullPrice: 53,
      },
      {
        id: "shrimpChowFun",
        name: "Shrimp Chow Fun",
        halfPrice: 32,
        fullPrice: 54,
      },

      {
        id: "houseChowFun",
        name: "House Special Chow Fun",
        halfPrice: 32,
        fullPrice: 54,
      },
    ],
  },
  {
    category: "Vegetables",
    items: [
      {
        id: "brocOysterSauce",
        name: "Broccoli and Oyster Sauce",
        halfPrice: 25,
        fullPrice: 46,
      },
      {
        id: "mushroomDelight",
        name: "Mushroom Delight",
        halfPrice: 25,
        fullPrice: 46,
      },
      {
        id: "buddistDelight",
        name: "Buddist Delight",
        halfPrice: 25,
        fullPrice: 46,
      },
      {
        id: "beansprout",
        name: "Beansprout and Green Onions",
        halfPrice: 25,
        fullPrice: 46,
      },
      {
        id: "vegmixTofu",
        name: "Vegtable Mix with Tofu",
        halfPrice: 25,
        fullPrice: 46,
      },
    ],
  },
  {
    category: "Mapo Tofu",
    items: [
      {
        id: "vegMapo",
        name: "Vegtable Mapo Tofu",
        halfPrice: 27,
        fullPrice: 48,
      },
      {
        id: "porkMapo",
        name: "Pork Mapo Tofu",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "bbqMapo",
        name: "BBQ Mapo Tofu",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "chickenMapo",
        name: "Chicken Mapo Tofu",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "beefMapo",
        name: "Beef Mapo Tofu",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "shrimpMapo",
        name: "Shrimp Mapo Tofu",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "houseMapo",
        name: "House Mapo Tofu",
        halfPrice: 29,
        fullPrice: 50,
      },
    ],
  },
  {
    category: "Pork",
    items: [
      {
        id: "sweetSourPork",
        name: "Sweet and Sour Pork",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "porkChopSuey",
        name: "Pork Chop Suey",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "porkSnowPeas",
        name: "Pork with Snowpeas",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "sezuanPork",
        name: "Szechan Pork",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "kungPoaPork",
        name: "Kung Poa Pork",
        halfPrice: 28,
        fullPrice: 49,
      },
    ],
  },
  {
    category: "Chicken",
    items: [
      {
        id: "mongolianChicken",
        name: "Mongolian Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "chickenBeanSprout",
        name: "Chicken with Beansprout",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "broccAndChicken",
        name: "Broccoli and Chicken",
        halfPrice: 45,
        fullPrice: 85,
      },
      {
        id: "almondChicken",
        name: "Almond Chicken",
        halfPrice: 45,
        fullPrice: 85,
      },
      {
        id: "cashewChicken",
        name: "Cashew Chicken",
        halfPrice: 45,
        fullPrice: 85,
      },
      {
        id: "orangeChicken",
        name: "Orange Chicken",
        halfPrice: 40,
        fullPrice: 80,
      },
      {
        id: "orangeChicken",
        name: "Orange Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "sweetChicken",
        name: "Sweet and Sour Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "lemonChicken",
        name: "Lemon Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "cantoneseChicken",
        name: "Cantonese Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "chickenChopSuey",
        name: "Chicken Chop Chicken",
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
        id: "genChicken",
        name: "General Tsao Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "curryChicken",
        name: "Curry Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "kungPoaChicken",
        name: "Kung Poa Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
      {
        id: "szechuanChicken",
        name: "Szechuan Chicken",
        halfPrice: 28,
        fullPrice: 49,
      },
    ],
  },
  {
    category: "Beef",
    items: [
      {
        id: "mongBeef",
        name: "Mongolian Beef",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "broccoliBeef",
        name: "Broccoli and Beef",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "beefChopSuey",
        name: "Beef Chop Suey",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "greenPepperBeef",
        name: "Green Pepper Beef",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "mushroomBeef",
        name: "Mushroom Beef",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "curryBeef",
        name: "Curry Beef",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "szechuanBeef",
        name: "Szechuan Beef",
        halfPrice: 29,
        fullPrice: 50,
      },
      {
        id: "kungpoaBeef",
        name: "Kung Poa Beef",
        halfPrice: 29,
        fullPrice: 50,
      },
    ],
    category: "Shrimp",
    items: [
      {
        id: "mongShrimp",
        name: "Mongolian Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "shrimpSprouts",
        name: "Shrimp with Beansprouts",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "brocShrimp",
        name: "Broccoli Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "shrimpChopSuey",
        name: "Shrimp Chop Suey",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "almondShrimp",
        name: "Almond Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "cashewShrimp",
        name: "Cashew Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "mushroomShrimp",
        name: "Mushroom Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "shrimpLobster",
        name: "Shrimp with Lobster Sauce",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "curryShrimp",
        name: "Curry Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "szechuanShrimp",
        name: "Szechuan Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
      {
        id: "kungpoaShrimp",
        name: "Szechuan Shrimp",
        halfPrice: 30,
        fullPrice: 52,
      },
    ],
    category: "Egg Foo Young",
    items: [
      {
        id: "vegFoo",
        name: "Vegtable Egg Foo Young",
        fullPrice: 53,
      },
      {
        id: "bbqFoo",
        name: "BBQ Egg Foo Young",
        fullPrice: 55,
      },
      {
        id: "porkFoo",
        name: "Pork Egg Foo Young",
        fullPrice: 55,
      },
      {
        id: "chickenFoo",
        name: "Chicken Egg Foo Young",
        fullPrice: 55,
      },
      {
        id: "beefFoo",
        name: "Beef Egg Foo Young",
        fullPrice: 55,
      },
      {
        id: "shrimpFoo",
        name: "Shrimp Egg Foo Young",
        fullPrice: 57,
      },
      {
        id: "houseFoo",
        name: "House Egg Foo Young",
        fullPrice: 57,
      },
    ],
    category: "Salt and Pepper",
    items: [
      {
        id: "saltWings",
        name: "Salt and Pepper Chicken Wings (Full, 50pc)",
        halfPrice: 31,
        fullPrice: 56,
      },
      {
        id: "breadedSaltPepper",
        name: "Breaded Boneless White MEAT CHICKEN",
        halfPrice: 30,
        fullPrice: 53,
      },
      {
        id: "shrimpHeadOn",
        name: "Salt and Pepper Shrimp with Head On (Full, 60pc)",
        halfPrice: 34,
        fullPrice: 64,
      },
      {
        id: "shrimpHeadOff",
        name: "Salt and Pepper Shrimp with Head Off (Full, 110pc)",
        halfPrice: 34,
        fullPrice: 64,
      },
      {
        id: "SaltandPepperCalamari",
        name: "Salt and Peper Calamari ",
        halfPrice: 34,
        fullPrice: 64,
      },
      {
        id: "SaltandPepperBeef",
        name: "Salt and Peper Beef ",
        halfPrice: 32,
        fullPrice: 57,
      },
      {
        id: "SaltandPepperPork",
        name: "Salt and Peper Pork ",
        halfPrice: 32,
        fullPrice: 57,
      },
      {
        id: "SaltandPepperTofu",
        name: "Salt and Peper Tofu ",
        halfPrice: 29,
        fullPrice: 53,
      },
    ],
  },
];

function renderCateringMenu() {
  const container = document.getElementById("cateringMenu");
  container.innerHTML = "";

  cateringData.forEach((category) => {
    const categoryDiv = document.createElement("div");

    const catButton = document.createElement("button");
    catButton.textContent = "+ " + category.category;
    catButton.className = "category-button";
    catButton.onclick = () => {
      itemList.classList.toggle("hidden");
      catButton.textContent =
        (itemList.classList.contains("hidden") ? "+ " : "– ") +
        category.category;
    };

    const itemList = document.createElement("div");
    itemList.className = "item-list hidden";

    category.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      const itemButton = document.createElement("button");
      itemButton.textContent = "+ " + item.name;
      itemButton.className = "item-button";
      itemButton.onclick = () => {
        trayDiv.classList.toggle("hidden");
        itemButton.textContent =
          (trayDiv.classList.contains("hidden") ? "+ " : "– ") + item.name;
      };

      const trayDiv = document.createElement("div");
      trayDiv.className = "tray-options hidden";

      if (item.halfPrice !== undefined)
        trayDiv.appendChild(createTrayOption(item, "half", item.halfPrice));
      if (item.fullPrice !== undefined)
        trayDiv.appendChild(createTrayOption(item, "full", item.fullPrice));

      const addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.onclick = () => addToCartFromElement(trayDiv);
      trayDiv.appendChild(addButton);

      itemDiv.appendChild(itemButton);
      itemDiv.appendChild(trayDiv);
      itemList.appendChild(itemDiv);
    });

    categoryDiv.appendChild(catButton);
    categoryDiv.appendChild(itemList);
    container.appendChild(categoryDiv);
  });
}

function createTrayOption(item, size, price) {
  const wrapper = document.createElement("div");
  wrapper.className = "tray-row";

  const label = document.createElement("span");
  label.textContent = `${
    size.charAt(0).toUpperCase() + size.slice(1)
  } Tray ($${price}):`;
  wrapper.appendChild(label);

  const minus = document.createElement("button");
  minus.textContent = "–";
  minus.onclick = () => {
    const input = wrapper.querySelector("input");
    if (parseInt(input.value) > 0) input.value = parseInt(input.value) - 1;
  };
  wrapper.appendChild(minus);

  const input = document.createElement("input");
  input.type = "text";
  input.value = 0;
  input.readOnly = true;
  input.className = "qty-input";
  input.dataset.id = item.id + "_" + size;
  input.dataset.name = item.name;
  input.dataset.price = price;
  input.dataset.size = size;
  wrapper.appendChild(input);

  const plus = document.createElement("button");
  plus.textContent = "+";
  plus.onclick = () => {
    const input = wrapper.querySelector("input");
    input.value = parseInt(input.value) + 1;
  };
  wrapper.appendChild(plus);

  return wrapper;
}

function addToCartFromElement(trayDiv) {
  const inputs = trayDiv.querySelectorAll(".qty-input");
  inputs.forEach((input) => {
    const qty = parseInt(input.value);
    if (qty > 0) {
      const { id, name, size, price } = input.dataset;
      const existing = cart.find(
        (item) => item.id === id && item.size === size
      );
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({ id, name, size, price: parseFloat(price), qty });
      }
      input.value = 0;
    }
  });
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `${item.name} (${item.size}) - $${item.price} × ${
      item.qty
    } = $${itemTotal.toFixed(2)}`;
    cartDiv.appendChild(itemDiv);
  });

  const taxAmount = subtotal * TAX_RATE;
  const total = subtotal + taxAmount;

  document.getElementById(
    "subtotal"
  ).innerText = `Subtotal (no tax): $${subtotal.toFixed(2)}`;
  document.getElementById("tax").innerText = `Tax (7.75%): $${taxAmount.toFixed(
    2
  )}`;
  document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}

function clearArray() {
  cart.length = 0;
  renderCart();
}

function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = cart
    .map(
      (item) =>
        `${item.name} (${item.size}) - $${item.price} × ${item.qty} = $${(
          item.price * item.qty
        ).toFixed(2)}`
    )
    .join("\n");

  const templateParams = {
    user_name: name,
    user_email: email,
    user_phone: phone,
    order_summary: message,
    total_price: document.getElementById("total").innerText,
  };

  emailjs.send("service_ld1qzwr", "template_kehfb7l", templateParams).then(
    (response) => {
      alert(
        "Thank you for ordering with us! Someone will give you a call soon to confirm the order!"
      );
      clearArray();
      document.getElementById("orderForm").reset();
    },
    (error) => {
      alert("Failed to send order. Please try again.");
      console.error("EmailJS error:", error);
    }
  );
}
