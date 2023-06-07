import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private apiUrl='http://localhost:9086/getlocations'; 
  constructor(private http: HttpClient) {}

  getDropdownValues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

