import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  userChecker(data:any){
  	const httpOptions = {
  		headers : new HttpHeaders({
  			'Content-type' : 'application/json'
  		})
  	}

  	return this.http.post<any>('http://localhost:3000/api/voters/auth/', data, httpOptions).pipe();	
  }
}
