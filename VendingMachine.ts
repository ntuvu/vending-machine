import { Product, SelectedProduct as Init } from "./Product";
import getProduct from "./GetProduct";
import { Coin } from "./Coin";

export enum VendingMachineSize {
  small = 6,
  medium = 10,
  large = 15,
}

class Cell {
  constructor(product: Product) {}
  stock: any;
  sold: any;
}

class VendingMachine {
  choose: any;
  paid: any;
  selectedCell: any = new Cell(new Init());
  cells: any = new Array();
  acceptedCoin: any[] = Coin;
  canPay = () => {
    this.paid - this.selectedCell().product.price > 0;
  };

  set size(givenSize: VendingMachineSize) {
    this.cells([]);

    for (let i = 0; i < givenSize; i++) {
      let product = getProduct(this.choose);
      this.cells.push(new Cell(product));
    }
  }

  select = (cell: Cell): void => {
    cell.sold(false);
    this.selectedCell(cell);
  };

  acceptCoin = (coin): void => {
    let oldTotal = this.paid();
    this.paid(oldTotal + coin.value);
  };

  pay = (): void => {
    if (this.selectedCell().stock() < 1) {
        alert("I'm sorry, we're out of them!");
        return
    }
    let currentPaid = this.paid();
    this.paid(currentPaid - this.selectedCell().product.price);
    let currentStock = this.selectedCell().stock();
    this.selectedCell().stock(currentStock - 1);
    this.selectedCell().sold(true);
}
}
