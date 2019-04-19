import { Component, OnInit} from '@angular/core';
import { Listing } from './listing.model';
import { ListingService } from './listing.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ListDialogComponent } from "../list-dialog/list-dialog.component";
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  providers: [AngularFirestore]
})

export class ListingsComponent implements OnInit {

  listings: Observable<Listing[]>;
  list: Observable<Listing>;

  constructor(private listeningService: ListingService, private dialog: MatDialog, private afAuth: AngularFireAuth) {
    // Get All Listings  from the listening service and store in listing member ... 
    this.listings = this.listeningService.getAll();
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
    
    })
  }

  editListing(listing: Listing) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = listing;

    this.dialog.open(ListDialogComponent, dialogConfig);

  }

}

