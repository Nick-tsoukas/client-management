import { Listing } from './listing.model';
import { Injectable } from '@angular/core';
//  creating some starter listings 
@Injectable()

export class ListingService {
   private availableListings : Listing[] = [
       {id: '1',address:'some address', imagePath: 'image', description:'some description', state: null},
       {id: '2',address:'some address', imagePath: 'image', description:'some description', state: null},
       {id: '3',address:'some address', imagePath: 'image', description:'some description', state: null},
       {id: '4',address:'some address', imagePath: 'image', description:'some description', state: null},
       {id: '5',address:'some address', imagePath: 'image', description:'some description', state: null}
    ]

    getAvailableListings(){
        return this.availableListings.slice();
    }
}

