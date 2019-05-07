import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './users.model';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from '@angular/fire/auth';

// create user imports 

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authChange = new Subject<boolean>();
    userId: string;
    user: User;

    userChange = new Subject<User>();

    private isAuthenticated: boolean = false;
    isAdmin = new Subject<boolean>();

    constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) { }
    authListener() {
        
        this.afAuth.authState.subscribe(user => {
            console.log()
            if (user) {
                this.isAuthenticated = true;
                // this.userChange.next(this.user);
                this.userId = user.uid;
                this.authChange.next(true);
                if (user.uid === 'jsfbs6IY3NTeKA1VmcGamSYtJSI3') {
                    this.isAdmin.next(true);
                    this.router.navigate(['./admin/listing']);

                }
                else {
                    this.router.navigate(['./listings']);
                }
            } else {
                this.isAdmin.next(false);
                this.isAuthenticated = false;
                // this.userChange.next(null);
                this.authChange.next(false);
                this.router.navigate(["./login"]);
            }
        })
    }

    // Creates the user here in the BD and as a the user member defined at the top 
    registerUser(authData: AuthData) {
        this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(res => {

                // sets the member 
                this.user = {
                    email: authData.email,
                    uid: this.afAuth.auth.currentUser.uid,
                    name: this.afAuth.auth.currentUser.displayName
                };
                //   Sets the document id the the user id from angular fire auth 
                this.afs.collection('users').doc(`${this.afAuth.auth.currentUser.uid}`).set(this.user);

            })
            .catch(err => {
                console.log(err)
            })
    }

    logIn(authData: AuthData) {
        // sets the member user to subscribe too 
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(res => {
                this.user = {
                    name: this.afAuth.auth.currentUser.displayName,
                    uid: this.afAuth.auth.currentUser.uid,
                    email: authData.email
                }

                return res
            })
            .catch(err => {
                console.log(err)
            })
    }

    logOut() {
        this.isAdmin.next(false);
        this.afAuth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated
    }

    isSuper() {
        return this.isAdmin;
    }
}
