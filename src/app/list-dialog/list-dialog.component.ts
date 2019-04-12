import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Listing} from "../listings/listing.model";
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

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ListDialogComponent>,
      @Inject(MAT_DIALOG_DATA) listing:Listing) {

      const city = listing;
      this.title = city.streetAddress

      this.form = fb.group({
          description: [city.cityZip, Validators.required],
          longDescription: [city.price,Validators.required]
      });

  }

  ngOnInit() {

  }


  save() {

      this.dialogRef.close(this.form.value);

  }

  close() {
      this.dialogRef.close();
  }
}
