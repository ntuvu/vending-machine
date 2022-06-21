export interface Product {
  name: string;
  price: number;
}

export class SelectedProduct implements Product {
  name = "Choose a product";
  price = 0;
}

export class Coke implements Product {
  name = "Coke";
  price = 15;
}

export class Pepsi implements Product {
  name = "Pepsi";
  price = 25;
}

export class Soda implements Product {
  name = "Soda";
  price = 35;
}