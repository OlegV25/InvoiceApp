import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
         Router} from "@angular/router";
import { LoginDataService } from './login-data.service';
import { Injectable } from '@angular/core';

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
