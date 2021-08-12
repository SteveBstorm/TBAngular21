import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectResolver implements Resolve<string> {

  constructor(
    private _liste : ListService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    let index = route.params['index']
    console.log("je résoud")
    return this._liste.getOne(index)
  }
}
