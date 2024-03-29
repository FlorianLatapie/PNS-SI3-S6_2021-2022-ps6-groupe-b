import {Component, OnInit, Input} from '@angular/core';

import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: User[] = [];

  @Input()
  displayDeleteButton: boolean;

  constructor(private userService: UserService) {
    this.userService.users$.subscribe((users: User[]) => {
      this.userList = users;
    });
  }


  ngOnInit(): void {
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }

  selectUser(user: User): void {
    this.userService.setSelectedUser(user.id);
  }

  isAdminTrue(user: User): void {
    this.userService.updateUser(user);
  }

  isAdminFalse(user: User): void {
    this.userService.updateUser(user);
  }
}
