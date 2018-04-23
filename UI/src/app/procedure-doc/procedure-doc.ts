import {DlDateTimePickerDateModule} from "angular-bootstrap-datetimepicker";

export class ProcedureDoc {
  constructor(
    public formId: string,
    public title: string,
    public description: string,
    public username: string,
    public revision: string,
    public location: string,
    public submittedDate: string,
    public workflowName: string,
    public id?: string
  ){}
}
