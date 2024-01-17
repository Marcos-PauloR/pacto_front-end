import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  isLoggedIn = false;
  routers = inject(Router)

  constructor(private userService:UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if(!this.isLoggedIn) this.routers.navigate(['/landing-page']);

  }

}
