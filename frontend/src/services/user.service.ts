import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { User } from '../models/user.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

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
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.http.get<User[]>(this.userUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
    });
  }

  addUser(user: User): void {
    this.http.post<User>(this.userUrl, user, this.httpOptions).subscribe(() => this.retrieveUsers());
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

  logoutUser(): void{
    this.userSelected$.next(null);
  }

  deleteUser(user: User): void {
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.delete<User>(urlWithId, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  updateUser(user: User): void{
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.put<User>(urlWithId, user, this.httpOptions).subscribe(() => this.retrieveUsers());
    console.log('user updated !');
  }
}
