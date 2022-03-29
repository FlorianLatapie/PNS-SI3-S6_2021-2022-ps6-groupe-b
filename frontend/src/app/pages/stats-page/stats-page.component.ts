import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

  quiz: Quiz;
  // tslint:disable-next-line:ban-types
  isQuizSelected: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  quizSelected(quiz: Quiz){
    this.quiz = quiz;
    this.router.navigate(['/stats-quiz-page/' + quiz.id]);
  }
}
