export class Comment {
  public personName: string;
  public rating: number;
  public commentTitle: string;
  public commentBody: string;

  constructor(
    personName: string,
    rating: number,
    commentTitle: string,
    commentBody: string
  ) {
    this.personName = personName;
    this.rating = rating;
    this.commentTitle = commentTitle;
    this.commentBody = commentBody;
  }
}
