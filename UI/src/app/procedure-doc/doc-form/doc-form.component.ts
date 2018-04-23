import { Component, OnInit } from '@angular/core';
import {ProcedureDoc} from "../procedure-doc";
import {Http} from "@angular/http";
import {DlDateTimePickerDateModule} from "angular-bootstrap-datetimepicker";

@Component({
  selector: 'app-doc-form',
  templateUrl: './doc-form.component.html',
  styleUrls: ['./doc-form.component.css']
})
export class DocFormComponent implements OnInit {

  dateTimePicker: DlDateTimePickerDateModule;

  locations = ['US', 'UK',
    'UA', 'GB'];

  procedureDoc: ProcedureDoc;

  submitted = false;

  constructor(private http: Http) { }

  onSubmit() {
    this.http.post("http://localhost:8080/procedure_doc", this.procedureDoc).subscribe(status=> console.log(JSON.stringify(status)));
  }



  newDoc(){
    this.procedureDoc = new ProcedureDoc('', '', '', '',
      '', '', '', '');
  }
  ngOnInit() {
    this.procedureDoc = new ProcedureDoc('222', 'tittle', 'description',
      'username', 'revision', this.locations[0], '', 'workflow name');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.procedureDoc); }
}
