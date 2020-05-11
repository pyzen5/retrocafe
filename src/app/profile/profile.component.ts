import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Profile;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getProfile().subscribe(data => {
      this.user = data;
      console.log('profile page');
    }, error => {
      console.log(error);
    });
  }

}
