import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  commentsChanged = new Subject<Array<Comment>>();
  private comments = [];
  constructor() {}

  setComments(comments): void {
    this.comments = comments;
    this.commentsChanged.next(this.comments.slice());
  }

  getComments(): Array<Comment> {
    return this.comments.slice();
  }

  getCommentsForProduct(productId: number) {
    return this.comments.filter((comment) => comment.productId == productId);
  }
}
