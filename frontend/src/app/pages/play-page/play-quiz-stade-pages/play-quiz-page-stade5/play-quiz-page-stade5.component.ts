import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from 'src/models/question.model';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';


@Component({
  selector: 'app-play-quiz-page-stade5',
  templateUrl: './play-quiz-page-stade5.component.html',
  styleUrls: ['./play-quiz-page-stade5.component.scss']
})
export class PlayQuizPageStade5Component implements OnInit {

  currentImage: number;
  endOfQuiz = false;
  quiz: Quiz;
  currentQuestion: Question;
  private questions: Question[];
  currentAnswerId: string;
  isCurrentAnswerCorrect: boolean;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.quiz.correctQuestions = 0;
      this.quiz.incorrectQuestions = 0;
      this.questions = [...this.quiz.questions];

      for (var q of this.questions) {
        q.correctAnswers = 0;
        q.incorrectAnswers = 0;
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


  onAnswer(option: boolean, answerId: string) {
    this.currentAnswerId = answerId;
    this.isCurrentAnswerCorrect = option;
    if (option) {
      this.quiz.correctQuestions++;
      this.currentQuestion.correctAnswers++;

    } else {
      this.quiz.incorrectQuestions++;
      this.currentQuestion.incorrectAnswers++;
    }
    this.nextQuestion();
  }


  nextQuestion() {
    this.changeBtnColor(this.isCurrentAnswerCorrect, this.currentAnswerId);
    setTimeout(() => {
      if (this.reAddQuestionIntoQuiz(this.currentQuestion)) {
        this.currentQuestion.currentImage = (this.currentQuestion.currentImage + 1) % 3; //inutile si 3 images
      } else if (this.questions.length <= 0) {
        this.endOfQuiz = true;
        return;
      }
      this.disableChangeBtnColor(this.isCurrentAnswerCorrect, this.currentAnswerId);
      this.initNextQuestion();
    }, 1000);
  }


  reAddQuestionIntoQuiz(question: Question): boolean {
    if (question.imageUrls.length > this.currentQuestion.currentImage) {
      if ((question.incorrectAnswers < 3 && question.correctAnswers < 1)) {
        // si trop de mauvaises réponses : oublie, si au moins deux bonnes réponses : on sait
        return true;
      }
      this.questions.splice(this.questions.indexOf(question), 1);
      return false;
    }
    return false;
  }


  initNextQuestion() {
    this.shuffleArray(this.questions);
    this.currentQuestion = this.questions[0];
    // mélange les réponses
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

  reloadQuiz() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  changeBtnColor(option: boolean, id :string){
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

}
