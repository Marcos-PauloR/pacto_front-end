import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { interceptToken } from './helpers/token.interceptor';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
    HotToastModule.forRoot({
      reverseOrder: true,
      dismissible: true,
      autoClose: true,
      position:'top-right',
      theme:'snackbar'
    })
  ],
  providers: [provideHttpClient(withInterceptors([interceptToken]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
