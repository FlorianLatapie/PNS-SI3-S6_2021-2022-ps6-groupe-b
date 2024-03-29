import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from 'src/models/question.model';
import {Quiz} from 'src/models/quiz.model';
import {QuizService} from 'src/services/quiz.service';
import {User} from '../../../../../models/user.model';
import {UserService} from '../../../../../services/user.service';


@Component({
  selector: 'app-play-quiz-page-stade6',
  templateUrl: './play-quiz-page-stade6.component.html',
  styleUrls: ['./play-quiz-page-stade6.component.scss']
})
export class PlayQuizPageStade6Component implements OnInit {
  user: User;
  lastQuestionImage: number;
  endOfQuiz = false;
  quiz: Quiz;
  currentQuestion: Question;
  lastQuestion: Question;
  private questions: Question[];
  currentAnswerId: string;
  isCurrentAnswerCorrect: boolean;
  randomImages: string[];
  currentRandomImage: number;
  randomImageToleft: boolean;
  disabledImage = false;
  answerSelected: boolean;
  timer: any;
  showDescription = false;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router, private userService: UserService) {
    this.quizService.retrieveQuizzes();
    const id = this.route.snapshot.paramMap.get('id');
    this.getQuiz(id);
    this.lastQuestionImage = 0;
  }

  ngOnInit(): void { // TODO add url path
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
    });
  }

  private getQuiz(id: string): void {
    this.quizService.getQuiz(id).subscribe(q => {
      this.quiz = q;
      this.quiz.correctQuestions = 0;
      this.quiz.incorrectQuestions = 0;
      this.questions = [...this.quiz.questions];
      for (const question of this.questions) {
        question.correctAnswers = 0;
        question.incorrectAnswers = 0;
        question.currentImage = 0;
      }
      this.randomImageToleft = false;
      this.currentRandomImage = 0;
      this.randomImages = [];
      for (let i = 1; i < 10; i++) {
        this.randomImages.push('../../../../../assets/' + i + '.jpg');
      }

      // mélange les questions
      this.shuffleArray(this.questions);
      this.currentQuestion = this.questions[0];
      // ngAfterContentInit utilisation attendre init quiz pour shuffle question

    });
  }

  onAnswer(option: boolean, answerId: string): void {
    this.currentAnswerId = answerId;
    this.isCurrentAnswerCorrect = option;
    this.lastQuestionImage = this.currentQuestion.currentImage;
    this.answerSelected = true;
    if (option) {
      this.quiz.correctQuestions++;
      this.currentQuestion.correctAnswers++;

    } else {
      this.quiz.incorrectQuestions++;
      this.currentQuestion.incorrectAnswers++;
    }
    this.nextQuestion();
  }

  nextQuestion(): void {
    this.changeBtnColor(this.isCurrentAnswerCorrect, this.currentAnswerId);
    this.timer = setTimeout(() => {
      this.endOfQuestion();
      this.answerSelected = false;
    }, 10000);
  }

  endOfQuestion(): void {
    if (this.reAddQuestionIntoQuiz(this.currentQuestion)) {
      this.currentQuestion.currentImage = (this.currentQuestion.currentImage + 1) % this.currentQuestion.images.length;
    } else if (this.questions.length <= 0) {
      this.sendStatsToBackend(this.quiz);
      this.endOfQuiz = true;
      return;
    }
    this.currentRandomImage = (Math.floor(Math.random() * 100)) % this.randomImages.length;
    this.disableChangeBtnColor(this.isCurrentAnswerCorrect, this.currentAnswerId);
    this.initNextQuestion();
  }

  sendStatsToBackend(quiz: Quiz): void {
    this.quizService.sendStatsToBackend(quiz, this.user, 6);
  }


  reAddQuestionIntoQuiz(question: Question): boolean {
    if (question.images.length > this.currentQuestion.currentImage) {
      if ((question.incorrectAnswers < 3 && question.correctAnswers < 1)) {
        return true;
      }
      this.questions.splice(this.questions.indexOf(question), 1);
      return false;
    }
    return false;
  }

  randomImageSide(): void {
    this.randomImageToleft = Boolean(Math.round(Math.random()));
  }

  initNextQuestion(): void {
    this.randomImageSide();
    this.shuffleArray(this.questions);
    this.currentQuestion = this.questions[0];
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
    if (option && !this.disabledImage) {
      this.disabledImage = true;
      btn.classList.add('image-green');
    } else if (!this.disabledImage) {
      this.disabledImage = true;
      btn.classList.add('image-red');
    }
  }

  disableChangeBtnColor(option: boolean, id: string): void {
    const btn = document.getElementById(id);
    this.disabledImage = false;
    if (option) {
      btn.classList.remove('image-green');
    } else {
      btn.classList.remove('image-red');
    }
  }

  changeQuestion(): void {
    if (this.timer) {
      this.lastQuestion = this.currentQuestion;
      clearTimeout(this.timer);
      this.endOfQuestion();
      this.answerSelected = false;
    }
  }

  switchToDescription(): void {
    if (this.isCurrentAnswerCorrect) {
      this.showDescription = !this.showDescription;
    }
  }
}
