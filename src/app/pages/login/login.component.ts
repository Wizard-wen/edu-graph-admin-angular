/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'edu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder
  ) {}

  async login(): Promise<void> {
    // Object.keys(this.loginForm.controls).forEach((item: string) => {
    //   this.loginForm.controls[item].markAsDirty();
    //   this.loginForm.controls[item].updateValueAndValidity();
    // });
    // const loginRequest = {
    //   password: this.loginForm.value.password,
    //   name: this.loginForm.value.name
    // };
    // const response: any = await this.authService.login(loginRequest);
    // if (response) {
    //   await this.router.navigate(['/pages/file/list']);
    // }
    await this.router.navigate(['/pages/knowledge/knowledgeList'])
  }
}
