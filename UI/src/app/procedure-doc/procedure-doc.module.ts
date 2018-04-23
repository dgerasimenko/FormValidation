import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedureDocRoutingModule } from './procedure-doc-routing.module';
import { ProcedureDocComponent } from "./procedure-doc.component";
import { FieldErrorViewComponent } from './field-error-view/field-error-view.component';
import {FormsModule} from "@angular/forms";
import { DocFormComponent } from './doc-form/doc-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProcedureDocRoutingModule,
    FormsModule
  ],
  declarations: [ProcedureDocComponent, FieldErrorViewComponent, DocFormComponent]
})
export class ProcedureDocModule { }
