import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { EmployeePersonalDetails } from './employeepersonaldetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeepersonaldetailsService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:9086/emp/personal";

  getEmployeesList(): Observable<EmployeePersonalDetails[]>{
    return this.httpClient.get<EmployeePersonalDetails[]>(`${this.baseURL}`);
  }

  createEmployeepersonaldetails(employee: EmployeePersonalDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
}
