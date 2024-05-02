import { Comment } from './comment.model';

export class Product {
  public id: string;
  public name: string;
  public brand: string;
  public rating: number;
  public ratingCount: number;
  public price: number;
  public imagePathArr: Array<string>;
  public details: string;
  public commentCount: number;
  public comments: Array<Comment>;

  constructor(
    id: string,
    name: string,
    brand: string,
    rating: number,
    ratingCount: number,
    price: number,
    imagePathArr: Array<string>,
    details: string,
    commentCount: number,
    comments: Array<Comment>
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
    this.comments = comments;
  }
}
