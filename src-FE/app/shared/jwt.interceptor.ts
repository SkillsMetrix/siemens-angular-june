import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private ls: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.ls.getToken()
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
        return next.handle(req);
    }
} 