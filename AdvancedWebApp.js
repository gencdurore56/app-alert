/* Filename: AdvancedWebApp.js */

// This code is an advanced web application that simulates an online shopping platform

// Define the Product class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.name} - $${this.price} (${this.quantity} pcs)`;
  }
}

// Define the ShoppingCart class
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productIndex) {
    this.products.splice(productIndex, 1);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.calculateTotalPrice();
    }
    return totalPrice;
  }

  toString() {
    let cartString = "Products in the shopping cart:\n";
    for (let i = 0; i < this.products.length; i++) {
      cartString += `${i + 1}. ${this.products[i].toString()}\n`;
    }
    cartString += `Total Price: $${this.getTotalPrice()}`;
    return cartString;
  }
}

// Create instances of Product
const product1 = new Product("iPhone", 999, 2);
const product2 = new Product("MacBook", 1999, 1);
const product3 = new Product("Apple Watch", 399, 3);

// Create the ShoppingCart instance
const shoppingCart = new ShoppingCart();

// Add products to the shopping cart
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

// Remove a product from the shopping cart
shoppingCart.removeProduct(1);

// Print the shopping cart content and total price
console.log(shoppingCart.toString());
