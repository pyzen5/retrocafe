import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  };

  // tslint:disable-next-line: max-line-length
  constructor(public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data, private router: Router, private backendService: BackendService) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogin() {
    this.backendService.login(this.login).subscribe(data => {
      this.dialogRef.close();
      console.log(data);
      this.router.navigate(['profile']);
    }, error => {
      console.log(error);
    });
  }

  gotoRegister() {
    this.dialogRef.close();
    this.router.navigate(['register']);
  }
}
