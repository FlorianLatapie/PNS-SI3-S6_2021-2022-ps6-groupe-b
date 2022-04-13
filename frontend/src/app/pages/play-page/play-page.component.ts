import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';
import {Category} from '../../../models/category.model';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent implements OnInit {
  quiz: Quiz;
  user: User;
  // tslint:disable-next-line:ban-types
  isQuizSelected: Boolean = false;
  categorySelected: Category;

  constructor(private router: Router, public categoryService: CategoryService, private userService: UserService) {
    this.categoryService.categorySelected$.subscribe(category => this.categorySelected = category);
  }

  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
    });
  }

  // tslint:disable-next-line:typedef
  quizSelected(quiz: Quiz){
    this.quiz = quiz;
    this.navigateQuizStade();

  }

  // tslint:disable-next-line:typedef
  navigateQuizStade(){
    // tslint:disable-next-line:triple-equals
    if (this.user.stade == '5'){
      this.router.navigate(['/play-quiz-page-stade5/' + this.quiz.id]);
      // tslint:disable-next-line:triple-equals
    }else if (this.user.stade == '6'){
      this.router.navigate(['/play-quiz-page-stade6/' + this.quiz.id]);
    }else{
      this.router.navigate(['/play-quiz-page-stade4/' + this.quiz.id]);
    }
  }
}
