/* Filename: ComplexApplication.js */

// This is a complex JavaScript code for an e-commerce website

// Object for storing user information
const user = {
  name: "",
  email: "",
  address: "",
};

// Array of product objects
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    inStock: false,
  },
  {
    id: 3,
    name: "Product 3",
    price: 7.5,
    inStock: true,
  },
  // ... add more products here
];

// Function to display product list
function displayProductList() {
  console.log("Available products:");
  products.forEach((product) => {
    const stockStatus = product.inStock ? "In stock" : "Out of stock";
    console.log(`${product.id} - ${product.name} - $${product.price} - ${stockStatus}`);
  });
}

// Function to add a product to the shopping cart
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    console.log(`Added ${product.name} to the cart.`);
    // Add the product to the user's cart object
    user.cart.push(product);
  } else {
    console.log("Product not found.");
  }
}

// Function to remove a product from the shopping cart
function removeFromCart(productId) {
  const productIndex = user.cart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    const removedProduct = user.cart.splice(productIndex, 1)[0];
    console.log(`Removed ${removedProduct.name} from the cart.`);
  } else {
    console.log("Product not found in the cart.");
  }
}

// Function to calculate the total price of the shopping cart
function calculateTotalPrice() {
  let totalPrice = 0;
  user.cart.forEach((product) => {
    totalPrice += product.price;
  });
  console.log(`Total price: $${totalPrice.toFixed(2)}`);
}

// Function to place an order
function placeOrder() {
  if (user.cart.length > 0) {
    console.log("Order placed successfully!");
    // Empty the user's cart
    user.cart = [];
  } else {
    console.log("The cart is empty. Please add some products before placing an order.");
  }
}

// Example usage
user.name = "John Doe";
user.email = "john.doe@example.com";
user.address = "123 Main St";
user.cart = [];

console.log(`Welcome, ${user.name}!`);
console.log("-----");
displayProductList();
console.log("-----");
addToCart(1);
console.log("-----");
addToCart(2);
console.log("-----");
removeFromCart(1);
console.log("-----");
calculateTotalPrice();
console.log("-----");
placeOrder();

// ... keep adding more functionality to the code