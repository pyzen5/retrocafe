import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from './comp/login/login.component';
import { BackendService } from './services/backend.service';
import { Store } from '@ngrx/store';
import * as ProfileActions from './ngrx/actions/profile.actions';
import { Profile } from './models/profile';
import { IAppState } from './ngrx/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retrocafe';
  isLogged = this.backendService.isLoggedIn();
  constructor(public dialog: MatDialog, public backendService: BackendService, private store: Store<IAppState>) { }

  triggerAction() {
    let a: Profile;
    a = {
      firstname: 'phani',
      lastname: 'kiran',
      mobile: new Date().toString(),
      email: '',
      isadmin: 1
    };
    this.store.dispatch(ProfileActions.SetProfile({payload: a}));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '280px',
      data: { name: 'this.name', animal: 'this.animal' }
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
