import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {NominateService} from '../../nominate.service';

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
  
  candidateData: any;

  constructor(private nominate: NominateService){

  } 
 
  ngOnInit() {
    this.nominate.fetchNominee().subscribe(data => this.candidateData = data);
    console.log(this.candidateData);
  }

  displayedColumns: string[] = ['POSITION', 'LRN', 'CANDIDATE NAME','PARTYLIST', "GRADE LEVEL", "SECTION", "UPDATE", "REMOVE" ];


  onUpdate(id, lrn, fullName, party, gradeLevel, section, position){
    const candidate = {
      lrn: lrn,
      fullName: fullName,
      party: party,
      gradeLevel: gradeLevel,
      section: section,
      position: position
    }
   
    this.nominate.updateNominee(candidate, id).subscribe(data => console.log(data));
  }

  onDelete(id){
    
   this.nominate.deleteNominee(id).subscribe(data => console.log(data));

  }

}
