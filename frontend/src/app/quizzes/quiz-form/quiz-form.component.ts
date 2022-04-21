import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {Category} from '../../../models/category.model';
import {CategoryService} from '../../../services/category.service';
import {Router} from "@angular/router";
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public quizForm: FormGroup;
  selectedCategory: Category;
  categoryList: Category[];

  public currentUser: User;


  constructor(private router: Router, public formBuilder: FormBuilder, public quizService: QuizService, public categoryService: CategoryService, private userService: UserService) {
    this.categoryService.categories$.subscribe((categories: Category[]) => {
      this.categoryList = categories;
    });
    this.quizForm = this.formBuilder.group({
      name: [''],
      description: [''],
      category: ['']
    });

    userService.userSelected$.subscribe(event => {
      this.currentUser = event;
    });
  }

  ngOnInit(): void {
  }

  addQuiz(): void {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    quizToCreate.userId = this.currentUser.id;
    this.quizService.addQuiz(quizToCreate);
    this.router.navigate(['/edit-quiz/']);

  }
}
