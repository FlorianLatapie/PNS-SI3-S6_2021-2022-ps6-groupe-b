import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {httpOptionsBase, serverUrl} from '../configs/server.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
   The list of user.
   */
  private users: User[] = [];

  /*
   Observable which contains the list of the user.
   */
  public users$: BehaviorSubject<User[]>
    = new BehaviorSubject([]);

  public userSelected$: BehaviorSubject<User> = new BehaviorSubject(undefined);

  public userWatched$: BehaviorSubject<User> = new BehaviorSubject(undefined);

  private userUrl = serverUrl + '/users';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
  }

  retrieveUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  getUser(userId: string): Observable<User> {
    const urlWithId = this.userUrl + '/' + userId;
    return this.http.get<User>(urlWithId);
  }

  setSelectedUser(userId: string): void {
    const urlWithId = this.userUrl + '/' + userId;
    this.http.get<User>(urlWithId).subscribe(u => {
      this.userSelected$.next(u);
    });
  }

  setWatchedUser(user: User): void {
    this.userWatched$.next(user);
  }

  logoutUser(): void {
    this.userSelected$.next(null);
  }

  deleteUser(user: User): void {
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.delete<User>(urlWithId, this.httpOptions).subscribe(u => this.users.splice(this.users.indexOf(u)));
  }

  updateUser(user: User): void {
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.put<User>(urlWithId, user, this.httpOptions).subscribe(() => this.retrieveUsers());
    console.log('user updated !');
  }

  getUserByLoginAndPassword(login: string, password: string): User[] {
    const userList: User[] = [];
    this.users.forEach(user => {
      if (user.login === login && user.password === password){
        userList.push(user);
      }
    });
    this.users = userList;
    this.users$.next(this.users);
    return userList;
  }

  setUsers(userList: User[]): void {
    this.users = userList;
    this.users$.next(this.users);
  }

  addToUsers(u: User): void {
    this.users.push(u);
    this.users$.next(this.users);
  }
}
