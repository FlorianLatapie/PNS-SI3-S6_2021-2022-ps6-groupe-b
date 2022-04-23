import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {QuizInstance} from '../../../models/quizInstance.model';
import {QuizService} from '../../../services/quiz.service';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-stats-instances-page',
  templateUrl: './stats-instances-page.component.html',
  styleUrls: ['./stats-instances-page.component.scss']
})
export class StatsInstancesPageComponent implements OnInit {
  quiz: Quiz;
  quizInstances: QuizInstance[];
  stats: {};

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService, private userService: UserService) {
    const idQuiz = this.route.snapshot.paramMap.get('idquiz');
    const idUser = this.route.snapshot.paramMap.get('iduser');
    this.quizService.quizInstances$.subscribe(i => {
      this.quizService.getQuiz(idQuiz).subscribe(q => {
        this.quiz = q;
        this.quizInstances = this.quizService.getQuizInstanceByQuizIdAndUserId(idQuiz, idUser, i);
        this.getStats();
      });
    });
  }

  ngOnInit(): void {
  }

  selectedInstance(quizInstance: QuizInstance): void {
    this.router.navigate(['/stats-quiz-page/' + quizInstance.id]);
  }

  getStats(): void {
    const correctAnswers = {};
    for (const quizInstance of this.quizInstances) {
      for (const question of quizInstance.questions) {
        for (const answer of question.answers) {
          if (answer.isCorrect) {
            correctAnswers[question.id] = [answer.value, 0, 0];
          }
        }
      }
    }

    for (const quizInstance of this.quizInstances) {
      for (const question of quizInstance.questions) {
        correctAnswers[question.id][1] += question.correctAnswers;
        correctAnswers[question.id][2] += question.incorrectAnswers;
      }
    }
    console.log(correctAnswers);
    this.stats = correctAnswers;
  }
}
