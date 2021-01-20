/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginRequestType } from './type';
import { menu } from './data/menu';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
  }
  async login(requestBody: LoginRequestType): Promise<void> {
    // const response: any = await this.http
    //   .post('api/admin/login', requestBody)
    //   .toPromise();
    // if (response.code === 0) {
    //   sessionStorage.setItem('towifyToken', response.data);
      sessionStorage.setItem(
        'eduRouter',
        JSON.stringify(menu)
      );
    //   return response;
    // }
    // return false;
  }

  getRouterList(): string | null {
    return sessionStorage.getItem('eduRouter');
  }

  logout(): void {
    sessionStorage.removeItem('eduRouter');
    this.router.navigate(['/login']).then();
  }
}
