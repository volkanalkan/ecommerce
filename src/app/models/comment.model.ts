export class Comment {
  constructor(
    public productId: number,
    public commentId: number,
    public personName: string,
    public rating: number,
    public commentTitle: string,
    public commentBody: string
  ) {
    this.productId = productId;
    this.commentId = commentId;
    this.personName = personName;
    this.rating = rating;
    this.commentTitle = commentTitle;
    this.commentBody = commentBody;
  }
}
