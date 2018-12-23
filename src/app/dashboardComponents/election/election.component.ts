import { Component, OnInit } from '@angular/core';
import {ElectionService} from '../../election.service';
@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent implements OnInit {
  electionData:any;
  hasElection:any;	

  electionStarted:any;

  constructor(private election: ElectionService) { }

  ngOnInit() {
  	this.election.getElection().subscribe(data => {
  		this.electionData = data
  		}, error => { 
  			this.electionData = error.error;}
  	);

  	if( this.electionData == "Election not found" ){
  		this.hasElection = false;
  	} else {
  		this.electionData = true;
  	}

  	this.electionStarted = true;
  }



}
