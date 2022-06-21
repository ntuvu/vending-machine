import { Coin } from "./Coin";
import { Product } from "./Product";

const choice: any[][] = [
  [Product[0], Product[1]],
  [Product[2], console.log("cancel")],
];

const getProduct = (choose) => {
  switch (choose) {
    case 1:
      return choice[0][0];
    case 2:
      return choice[0][1];
    case 3:
      return choice[1][0];
    case 4:
      return choice[1][1];
  }
};
class VendingMachine {
  paid: number = 0;
  acceptedCoin = Coin;
  existProduct = Product;
  coinArr: any = [];

  findProduct(choose: number): Boolean {
    const product = getProduct(choose);

    const selectedProduct = this.existProduct.find(
      (item) => item.name === product.name
    );
    if (selectedProduct) {
      console.log(selectedProduct.name);
      return true;
    }

    console.log("Product doesn't exist");
    return false;
  }

  insertCoin(coin: any) {
    return this.coinArr.push(coin);
  }

  checkCoin(coin: any): number {
    const addedCoin = this.coinArr.filter((value) => {
      return this.acceptedCoin.indexOf(value) != -1;
    });

    if (addedCoin) {
      this.paid = addedCoin.reduce(
        (sum: number, value: any) => sum + value.value
      );
    }

    return this.paid;
  }

  buy(product: any, coin: any) {
    if (this.findProduct(product)) {
      if (this.checkCoin === coin) {
        console.log("Bought " + product.name);
      } else {
        if (this.checkCoin > coin) {
          console.log("Bought " + product.name + "value change " + coin.value);
        } else {
          console.log("Please insert more coins");
        }
      }
    }
  }
}
