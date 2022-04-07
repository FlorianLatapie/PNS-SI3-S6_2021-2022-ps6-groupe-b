import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent implements OnInit {
  quiz: Quiz;
  user: User;
  // tslint:disable-next-line:ban-types
  isQuizSelected: Boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
    });
  }

  quizSelected(quiz: Quiz){
    this.quiz = quiz;
    this.navigateQuizStade();
    
  }  

  navigateQuizStade(){
    if(this.user.stade=="5"){
      this.router.navigate(['/play-quiz-page-stade5/' + this.quiz.id]);
    }else if(this.user.stade=="6"){
      this.router.navigate(['/play-quiz-page-stade6/' + this.quiz.id]);
    }else{
      this.router.navigate(['/play-quiz-page-stade4/' + this.quiz.id]);
    }
  }
}
