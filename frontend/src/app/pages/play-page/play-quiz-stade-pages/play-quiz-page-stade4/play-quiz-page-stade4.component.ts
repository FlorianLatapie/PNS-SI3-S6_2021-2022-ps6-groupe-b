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
  
  
  
  onAnswer(option: boolean, idAnswer: string){
    this.changeBtnColor(option,idAnswer);
    if(option){
      this.quiz.correctQuestions++;
      this.currentQuestion.correctAnswers++;
      this.questions.splice(this.questions.indexOf(this.currentQuestion),1);
      this.nextQuestion();
    } 
    else{
      this.quiz.incorrectQuestions++;
      this.currentQuestion.incorrectAnswers++;
      if(this.currentQuestion.incorrectAnswers<3){
        setTimeout(()=>{
        this.disableChangeBtnColor(option,idAnswer);
        this.imagesToDisplay++;
        this.shuffleArray(this.currentQuestion.answers);
        }, 2000);
        
      }else{
        this.questions.splice(this.questions.indexOf(this.currentQuestion),1);
        this.nextQuestion();
      }
    }
  }


  nextQuestion(){
    console.log("next question");
    if(this.questions.length>=1){
      setTimeout(()=>{
        this.initNextQuestion();
      }, 2000);
      
    }
    else{
      setTimeout(()=>{
        this.endOfQuiz=true;
      }, 3000)
    }

  }

  changeBtnColor(option: boolean, id :string){
    console.log("change btn color");
    var btn = document.getElementById(id);
    if(option){
      btn.classList.add("button-green");
    }else{
      btn.classList.add("button-red");
    }
  }

  disableChangeBtnColor(option: boolean, id :string){
    var btn = document.getElementById(id);
    if(option){
      btn.classList.remove("button-green");
    }else{
      btn.classList.remove("button-red");
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
