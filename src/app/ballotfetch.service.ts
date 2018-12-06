import { Injectable, NgModule} from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map} from 'rxjs/operators';	
 import { throwError } from 'rxjs';
 import {Candidates} from './ballot/candidates';






@Injectable({
  providedIn: 'root'
})
export class BallotfetchService {

  constructor(private http: HttpClient) { }

  // sendData(data){
  // 	let headers = new Headers();
  // 	headers.append('Content-type', 'application/json');
  // 	return this.http.post('http://localhost:40000', data, {headers: headers}).pipe(map(res => res.json()));
  // }

 sendData (data: Candidates) {
 	const httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};
    return this.http.post<Candidates>('this._url', data, httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  fetchData(): Observable<Candidates[]>{
  	return this.http.get<Candidates[]>('https://jsonplaceholder.typicode.com/users');
  }

  errHandler(error: HttpErrorResponse){
  	return Observable.throw(error.message || "Something went wrong!");
  }
}

// export interface format {

// }