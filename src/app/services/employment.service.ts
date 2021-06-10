import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employment } from '../models/employment.model';

const baseUrl = 'http://localhost:8080/api/v1/resume/employment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  constructor(private http: HttpClient) { }

  getAll(idUser: any): Observable<Employment[]> {
    return this.http.get<Employment[]>(`${baseUrl}/getAll/${idUser}`);
  }

  get(id: any): Observable<Employment> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any, idUser: any): Observable<any> {
    return this.http.post(`${baseUrl}/${idUser}`, data, httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
