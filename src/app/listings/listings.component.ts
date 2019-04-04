import { Component, OnInit, Input } from '@angular/core';
import { Listing } from './listing.model';
import { ListingService } from './listing.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  providers: [AngularFirestore]
})
export class ListingsComponent implements OnInit{
  @Input()detailHidden:boolean = true;
  @Input()myId: string;
  listings: Observable<Listing[]>
  
  constructor(private listeningService: ListingService, private db: AngularFirestore) { 
  
  }

  ngOnInit() {
    this.listings = this.listeningService.getAvailableListings();
 }
 myClick(){
  
 }


}