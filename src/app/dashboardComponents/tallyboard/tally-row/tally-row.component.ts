import { Component, OnInit, Input } from '@angular/core';
import { TallyService } from '../../../tally.service';

@Component({
  selector: 'app-tally-row',
  templateUrl: './tally-row.component.html',
  styleUrls: ['./tally-row.component.scss']
})

export class TallyRowComponent implements OnInit {

  @Input("tallyPos") tallyPositions: string[];
  @Input("columns") displayedColumns: string[];
  talliedResults: any[] = [];

  constructor(private tallyService: TallyService) {}

  ngOnInit() {
    this.tallyPositions.forEach(element => {
      this.tallyService.tallyResult(element).subscribe(res => {
        this.talliedResults.push(res);
      });
    });
  }
}