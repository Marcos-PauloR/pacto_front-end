import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9006/api/pacto/auth'

const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLogged = new EventEmitter<boolean>();

  login(email: string, password: string):Observable<any> {
    return this.http.post(AUTH_API + '/login' , {
      email,
      password
    }, httpsOptions);
  }

  register(nome:string, email: string, password: string, role:string): Observable<any> {
    return this.http.post(AUTH_API + '/register', {
      email,
      password,
      nome,
      role
    },
    httpsOptions)
  }


  // TODO: Implementar logout e refresh token no Spring
  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + '/logout', {}, httpsOptions)
  // }
}
