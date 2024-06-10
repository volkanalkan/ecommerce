export class Order {
  constructor(
    public orderId: string,
    public productId: number,
    // public buyerUsername: string,
    public deliveryDate: string,
    public completed: boolean,
    public shipping: boolean
  ) {}
}
