document.addEventListener("DOMContentLoaded", function () {
  const menuItems = {
    Appetizers: [
      { name: "Egg Rolls (Chicken, 4pc)", price: "$5.99" },
      { name: "Cream Cheese Wontons (6pc)", price: "$6.99" },
    ],
    FriedRice: [
      { name: "Fried Rice with Chicken", price: "$9.99" },
      { name: "Fried Rice with Beef", price: "$10.99" },
    ],
    LoMein: [
      { name: "Chicken Lo Mein", price: "$10.49" },
      { name: "Beef Lo Mein", price: "$11.49" },
    ],
    ChowMein: [
      { name: "Chicken Chow Mein", price: "$9.99" },
      { name: "Vegetable Chow Mein", price: "$8.99" },
    ],
    Chicken: [
      { name: "Orange Chicken", price: "$11.99" },
      { name: "General Tso’s Chicken", price: "$11.99" },
    ],
    Beef: [
      { name: "Beef with Broccoli", price: "$12.49" },
      { name: "Mongolian Beef", price: "$12.99" },
    ],
    Vegetables: [
      { name: "Stir-Fried Mixed Vegetables", price: "$9.49" },
      { name: "Spicy Mapo Tofu", price: "$9.99" },
    ],
  };

  const categoryList = document.getElementById("categoryList");
  const menuGrid = document.getElementById("menuItemsGrid");

  function renderMenuItems(category) {
    menuGrid.innerHTML = ""; // Clear previous items
    const items = menuItems[category] || [];
    items.forEach((item) => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      `;
      menuGrid.appendChild(div);
    });
  }

  // Initial render
  renderMenuItems("Appetizers");

  // Add click listeners for categories
  document.querySelectorAll("#categoryList .category").forEach((li) => {
    li.addEventListener("click", () => {
      document
        .querySelectorAll("#categoryList .category")
        .forEach((el) => el.classList.remove("active"));
      li.classList.add("active");
      renderMenuItems(li.dataset.category);
    });
  });
});
