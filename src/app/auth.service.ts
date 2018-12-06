import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken : any;
  user: any;

  constructor( private http: HttpClient, public jwtHelper: JwtHelperService  ) { }

  exportToken(){
    return this.authToken;
  }

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

  returnToken(){
    return localStorage.getItem('id_token');
  }

  loadToken(){
    const token = localStorage.getItem('id_token');  
    this.authToken = token;
  }

  LoggedIn(){
    return this.jwtHelper.isTokenExpired('id_token');
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