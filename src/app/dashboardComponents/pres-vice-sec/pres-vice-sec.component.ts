import { Component, OnInit } from '@angular/core';
import { TallyService } from '../../tally.service';

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
  selector: 'app-pres-vice-sec',
  templateUrl: './pres-vice-sec.component.html',
  styleUrls: ['./pres-vice-sec.component.scss']
})
export class PresViceSecComponent implements OnInit {

  tallyPositions: string[] = ['President', 'Vice President', 'Secretary'];
  displayedColumns: string[] = ['party', 'name', 'votes'];
  talliedResults: any[] = [];

  constructor(private tallyService: TallyService) {}

  ngOnInit() {
    this.tallyPositions.forEach(element => {
      this.tallyService.tallyResult(element).subscribe(res => {
        this.talliedResults.push(res);
      });
    });

    console.log(this.talliedResults);
  }

  
  
  presDataSource = presBoard;

  viceDataSource = viceBoard;
  
  secretaryDataSource = secretaryBoard;
}
  


