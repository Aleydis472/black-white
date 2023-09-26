import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpContextToken, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, retry, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Encrypt } from '../utils/crypto/encrypt';

const CHECK_REQUEST = new HttpContextToken<boolean>(() => false);
const TOKEN = 'jwttoken';


export function checkRequest(): HttpContext {
  return new HttpContext().set(CHECK_REQUEST, true);
}

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  totalRequest = 0;

  constructor(private spinner: NgxSpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);
    if (!request.context.get(CHECK_REQUEST)) {
      this.totalRequest++;
      this.spinner.show();
      return next.handle(request).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        }),
        finalize(() => {
          this.totalRequest--;
          if (this.totalRequest === 0) {
            this.spinner.hide();
          }
        })
      );
    }
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const token: string | null = sessionStorage.getItem(TOKEN)
    if (token) {
     const decrytedToken = Encrypt.decrypted(token)
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${decrytedToken}`)});
      return authReq;
    }
    return request;
  }
}
