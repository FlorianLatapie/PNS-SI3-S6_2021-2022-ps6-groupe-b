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

  constructor() { }


  ngOnInit(): void { // TODO add url path
    // mélange les questions
    this.shuffleArray(this.quiz.questions);
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
        //mélange les réponses
        this.shuffleArray(this.quiz.questions[this.currentQuestion+1].answers);
        this.currentQuestion++;
        this.answerSelected = false;
      }, 1000);
    }
    else{
      setTimeout(()=>{
        this.quiz.correctAnswers=""+this.correctAnswers;
        this.quiz.incorrectAnswers=""+this.incorrectAnswers;
        this.endOfQuiz=true;
      }, 2000)
    }
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

}
