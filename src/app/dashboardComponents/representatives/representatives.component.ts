import { Component, OnInit } from '@angular/core';

export interface format {
	position: String;
    name: String;
    votes: number;
}

const g7Board: format [] = [
	{position: 'G7 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G7 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G7 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G7 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G7 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G7 Representative', name: 'Sentinel Prime', votes: 1999}
];

const g8Board: format [] = [
	{position: 'G8 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G8 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G8 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G8 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G8 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G8 Representative', name: 'Sentinel Prime', votes: 1999}
];
const g9Board: format [] = [
	{position: 'G9 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G9 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G9 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G9 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G9 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G9 Representative', name: 'Sentinel Prime', votes: 1999}
];
const g10Board: format [] = [
	{position: 'G10 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G10 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G10 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G10 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G10 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G10 Representative', name: 'Sentinel Prime', votes: 1999}
];
const g11Board: format [] = [
	{position: 'G11 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G11 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G11 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G11 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G11 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G11 Representative', name: 'Sentinel Prime', votes: 1999}
];
const g12Board: format [] = [
	{position: 'G12 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G12 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G12 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G12 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G12 Representative', name: 'Sentinel Prime', votes: 1999},
	{position: 'G12 Representative', name: 'Sentinel Prime', votes: 1999}
];


@Component({
  selector: 'app-representatives',
  templateUrl: './representatives.component.html',
  styleUrls: ['./representatives.component.scss']
})
export class RepresentativesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'name', 'votes'];
  g7DataSource = g7Board;
  g8DataSource = g8Board;
  g9DataSource = g9Board;
  g10DataSource = g10Board;
  g11DataSource = g11Board;
  g12DataSource = g12Board;
}
