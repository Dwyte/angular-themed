import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	fullName:String;
	lrn:any;
	gradeLevel:any;
  section:String;

  constructor(private service: HomeService) { }

  ngOnInit() {
  	
  }

  onSubmit(){
    const trimmedSection = this.section.replace(/ /g,'').toLowerCase();
  
    const user = {
  		fullName: this.fullName,
		  lrn: this.lrn,
		  gradeLevel: this. gradeLevel,
		  section: trimmedSection
  	}

    console.log(user);
    this.service.userChecker(user).subscribe( data => console.log(data));  
  }
}
