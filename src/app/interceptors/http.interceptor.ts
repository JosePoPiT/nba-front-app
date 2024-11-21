import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { LoaderService } from '../loader-service/loader.service';
import { inject, Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide()),
      catchError((error: HttpErrorResponse) => {
        this.loaderService.showError(
          'Ocurrió un error al procesar la solicitud'
        );
        return throwError(() => new Error(error.message));
      })
    );
  }
}
