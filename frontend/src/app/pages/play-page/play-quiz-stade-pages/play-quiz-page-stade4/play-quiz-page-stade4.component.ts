import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';



@Component({
  selector: 'app-play-quiz-page-stade4',
  templateUrl: './play-quiz-page-stade4.component.html',
  styleUrls: ['./play-quiz-page-stade4.component.scss']
})
export class PlayQuizPageStade4Component implements OnInit {

  imagesToDisplay: number;
  changeBtnToGreen=false;
  changeBtnToRed=false;
  endOfQuiz = false;
  quiz: Quiz;
  currentQuestion: Question;
  private questions: Question[];

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.quiz.correctQuestions=0;
      this.quiz.incorrectQuestions=0;
      this.questions = this.quiz.questions;
      //to del
      for(var q of this.questions){
        q.correctAnswers=0;
        q.incorrectAnswers=0;
      }
      this.imagesToDisplay = 1;
      // mélange les questions
      this.shuffleArray(this.questions);
      this.currentQuestion = this.questions[0];
      // ngAfterContentInit utilisation attendre init quiz pour shuffle question

    });

  }

  ngOnInit(): void { // TODO add url path
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }
  
  
  
  onAnswer(option: boolean){
    if(option){
      this.changeBtnToGreen = true;
      this.quiz.correctQuestions++;
      this.currentQuestion.correctAnswers++;
      this.questions.splice(this.questions.indexOf(this.currentQuestion),1);
      this.nextQuestion();
    } 
    else{
      this.changeBtnToRed = true;
      this.quiz.incorrectQuestions++;
      this.currentQuestion.incorrectAnswers++;
      if(this.currentQuestion.incorrectAnswers<3){
        this.imagesToDisplay++;
        this.shuffleArray(this.currentQuestion.answers);
        
      }else{
        this.questions.splice(this.questions.indexOf(this.currentQuestion),1);
        this.nextQuestion();
      }
    }
  }


  nextQuestion(){
    if(this.questions.length>=1){
      setTimeout(()=>{
        this.changeBtnToGreen = false;
        this.changeBtnToRed = false;
        this.initNextQuestion();
      }, 1000);
    }
    else{
      setTimeout(()=>{
        this.endOfQuiz=true;
      }, 2000)
    }
  }


  initNextQuestion(){
    this.imagesToDisplay=1;
    console.log(this.imagesToDisplay);
    this.currentQuestion = this.questions[0];
     //mélange les réponses
    this.shuffleArray(this.currentQuestion.answers);
  }
  
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

reloadQuiz(){
  let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

}


}
