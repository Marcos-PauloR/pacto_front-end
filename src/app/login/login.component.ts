import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form:any = {
    email: null,
    password: null
  }
  isLoginFailed = false;
  errorMessage = "";
  routes = inject(Router)
  
  constructor(private authService: AuthService, private storageService: StorageService, private toast:HotToastService){} 

  ngOnInit():void{
    if(this.storageService.isLoggedIn()){
      this.authService.isLogged.emit(true);
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        this.storageService.saveToken(data);
        this.toast.success('Login efetuado com sucesso',{duration:3000});
        this.authService.isLogged.emit(true);
        this.routes.navigate(['/home']);
      },
      err => {
          this.authService.isLogged.emit(false);
        this.errorMessage = 'Email ou senha inválidos';
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage():void{
    window.location.reload();
  }

}
