import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {Observable} from 'rxjs';
import { ChatServiceService } from './chat/chat-service.service';



@Injectable()
export class ChatResolver implements Resolve<any>{

    constructor(private chatService: ChatServiceService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userId = route.paramMap.get('userId');
        // return userId;
        return this.chatService.getChats(userId);
    }  

}