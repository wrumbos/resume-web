import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/resume/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  create(file: File, idUser: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('photo', file);

    const req = new HttpRequest('POST', `${baseUrl}/${idUser}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  update(file: File, idUser: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('photo', file);

    const req = new HttpRequest('PUT', `${baseUrl}/${idUser}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  get(idUser: any): Observable<any> {
    return this.http.get(`${baseUrl}/getByUser/${idUser}`);
  }
}
