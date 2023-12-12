import { Injectable } from '@angular/core';
import {Login} from 'src/app/model/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  list : Login[];
 

  constructor(private http:HttpClient) { }


httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  }
Loginadmin(Login: Login): Observable<Login> {
 
  return this.http.post<Login>('http://localhost:5000/api/users/loginUser',Login, this.httpOptions);
}
addadmin(Login: Login): Observable<Login> {
 
  return this.http.post<Login>('http://localhost:5000/api/users/new',Login, this.httpOptions);
}
}
