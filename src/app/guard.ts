import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';

import { LoginDataService } from './services/login-data.service';


@Injectable()
export class AboutGuard implements CanActivate {

  constructor(private loginDataService: LoginDataService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginDataService.checkAuthData()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
