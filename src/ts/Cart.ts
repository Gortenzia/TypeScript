import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  amount(): number {
    return this.items.reduce((total: number, el: Buyable) => total + el.price, 0);
  }

  discountedAmount(discount: number): number {
    return this.amount() - (this.amount() / 100) * discount;
  }

  removeItem(id: number): void {
    this._items = this._items.filter((el: Buyable) => el.id !== id);
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}