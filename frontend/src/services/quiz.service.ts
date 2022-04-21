import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {Question} from '../models/question.model';
import {serverUrl, httpOptionsBase} from '../configs/server.config';
import {catchError} from 'rxjs/operators';
import {Category} from '../models/category.model';
import {QuizInstance} from '../models/quizInstance.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /*
   Services Documentation:
   https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /*
   The list of quiz.
   The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = [];
  private quizSelected: Quiz = null;
  private quizzesInstances: QuizInstance[] = [];

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]>
    = new BehaviorSubject(this.quizzes);

  public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizSelected);
  public quizSelectedId$: BehaviorSubject<String> = new BehaviorSubject(undefined);
  public quizInstanceSelected$: BehaviorSubject<QuizInstance[]> = new BehaviorSubject([]);
  public categorySelected$: Subject<Category> = new Subject();

  private categoryUrl = serverUrl + '/categories';
  private quizUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';
  private quizInstancePath = serverUrl + '/quiz_instance';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveQuizzes();
    this.retrieveQuizzesInstances();
  }

  retrieveQuizzes(): void {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }

  retrieveQuizzesInstances(): void {
    this.http.get<QuizInstance[]>(this.quizInstancePath).subscribe((quizInstanceList) => {
      this.quizzesInstances = quizInstanceList;
      this.quizInstanceSelected$.next(this.quizzesInstances);
    });
  }


  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions);
  }

  sendStatsToBackend(quiz: Quiz, user: User, stadeEntre: number) {
    const quizInstance: QuizInstance = {
      quizId: quiz.id,
      userId: user.id,
      stade: stadeEntre,
      correctAnswers: quiz.correctQuestions,
      wrongAnswers: quiz.incorrectQuestions,
      questions: quiz.questions
    };
    this.http.post<QuizInstance>(this.quizInstancePath, quizInstance, this.httpOptions).subscribe((qi) => {
      console.log('QuizInstance sent to backend', qi);
    });
  }

  setSelectedQuiz(quizId: string): Observable<string> {
    const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
    });
    return of(quizId);
  }

  setSelectedQuizQuiz(quiz: Quiz): void {
    this.quizSelected = quiz;
    this.quizSelected$.next(this.quizSelected);
  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  addQuestion(quiz: Quiz, question: Question): void {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, this.httpOptions).subscribe(() => {
      this.setSelectedQuiz(quiz.id);
      this.retrieveQuizzes();
    });
  }

  deleteQuestion(quiz: Quiz, question: Question): void {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    this.http.delete<Question>(questionUrl, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

  getQuizByCategory(category: Category): Quiz[] {
    const listQuizzes: Quiz[] = [];

    this.quizzes.forEach(quiz => {
      if (quiz.category.id === category.id) {
        listQuizzes.push(quiz);
      }
    });

    return listQuizzes;
  }

  getQuizInstanceById(quizId: string): QuizInstance[] {
    const res: QuizInstance[] = [];
    this.quizzesInstances.forEach(quizInstance => {
      if (quizInstance.quizId === quizId) {
        res.push(quizInstance);
      }
    });
    return res;
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log('Il y a eu une erreur');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getQuiz(id: string): Observable<Quiz> {
    const quiz = this.quizzes.find(q => String(q.id) === id);
    return of(quiz);
  }
}
