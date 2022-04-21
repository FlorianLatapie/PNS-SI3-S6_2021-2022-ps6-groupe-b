import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuizInstance} from '../../../models/quizInstance.model';
import {Quiz} from '../../../models/quiz.model';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.scss']
})
export class InstanceComponent implements OnInit {

  @Input()
  quizInstance: QuizInstance;

  @Output()
  instanceSelected: EventEmitter<QuizInstance> = new EventEmitter<QuizInstance>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedInstance(quizInstance: QuizInstance) {
    this.instanceSelected.emit(quizInstance);
  }
}
