import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = 'http://localhost:3000/api/login'

  private loggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient,private route:Router) {
    this.checkToken()
  }

  loginUser(userdata: any) {
    console.log(userdata);
    return this.http.post(this.API_URL, userdata).pipe(
      tap((res: any) => {
        if (res.token) {
          console.log(res.token);

          localStorage.setItem('token', res.token)
          this.loggedIn.next(true)
        }
      })
    )
  }
  getToken() {
    return localStorage.getItem('token')
  }
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }
  private checkToken() {
    const token = this.getToken()
    this.loggedIn.next(!!token)
  }
  getProtectedData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/protected')
  }
  logout(){
    localStorage.removeItem('token')
    this.loggedIn.next(false)
    this.route.navigate(['/login'])
    
  }
}
