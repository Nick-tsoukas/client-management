import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router'
import { Listing } from './listing.model';
import { ListingService } from './listing.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, noop, pipe } from 'rxjs';
import { map, filter, subscribeOn } from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { ListDialogComponent } from "../list-dialog/list-dialog.component";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  providers: [AngularFirestore]
})

export class ListingsComponent implements OnInit {

  listings: Observable<Listing[]>;
  list: Observable<Listing>;

  constructor(private listeningService: ListingService, private dialog: MatDialog) {
    // Get All Listings  from the listening service and store in listing member ... 
    this.listings = this.listeningService.getAll();
  }

  ngOnInit() {

  }

  editListing(listing:Listing) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = listing;

    this.dialog.open(ListDialogComponent, dialogConfig);

}
  // Calls getOne method from the listenings service to build one listings
  // =============== will not use this method for app .... will use list resolver 
  myClick(id: string) {
    this.list = this.listeningService.getOne(id)
  }

}

