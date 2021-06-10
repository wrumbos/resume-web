import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resume} from '../models/resume.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.APIUrl;
const service = '/resume';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<Resume> {
    return this.http.get(`${baseUrl}${service}/${id}`, httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}${service}/${id}`, data, httpOptions);
  }

  consolidate(userName: any): Observable<any> {
    return this.http.get(`${baseUrl}${service}/consolidate/${userName}`, httpOptions);
  }

}
