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

  constructor(_ballotfetch: BallotfetchService, router: Router){}

  ngOnInit() {
  }

  onSubmitBallot(){
  	_ballotfetch.sendData(candidateModel).subscribe(data => {
		if (data.success) {
				this.flashMessage.show('You are now registered !', {cssClass: 'alert-success', timeout: 3000});
				this.router.navigate(['/login']);
			} else {
				this.flashMessage.show('An eror Occured!', {cssClass: 'alert-danger', timeout: 3000});
				this.router.navigate(['/register']);
			} 
		});	
	}		
}
