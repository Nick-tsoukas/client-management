import { Component, OnInit } from '@angular/core';
import { Listing } from './listing.model';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  selectedRecipe: Listing;

  constructor() { }

  ngOnInit() {
  }

}
