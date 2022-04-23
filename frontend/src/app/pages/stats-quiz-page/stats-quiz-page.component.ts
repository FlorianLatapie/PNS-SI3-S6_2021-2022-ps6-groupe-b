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
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getQuizInstance(id).subscribe(i => {
      this.quizService.getQuiz(String(i.quizId)).subscribe(q => {
        this.quizInstance = i;
        this.quiz = q;
      });
    });
  }

  ngOnInit(): void {
  }

}
