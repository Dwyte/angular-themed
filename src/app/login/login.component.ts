import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;
  username: String;
  password: String;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

   onLoginMethod(){
  	const credentials = {
      username : this.username,
      password: this.password
    }

    this.auth.authenticate(credentials).subscribe(data => 
    	{
    		this.auth.storeToken(data.authToken);
    		console.log(this.auth.authToken);
    	});
  	
  }

}
