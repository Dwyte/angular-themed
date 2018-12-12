import { Component, OnInit } from '@angular/core';
import { Candidates } from './candidates';
import {BallotfetchService} from '../ballotfetch.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.scss']
})

export class BallotComponent implements OnInit {
  errorMsg: any;
  data;

//president= this.data.president;
  candidateModel = new Candidates('null','','','');

  constructor(private _ballotfetch: BallotfetchService, private router: Router){}

  ngOnInit() {
  	this.fetchPresident();
  	  	

  	
  }
  fetchPresident(){
  	this._ballotfetch.fetch().subscribe(
  		 (res) => {this.data = res;
  		 	console.log(this.data.president);
  		 	// console.log(this.data.president[1]);
  		 	// console.log(this.data.president[1].name)
  		 }
  		);
  }

 //  fetchData(){
	// this._ballotfetch.fetchData().subscribe(
	// response => console.log('Success!', response),
	// // response => this.data = response,
	// error => this.errorMsg = error.statusText)
 //  }

  onSubmitBallot(){
  	this._ballotfetch.sendData(this.candidateModel).subscribe(data => {});
		// if (data.success) {
		// 		//this.flashMessage.show('You are now registered !', {cssClass: 'alert-success', timeout: 3000});
		// 		this.router.navigate(['/login']);
		// 	} else {
		// 		//this.flashMessage.show('An eror Occured!', {cssClass: 'alert-danger', timeout: 3000});
		// 		this.router.navigate(['/register']);
		// 	} 
		// });	
	}		


	
}
