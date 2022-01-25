import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { throwError as observableThrowError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
    constructor() {

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
                console.log(err);
                return observableThrowError(err);
            })
        );
    }
}