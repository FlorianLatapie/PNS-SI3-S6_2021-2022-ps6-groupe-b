import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  public userSelected: User;

  constructor(private userService: UserService) {
    userService.userSelected$.subscribe(event => {
      this.userSelected = event;
      console.log('il y a un utilisateur :', this.userSelected);
    });
    console.log(this.userSelected);
  }

  ngOnInit(): void {
    console.log(this.userSelected);
  }

  logoutAccount(): void {
    this.userService.logoutUser();
  }

  downStade(): void {
    const stade = parseInt(this.userSelected.stade.toString(), 10) - 1;
    if (stade >= 4) {
      this.userSelected.stade = stade + '';
      this.userService.updateUser(this.userSelected);
    }
  }

  upStade(): void {
    const stade = parseInt(this.userSelected.stade.toString(), 10) + 1;
    if (stade <= 6) {
      this.userSelected.stade = stade + '';
      this.userService.updateUser(this.userSelected);
    }
  }
}
