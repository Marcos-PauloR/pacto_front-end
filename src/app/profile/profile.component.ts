import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  currentUser: any;

  constructor(private storageService: StorageService){}

  noOnInit():void {
    this.currentUser = this.storageService.getToken();
  }
}
