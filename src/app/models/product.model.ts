export class Product {
  constructor(
    public id: string,
    public name: string,
    public brand: string,
    public rating: number,
    public ratingCount: number,
    public price: number,
    public imagePathArr: Array<string>,
    public details: string,
    public commentCount: number,
    public category: string
  ) {}
}
