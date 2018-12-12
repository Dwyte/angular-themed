import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface INominee {
  position: string;	
  name: string;
  lrn: string;	
  party: string;
}



@Component({
  selector: 'app-update-nominee',
  templateUrl: './update-nominee.component.html',
  styleUrls: ['./update-nominee.component.scss']
})
export class UpdateNomineeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'lrn', 'party'];

  candidateData: INominee[] = [
    {position:"president", name:"carl", lrn:"111", party:"Democratics"},
    {position:"vicePredident", name:"xander", lrn:"333", party:"Democratics"},
    {position:"secretary", name:"kc", lrn:"22", party:"Democratics"},
  ]

  ngOnInit() {
  }
}
