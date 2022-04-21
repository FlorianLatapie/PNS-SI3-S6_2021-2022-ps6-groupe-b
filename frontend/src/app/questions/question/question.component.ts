import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Input()
  display = true;

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor() { }

  ngOnInit(): void {

  }

  delete(): void {
    this.deleteQuestion.emit(this.question);
  }

}
