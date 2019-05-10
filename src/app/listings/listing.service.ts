import { Listing } from './listing.model';
import { Injectable, OnInit } from '@angular/core';
import { map, filter, first, takeLast,last, concatMap } from 'rxjs/operators';
import { Observable, from, concat } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class ListingService implements OnInit {
  imageUrl: string;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }
  ngOnInit() { }

  uploadImage(event){
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


    console.log(event.target.files)
  }

  saveListing(listingId:string, changes: Partial<Listing>):Observable<any>{
   return  from(this.db.doc(`availableListings/${listingId}`).update(changes))
  }

  addListing(formData){

     this.db.collection('availableListings').add({
      cityZip: formData.value['cityZip'],
      description: formData.value['description'],
      type: formData.value['type'],
      price: formData.value['price'],
      squareFt: formData.value['squareFt'],
      image: this.imageUrl,
    })
  }

  getChats(id:string){
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


