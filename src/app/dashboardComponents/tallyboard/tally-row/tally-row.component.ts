import { Component, OnInit, Input } from '@angular/core';
import { TallyService } from '../../../tally.service';

@Component({
  selector: 'app-tally-row',
  templateUrl: './tally-row.component.html',
  styleUrls: ['./tally-row.component.scss']
})

export class TallyRowComponent implements OnInit {

  @Input("tallyPos") positionsToTally: string[];
  @Input("columns") displayedColumns: string[];
  talliedResults: any[] = [];

  constructor(private tallyService: TallyService) {}

  ngOnInit() {
    this.positionsToTally.forEach(element => {
      this.tallyService.tallyResult(element).subscribe(res => {
        this.talliedResults.push(res);
      });
    });
  }
}