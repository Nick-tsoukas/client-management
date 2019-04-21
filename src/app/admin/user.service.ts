import { User } from '../auth/users.model';
import { Injectable, OnInit } from '@angular/core';

import { map, filter, first } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db : AngularFirestore) {

   }

   getUsers(): Observable<User[]> {
     return this.db.collection('users').snapshotChanges()
      .pipe(
        map(snaps => {
          return snaps.map(snap => {
            return <User> {
              ...snap.payload.doc.data()
            }
          })
        }) 
      )
   }
}
