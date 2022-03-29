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

  private currentQuestion = 0;
  answerSelected = false;
  private correctAnswers = 0;
  private incorrectAnswers = 0;
  private correctQuestions = 0;
  private incorrectQuestions=0;
  endOfQuiz = false;
  quiz: Quiz;
  private questions: Question[];

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.questions = this.quiz.questions;
      // mélange les questions
      this.shuffleArray(this.questions);

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
      this.questions[this.currentQuestion].correctAnswers = ""+this.correctAnswers++
    } 
    else{
      this.incorrectQuestions++;
      this.questions[this.currentQuestion].incorrectAnswers = ""+this.incorrectAnswers++
    }
    this.readdQuestionIntoQuiz(this.questions[this.currentQuestion]);
    this.nextQuestion();
  }

  reloadQuiz(){
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
 
  }

  nextQuestion(){
    if(this.questions.length-1>this.currentQuestion){
      this.answerSelected = true;
      setTimeout(()=>{
        //mélange les réponses
        this.shuffleArray(this.questions[this.currentQuestion+1].answers);
        this.currentQuestion++;
        this.answerSelected = false;
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

  readdQuestionIntoQuiz(question : Question){
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
