import { Component } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { User } from '../../../shared/models/user.model'
import { BaseResourceListComponent } from "../../../shared/components/base-resource-list/base-resource-list.component";
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent extends BaseResourceListComponent<User>{
  private posts: Post;
  private user: User[];
  private loader: boolean = false;
  private activePost: boolean = false;
  constructor(private usersService: UsersService) { 
    super(usersService);
  }

  getPostById (id: number) {
    this.activePost = true;
    this.loader = true;
    this.usersService.getById('posts/?userId='+id)
    .subscribe(posts => {
      this.posts = posts;
      this.loader = false;
    });
    this.user = this.filterUserSelected(id);
  }

  filterUserSelected(id: number): User[] {
    return this.resources.filter(user => user.id === id);
  }
}