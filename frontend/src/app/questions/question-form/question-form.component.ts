import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  quiz: Quiz;

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private quizService: QuizService) {
    // Form creation
    this.initializeQuestionForm();
    this.addImage();
    this.addImage();
    this.addImage();
    this.addAnswer();
    this.addAnswer();
    this.addAnswer();
    this.addAnswer();
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      images: this.formBuilder.array([]),
      answers: this.formBuilder.array([]),
      familyLink: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer(): void {
    this.answers.push(this.createAnswer());
  }

  addQuestion(): void {
    if (this.questionForm.valid) {
      const question = this.questionForm.getRawValue() as Question;
      this.quizService.addQuestion(this.quiz, question);
      this.initializeQuestionForm();
    }
  }

  addImage(): void {
    this.imageLinks.push(this.createImageLink());
  }

  get imageLinks(): FormArray {
    return this.questionForm.get('images') as FormArray;
  }

  private createImageLink(): FormGroup {
    return this.formBuilder.group({
      url: '',
      description : ''
    });
  }
}
