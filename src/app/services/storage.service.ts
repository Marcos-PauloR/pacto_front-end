import { Injectable } from '@angular/core';

const TOKEN = 'auth-user';
const USER = 'user';
const ROLE = 'role';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(user: any): void {
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.removeItem(USER);
    window.sessionStorage.removeItem(ROLE);
    window.sessionStorage.setItem(TOKEN, JSON.stringify(user.token));
    window.sessionStorage.setItem(USER, JSON.stringify(user.user));
    window.sessionStorage.setItem(ROLE, JSON.stringify(user.role));
  }

  public getToken(): any {
    const user = window.sessionStorage.getItem(TOKEN);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public getRole(): any {
    const user = window.sessionStorage.getItem(ROLE);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(TOKEN);
    return  window.sessionStorage.getItem(TOKEN) ? true : false;
  }

}
