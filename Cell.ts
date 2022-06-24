import Product from "./Product";

export default class Cell {
  private maxSize: number = 10;

  public set setMaxSize(value: number) {
    this.maxSize = value;
  }

  product: Product;
  products: Product[];

  constructor(maxSize: number, products: Product[], product: Product) {
    this.maxSize = maxSize;
    this.products = products;
    this.product = product;
  }

  //them san pham
  addProduct(product: Product, products: Product[]): void {
    if (products.length < 10 && products.length > 0) {
      products.push(product);
    } else {
      console.log("Cell da day khong the them san pham moi");
    }
  }

  //lay va bo di san pham dau tien trong 1 cell
  subProduct(): void {
    if (this.products.length > 0) {
      this.products.shift();
    } else {
      console.log("San pham nay da het");
    }
  }



}
