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
    public commentCount: number
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.rating = rating;
    this.ratingCount = ratingCount;
    this.price = price;
    this.imagePathArr = imagePathArr;
    this.details = details;
    this.commentCount = commentCount;
  }
}
