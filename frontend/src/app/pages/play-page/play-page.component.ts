import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import {Category} from '../../../models/category.model';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent implements OnInit {
  quiz: Quiz;
  // tslint:disable-next-line:ban-types
  isQuizSelected: Boolean = false;
  categorySelected: Category;

  constructor(private router: Router, public categoryService: CategoryService) {
    this.categoryService.categorySelected$.subscribe(category => this.categorySelected = category);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  quizSelected(quiz: Quiz){
    this.quiz = quiz;
    this.router.navigate(['/play-quiz-page/' + quiz.id]);
  }

}
