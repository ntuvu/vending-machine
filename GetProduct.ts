import * as products from "./Product";

export default function getProduct(choose: any): products.Product {
  switch (choose) {
    case 1:
      return new products.Coke();
    case 2:
      return new products.Pepsi();
    case 3:
      return new products.Soda();
  }
}
