import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private http: Http ) { }

    public authenticated: boolean = false;

    authenticate(email: string, password: string):  Promise<any>{
       return this.http.post('http://localhost:3000/authenticate', {email, password})
        .toPromise()
        .then(res=> res.json())
        .then(data => {
                this.authenticated = data.auth;  
                return data.auth  ;    
        })

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return  this.authenticated;
    }

}