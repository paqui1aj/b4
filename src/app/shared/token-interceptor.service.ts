import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor() {}

  handleError(error: HttpErrorResponse){
    console.log('error occured');
    return throwError(error)
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      Authorization: `bearer ${localStorage.getItem('auth-token')}`
    });

    const clone = req.clone({
      headers: headers
    })
    return next.handle(clone)
    .pipe(
      catchError(this.handleError)
    )
  }
}
