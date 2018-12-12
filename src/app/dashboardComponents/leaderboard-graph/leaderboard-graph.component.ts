import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-leaderboard-graph',
  templateUrl: './leaderboard-graph.component.html',
  styleUrls: ['./leaderboard-graph.component.scss']
})
export class LeaderboardGraphComponent implements OnInit{
	  
  ngOnInit() {
  }

  

  constructor(private breakpointObserver: BreakpointObserver) {}

  //pie graph specs
  view1 : any[] = [400, 400];

  colorScheme1 =  {
    domain: [ '#f40d30', '#A10A28', '#C7B42C', '#AAAAAA' ]
  };

  public votedList1 =  [
    {
      "name": "Germany",
      "value": 60
    },{
      "name": "Germany",
      "value": 10
    },{
      "name": "Germany",
      "value": 90
    },{
      "name": "Germany",
      "value": 70
    },{
      "name": "Germany",
      "value": 70
    },{
      "name": "Germany",
      "value": 70
    }
  ];

  public customColors1 = [
    { 
      name: 'showLabels',
      value: '#ffffff'
    },
    { 
      name: 'Student already voted',
      value: '#ffffff'
    }
];

  showLabels1 = "Student already voted";

  totalVoters1 = 100;

  //-------------------------------------------pie graph specs
  view : any[] = [400, 400];

  colorScheme =  {
    domain: [ '#f40d30', '#A10A28', '#C7B42C', '#AAAAAA' ]
  };

  public votedList =  [
    {
      "name": "Germany",
      "value": 60
    }
  ];

  public customColors = [
    { 
      name: 'showLabels',
      value: '#ffffff'
    },
    { 
      name: 'Student already voted',
      value: '#ffffff'
    }
];

  showLabels = "Student already voted";

  totalVoters = 100;

}



