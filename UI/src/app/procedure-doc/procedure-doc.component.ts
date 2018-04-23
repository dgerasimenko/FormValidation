import { Component, OnInit } from '@angular/core';
import {ProcedureDoc} from "./procedure-doc";
import {ProcedureDocService} from "./procedure-doc.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'procedure-doc',
  templateUrl: './procedure-doc.component.html',
  styleUrls: ['./procedure-doc.component.css'],
  providers: [ProcedureDocService]
})
export class ProcedureDocComponent implements OnInit {

  ngOnInit() {
  }
}
