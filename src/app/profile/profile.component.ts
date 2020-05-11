import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getProfile().subscribe(data => {
      console.log('profile page');
    }, error => {
      console.log(error);
    });
  }

}
