import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Education } from '../models/education.model';

const baseUrl = environment.APIUrl;
const service = '/resume/education';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  getAll(idUser: any): Observable<Education[]> {
    return this.http.get<Education[]>(`${baseUrl}${service}/getAll/${idUser}`, httpOptions);
  }

  get(id: any): Observable<Education> {
    return this.http.get(`${baseUrl}${service}/${id}`);
  }

  create(data: any, idUser: any): Observable<any> {
    return this.http.post(`${baseUrl}${service}/${idUser}`, data, httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}${service}/${id}`, data, httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}${service}/${id}`, httpOptions);
  }

}
