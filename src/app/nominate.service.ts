import { Injectable } from '@angular/core';
import {Nominee} from './dashboardComponents/nominate/nominee';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NominateService {

  constructor(private http:HttpClient, private authService: AuthService) { }

   test(obja){
    console.log(obja);
  }

  addNominee(data:Nominee ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.authToken
      })
    };
    return this.http.post('url',data,httpOptions).pipe();
  }

  fetchNominee(): Observable<Nominee[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.authToken
      })
    };
    return this.http.get<Nominee[]>('url',httpOptions).pipe();

  }

  updateNominee(data:Nominee){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.authToken
      })
    };
    return this.http.post('url',data,httpOptions).pipe();

  }
}
