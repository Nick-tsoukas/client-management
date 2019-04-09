import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ListingsComponent } from './listings.component';

@Injectable()
export class ListingService implements OnInit {
  oneListing: Listing;
  listings: Observable<Listing[]>;
  testDoc : AngularFirestoreDocument<Listing>;
  testDocData: Observable<Listing>;

  constructor(private db: AngularFirestore) {
    // this.listings = this.db.collection('availableListings').snapshotChanges()
    //   .pipe(
    //     map(snaps => {
    //       return snaps.map(snap => {
    //         return <Listing>{
    //           id: snap.payload.doc.id,
    //           ...snap.payload.doc.data()
    //         }
    //       })
    //     })
    //   );
  }

  ngOnInit() {

  }

  getOne(id: string): Observable<Listing>{
    console.log(id);
    return this.db.doc(`availableListings/${id}`).snapshotChanges()
    .pipe(
      map(snap => {
        return <Listing> {
          id: snap.payload.id,
          ...snap.payload.data()
        }
      })
    )
  }
  
  getAll(): Observable<Listing[]>{
    return this.db.collection('availableListings').snapshotChanges()
      .pipe(
        map(snaps => {
          return snaps.map(snap => {
            return <Listing> {
              id: snap.payload.doc.id,
              ...snap.payload.doc.data()
            }
          })
        })
      )

  }
  // getAvailableListings() {
  //   return this.listings
  // }

  // getOneList(){
  //   this.testDoc = this.db.doc('availableListings/D16VnZm2UAkUTDEXomEL');
  //   this.testDocData = this.testDoc.valueChanges();
  //   this.testDocData.subscribe(val => {
  //     this.oneListing =  {
  //       id: val.id,
  //       streetAddress: val.streetAddress,
  //       cityZip: val.cityZip,
  //       image: val.image,
  //       price: val.price
  //     }
  //    return this.oneListing;
  //   });

  
  // }

}


