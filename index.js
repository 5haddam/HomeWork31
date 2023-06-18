class Hamburger {
  static SIZE_SMALL = "small";
  static SIZE_LARGE = "large";

  static STUFFING_CHEESE = "cheese";
  static STUFFING_SALAD = "salad";
  static STUFFING_POTATO = "potato";

  static TOPPING_MAYO = "mayo";
  static TOPPING_SAUCE = "sauce";

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = 0;

    if (this.size === Hamburger.SIZE_SMALL) {
      price += 50;
    } else if (this.size === Hamburger.SIZE_LARGE) {
      price += 100;
    }

    if (this.stuffing === Hamburger.STUFFING_CHEESE) {
      price += 10;
    } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
      price += 20;
    } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
      price += 15;
    }

    this.toppings.forEach(item => item === Hamburger.TOPPING_MAYO ? price += 20
      : item === Hamburger.TOPPING_SAUCE ? price += 15 : null);

    return price;
  }

  calculateCalories() {
    let calories = 0;

    if (this.size === Hamburger.SIZE_SMALL) {
      calories += 20;
    } else if (this.size === Hamburger.SIZE_LARGE) {
      calories += 40;
    }

    if (this.stuffing === Hamburger.STUFFING_CHEESE) {
      calories += 20;
    } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
      calories += 5;
    } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
      calories += 10;
    }

    this.toppings.forEach(item => item === Hamburger.TOPPING_MAYO ? calories += 5 : null);

    return calories;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories:", hamburger.calculateCalories());
console.log("Price:", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce:", hamburger.calculatePrice());

const bigHamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
bigHamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories:", bigHamburger.calculateCalories());
console.log("Price:", bigHamburger.calculatePrice());

bigHamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce:", bigHamburger.calculatePrice());