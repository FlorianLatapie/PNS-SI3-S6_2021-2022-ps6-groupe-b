import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit {

  public connexionForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
    this.connexionForm = this.formBuilder.group({
      login: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }

  connexion(): void {
    this.userService.retrieveUsers().subscribe( userList => {
      this.userService.setUsers(userList);
      const connexion = this.connexionForm.getRawValue();
      if (this.userService.getUserByLoginAndPassword(connexion.login, connexion.password).length !== 0) {
        this.router.navigate(['login-page']);
      }
      else{
        document.getElementById('error').textContent = 'Vous n\'avez pas rentré le bon login ou mot de passe';
        this.connexionForm.reset();
      }
    });

  }
}
