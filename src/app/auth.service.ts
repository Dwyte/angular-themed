import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken : any;
  user: any;

  constructor( private http: HttpClient ) { }

  //this must be only one time to create admin account
  register(data: IAuth){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<IAuth>('url', data, httpOptions).pipe();
  }

  authenticate(data: IAuth){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<IAuth>('url', data, httpOptions).pipe();
  }

  storeToken(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');  
    this.authToken = token;
  }

  LoggedIn(){
    return tokenNotExpired('id_token');
  }

  Logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}

export interface IAuth {
  username: String;
  password: String;
}