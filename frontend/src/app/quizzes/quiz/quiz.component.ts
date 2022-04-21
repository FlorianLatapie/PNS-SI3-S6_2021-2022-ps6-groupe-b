import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Input()
  displaySelectButton: boolean;

  @Input()
  displayEditButton: boolean;

  @Input()
  displayDeleteButton: boolean;

  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(private quizService: QuizService) {
  }


  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizSelected.emit(this.quiz);
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  delete(): void {
    this.deleteQuiz.emit(this.quiz);
  }

  changeSelectedQuiz(quiz: Quiz) {
    this.quizService.setSelectedQuizQuiz(quiz);
  }
}
