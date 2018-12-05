import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Hydrogen'},
  {position: 5, name: 'Helium'},
  {position: 6, name: 'Hydrogen'},
  {position: 4, name: 'Hydrogen'},
  {position: 5, name: 'Helium'},
  {position: 6, name: 'Hydrogen'},
  {position: 7, name: 'Helium'}
  ];

@Component({
  selector: 'app-leaderboard2-graph2',
  templateUrl: './leaderboard2-graph2.component.html',
  styleUrls: ['./leaderboard2-graph2.component.scss']
})
export class Leaderboard2Graph2Component  implements OnInit{
	  displayedColumns: string[] = ['position', 'name'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   
   @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  //pie graph specs
  view : any[] = [400, 400];

  colorScheme =  {
    domain: [ '#f40d30', '#A10A28', '#C7B42C', '#AAAAAA' ]
  };

  public votedList =  [
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



