import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css',
})
export class CommentListComponent {
  @Input() comments: Array<Comment> = [];
  @Input() avgRating: number = 0;
}
