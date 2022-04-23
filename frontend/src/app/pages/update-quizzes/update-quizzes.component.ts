import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../models/category.model';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-update-quizzes',
  templateUrl: './update-quizzes.component.html',
  styleUrls: ['./update-quizzes.component.scss']
})
export class UpdateQuizzesComponent implements OnInit {

  categorySelected: Category;

  constructor(public quizService: QuizService) {
    this.quizService.categorySelected$.subscribe(category => this.categorySelected = category);
  }

  ngOnInit(): void {
  }
}
