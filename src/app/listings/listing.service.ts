import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';
import { map, filter, first } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class ListingService implements OnInit {

  constructor(private db: AngularFirestore) { }
  ngOnInit() { }

  saveListing(listingId:string, changes: Partial<Listing>):Observable<any>{
   return  from(this.db.doc(`availableListings/${listingId}`).update(changes))
  }

  getOne(id: string): Observable<Listing> {
    console.log(id);
    return this.db.doc(`availableListings/${id}`).snapshotChanges()
      .pipe(
        map(snap => {
          return <Listing>{
            id: snap.payload.id,
            ...snap.payload.data()
          }
        }),
        first()
      )
  }

  getAll(): Observable<Listing[]> {
    return this.db.collection('availableListings').snapshotChanges()
      .pipe(
        map(snaps => {
          return snaps.map(snap => {
            return <Listing>{
              id: snap.payload.doc.id,
              ...snap.payload.doc.data()
            }
          })
        })
      )
  }


}


