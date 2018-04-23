import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureDocComponent } from "./procedure-doc.component";

const routes: Routes = [
  {path: 'procedure-doc', component: ProcedureDocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ProcedureDocRoutingModule { }
