import { Component, OnInit } from '@angular/core';
import {NominateService} from '../../nominate.service';
import {Nominee} from './nominee';


@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.scss']
})
export class NominateComponent implements OnInit {

  constructor(private nominate: NominateService) { }

  ngOnInit() {
  }

  pname1: String; plrn1: String; pparty1: String;
  vpname1: String; vplrn1: String; vpparty1: String;
 
  test(){
    // const pres:Nominee[] = [ 
    //   {name: this.pname1, lrn: this.plrn1, party:this.pparty1 },
    // ] ;

    const pres = {
      name : this.pname1,
      lrn: this.plrn1,
      party: this.pparty1
    }

    this.nominate.test(pres);
  } 

  
} 
