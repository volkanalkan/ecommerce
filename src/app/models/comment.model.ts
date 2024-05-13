export class Comment {
  public id: number;
  public personName: string;
  public rating: number;
  public commentTitle: string;
  public commentBody: string;

  constructor(
    id: number,
    personName: string,
    rating: number,
    commentTitle: string,
    commentBody: string
  ) {
    this.id = id;
    this.personName = personName;
    this.rating = rating;
    this.commentTitle = commentTitle;
    this.commentBody = commentBody;
  }
}
