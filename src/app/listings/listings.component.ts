import { Component, OnInit, Input, Output } from '@angular/core';
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
  testDocData: Observable<Listing>;

  constructor(private listeningService: ListingService, private db: AngularFirestore,  private router: Router    ) {
    // Get All Listings  from the listening service and store in listing member ... 
    this.listings = this.listeningService.getAll();
  }

  ngOnInit() {
    
  }

  // Calls getOne method from the listenings service to build one listings
  myClick(id: string) {
   this.testDocData = this.listeningService.getOne(id)
   console.log(this.testDocData);
   this.detailHidden = false ;
  }

}
     
