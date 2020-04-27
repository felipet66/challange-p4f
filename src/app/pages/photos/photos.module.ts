import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  imports: [
    SharedModule,
    PhotosRoutingModule
  ],
  declarations: [PhotosComponent]
})
export class PhotosModule { }
