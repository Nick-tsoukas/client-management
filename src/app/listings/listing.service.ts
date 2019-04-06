import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';

import { map, filter } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ListingsComponent } from './listings.component';


// how can I get one listing only 
// how can i convert the observable to an array ...... HOW !_!_!+!+!+!+!+!+!

@Injectable()
export class ListingService implements OnInit {
    clickListing: Observable<Listing>;
    listings: Observable<Listing[]>;
   list: Listing;;
  
    constructor( private db: AngularFirestore) {
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

    myClick(){
    
   
  }
}



