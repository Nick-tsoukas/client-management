import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router'
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, noop, pipe } from 'rxjs';
import { map, filter, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  list : Listing;

  constructor(private listeningService: ListingService, private db: AngularFirestore,  private router: Router    ) {

  }
  ngOnInit() {
  }


}
