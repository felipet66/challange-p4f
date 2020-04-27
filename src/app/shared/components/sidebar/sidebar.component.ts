import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  @Input() resources: User;
  @Output() getUserId = new EventEmitter;

  sendUserId(id: number): void{
    this.getUserId.emit(id)
  }
}
