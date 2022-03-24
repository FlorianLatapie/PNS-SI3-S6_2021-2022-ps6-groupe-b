import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-play-quiz-page',
  templateUrl: './play-quiz-page.component.html',
  styleUrls: ['./play-quiz-page.component.scss']
})
export class PlayQuizPageComponent implements OnInit {

  @Input()
  quiz : Quiz;
  currentQuestion = 0;
  answerSelected = false;

  constructor() { }


  ngOnInit(): void {
    
  }

  onAnswer(option: boolean){
    if(this.quiz.questions.length>this.currentQuestion){
    this.answerSelected = true;
    setTimeout(()=>{
      this.currentQuestion++;
      this.answerSelected = false;
    }, 1000);
    }
    
    
  }

}
