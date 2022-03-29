import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent implements OnInit {
  quiz: Quiz;
  // tslint:disable-next-line:ban-types
  isQuizSelected: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  quizSelected(quiz: Quiz){
    this.quiz = quiz;
    this.router.navigate(['/play-quiz-page/' + quiz.id]);
  }

}
