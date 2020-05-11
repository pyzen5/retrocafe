import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(public router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('id_token');
    let authReq = request.clone({setHeaders: {
      username: 'retrocafe',
      password: 'retrocafe',
      channel: 'Digital',
      domain: 'in',
      locale: 'en',
      'Content-Type': 'application/json'
    }});
    if (idToken) {
      authReq = authReq.clone({headers: authReq.headers.set('Authorization', 'Bearer ' + idToken)});
    }
    return next.handle(authReq).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          // preprocess response
        }
        return event;
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigate(['']);
          }
          // handle error
        }
        return throwError(error);
      })
    );
  }
}
