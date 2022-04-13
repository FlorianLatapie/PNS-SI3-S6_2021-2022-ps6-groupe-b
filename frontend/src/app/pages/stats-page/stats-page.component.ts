import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {Category} from '../../../models/category.model';
import {CategoryService} from '../../../services/category.service';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

  quiz: Quiz;
  category: Category;
  // tslint:disable-next-line:ban-types
  isQuizSelected: Boolean = false;

  constructor(private router: Router, public categoryService: CategoryService) {
    this.categoryService.categorySelected$.subscribe(category => this.category = category);
    console.log(this.category);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  quizSelected(quiz: Quiz){
    this.quiz = quiz;
    this.router.navigate(['/stats-quiz-page/' + quiz.id]);
  }
}
