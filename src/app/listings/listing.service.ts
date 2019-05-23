import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';
import { map, first, last, concatMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class ListingService implements OnInit {
  imageUrl: string;

  constructor(public router : Router, private db: AngularFirestore, private storage: AngularFireStorage) { }
  ngOnInit() { }

  uploadImage(event) {
    const file = event.target.files[0];
    const filePath = `listingImage`;
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges()
      .pipe(
        last(),
        concatMap(() => this.storage.ref(filePath).getDownloadURL())
      )
      .subscribe(val => {
        this.imageUrl = val;
      })
  }

  saveListing(listingId: string, changes: Partial<Listing>): Observable<any> {
    return from(this.db.doc(`availableListings/${listingId}`).update(changes))
  }

  removeListing(listingId: string){
    return from(this.db.doc(`availableListings/${listingId}`).delete())
  }


  addListing(formData) {
    //setting the id to route to listing after creation 
    const id = this.db.createId();

    this.db.collection('availableListings').doc(id).set({
      cityZip: formData.value['cityZip'],
      longDescription: formData.value['description'],
      description: `${formData.value['description'].split('').slice(0, 10).join('')}...`,
      type: formData.value['type'],
      price: formData.value['price'],
      squareFt: formData.value['squareFt'],
      image: this.imageUrl,
    })
    .then(res => {
      this.router.navigate(['/listings', `${id}`]);
    })


  }

  getChats(id: string) {
    return this.db.doc(`users/${id}`).snapshotChanges()
      .pipe(
        map(snap => {
          return {
            ...snap.payload.data()
          }
        })
      )
  }

  getOne(id: string): Observable<Listing> {
    console.log(id);
    return this.db.doc(`availableListings/${id}`).snapshotChanges()
      .pipe(
        map(snap => {
          return <Listing>{
            id: snap.payload.id,
            ...snap.payload.data()
          }
        }),
        first()
      )
  }

  getAll(): Observable<Listing[]> {
    return this.db.collection('availableListings').snapshotChanges()
      .pipe(
        map(snaps => {
          return snaps.map(snap => {
            return <Listing>{
              id: snap.payload.doc.id,
              ...snap.payload.doc.data()
            }
          })
        })
      )
  }


}


