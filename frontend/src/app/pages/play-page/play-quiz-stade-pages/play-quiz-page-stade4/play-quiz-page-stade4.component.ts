import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from 'src/models/question.model';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';
import {logger} from 'codelyzer/util/logger';
import {UserService} from '../../../../../services/user.service';
import {User} from '../../../../../models/user.model';


@Component({
  selector: 'app-play-quiz-page-stade4',
  templateUrl: './play-quiz-page-stade4.component.html',
  styleUrls: ['./play-quiz-page-stade4.component.scss']
})
export class PlayQuizPageStade4Component implements OnInit {
  user: User;
  imagesToDisplay: number;
  endOfQuiz = false;
  quiz: Quiz;
  currentQuestion: Question;
  private questions: Question[];
  currentAnswerId: string;
  isCurrentAnswerCorrect: boolean;
  disabledButton: boolean;
  answerSelected: boolean;
  timer: any;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router, private userService: UserService) {
    this.quizService.retrieveQuizzes();
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.getQuiz(id);
  }


  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
    });
  }

  private getQuiz(id: string): void {
    this.quizService.getQuiz(id).subscribe(q => {
      this.quiz = q;
      console.log(this.quiz);
      this.quiz.correctQuestions = 0;
      this.quiz.incorrectQuestions = 0;
      this.questions = [...this.quiz.questions];
      // to del
      for (const q of this.questions) {
        q.correctAnswers = 0;
        q.incorrectAnswers = 0;
      }
      this.imagesToDisplay = 1;
      // mélange les questions
      this.shuffleArray(this.questions);
      this.currentQuestion = this.questions[0];
      // ngAfterContentInit utilisation attendre init quiz pour shuffle question
    });
  }

  onAnswer(option: boolean, idAnswer: string): void {
    this.currentAnswerId = idAnswer;
    this.isCurrentAnswerCorrect = option;
    this.changeBtnColor(option, idAnswer);
    if (option) {
      this.quiz.correctQuestions++;
      this.currentQuestion.correctAnswers++;
      this.questions.splice(this.questions.indexOf(this.currentQuestion), 1);
      this.answerSelected = true;
      this.nextQuestion();
    } else {
      this.quiz.incorrectQuestions++;
      this.currentQuestion.incorrectAnswers++;
      if (this.currentQuestion.incorrectAnswers < 3) {
        this.timer = setTimeout(() => {
          this.falseAnswer();
        }, 1000);
      } else {
        this.questions.splice(this.questions.indexOf(this.currentQuestion), 1);
        this.answerSelected = true;
        this.nextQuestion();
      }
    }
  }

  falseAnswer(): void {
    this.disableChangeBtnColor(this.isCurrentAnswerCorrect, this.currentAnswerId);
    this.imagesToDisplay++;
    this.shuffleArray(this.currentQuestion.answers);
    this.answerSelected = false;
  }

  nextQuestion(): void {
    if (this.questions.length >= 1) {
      this.timer = setTimeout(() => {
        this.initNextQuestion();
        this.answerSelected = false;
      }, 10000);
    } else {
      this.sendStatsToBackend(this.quiz);
      this.timer = setTimeout(() => {
        this.endOfQuiz = true;
        this.answerSelected = false;
      }, 10000);
    }
  }

  sendStatsToBackend(quiz: Quiz): void {
    this.quizService.sendStatsToBackend(quiz, this.user, 4);
  }

  initNextQuestion(): void {
    this.disableChangeBtnColor(this.isCurrentAnswerCorrect, this.currentAnswerId);
    this.isCurrentAnswerCorrect = false;
    this.imagesToDisplay = 1;
    this.currentQuestion = this.questions[0];
    // mélange les réponses
    this.shuffleArray(this.currentQuestion.answers);
  }

  shuffleArray(array): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  reloadQuiz(): void {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  changeBtnColor(option: boolean, id: string): void {
    const btn = document.getElementById(id);
    this.disabledButton = true;
    if (option) {
      btn.classList.add('button-green');
    } else {
      btn.classList.add('button-red');
    }
  }

  disableChangeBtnColor(option: boolean, id: string): void {
    const btn = document.getElementById(id);
    this.disabledButton = false;
    if (option) {
      btn.classList.remove('button-green');
    } else {
      btn.classList.remove('button-red');
    }
  }

  changeQuestion(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.questions.length >= 1 ? this.initNextQuestion() : this.endOfQuiz = true;
      this.answerSelected = false;
      this.disabledButton = false;
    }
  }

}
