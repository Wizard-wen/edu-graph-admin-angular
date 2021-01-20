/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'edu-not-found',
  styleUrls: ['./not.found.component.scss'],
  templateUrl: './not.found.component.html'
})
export class NotFoundComponent {
  constructor(private readonly router: Router) {}

  async goLoginPage() {
    await this.router.navigate(['/login']);
  }
}
