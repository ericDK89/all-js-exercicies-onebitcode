class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
    this.addToStock = function (quantity) {
      this.inStock += quantity;
    };
  }

  calculateDiscount(amount) {
    if (amount > 0 && amount < 100) {
      const discount = (amount / 100) * this.price;
      const finalPrice = this.price - discount;
      console.log(finalPrice);
    } else if (amount >= 100) {
      console.log("Free");
    } else {
      console.log("No discount");
    }
  }
}

const newProduct = new Product("Copo", "Carregar líquidos", 80);

newProduct.addToStock(80);
console.log(newProduct);
console.log(newProduct.calculateDiscount(10));
