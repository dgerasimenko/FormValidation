import { Injectable } from '@angular/core';
import { ProcedureDoc } from "./procedure-doc";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProcedureDocService {
  private apiUrl = 'http://localhost:8080/procedure-doc';
  constructor(private http: Http) {}

  public procedureDoc(doc) {
    return this.http.post(this.apiUrl, doc);
  }

}
