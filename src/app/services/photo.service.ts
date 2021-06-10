import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


const baseUrl = environment.APIUrl;
const service = '/resume/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  create(file: File, idUser: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('photo', file);

    const req = new HttpRequest('POST', `${baseUrl}${service}/${idUser}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  update(file: File, idUser: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('photo', file);

    const req = new HttpRequest('PUT', `${baseUrl}${service}/${idUser}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  get(idUser: any): Observable<any> {
    return this.http.get(`${baseUrl}${service}/getByUser/${idUser}`);
  }
}
