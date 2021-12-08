import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import{take, map,tap} from 'rxjs/operators'
import { GlobalVariables } from '../global-var/global-variables';
 @Injectable()

export class LoginGuard implements CanActivate {
 
  constructor(
    private login:LoginService,
    private router:Router,
  )
  {}
 
 
 
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    return this.login.user$
    .pipe(
      take(1),
      map( user => user ? true:false),
      tap(isLoggedIn =>
        {
          if(!isLoggedIn)
          {
            GlobalVariables.log=true
          this.router.navigate(['/tabs/login']);
          return false;
        }
        GlobalVariables.log=false
        return true;
        })
    );
  }
  
}
