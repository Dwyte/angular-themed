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

  candidateModel = new Candidates('','','');

  constructor(private _ballotfetch: BallotfetchService, private router: Router, private http: Http){}

  ngOnInit() {
  }

  onSubmitBallot(){
  	this._ballotfetch.sendData(this.candidateModel).subscribe(data => {
		if (data.success) {
				//this.flashMessage.show('You are now registered !', {cssClass: 'alert-success', timeout: 3000});
				this.router.navigate(['/login']);
			} else {
				//this.flashMessage.show('An eror Occured!', {cssClass: 'alert-danger', timeout: 3000});
				this.router.navigate(['/register']);
			} 
		});	
	}		
}
