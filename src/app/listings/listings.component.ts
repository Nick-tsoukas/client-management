import { Component, OnInit, Input } from '@angular/core';
import { Listing } from './listing.model';
import { ListingService } from './listing.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, noop, pipe } from 'rxjs';
import { map, filter, subscribeOn } from 'rxjs/operators';
import { isType } from '@angular/core/src/type';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import * as firebase from 'firebase';
// important !!!!!!!!
// ============= cant use ref where to query by id by you can query any other property 
export interface Task {
  description: string,
  id?: string
}

export interface List {
  id: string,
  streetAddress: string,
  cityZip: string,
  image: string,
  price: number
}


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
  //  task collection is the reference to the the database 
  //  TaskList is reference to the data as an Observable 
  taskCollection: AngularFirestoreCollection<Task>;
  taskList: Observable<Task[]>
  singleCollection: AngularFirestoreCollection<Listing>;
  testDoc : AngularFirestoreDocument<Listing>;
  oneListing: Observable<Listing[]>;



  constructor(private listeningService: ListingService, private db: AngularFirestore) {
    this.taskCollection = this.db.collection('task', ref => {
      return ref.where('description', '==', 'hello');
    })
    this.taskList = this.taskCollection.valueChanges();


    this.listings = this.listeningService.getAvailableListings();
    this.singleCollection = this.db.collection('availableListings', ref => {
      return ref.where('cityZip', '==', '80838');
    })
    this.oneListing = this.singleCollection.valueChanges();


    //  lets try and get one document ..... 






   


  }
  ngOnInit() {






  }

}

// 4eLwoSF673eA5mNwWGom 