import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-database',
  templateUrl: './upload-database.component.html',
  styleUrls: ['./upload-database.component.scss']
})
export class UploadDatabaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //file upload config
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api/sample"
    }
};

}
