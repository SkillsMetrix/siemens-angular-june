import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private ls: LoginService, private router: Router) { }

  canActivate() {
    return this.ls.isLoggedIn().pipe(
      take(1),
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login'])
          return false
        }
        return true
      })
    )
  }


}
