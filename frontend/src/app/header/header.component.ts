import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userSelected: User;
  private username: string;

  constructor(private userService: UserService) {
    userService.userSelected$.subscribe(event => {
      this.userSelected = event;
      if (this.userSelected != null) {
        this.username = this.userSelected.firstName + ' ' + this.userSelected.lastName;
      } else {
        this.username = 'Connectez vous';
      }
    });
  }

  ngOnInit(): void {
  }

}
