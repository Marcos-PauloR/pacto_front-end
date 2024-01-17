import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  login(email: string, password: string):Observable<any> {
    return this.http.post(AUTH_API + '/login' , {
      email,
      password
    }, httpsOptions);
    
  }

  register(nome:string, email: string, password: string, role:string): Observable<any> {
    console.log(AUTH_API + '/register')
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
