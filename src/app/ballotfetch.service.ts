import { Injectable, NgModule} from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators';	
import { throwError } from 'rxjs';
import {Candidates} from './ballot/candidates';
import {AuthService} from './auth.service';





@Injectable({
  providedIn: 'root'
})
export class BallotfetchService {

  constructor(private http: HttpClient,
              private authService: AuthService
              ) { }

  // sendData(data){
  // 	let headers = new Headers();
  // 	headers.append('Content-type', 'application/json');
  // 	return this.http.post('http://localhost:40000', data, {headers: headers}).pipe(map(res => res.json()));
  // }
  token: any;
  
  

  updateData (data: Candidates ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authService.authToken
      })
    };
    return this.http.post<Candidates>('url',data,httpOptions).pipe();
  }

 sendData (data: Candidates) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.authToken
    })
  };
    return this.http.post<Candidates>('this._url', data, httpOptions).pipe(catchError(this.errorHandler));
  }

  fetchData(): Observable<Candidates[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.authToken
      })
    };
  	return this.http.get<Candidates[]>('https://jsonplaceholder.typicode.com/users',httpOptions);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  errHandler(error: HttpErrorResponse){
  	return Observable.throw(error.message || "Something went wrong!");
  }
}

