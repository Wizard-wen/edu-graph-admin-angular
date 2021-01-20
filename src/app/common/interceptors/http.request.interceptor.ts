/**
 *
 */

import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = sessionStorage.getItem('eduToken');
    // if (!token) {
    //   this.router.navigate(['/login']).then();
    //   throw new Error('token not exists');
    // }
    // request.headers.set('token', token);
    return next.handle(request);
  }
}
