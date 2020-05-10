import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { dishes } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiUrl = '';
  constructor(private http: HttpClient) { }

  getMenuList() {
    return of(dishes);
    // return this.http.get(this.apiUrl + '');
  }
}
