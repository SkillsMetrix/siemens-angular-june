import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class Logger implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('Requested URL '+ req.url);
       const API_KEY='APP-Header-siemens'
        return next.handle(req.clone({setHeaders:{API_KEY}}))
        
    }
}