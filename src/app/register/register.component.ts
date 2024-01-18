import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router);
  form:any = {
    nome: null,
    email: null,
    password: null,
    role:'USER'
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private toast: HotToastService) { }


  onSubmit(): void {
    const { nome, email, password, role } = this.form;
    this.authService.register(nome, email, password, role).subscribe(
      data => {
        this.toast.success('Usário cadastrado com sucesso!',{duration:3000,position:'top-center'});
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        err.error.errors.map((e:any)=>{
          if(e.message!=='' && e.message!==undefined){
            this.toast.error(e.message,{duration:3000});
          }
        })
        
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      );
  }

}
