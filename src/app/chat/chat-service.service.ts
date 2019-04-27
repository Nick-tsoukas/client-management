
import { Injectable, OnInit } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private db : AngularFirestore) { }

  getChats(id:string){
    return this.db.doc(`users/${id}`).snapshotChanges()
      .pipe(
        map(snap => {
          return {
            ...snap.payload.data()
          }
        }),
        first()
      )
  }

  getMes(id){
    return this.db.collection(`users/${id}/chat`, ref => ref.orderBy('time'))
    .snapshotChanges()
    .pipe(
      map(snaps => {
        return snaps.map(snap => {
          return <any>{
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          }
        })
      })
    )
  }
// users userid chat collection .... lets add A Chat message 
  addMessage(id, message){
    this.db.collection(`users/${id}/chat`).add({
      "message": message,
      "time": new Date(),
      "adminMessage": true
    });
  }

  userAddMessage(id,message){
    this.db.collection(`users/${id}/chat`).add({
      "message": message,
      "time": new Date(),
      "adminMessage": false
    })
  }


}