import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';



//  creating some starter listings 



@Injectable()
export class ListingService  {
    listings: Observable<Listing[]>
  
    constructor( private db: AngularFirestore) {
        this.listings =  this.db.collection('availableListings').snapshotChanges()
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
  
    ngOnInit() {
     }
    getAvailableListings() {
      return this.listings;
    }
}

