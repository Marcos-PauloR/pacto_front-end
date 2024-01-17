import { Component, inject } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  // showAdminBoard = false;
  //
  userName?: string;
  router = inject(Router);

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log(this.isLoggedIn)
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getToken();
      this.roles = user.roles;
      this.userName = user.nome;
    }
  }

  // ngOnChanges(): void {
  //   console.log(this.isLoggedIn)
  //   this.isLoggedIn = this.storageService.isLoggedIn();
  //   if (this.isLoggedIn) {
  //     const user = this.storageService.getToken();
  //     this.roles = user.roles;
  //     this.userName = user.nome;
  //   }
  // }
  
  logout(): void {
    this.isLoggedIn = false;
    this.storageService.clean();
    window.location.reload();
    this.router.navigate(['/']);
  }
}
