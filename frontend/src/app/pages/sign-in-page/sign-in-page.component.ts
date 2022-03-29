import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  whenUserCreated($event: User) {
    console.log("coucou");
    this.router.navigate(['/login-page']);
  }
}
