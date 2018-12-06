import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {AuthService} from '../../auth.service';
import {Candidates} from '../../ballot/candidates';


@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.scss']
})
export class NominateComponent implements OnInit {

  constructor(private http:HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  addNominee(data:Candidates ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.authToken
      })
    };
    return this.http.post('url',data,httpOptions).pipe();
  }

  fetchNominee(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.authToken
      })
    };
    return this.http.get('url',httpOptions).pipe();

  }

  updateNominee(data:Candidates){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.authToken
      })
    };
    return this.http.post('url',data,httpOptions).pipe();

  }
} 
