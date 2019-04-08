import { Component, OnInit, Input } from '@angular/core';
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
  oneListing: Observable<Listing[]>;
  // ===========================================
  testDoc : AngularFirestoreDocument<Listing>;
  testDocData: Observable<Listing>;
  // ======================================

  constructor(private listeningService: ListingService, private db: AngularFirestore) {
    // Get All Listings  from the listening service and store in listing member ... 
    this.listings = this.listeningService.getAvailableListings();
    // ============================================================
    // This is the single listing data ..... 
    this.testDoc = this.db.doc('availableListings/D16VnZm2UAkUTDEXomEL');
    this.testDocData = this.testDoc.valueChanges();

  }

  ngOnInit() {

  }

}
