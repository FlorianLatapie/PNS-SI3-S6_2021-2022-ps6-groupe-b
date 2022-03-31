import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';



@Component({
  selector: 'app-play-quiz-page-stade5',
  templateUrl: './play-quiz-page-stade5.component.html',
  styleUrls: ['./play-quiz-page-stade5.component.scss']
})
export class PlayQuizPageStade5Component implements OnInit {

  currentImage: number;
  private correctQuestions = 0;
  private incorrectQuestions=0;
  endOfQuiz = false;
  quiz: Quiz;
  currentQuestion: Question;
  private questions: Question[];

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.questions = this.quiz.questions;
      
      console.log(this.questions);
      //to del
      for(var q of this.questions){
        q.correctAnswers=0;
        q.incorrectAnswers=0;
        q.currentImage = 0;
      }
      
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
      this.correctQuestions++;
      this.currentQuestion.correctAnswers++;
      
    } 
    else{
      this.incorrectQuestions++;
      this.currentQuestion.incorrectAnswers++;
    }
    this.nextQuestion();
  }


  nextQuestion(){
    if(this.questions.length-1){
      setTimeout(()=>{
        if(this.reAddQuestionIntoQuiz(this.currentQuestion)){
          this.currentQuestion.currentImage = (this.currentQuestion.currentImage + 1)%3;
        }
        this.shuffleArray(this.questions);
        this.initNextQuestion();
      }, 1000);
    }
    else{
      setTimeout(()=>{
        this.quiz.correctQuestions=""+this.correctQuestions;
        this.quiz.incorrectQuestions=""+this.incorrectQuestions;
        this.endOfQuiz=true;
      }, 2000)
    }
  }

  reAddQuestionIntoQuiz(question : Question): boolean{
    if(question.imageUrls.length> this.currentQuestion.currentImage){
      if((question.incorrectAnswers<3 && question.correctAnswers<2)){ //si trop de mauvaises réponses : oublit, si au moins deux bonnes réponses : on sait
        console.log("readdquestionIntoQuiz: "+this.currentQuestion.id);
        console.log("bonne réponses : "+this.currentQuestion.correctAnswers);
        console.log("mauvaise réponses : "+this.currentQuestion.incorrectAnswers);
        console.log("");
        return true;
      }
      this.questions.splice(this.questions.indexOf(question),1);
      console.log("removing :"+ this.currentQuestion.id);
      console.log("question.incorrectAnswers : "+ question.incorrectAnswers +" question.correctAnswers : "+question.correctAnswers);
      return false;
    }
      console.log("plus d'image à afficher pour "+ this.currentQuestion.label);
    return false;
  }



  initNextQuestion(){
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
