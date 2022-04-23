import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;

  @Output()
  public userCreated: EventEmitter<User> = new EventEmitter<User>();

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      stade: [''],
      isAdmin: ['false']
    });
  }

  ngOnInit(): void {
  }

  addUser(): void {
    // We retrieve here the user object from the userForm and we cast the type "as User".
    const userToCreate: User = this.userForm.getRawValue() as User;
    this.userService.addUser(userToCreate);
    this.userCreated.emit(userToCreate);
  }
}
