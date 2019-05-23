import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Listing} from "../listings/listing.model";
import { ListingService } from '../listings/listing.service';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.scss']
})
export class ListDialogComponent implements OnInit {
  title: string;
  form: FormGroup;
  description:string;

  listing: Listing;

  constructor( private fb: FormBuilder, private dialogRef: MatDialogRef<ListDialogComponent>,@Inject(MAT_DIALOG_DATA) listing:Listing, private listingService: ListingService) {
      this.listing = listing;
     

      this.dialogRef.afterClosed()
        .subscribe(result => {
          console.log(result)
        })

      const city = listing;
      this.title = listing.streetAddress

      this.form = fb.group({
          streetAddress: [listing.streetAddress, Validators.required],
          cityZip: [listing.cityZip,Validators.required],
          price: [listing.price],
          type: [listing.type],
          squareFt: [listing.squareFt]
      });

  }

  ngOnInit() {

  }

  remove(){
    this.listingService.removeListing(this.listing.id).toPromise().then(res =>{
      this.close();
    })
  }

//  add to database here 
  save() {
    const changes  = this.form.value;

    this.listingService.saveListing(this.listing.id, { cityZip: changes.cityZip, streetAddress: changes.streetAddress, price: changes.price, type: changes.type, squareFt: changes.squareFt })
      .subscribe(
        () => this.dialogRef.close(this.form.value)
      )


  }

  close() {
      this.dialogRef.close();
  }
}
