import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {QuizInstance} from '../../../models/quizInstance.model';

@Component({
  selector: 'app-stats-quiz-page',
  templateUrl: './stats-quiz-page.component.html',
  styleUrls: ['./stats-quiz-page.component.scss']
})
export class StatsQuizPageComponent implements OnInit {

  quiz: Quiz;
  quizInstance: QuizInstance;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.quizService.instanceSelected$.subscribe(i => this.quizInstance = i);
    });
  }

  ngOnInit(): void {}

}
