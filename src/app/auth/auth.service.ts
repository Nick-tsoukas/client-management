import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './users.model';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated: boolean = false;

    constructor(private router: Router, private afAuth: AngularFireAuth) { }

    authListener() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['./listings']);
            } else {
                this.isAuthenticated = false;
                this.authChange.next(false);
                this.router.navigate(["./login"]);
            }
        })
    }

    registerUser(authData: AuthData) {
        this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    logIn(authData: AuthData) {
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(res => {
                return res
            })
            .catch(err => {
                console.log(err)
            })
    }

    logOut() {
        this.afAuth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated
    }
}
