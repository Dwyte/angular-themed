import { Component, OnInit } from '@angular/core';


export interface format {
    position: String;
    name: String;
    votes: number;
  }

  const presBoard: format [] = [
    {position: 'President', name: 'Mosquida, Carl Justine', votes: 911},
    {position: 'President', name: 'Martinez, Xander Dwight', votes: 711}
  ];

  const viceBoard: format [] = [
    {position: 'Vice President', name: 'Dino, Shandieeret', votes: 639},
    {position: 'Vice President', name: 'Mortel, Jessa', votes: 11}
  ];

  const secretaryBoard: format [] = [
      {position: 'Secretary', name: 'Eleserio, John Rafael', votes: 2018},
      {position: 'Secretary', name: 'Bengilo, JV Antonio', votes: 1999}
    ];

@Component({
  selector: 'app-tallyboard',
  templateUrl: './tallyboard.component.html',
  styleUrls: ['./tallyboard.component.scss']
})
export class TallyboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   displayedColumns: string[] = ['position','name', 'votes'];
  presDataSource = presBoard; 
  viceDataSource = viceBoard;
  secretaryDataSource = secretaryBoard;

}
