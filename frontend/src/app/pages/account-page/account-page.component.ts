import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  private previousUrl: string;
  public userSelected: User;

  constructor(private router: Router, private userService: UserService) {
    this.previousUrl = '/' + this.router.getCurrentNavigation().previousNavigation.finalUrl.root.children.primary.segments[0].path;
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

  modifyName(str: string): void {
    const text = document.getElementById(str);
    const input = document.createElement('input');
    if (str === 'first_name'){
      input.placeholder = text.firstChild.textContent;
    } else {
      input.placeholder = text.firstChild.textContent;
    }
    text.firstChild.replaceWith(input);
    const btn = document.getElementById(str + '_button');
    btn.firstChild.replaceWith('Valider');
    btn.removeEventListener('click', () => this.modifyName(str));
    btn.addEventListener('click', () => this.checkName(str, input.value));
  }

  private checkName(str: string, newName: string): void {
    if (str === 'first_name'){
      this.userSelected.firstName = newName;
      this.userService.updateUser(this.userSelected);
      document.getElementById(str).firstChild.replaceWith(this.userSelected.firstName);
    } else {
      this.userSelected.lastName = newName;
      this.userService.updateUser(this.userSelected);
      document.getElementById(str).firstChild.replaceWith(this.userSelected.lastName);
    }
    document.getElementById('name_header').firstChild.replaceWith(this.userSelected.firstName + ' ' + this.userSelected.lastName)
    const btn = document.getElementById(str + '_button');
    btn.firstChild.replaceWith('Modifier');
    btn.removeEventListener('click', () => this.checkName(str, newName));
    btn.addEventListener('click', () => this.modifyName(str));
  }
}
