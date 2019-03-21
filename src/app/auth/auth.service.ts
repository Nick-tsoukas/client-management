import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './users.model';
import { AuthData } from './auth-data.model';

// Makes service injectable ... services must have a decorator 
@Injectable({
    providedIn: 'root',
  })
export class AuthService {
    authChange =  new Subject<boolean>();

    private user: User;

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        // you are loged in Subject returns a boolean payload
        // The next is like emit() but comes from a rxjs package next() emits the event out 
        this.authChange.next(true);
    }

    logIn(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };

        this.authChange.next(true)
    }

    // sets user obj to null isAuth will return false 
    logOut(){
        this.user = null;
        this.authChange.next(false);
    }

    // returns a copy of user so not to change data to the original user 
    getUser(){
        return { ...this.user };
    }

    // returns true is user is logged in ... false otherwise 
    isAuth(){
        return this.user != null;
    }
}
