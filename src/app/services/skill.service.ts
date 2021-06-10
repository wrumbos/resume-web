import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Skill } from '../models/skill.model';

const baseUrl = environment.APIUrl;
const service = '/resume/skill';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getAll(idUser: any): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${baseUrl}${service}/getAll/${idUser}`, httpOptions);
  }

  get(id: any): Observable<Skill> {
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
