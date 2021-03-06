import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employment } from '../models/employment.model';
import {environment} from '../../environments/environment';

const baseUrl = environment.APIUrl;
const service = '/resume/employment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  constructor(private http: HttpClient) { }

  getAll(idUser: any): Observable<Employment[]> {
    return this.http.get<Employment[]>(`${baseUrl}${service}/getAll/${idUser}`);
  }

  get(id: any): Observable<Employment> {
    return this.http.get(`${baseUrl}${service}/${id}`);
  }

  create(data: any, idUser: any): Observable<any> {
    return this.http.post(`${baseUrl}${service}/${idUser}`, data, httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}${service}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}${service}/${id}`);
  }
}
