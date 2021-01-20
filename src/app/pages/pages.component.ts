/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service';

@Component({
  selector: 'towify-pages',
  styleUrls: ['pages.component.scss'],
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  routerMenuList = [];

  collapsedStatus = false;

  constructor(private readonly authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    await this.getRouterMenuList();
  }

  logout(): void {
    this.authService.logout();
  }

  async getRouterMenuList(): Promise<void> {
    const response: any = await this.authService.getRouterList();
    this.routerMenuList = JSON.parse(response);
  }
}
