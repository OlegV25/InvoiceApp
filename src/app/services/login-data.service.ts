import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Injectable()
export class LoginDataService {

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router: Router) { }

  defaultAuth = {
    email: 'test',
    password: 'test'
  };

  login(em, pas) {
    const { password, email } = this.defaultAuth;
    if (password === pas && email === em) {
      this.storage.set('authData', { email, password });
      this.router.navigate(['invoice']);
    } else {
      alert('Wrong!');
    }
  }

  checkAuthData() {
    return this.storage.get('authData');
  }

}
