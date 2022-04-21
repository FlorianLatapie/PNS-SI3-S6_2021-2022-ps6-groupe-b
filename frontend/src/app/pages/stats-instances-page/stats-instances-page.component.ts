import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {QuizInstance} from '../../../models/quizInstance.model';
import {QuizService} from '../../../services/quiz.service';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stats-instances-page',
  templateUrl: './stats-instances-page.component.html',
  styleUrls: ['./stats-instances-page.component.scss']
})
export class StatsInstancesPageComponent implements OnInit {

  quiz: Quiz;
  user: User;
  quizInstances: QuizInstance[];

  constructor(private router: Router, private quizService: QuizService, private userService: UserService) {
    this.quizService.quizSelected$.subscribe(q => {
      this.quiz = q;
      this.userService.userWatched$.subscribe(u => {
        this.user = u;
        this.quizInstances = this.quizService.getQuizInstanceByQuizIdAndUserId(this.quiz.id, this.user.id);
      });
    });

    console.log(this.quizInstances);
  }

  ngOnInit(): void {
  }

  selectedInstance(quizInstance: QuizInstance) {
    this.quizService.instanceSelected$.next(quizInstance);
    this.router.navigate(['/stats-quiz-page']);
  }
}
