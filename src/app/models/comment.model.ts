export class Comment {
  constructor(
    public productId: number,
    public commentId: number,
    public personName: string,
    public rating: number,
    public commentTitle: string,
    public commentBody: string
  ) {}
}
