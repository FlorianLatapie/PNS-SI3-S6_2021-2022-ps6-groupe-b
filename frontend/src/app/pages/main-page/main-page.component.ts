import {Component, OnInit} from '@angular/core';
import {User} from 'src/models/user.model';
import {UserService} from 'src/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
    });
  }

}
