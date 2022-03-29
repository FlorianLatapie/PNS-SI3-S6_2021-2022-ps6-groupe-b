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

  // tslint:disable-next-line:typedef
  quizSelected(quiz: Quiz){
    this.quiz = quiz;
    this.navigateQuizStade();
    
  }  

  navigateQuizStade(){
    this.user.stade="4"; //car stade 5 et 6 pas faits
    if(this.user.stade=="5"){
      this.router.navigate(['/play-quiz-page/' + this.quiz.id]);
    }
    if(this.user.stade=="6"){
      this.router.navigate(['/play-quiz-page/' + this.quiz.id]);
    }else{
      this.router.navigate(['/play-quiz-page-stade4/' + this.quiz.id]);
    }
  }
}
