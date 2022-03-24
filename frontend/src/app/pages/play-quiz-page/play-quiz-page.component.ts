import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';



@Component({
  selector: 'app-play-quiz-page',
  templateUrl: './play-quiz-page.component.html',
  styleUrls: ['./play-quiz-page.component.scss']
})
export class PlayQuizPageComponent implements OnInit {

  @Input()
  quiz : Quiz;

  private currentQuestion = 0;
  answerSelected = false;
  private correctAnswers = 0;
  private incorrectAnswers = 0;
  endOfQuiz = false;
  private shuffleQuestions: Question[];

  constructor() { }


  ngOnInit(): void { // TODO add url path
    // this.router.navigate(["play-quiz-page/quiz-id-"+this.quiz.id+"/question-id-"+this.currentQuestion])
  }

  onAnswer(option: boolean){
    (option) ? this.correctAnswers ++ : this.incorrectAnswers++;
    this.nextQuestion();
  }

  nextQuestion(){
    if(this.quiz.questions.length-1>this.currentQuestion){
      this.answerSelected = true;
      setTimeout(()=>{
        this.currentQuestion++;
        this.answerSelected = false;
      }, 1000);
    }
    else{
      setTimeout(()=>{
        this.endOfQuiz=true;
      }, 2000)
    }
  }

  shuffleQuizQuestions(){
    this.shuffleQuestions = this.quiz.questions.sort((a, b) => 0.5 - Math.random());
  }

}
