import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './comp/login/login.component';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retrocafe';
  constructor(public dialog: MatDialog, public backendService: BackendService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '280px',
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onLogout() {
    this.backendService.logout();
  }
}
