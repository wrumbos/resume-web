import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

const baseUrl = environment.APIUrl;
const service = '/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(baseUrl + service + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, fullname: string,
           address: string, zip: string, phone: string, aboutme: string): Observable<any> {
    return this.http.post(baseUrl + service + 'signup', {
      username,
      email,
      password,
      fullname,
      address,
      zip,
      phone,
      aboutme
    }, httpOptions);
  }
}
