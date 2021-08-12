import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(
    private _auth : FakeAuthService,
    private _router : Router
  ) {}

  canActivate(route : ActivatedRouteSnapshot) : boolean {
    if(this._auth.isConnected) return true
    else {
      this._router.navigate(['demo/demo7'])
      return false
    }
  }
  
}
