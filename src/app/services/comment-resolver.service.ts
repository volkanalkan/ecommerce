import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Comment } from '../models/comment.model';
import { CommentService } from './comment.service';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CommentResolverService implements Resolve<Array<Comment>> {
  constructor(
    private commentService: CommentService,
    private dataService: DataStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<any> {
    const comments = this.commentService.getComments();

    if (comments.length !== 0) {
      return comments;
    } else {
      return this.dataService.fetchComments();
    }
  }
}
