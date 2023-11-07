/* 
   Filename: ComplexCode.js
   Description: This code is a complex implementation of a shopping cart system
*/

// Product object definition
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// ShoppingCart object definition
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    const existingProduct = this.products.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.products.push(product);
    }
  }

  removeProduct(productId) {
    this.products = this.products.filter(p => p.id !== productId);
  }

  updateQuantity(productId, newQuantity) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.quantity = newQuantity;
    }
  }

  calculateTotal() {
    let total = 0;
    this.products.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  }
}

// Usage of ShoppingCart
const cart = new ShoppingCart();

const product1 = new Product(1, 'Phone', 1000, 2);
const product2 = new Product(2, 'Headphones', 100, 3);
const product3 = new Product(3, 'Sunglasses', 50, 1);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.updateQuantity(2, 5);
cart.removeProduct(3);

console.log('Product List:');
cart.products.forEach(product => {
  console.log(`- ${product.name}, Quantity: ${product.quantity}, Price: $${product.price}`);
});

console.log(`Total: $${cart.calculateTotal()}`);