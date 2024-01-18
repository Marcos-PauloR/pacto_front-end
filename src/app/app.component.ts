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

  isLoggedIn: boolean = false;
  userName?: string;
  router = inject(Router);

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}
  
  
  
  ngOnInit(): void {
    this.authService.isLogged.subscribe((value) => {
      this.isLoggedIn = value
    })
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn =this.storageService.isLoggedIn(); 
      this.roles = this.storageService.getRole();
      this.userName = this.storageService.getUser();
    }
  }

  
  logout(): void {
    this.isLoggedIn = false;
    this.storageService.clean();
    window.location.reload();
    this.authService.isLogged.emit(false);
    this.router.navigate(['/']);
  }
}
