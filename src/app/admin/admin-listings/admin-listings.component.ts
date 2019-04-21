import { Component, OnInit, Input} from '@angular/core';
import { Listing } from '../../listings/listing.model';
import { ListingService } from '../../listings/listing.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ListDialogComponent } from "../../list-dialog/list-dialog.component";
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-admin-listings',
  templateUrl: './admin-listings.component.html',
  styleUrls: ['./admin-listings.component.scss']
})
export class AdminListingComponent implements OnInit {
  show: Subscription;
  adminLink: boolean;
  listings: Observable<Listing[]>;
  list: Observable<Listing>;

  constructor(private listeningService: ListingService, private dialog: MatDialog, private afAuth: AngularFireAuth,private auth: AuthService) {
    // Get All Listings  from the listening service and store in listing member ... 
    this.listings = this.listeningService.getAll();

  }

  ngOnInit() {

    
  }

  editListing(listing: Listing) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = listing;

    this.dialog.open(ListDialogComponent, dialogConfig);

  }

}
