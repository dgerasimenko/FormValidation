import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedureDocRoutingModule } from './procedure-doc-routing.module';
import { ProcedureDocComponent } from "./procedure-doc.component";
import {FormsModule} from "@angular/forms";
import { DocFormComponent } from './doc-form/doc-form.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    ProcedureDocRoutingModule,
    FormsModule,
    DlDateTimePickerDateModule
  ],
  declarations: [ProcedureDocComponent, DocFormComponent]
})
export class ProcedureDocModule { }
