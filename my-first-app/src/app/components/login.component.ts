import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'my-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    constructor(private http: Http, private router: Router) { }

    message: string = ''

    ngOnInit() { 

    }

    authenticate(email: string, password: string){
        this.http.post('http://localhost:3000/authenticate', {email, password})
        .toPromise()
        .then(res=> res.json())
        .then(data=> {
            if(data.auth){
                this.router.navigate(['profile'])
            }
            else{
                this.message = "Invalid Email/Password!!"
            }
        })

    }

}