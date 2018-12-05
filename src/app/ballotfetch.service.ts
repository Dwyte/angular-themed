import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BallotfetchService {

  constructor() { }

  fetchData(data){
  	let headers = new Headers();
  	headers.append('Content-type', 'application/json');
  	return this.http.post('http://localhost:40000', data, {headers: headers}).pipe(map(res => res.json()));
  }

  sendData(){}
}
