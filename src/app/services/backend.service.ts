import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { dishes } from './mockdata';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiUrl = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  getMenuList() {
    return this.http.get(this.apiUrl + 'app/menu');
  }

  getProfile() {
    return this.http.get(this.apiUrl + 'profile/getuser').pipe(
      map(data => {
        return data;
      })
      // catchError(err => {
      //   // return throwError(err);
      // })
    );
  }

  login(data) {
    return this.http.post(this.apiUrl + 'app/login', data).pipe(
      map(authData => {
        const expiresAt = moment().add(authData['expiresIn'], 'second');
        localStorage.setItem('id_token', authData['idToken']);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        return authData;
      })
    );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
