import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TallyService {
  constructor(private http: HttpClient) { }

  tallyResult(position){
    return this.http.get<any[]>("http://localhost:3000/api/candidates/tally/" + position);
  }
}
