import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent implements OnInit {
  quiz : Quiz;
  
  constructor() { }

  ngOnInit(): void {
  }

  quizSelected(quiz : Quiz){
    this.quiz = quiz;
  }

}
