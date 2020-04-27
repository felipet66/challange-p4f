import { Component } from '@angular/core';
import { Photos } from '../shared/photos.model'
import { UsersService } from '../../../shared/services/users.service';
import { User } from '../../../shared/models/user.model'
import { BaseResourceListComponent } from "../../../shared/components/base-resource-list/base-resource-list.component";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent extends BaseResourceListComponent<Photos>{
  private photos: Photos;
  private user: User[];
  private loader: boolean = false;
  private activePost: boolean = false;
  constructor(private usersService: UsersService) { 
    super(usersService);
  }

  getPostById (id: number) {
    this.activePost = true;
    this.loader = true;
    this.usersService.getById('photos?albumId='+id)
    .subscribe(photos => {
      this.photos = photos;
      this.loader = false;
    });
    this.user = this.filterUserSelected(id);
  }

  filterUserSelected(id: number): User[] {
    return this.resources.filter(user => user.id === id);
  }
}
