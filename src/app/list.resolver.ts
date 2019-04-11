import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { ListingService } from './listings/listing.service';
import {Listing} from "../app/listings/listing.model";
import {Observable, of} from 'rxjs';



@Injectable()
export class ListResolver implements Resolve<Listing> {

    constructor(private listingService: ListingService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Listing> {
        // listId corsponds to the member in the app ROUTER
        const listId = route.paramMap.get('listId');
        return this.listingService.getOne(listId);
    }

}

