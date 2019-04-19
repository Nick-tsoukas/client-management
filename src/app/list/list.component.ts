import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import { Listing } from '../listings/listing.model';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list : Listing;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.list = this.route.snapshot.data['list'];



  }


}
