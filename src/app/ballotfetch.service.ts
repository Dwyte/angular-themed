import { Injectable} from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';	
import { throwError } from 'rxjs';
import {Candidates} from './ballot/candidates';
import {AuthService} from './auth.service';
import {BallotFormat} from './ballot/ballot';

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
  token = this.authService.returnToken();

  updateData (data: Candidates ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Typehttps://m.facebook.com/':  'application/json',
        'Authorization': this.token
      })
    };
    return this.http.post<Candidates>('url',data,httpOptions).pipe();
  }

  sendData (data: Candidates) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': this.token
    //   })
    // };
    return this.http.post<Candidates>('this._url', data);
  }

  fetch() : Observable<any[]> {
    return this.http.get<any[]>('assets/test.json');
  }

  // fetchData(): Observable<any[]>{
  //  //  const httpOptions = {
  //  //    headers: new HttpHeaders({
  //  //      'Authorization': this.token
  //  //    })
  //  //  };
  // 	// return this.http.get<BallotFormat[]>('https://jsonplaceholder.typicode.com/users',httpOptions);
  //       return this.http.get<any[]>('assets/test.json');
  // }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  errHandler(error: HttpErrorResponse){
  	return Observable.throw(error.message || "Something went wrong!");
  }
}

