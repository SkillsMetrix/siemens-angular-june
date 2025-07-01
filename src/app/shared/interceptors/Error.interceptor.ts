import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";

export class Error implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {
                    console.log('Mismatched URL ', error);
                    return throwError(error)
                } else {
                    //client error
                    return throwError(error)
                }

            })


        )
    }

}