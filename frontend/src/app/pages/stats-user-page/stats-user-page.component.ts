import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Quiz} from "../../../models/quiz.model";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {QuizInstance} from "../../../models/quizInstance.model";

@Component({
  selector: 'app-stats-user-page',
  templateUrl: './stats-user-page.component.html',
  styleUrls: ['./stats-user-page.component.scss']
})
export class StatsUserPageComponent implements OnInit {

  userList: User[];
  quizInstances: QuizInstance[];
  quiz: Quiz;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private quizService: QuizService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id).subscribe(q => {
      this.userService.users$.subscribe(u => {
        this.quizService.quizInstances$.subscribe(i => {
          this.quiz = q;
          this.userList = u;
          this.quizInstances = i;
          this.quizService.setSelectedCategory(q.category);
        });
      });
    });
  }

  ngOnInit(): void {
  }

  hasUserPlayedQuiz(user: User): boolean {
    return this.quizService.getQuizInstanceByQuizIdAndUserId(String(this.quiz.id), String(user.id), this.quizInstances).length !== 0;
  }

  numberOfPlayerWhoPlayedQuiz(): number {
    return this.quizService.getQuizInstanceByQuizId(String(this.quiz.id), this.quizInstances).length;
  }

  selectUser(user: User): void {
    this.router.navigate(['/stats-instances-page/' + this.quiz.id + '/' + user.id]);
  }
}
