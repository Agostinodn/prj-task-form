import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {tap} from "rxjs/operators"

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('Interceptor', req.url);
        
        req = req.clone({
            setHeaders: { Authorization: `Token123`}
        })
        return next.handle(req).pipe(
            tap(res =>console.log(res))
        )
    }

}