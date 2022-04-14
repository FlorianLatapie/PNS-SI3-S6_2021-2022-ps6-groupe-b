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

  public quiz: Quiz;
  quizInstances: QuizInstance[];

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      if (this.quiz) {
        this.quizInstances = this.quizService.getQuizInstanceById(this.quiz.id);
      } else {
        console.log('No quiz');
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

}
