import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';

import { map, filter } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ListingsComponent } from './listings.component';

@Injectable()
export class ListingService implements OnInit {
  
  listings: Observable<Listing[]>;

  constructor(private db: AngularFirestore) {
    this.listings = this.db.collection('availableListings').snapshotChanges()
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
    return this.listings
  }

  myClick() {


  }
}



