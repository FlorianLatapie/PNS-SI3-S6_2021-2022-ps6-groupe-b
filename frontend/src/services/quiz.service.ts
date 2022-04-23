import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {Question} from '../models/question.model';
import {httpOptionsBase, serverUrl} from '../configs/server.config';
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
  private quizzesInstances: QuizInstance[] = [];


  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(undefined);
  public categorySelected$: BehaviorSubject<Category> = new BehaviorSubject<Category>(undefined);
  public quizInstances$: BehaviorSubject<QuizInstance[]> = new BehaviorSubject<QuizInstance[]>(this.quizzesInstances);

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
    this.http.get<QuizInstance[]>(this.quizInstancePath).subscribe(instanceList => {
      this.quizzesInstances = instanceList;
      this.quizInstances$.next(this.quizzesInstances);
    });
  }


  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions);
  }

  sendStatsToBackend(quiz: Quiz, user: User, stadeEntre: number): void {
    const quizInstance: QuizInstance = {
      quizId: quiz.id,
      userId: user.id,
      stade: stadeEntre,
      correctAnswers: quiz.correctQuestions,
      wrongAnswers: quiz.incorrectQuestions,
      questions: quiz.questions
    };
    this.http.post<QuizInstance>(this.quizInstancePath, quizInstance, this.httpOptions).subscribe((qi) => {
      this.retrieveQuizzesInstances();
    });
  }

  getQuiz(quizId: string): Observable<any> {
    const urlWithId = this.quizUrl + '/' + quizId;
    return this.http.get<Quiz>(urlWithId);
  }

  setSelectedQuizQuiz(quiz: Quiz): void {
    this.quizSelected$.next(quiz);
  }

  setSelectedCategory(category: Category): void {
    this.categorySelected$.next(category);
  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  addQuestion(quiz: Quiz, question: Question): void {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  deleteQuestion(quiz: Quiz, question: Question): Observable<any> {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    return this.http.delete<Question>(questionUrl, this.httpOptions);
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

  getQuizInstanceByQuizId(quizId: string, quizInstances: QuizInstance[]): QuizInstance[] {
    const res: QuizInstance[] = [];
    quizInstances.forEach(instance => {
      if (String(instance.quizId) === quizId) {
        res.push(instance);
      }
    });
    return res;
  }

  getQuizInstanceByQuizIdAndUserId(quizId: string, userId: string, quizInstances: QuizInstance[]): QuizInstance[] {
    const res: QuizInstance[] = [];
    quizInstances.forEach(instance => {
      if (String(instance.quizId) === quizId && String(instance.userId) === userId) {
        res.push(instance);
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

  getQuizInstance(id: string): Observable<QuizInstance> {
    const url = this.quizInstancePath + '/' + id;
    return this.http.get<QuizInstance>(url);
  }
}
