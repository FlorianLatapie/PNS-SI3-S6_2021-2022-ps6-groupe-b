import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Quiz} from "../../../models/quiz.model";
import {Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-stats-user-page',
  templateUrl: './stats-user-page.component.html',
  styleUrls: ['./stats-user-page.component.scss']
})
export class StatsUserPageComponent implements OnInit {

  userList: User[];
  quiz: Quiz;

  constructor(private router: Router, private userService: UserService, private quizService: QuizService) {
    this.userService.users$.subscribe(u => this.userList = u);
    this.quizService.quizSelected$.subscribe(q => this.quiz = q);
    console.log(this.userList);
  }

  ngOnInit(): void {
  }

  hasUserPlayedQuiz(user: User): boolean {
    return this.quizService.getQuizInstanceByQuizIdAndUserId(this.quiz.id, user.id).length !== 0;
  }

  selectUser(user: User) {
    this.userService.setWatchedUser(user);
    this.router.navigate(['/stats-instances-page']);
  }
}
