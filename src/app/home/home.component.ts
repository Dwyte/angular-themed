import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	name:String;
	lrn:String;
	grade:String;
	date:String;
	 //date = new FormControl(new Date());
  	// serializedDate = new FormControl((new Date()).toISOString());
  	section:String;

  constructor() { }

  ngOnInit() {
  	
  }

  onSubmit(){
  	const user = {
  		name: this.name,
		lrn: this.lrn,
		grade: this. grade,
		date: this.date,
		section: this.section
  	}

  	console.log (user);
  }
}
