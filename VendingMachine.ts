//trong 1 cell la nhieu product
//trong 1 vending machine la nhieu cell
//1 san pham trong vendingmachine se de o trong 1 cell
//1 cell la 1 mang 1 chieu, trong mang 1 chieu la cac san pham khac nhau
//vendingmachine chi chap nhan 4 loai tien mac dinh
//1 cell chi chua toi da 10 san pham, khi them qua san pham vao trong cell se bao loi

//cac chuc nang:
//mua san pham
//kiem tra so luong san pham con ko
//kiem tra so tien co du ko
//them san pham vao trong cell
//...

//cells trong product la mang 1 chieu
//

import Cell from "./Cell";
import { Coin } from "./Coin";

class VendingMachine {
  maxSize: number;
  coin: any[];
  choose: number;
  selectedCell: Cell[];
  acceptedCoin: any = Coin;

  constructor(selectedCell: Cell[], choose: number) {
    this.choose = choose;
    this.selectedCell = selectedCell;
  }

  //kien tra xem co du tien de mua san pham ko
  canPay(total: number): boolean {
    if (total - this.selectedCell[this.choose].product.value > 0) {
      console.log("San pham nay co the mua");
      return true;
    }

    return false;
  }

  //kiem tra so tien nhet vao may co duoc chap nhan khong
  checkcoin(): number {
    let result = this.coin.filter((val) => {
      return this.acceptedCoin.indexOf(val) != -1;
    });

    //tong tien them vao may sau khi da kiem tra
    let total = result.reduce((sum, val) => {
      sum += val.value;
    });

    return total;
  }

  //mua san pham
  pay(): void {
    let total: number = this.checkcoin();
    if (this.canPay(total)) {
      this.selectedCell[this.choose].subProduct();
      total -= this.selectedCell[this.choose].product.value;
      console.log("Mua thanh cong, so tien con du " + total);
    } else {
      console.log("Khong du tien de mua");
    }
  }
}
