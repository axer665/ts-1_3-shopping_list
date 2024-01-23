import Buyable from './Buyable';

export default class Device implements Buyable {
    amount: number; // editable
    constructor(
        readonly id: number,
        readonly name: string,
        readonly manufacturer: string,
        readonly price: number,
        readonly slogan: string,
        amount: number,
    ) {
        this.amount = amount
    }
}