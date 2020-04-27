import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }
