import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { School } from './school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  schoolSelected: School;
  schools: School[];
  readonly baseURL = 'http://localhost:3010/api/school';

  constructor(private http: HttpClient) { }
  postEmployee(sch: School) {
    alert(sch.name +" succesfully saved!");
    console.log('before calling the API, the request is' + sch.name);
    return this.http.post(this.baseURL, sch);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(sch: School) {
    return this.http.put(this.baseURL + `/${sch._id}`, sch);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
