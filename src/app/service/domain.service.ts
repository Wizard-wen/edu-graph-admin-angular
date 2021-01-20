/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
  }

  async createDomain(requestBody: any) {
    return this.http
      .post('api/domain/createDomain', requestBody)
      .toPromise();
  }

  async removeDomain(requestBody: any) {
    return this.http
      .post('api/domain/removeDomain', requestBody)
      .toPromise();
  }

  async updateDomain(requestBody: any) {
    return this.http
      .post('api/domain/updateDomain', requestBody)
      .toPromise();
  }

  async getDomainPageList(requestBody: { pageId: number, pageSize: number }) {
    return this.http
      .post('api/domain/getDomainPageList', requestBody)
      .toPromise();
  }
}
