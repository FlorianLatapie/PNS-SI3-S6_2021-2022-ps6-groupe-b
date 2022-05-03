import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {Category} from '../../../models/category.model';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(private router: Router, public quizService: QuizService, private userService: UserService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.userService.userSelected$.subscribe(u => {
        quizzes.forEach(quiz => {
          if (quiz.login === u.login && quiz.password === u.password){
            this.quizList.push(quiz);
          }
        });
      });
    });
  }

  @Input()
  displaySelectButton: boolean;

  @Input()
  displayEditButton: boolean;

  @Input()
  displayDeleteButton: boolean;

  @Input()
  categorySelected: Category;

  @Output()
  quizSelectedFromChild: EventEmitter<Quiz> = new EventEmitter<Quiz>();


  ngOnInit(): void {
  }

  quizSelected(selected: Quiz): void {
    this.quizSelectedFromChild.emit(selected);
  }

  editQuiz(quiz: Quiz): void {
    this.router.navigate(['/edit-quiz/' + quiz.name]);
  }

  deleteQuiz(quiz: Quiz): void {
    this.quizService.deleteQuiz(quiz);
  }
}
