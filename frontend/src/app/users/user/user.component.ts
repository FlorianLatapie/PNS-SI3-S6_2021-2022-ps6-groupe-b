import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  displayDeleteButton: boolean;
  @Input()
  displaySelectButton: boolean;
  @Input()
  displayIsAdminButton: boolean;

  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter<User>();
  @Output()
  selectUser: EventEmitter<User> = new EventEmitter<User>();
  @Output()
  isAdmin: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.displayDeleteButton);
  }

  delete() {
    this.deleteUser.emit(this.user);
  }

  select() {
    this.selectUser.emit(this.user);
  }

  isAdminTrue() {
    this.user.isAdmin = true;
    this.isAdmin.emit(this.user);
  }

  isAdminFalse(){
    this.user.isAdmin = false;
    this.isAdmin.emit(this.user);
  }
}
