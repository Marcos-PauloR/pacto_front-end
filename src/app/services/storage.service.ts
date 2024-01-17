import { Injectable } from '@angular/core';

const TOKEN = 'auth-user';

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
    window.sessionStorage.setItem(TOKEN, JSON.stringify(user.token));
  }

  public getToken(): any {
    const user = window.sessionStorage.getItem(TOKEN);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): boolean {
    console.log(window.sessionStorage)
    const user = window.sessionStorage.getItem(TOKEN);
    return  window.sessionStorage.getItem(TOKEN) ? true : false;
  }

}
