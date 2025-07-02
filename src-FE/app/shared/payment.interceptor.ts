import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";
@Injectable()
export class PaymentInterceptor implements HttpInterceptor {

     

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log(req.url);
     
        return next.handle(req);
    }
} 