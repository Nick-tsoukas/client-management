import { Component, OnInit } from '@angular/core';
import { Listing } from './listing.model';
import { ListingService } from './listing.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  providers: [AngularFirestore]
})
export class ListingsComponent implements OnInit {
  listings: Observable<any>;

  constructor(private listingService: ListingService, private db: AngularFirestore) { }

  ngOnInit() {
    // this.listings = this.listingService.getAvailableListings();
    this.listings = this.db.collection('availableListings').snapshotChanges()
    .pipe(
    map(docData => {
        return docData.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          }
        });
      }));
  }

}
