import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-play-quiz-page',
  templateUrl: './play-quiz-page.component.html',
  styleUrls: ['./play-quiz-page.component.scss']
})
export class PlayQuizPageComponent implements OnInit {

  @Input()
  quiz : Quiz;

  constructor() { }


  ngOnInit(): void {
    
  }

}
