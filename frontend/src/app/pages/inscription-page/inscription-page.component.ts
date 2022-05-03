import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.scss']
})
export class InscriptionPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser(user: User): void {
    user.isAdmin = true;
    this.userService.addUser(user).subscribe((u) => {
      this.userService.retrieveUsers().subscribe(userList => {
        this.userService.setUsers(userList);
        this.userService.getUserByLoginAndPassword(user.login, user.password);
        this.router.navigate(['/login-page']);
      });
    });
  }
}
