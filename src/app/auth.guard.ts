import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { TokenStorageService } from './services/token-storage.service';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private tokenStorageService: TokenStorageService, private router: Router){
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {

    const isAuth = this.tokenStorageService.getUser().id != null;

    if (!isAuth){
      this.router.navigate(['/home']);
    }

    return isAuth;
  }
}
