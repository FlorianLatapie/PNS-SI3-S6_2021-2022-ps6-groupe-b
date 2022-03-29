import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'protractor';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';



@Component({
  selector: 'app-play-quiz-page-stade4',
  templateUrl: './play-quiz-page-stade4.component.html',
  styleUrls: ['./play-quiz-page-stade4.component.scss']
})
export class PlayQuizPageStade4Component implements OnInit {

  private currentQuestion = 0;
  answerSelected = false;
  private correctAnswers = 0;
  private incorrectAnswers = 0;
  endOfQuiz = false;
  quiz: Quiz;


  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      
      // mélange les questions
      this.shuffleArray(this.quiz.questions);
      // ngAfterContentInit utilisation attendre init quiz pour shuffle question

    });

  }

  ngOnInit(): void { // TODO add url path
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }
  
  
  
  onAnswer(option: boolean){
    (option) ? this.correctAnswers ++ : this.incorrectAnswers++;
    this.nextQuestion();
  }

  reloadQuiz(){
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
 
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
