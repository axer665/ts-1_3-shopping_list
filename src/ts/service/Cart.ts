import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const itemIndex = this._items.findIndex((findItem) => item.id === findItem.id);
        if (itemIndex !== -1) {
            const searchedItem = this._items[itemIndex];
            if (typeof searchedItem.amount === 'number') {
                searchedItem.amount += 1;
            } 
        } else {
            this._items.push({ ...item });
        }
    }

    getItem(id: number): Buyable {
        const idItem: number = this._items.findIndex(item => item.id === id);
        if (idItem === -1) {
            throw new Error('Product not in cart.');
        }
        return this._items[idItem];
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getSum(): number {
        return this._items.reduce(function (sum, current) {
            if (typeof current.amount === 'number') {
                let total = current.price * current.amount;
                return sum += total;
            }
            return sum += current.price;
        }, 0);
    }

    getSumWithDiscount(percent: number = 1): number {
        return this._items.reduce(function (sum, current) {
            if (typeof current.amount === 'number') {
                let total = current.price * current.amount;
                return sum += (total - (total * (percent / 100)));
            }
            return sum += (current.price - (current.price * (percent / 100)));
        }, 0);
    }

    deleteItem(id: number): void {
        const itemIndex = this._items.findIndex((item) => item.id === id);
        if (itemIndex === -1) {
            throw new Error('You cannot delete an item that is not in your cart.');
        }

        const item = this.items[itemIndex];
        if (typeof item.amount === 'number') {
            if (item.amount > 1) {
                item.amount -= 1;
            }
        } else {
            this._items.splice(itemIndex, 1);
        }
    }
}