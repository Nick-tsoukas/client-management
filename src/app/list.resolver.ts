import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Listing} from "../app/listings/listing.model";
import {Observable, of} from 'rxjs';



@Injectable()
export class ListResolver implements Resolve<Listing> {

    constructor() {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Listing> {
        return of(undefined);
    }

}

