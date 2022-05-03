import {Component, OnInit, Input} from '@angular/core';

import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: User[] = [];
  private userConnected: User;

  @Input()
  displayDeleteButton: boolean;

  constructor(private router: Router, private userService: UserService) {
    this.userService.users$.subscribe((users: User[]) => {
      this.userService.userSelected$.subscribe(user => {
        this.userConnected = user;
        this.userList = users;
      });
    });
  }


  ngOnInit(): void {
  }

  deleteUser(user: User): void {
    if (user.id === this.userConnected.id){
      document.getElementById('error_msg_' + user.id).innerText = 'Vous ne pouvez pas supprimer un utilisateur lorsque vous êtes connécté avec !';
      setTimeout(() => document.getElementById('error_msg_' + user.id).innerText = '', 2000);
    }
    else {
      this.userService.deleteUser(user);
    }
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

  createUser(user: User): void {
    user.login = this.userConnected.login;
    user.password = this.userConnected.password;
    this.userService.addUser(user).subscribe(u => {
      this.userService.addToUsers(u);
    });
  }
}
