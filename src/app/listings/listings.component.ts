import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Listing } from './listing.model';
import { ListingService } from './listing.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, noop, pipe } from 'rxjs';
import { map, filter, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  providers: [AngularFirestore]
})

export class ListingsComponent implements OnInit {
  @Input() detailHidden: boolean = true;
  @Input() myId: string;

  listings: Observable<Listing[]>;
  // ==========================================
  singleCollection: AngularFirestoreCollection<Listing>;
  oneListing: Listing;
  // ===========================================
  testDoc : AngularFirestoreDocument<Listing>;
  testDocData: Observable<Listing>;
  // ======================================

  constructor(private listeningService: ListingService, private db: AngularFirestore,  private router: Router    ) {
    // Get All Listings  from the listening service and store in listing member ... 
    this.listings = this.listeningService.getAvailableListings();
    // ============================================================
    // This is the single listing data ..... 
    // Lets wrap this in a function and then pass data to the detail comp on click event ... 
    this.testDoc = this.db.doc('availableListings/D16VnZm2UAkUTDEXomEL');
    this.testDocData = this.testDoc.valueChanges();
    this.testDocData.subscribe(val => {
      const data =  {
        id: val.id,
        streetAddress: val.streetAddress,
        cityZip: val.cityZip,
        image: val.image,
        price: val.price
      }
      this.oneListing = data;
    })
     

  }

  ngOnInit() {
    
  }

  myClick() {
    // this.testDoc = this.db.doc(`availableListings/${id}`);
    // this.testDocData = this.testDoc.valueChanges();
    console.log(this.oneListing)

    

  }

}
