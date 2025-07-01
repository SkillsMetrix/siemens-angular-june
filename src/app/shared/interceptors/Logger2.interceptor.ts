import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

interface CachedItem {
  response: HttpResponse<any>;
  expiry: number;
}
export class CacheApp implements HttpInterceptor {
  private cache = new Map<string, CachedItem>();
  private cacheTTL = 60 * 1000;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (cached && Date.now() < cached.expiry) {
      return of(cached.response.clone());
    }
    if (cached) {
      this.cache.delete(url);
    }

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.set(url, {
            response: event.clone(),
            expiry: Date.now() + this.cacheTTL,
          });
        }
      })
    );
  }
}
