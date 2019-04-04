import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';



//  creating some starter listings 



@Injectable()
export class ListingService  {

    list;
    clickListing: Observable<Listing[]>;
    listings: Observable<Listing[]>;

  

  
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
      // this.list = this.db.doc('6TYG2HVWbnCIYLuVlP36').get();
  
     }
    getAvailableListings() {
      // let temp = this.listings.pipe(
      //   map(res => {
      //   return res.filter( (val) => {return val.id == 'D16VnZm2UAkUTDEXomEL'} )
      //   })
      // )
      // return temp
      return this.listings
    }

    myClick(){
      // console.log(this.listings)
    }

   
   }





  //  They must use cookies to map THE schedule to the referring domain.  I’m looking to present schedules of yoga classes.